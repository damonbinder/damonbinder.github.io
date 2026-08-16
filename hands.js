const CDN_BASE = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3";
const MODEL_URL =
  "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task";

// MediaPipe hand landmark indices. Only these are used.
const WRIST = 0;
const THUMB_MCP = 2;
const THUMB_TIP = 4;
const INDEX_MCP = 5;
const MIDDLE_MCP = 9;
// tip/PIP pairs for the four non-thumb fingers, used for the curl test
const FINGERS = [[8, 6], [12, 10], [16, 14], [20, 18]];

// A thumb has to stick this far out of the fist, measured tip-to-index-knuckle
// against palm length, before the pose counts as a thumb at all. In a closed
// fist the thumb lies across the front of the fingers and this ratio collapses.
const THUMB_OUT_RATIO = 0.55;
// How many of the four fingers must be curled. Three rather than four, because
// a partly-extended index is common and reads as the same gesture to a human.
const MIN_CURLED = 3;
// The thumb vector must be this much longer on one axis than the other for the
// direction to count, so a 45-degree thumb reads as nothing rather than
// flickering between two directions.
const AXIS_DOMINANCE = 1.3;
// Consecutive detections of the same direction before it's acted on. The pose
// is held rather than tapped, so a little latency costs nothing and this kills
// single-frame misreads during the rotation between two directions.
const DIRECTION_DEBOUNCE = 3;
// Movement direction doesn't need video framerate, and the FaceLandmarker is
// already running on every frame of the same stream. 20Hz halves the cost of
// adding this and is still far quicker than the player can change pose.
const DETECT_INTERVAL_MS = 50;
// Rolling window for the debug hit-rate, in detections. 40 at 20Hz is 2s,
// long enough to smooth out a dropped frame and short enough to respond while
// you're still moving your hand.
const HISTORY = 40;

// MediaPipe's own hand skeleton, for the debug overlay only.
const HAND_BONES = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [5, 9], [9, 10], [10, 11], [11, 12],
  [9, 13], [13, 14], [14, 15], [15, 16],
  [13, 17], [17, 18], [18, 19], [19, 20], [0, 17],
];

