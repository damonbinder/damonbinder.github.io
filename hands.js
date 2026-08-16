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
// Sector half-widths in degrees, measured off each direction's own axis.
// Anything falling in the gaps between sectors reads as nothing, which is what
// stops a thumb on a boundary flickering between two directions.
//
// Horizontal is the wider pair: pointing a thumb sideways means rotating the
// forearm, which people do partway, so those poses land further off-axis than
// up and down do.
//
// A previous version made "up" narrower still, to compensate for up firing on
// almost anything while the other three took real effort. That was the wrong
// lever — the cause is a per-person, per-camera-placement bias in the measured
// angle, and `angleOffset` corrects all four at once by rotating the frame.
// Resizing sectors to absorb a bias just makes every direction sloppier to buy
// back the one being stolen.
const SECTORS = [
  { dir: "right", axis: 0, vert: false },
  { dir: "up", axis: 90, vert: true },
  { dir: "left", axis: 180, vert: false },
  { dir: "down", axis: -90, vert: true },
];

// Smallest absolute difference between two angles in degrees, wrapping at 180.
function angleGap(a, b) {
  return Math.abs(((a - b + 540) % 360) - 180);
}

// Into (-180, 180].
function wrapDeg(a) {
  return ((a + 540) % 360) - 180;
}
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

// "Is the thumb clear of the fist" is a 3D question, and has to be: a thumb
// aimed straight at the camera sits almost on top of the index knuckle in the
// image while being nowhere near it in space. Measuring that one in 2D
// rejected the thumb-at-me pose before the depth test could claim it.
function dist3(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y, (a.z ?? 0) - (b.z ?? 0));
}

// The minimum thumb-vector length, again as a ratio of palm length.
// Everything the classifier can be tuned by, all live-adjustable from the
// hand panel under ?hands=1&debug=1. Defaults are the shipped values.
//
// `angleOffset` is the important one and the reason the rest exist as sliders
// at all: the measured thumb angle carries a systematic bias per person and
// per camera placement, and rotating the whole decision frame by one number
// corrects all four directions at once. Widening sectors to cover a bias is
// treating the symptom — it makes every direction sloppier to buy back the
// one that's being stolen.
export const HAND_DEFAULTS = {
  mirrored: true,
  angleOffset: 0, // degrees; subtracted from the measured angle before sectoring
  horizHalf: 44, // sector half-width for left/right
  vertHalf: 34, // sector half-width for up/down
  minCurled: 3, // of four fingers
  // A thumb aimed down or sideways is often angled partly at the camera as
  // well, which foreshortens it in the 2D projection, so this sits low enough
  // not to reject those. The curl and thumb-out tests are what establish the
  // pose; this only guards against a vector too short to have a direction.
  minLen: 0.22,
  thumbOut: 0.55, // tip-to-index-knuckle over palm length
  // A thumb aimed at the camera reads as backward. How far out of the image
  // plane it has to lean before that wins: 1.0 means the depth component must
  // simply exceed the in-plane one. This is the same measurement that used to
  // *reject* the pose for being too short, which is why aiming a thumb at
  // yourself felt like the tracker had stopped responding.
  towardDominance: 1,
  // Consecutive detections before a direction is committed. 1, i.e. off:
  // detection runs at 20Hz, so even two frames is 100ms of lag on every
  // change of direction, and that reads as the controls being unresponsive.
  // The gaps between sectors already stop a boundary thumb flickering, which
  // is what a debounce would otherwise be for.
  debounce: 1,
};

