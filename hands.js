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

function dist(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

// Pure geometry, exported so it can be exercised against synthetic landmark
// sets without a camera. Returns "up" | "down" | "left" | "right" | null,
// already in the player's frame of reference — see `mirrored` below.
export function classifyThumb(lm, mirrored = true) {
  if (!lm || lm.length < 21) return null;

  // Palm length. Every threshold below is a ratio against this, so none of it
  // depends on how close to the camera the hand is.
  const scale = dist(lm[WRIST], lm[MIDDLE_MCP]);
  if (scale < 1e-4) return null;

  // Curled means the fingertip has come back closer to the wrist than its own
  // middle joint. That comparison holds however the hand is rotated, which
  // matters here precisely because the whole gesture set *is* one pose rotated.
  let curled = 0;
  for (const [tip, pip] of FINGERS) {
    if (dist(lm[tip], lm[WRIST]) < dist(lm[pip], lm[WRIST])) curled++;
  }
  if (curled < MIN_CURLED) return null;

  if (dist(lm[THUMB_TIP], lm[INDEX_MCP]) / scale < THUMB_OUT_RATIO) return null;

  const vx = lm[THUMB_TIP].x - lm[THUMB_MCP].x;
  const vy = lm[THUMB_TIP].y - lm[THUMB_MCP].y;
  if (Math.hypot(vx, vy) / scale < 0.3) return null;

  // Into the player's own frame. A user-facing camera's raw frames are not
  // mirrored — that's why the preview element carries a scaleX(-1) — so the
  // player's right hand appears at *low* x and the sign of vx has to flip.
  // Exposed as an option anyway, since this is the one thing here that can't
  // be checked without a real camera in front of a real person.
  const right = (mirrored ? -vx : vx);
  const up = -vy;

  if (Math.abs(right) > Math.abs(up) * AXIS_DOMINANCE) return right > 0 ? "right" : "left";
  if (Math.abs(up) > Math.abs(right) * AXIS_DOMINANCE) return up > 0 ? "up" : "down";
  return null;
}

// Runs a HandLandmarker over the *same* video element and MediaStream the
// FaceTracker already opened, so there's one camera and one preview between
// them. It deliberately doesn't touch getUserMedia or the stream's tracks:
// construct it after the face tracker's init() has resolved, and let that one
// own the camera's lifetime.
export class HandTracker {
  constructor(videoEl) {
    this.video = videoEl;
    this.landmarker = null;
    this.running = false;
    this.mirrored = true;

    this.hasHand = false;
    this.direction = null; // the committed, debounced direction
    this._pending = null;
    this._pendingStreak = 0;
    this._lastDetect = 0;

    this.onDirection = null; // (direction | null) — fires only on change
    this.onUpdate = null; // ({hasHand, direction, raw})
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
    const raw = lm ? classifyThumb(lm, this.mirrored) : null;

    if (raw === this._pending) {
      this._pendingStreak++;
    } else {
      this._pending = raw;
      this._pendingStreak = 1;
    }
    if (this._pendingStreak >= DIRECTION_DEBOUNCE) this._commit(raw);

    this.onUpdate?.({ hasHand: this.hasHand, direction: this.direction, raw });
  }

  _commit(direction) {
    if (direction === this.direction) return;
    this.direction = direction;
    this.onDirection?.(direction);
  }
}