function dist(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

// The minimum thumb-vector length, again as a ratio of palm length.
const THUMB_MIN_LEN = 0.3;

// Pure geometry, exported so it can be exercised against synthetic landmark
// sets without a camera. Returns the direction in the player's own frame of
// reference (see `mirrored` below) *plus* every intermediate quantity and, on
// a rejection, which test rejected it — the debug readout shows all of it,
// because "no direction" has five quite different causes and telling them
// apart by staring at your own hand is hopeless.
export function analyzeThumb(lm, mirrored = true) {
  const out = {
    direction: null, reason: null, curled: 0, thumbOut: 0, len: 0, angle: null,
  };
  if (!lm || lm.length < 21) {
    out.reason = "no hand";
    return out;
  }

  // Palm length. Every threshold below is a ratio against this, so none of it
  // depends on how close to the camera the hand is.
  const scale = dist(lm[WRIST], lm[MIDDLE_MCP]);
  if (scale < 1e-4) {
    out.reason = "degenerate";
    return out;
  }

  // Curled means the fingertip has come back closer to the wrist than its own
  // middle joint. That comparison holds however the hand is rotated, which
  // matters here precisely because the whole gesture set *is* one pose rotated.
  for (const [tip, pip] of FINGERS) {
    if (dist(lm[tip], lm[WRIST]) < dist(lm[pip], lm[WRIST])) out.curled++;
  }
  out.thumbOut = dist(lm[THUMB_TIP], lm[INDEX_MCP]) / scale;

  const vx = lm[THUMB_TIP].x - lm[THUMB_MCP].x;
  const vy = lm[THUMB_TIP].y - lm[THUMB_MCP].y;
  out.len = Math.hypot(vx, vy) / scale;

  // Into the player's own frame. A user-facing camera's raw frames are not
  // mirrored — that's why the preview element carries a scaleX(-1) — so the
  // player's right hand appears at *low* x and the sign of vx has to flip.
  // Exposed as an option anyway, since this is the one thing here that can't
  // be checked without a real camera in front of a real person.
  const right = mirrored ? -vx : vx;
  const up = -vy;
  out.angle = Math.round((Math.atan2(up, right) * 180) / Math.PI);

  if (out.curled < MIN_CURLED) {
    out.reason = `only ${out.curled}/4 fingers curled`;
    return out;
  }
  if (out.thumbOut < THUMB_OUT_RATIO) {
    out.reason = "thumb not clear of fist";
    return out;
  }
  if (out.len < THUMB_MIN_LEN) {
    out.reason = "thumb too short (side on?)";
    return out;
  }

  if (Math.abs(right) > Math.abs(up) * AXIS_DOMINANCE) out.direction = right > 0 ? "right" : "left";
  else if (Math.abs(up) > Math.abs(right) * AXIS_DOMINANCE) out.direction = up > 0 ? "up" : "down";
  else out.reason = "diagonal";
  return out;
}

// Returns "up" | "down" | "left" | "right" | null.
export function classifyThumb(lm, mirrored = true) {
  return analyzeThumb(lm, mirrored).direction;
}

// Runs a HandLandmarker over the *same* video element and MediaStream the
// FaceTracker already opened, so there's one camera and one preview between
// them. It deliberately doesn't touch getUserMedia or the stream's tracks:
// construct it after the face tracker's init() has resolved, and let that one
// own the camera's lifetime.
export class HandTracker {
  constructor(videoEl, overlayCanvas = null) {
    this.video = videoEl;
    // Its own canvas rather than the face tracker's: that one is cleared and
    // redrawn at video rate, and this runs at DETECT_INTERVAL_MS, so sharing
    // one would just erase the skeleton between hand frames.
    this.overlay = overlayCanvas;
    this.overlayCtx = overlayCanvas ? overlayCanvas.getContext("2d") : null;
    this.landmarker = null;
    this.running = false;
    this.mirrored = true;

    this.hasHand = false;
    this.direction = null; // the committed, debounced direction
    this._pending = null;
    this._pendingStreak = 0;
    this._lastDetect = 0;
    // Rolling window over the last HISTORY detections, so the readout can
    // answer "is it seeing my hand at all" separately from "does it like the
    // pose" — which is the question a still frame can't settle.
    this._history = [];

    this.onDirection = null; // (direction | null) — fires only on change
    this.onUpdate = null; // ({hasHand, direction, raw, info, seenPct, posePct})
    this._loop = this._loop.bind(this);
  }

  async init() {
    const { FilesetResolver, HandLandmarker } = await import(CDN_BASE);
    const fileset = await FilesetResolver.forVisionTasks(`${CDN_BASE}/wasm`);
    const commonOpts = { runningMode: "VIDEO", numHands: 1 };
    try {
      this.landmarker = await HandLandmarker.createFromOptions(fileset, {
        baseOptions: { modelAssetPath: MODEL_URL, delegate: "GPU" },
        ...commonOpts,
      });
    } catch (err) {
      this.landmarker = await HandLandmarker.createFromOptions(fileset, {
        baseOptions: { modelAssetPath: MODEL_URL, delegate: "CPU" },
        ...commonOpts,
      });
    }
  }

  start() {
    this.running = true;
    requestAnimationFrame(this._loop);
  }

  stop() {
    this.running = false;
    this._commit(null);
    this.overlayCtx?.clearRect(0, 0, this.overlay.width, this.overlay.height);
  }

  _loop() {
    if (!this.running) return;
    const now = performance.now();
    if (now - this._lastDetect >= DETECT_INTERVAL_MS && this.video.readyState >= 2) {
      this._lastDetect = now;
      const result = this.landmarker.detectForVideo(this.video, now);
      this._handleResult(result);
    }
    requestAnimationFrame(this._loop);
  }

  _handleResult(result) {
    const lm = result.landmarks?.[0];
    this.hasHand = !!lm;
    const info = analyzeThumb(lm, this.mirrored);
    const raw = info.direction;

    if (raw === this._pending) {
      this._pendingStreak++;
    } else {
      this._pending = raw;
      this._pendingStreak = 1;
    }
    if (this._pendingStreak >= DIRECTION_DEBOUNCE) this._commit(raw);

    this._history.push({ seen: this.hasHand, pose: !!raw });
    if (this._history.length > HISTORY) this._history.shift();
    const n = this._history.length || 1;
    const pct = (k) => Math.round((this._history.filter((h) => h[k]).length / n) * 100);

    if (this.overlayCtx) this._draw(lm, raw);
    this.onUpdate?.({
      hasHand: this.hasHand, direction: this.direction, raw, info,
      seenPct: pct("seen"), posePct: pct("pose"),
    });
  }

  // Skeleton over the camera preview. Colour is the whole point: green means
  // the pose is being read as a direction right now, amber means the hand is
  // tracked but the pose is rejected, so a glance answers which of the two is
  // going wrong. The thumb vector is drawn thicker because it's the one the
  // direction is taken from.
  _draw(lm, raw) {
    const ctx = this.overlayCtx;
    const w = this.video.videoWidth || this.overlay.width;
    const h = this.video.videoHeight || this.overlay.height;
    if (this.overlay.width !== w || this.overlay.height !== h) {
      this.overlay.width = w;
      this.overlay.height = h;
    }
    ctx.clearRect(0, 0, w, h);
    if (!lm) return;

    const color = raw ? "#4ade80" : "#fbbf24";
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (const [a, b] of HAND_BONES) {
      ctx.moveTo(lm[a].x * w, lm[a].y * h);
      ctx.lineTo(lm[b].x * w, lm[b].y * h);
    }
    ctx.stroke();

    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(lm[THUMB_MCP].x * w, lm[THUMB_MCP].y * h);
    ctx.lineTo(lm[THUMB_TIP].x * w, lm[THUMB_TIP].y * h);
    ctx.stroke();

    ctx.fillStyle = color;
    for (const p of lm) {
      ctx.beginPath();
      ctx.arc(p.x * w, p.y * h, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  _commit(direction) {
    if (direction === this.direction) return;
    this.direction = direction;
    this.onDirection?.(direction);
  }
}