// Pure geometry, exported so it can be exercised against synthetic landmark
// sets without a camera. Returns the direction in the player's own frame of
// reference (see `mirrored` below) *plus* every intermediate quantity and, on
// a rejection, which test rejected it — the debug readout shows all of it,
// because "no direction" has five quite different causes and telling them
// apart by staring at your own hand is hopeless.
export function analyzeThumb(lm, opts = {}) {
  const o = { ...HAND_DEFAULTS, ...opts };
  const out = {
    direction: null, reason: null, curled: 0, thumbOut: 0, len: 0, depth: 0,
    angle: null, rawAngle: null,
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
  out.thumbOut = dist3(lm[THUMB_TIP], lm[INDEX_MCP]) / scale;

  const vx = lm[THUMB_TIP].x - lm[THUMB_MCP].x;
  const vy = lm[THUMB_TIP].y - lm[THUMB_MCP].y;
  out.len = Math.hypot(vx, vy) / scale;
  // MediaPipe's z is depth relative to the wrist, on roughly the same scale as
  // x, and *smaller means closer to the camera* — so a thumb aimed at the
  // player has a negative depth component. It's the least reliable number the
  // model produces, which is why towardDominance is a slider.
  out.depth = ((lm[THUMB_TIP].z ?? 0) - (lm[THUMB_MCP].z ?? 0)) / scale;

  // Into the player's own frame. A user-facing camera's raw frames are not
  // mirrored — that's why the preview element carries a scaleX(-1) — so the
  // player's right hand appears at *low* x and the sign of vx has to flip.
  // Exposed as an option anyway, since this is the one thing here that can't
  // be checked without a real camera in front of a real person.
  const right = o.mirrored ? -vx : vx;
  const up = -vy;
  const rawAngle = (Math.atan2(up, right) * 180) / Math.PI;
  // rawAngle is what the camera saw; angle is what the sectors judge. Both are
  // reported, because calibration needs the uncorrected one.
  const angle = wrapDeg(rawAngle - o.angleOffset);
  out.rawAngle = Math.round(rawAngle);
  out.angle = Math.round(angle);

  if (out.curled < o.minCurled) {
    out.reason = `only ${out.curled}/4 fingers curled`;
    return out;
  }
  if (out.thumbOut < o.thumbOut) {
    out.reason = "thumb not clear of fist";
    return out;
  }
  // Checked before the length test, not after: a thumb aimed at the camera is
  // short in the image by definition, so the order is what decides whether
  // that pose becomes a direction or a rejection.
  if (-out.depth > out.len * o.towardDominance) {
    out.direction = "down"; // pointing it at yourself means backward
    return out;
  }
  if (out.len < o.minLen) {
    out.reason = "thumb too short (side on?)";
    return out;
  }

  for (const { dir, axis, vert } of SECTORS) {
    if (angleGap(angle, axis) <= (vert ? o.vertHalf : o.horizHalf)) {
      out.direction = dir;
      return out;
    }
  }
  out.reason = "diagonal";
  return out;
}

// Returns "up" | "down" | "left" | "right" | null.
export function classifyThumb(lm, opts = {}) {
  return analyzeThumb(lm, opts).direction;
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
    this.opts = { ...HAND_DEFAULTS };

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

  setOptions(patch) {
    Object.assign(this.opts, patch);
  }

  // Rotate the decision frame so the pose being held right now reads as
  // `dir` exactly. One gesture, held for a second or two, corrects the bias
  // in all four directions — which is the whole reason for tracking a median
  // of the *uncorrected* angle rather than the sectored one.
  calibrateTo(dir) {
    const axis = SECTORS.find((s) => s.dir === dir)?.axis;
    const median = this.medianRawAngle();
    if (axis == null || median == null) return null;
    this.opts.angleOffset = Math.round(wrapDeg(median - axis));
    return this.opts.angleOffset;
  }

  medianRawAngle() {
    const a = this._history.map((h) => h.rawAngle).filter((v) => v != null).sort((p, q) => p - q);
    return a.length ? a[a.length >> 1] : null;
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
    const info = analyzeThumb(lm, this.opts);
    const raw = info.direction;

    if (raw === this._pending) {
      this._pendingStreak++;
    } else {
      this._pending = raw;
      this._pendingStreak = 1;
    }
    if (this._pendingStreak >= this.opts.debounce) this._commit(raw);

    this._history.push({ seen: this.hasHand, pose: !!raw, rawAngle: info.rawAngle });
    if (this._history.length > HISTORY) this._history.shift();
    const n = this._history.length || 1;
    const pct = (k) => Math.round((this._history.filter((h) => h[k]).length / n) * 100);
    // Median rather than mean, and over every frame that got as far as having
    // an angle at all: a live angle jitters too much to read off while holding
    // a pose, and reading it off is what calibration is.
    const medianAngle = this.medianRawAngle();

    if (this.overlayCtx) this._draw(lm, raw);
    this.onUpdate?.({
      hasHand: this.hasHand, direction: this.direction, raw, info,
      seenPct: pct("seen"), posePct: pct("pose"), medianAngle,
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
