const CDN_BASE = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3";
const MODEL_URL =
  "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

// This game needs both continuous head position (to aim) and blink onset (to
// fire) from the same face at once, so unlike the other games it runs both
// signals off a single FaceLandmarker/detectForVideo call rather than two
// separate tracker instances.
export class FaceTracker {
  constructor(videoEl, overlayCanvas) {
    this.video = videoEl;
    this.overlay = overlayCanvas;
    this.overlayCtx = overlayCanvas.getContext("2d");
    this.landmarker = null;
    this.running = false;

    this.hasFace = false;
    this.nx = 0.5;
    this.ny = 0.5;
    this.yawRange = 15;
    this.pitchRange = 15;
    this.smoothing = 0.6;
    this.invertX = true;
    this.invertY = false;

    this.blinking = false;
    this.closedStreak = 0;
    this.openStreak = 0;
    this.blinkThreshold = 0.2;
    this.blinkDebounce = 1;

    this.mouthOpen = false;
    this.mouthOpenStreak = 0;
    this.mouthClosedStreak = 0;
    this.mouthThreshold = 0.35;
    this.mouthDebounce = 1;

    this.onUpdate = null; // ({hasFace, nx, ny})
    this.onBlink = null; // ()
    this.onMouthOpen = null; // ()
    this.onDebug = null;
    this.lastVideoTime = -1;
    // The rAF timestamp of the last frame this actually ran inference on.
    // detectForVideo is synchronous and blocks the main thread, so anything
    // else doing inference needs to know not to pile into the same frame —
    // see HandTracker.yieldTo.
    this.lastDetectFrame = -1;
    this._loop = this._loop.bind(this);
  }

  setThresholds({
    yawRange, pitchRange, smoothing, invertX, invertY,
    blinkThreshold, blinkDebounce, mouthThreshold, mouthDebounce,
  }) {
    if (yawRange != null) this.yawRange = yawRange;
    if (pitchRange != null) this.pitchRange = pitchRange;
    if (smoothing != null) this.smoothing = smoothing;
    if (invertX != null) this.invertX = invertX;
    if (invertY != null) this.invertY = invertY;
    if (blinkThreshold != null) this.blinkThreshold = blinkThreshold;
    if (blinkDebounce != null) this.blinkDebounce = blinkDebounce;
    if (mouthThreshold != null) this.mouthThreshold = mouthThreshold;
    if (mouthDebounce != null) this.mouthDebounce = mouthDebounce;
  }

  async init() {
    const { FilesetResolver, FaceLandmarker } = await import(CDN_BASE);
    const fileset = await FilesetResolver.forVisionTasks(`${CDN_BASE}/wasm`);

    const commonOpts = {
      outputFaceBlendshapes: true,
      outputFacialTransformationMatrixes: true,
      runningMode: "VIDEO",
      numFaces: 1,
    };

    // CPU first, which is the opposite of the usual advice and is measured:
    // this model runs at 2.6ms on CPU against 4.0ms on GPU. It also keeps the
    // GPU clear for the hand landmarker, which is the reverse — 5.5ms on GPU
    // against 17.5ms on CPU — and two GPU-delegate landmarkers alive at once
    // contend and slow each other down. Whole-page cost of the pair drops from
    // 230ms/s to 191ms/s by splitting them across the two.
    try {
      this.landmarker = await FaceLandmarker.createFromOptions(fileset, {
        baseOptions: { modelAssetPath: MODEL_URL, delegate: "CPU" },
        ...commonOpts,
      });
    } catch (err) {
      this.landmarker = await FaceLandmarker.createFromOptions(fileset, {
        baseOptions: { modelAssetPath: MODEL_URL, delegate: "GPU" },
        ...commonOpts,
      });
    }

    const stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 480, height: 360, facingMode: "user" },
      audio: false,
    });
    this.video.srcObject = stream;
    await new Promise((resolve) => {
      this.video.onloadedmetadata = () => resolve();
    });
    await this.video.play();
    this.overlay.width = this.video.videoWidth;
    this.overlay.height = this.video.videoHeight;
  }

  start() {
    this.running = true;
    requestAnimationFrame(this._loop);
  }

  stop() {
    this.running = false;
    const stream = this.video.srcObject;
    if (stream) stream.getTracks().forEach((t) => t.stop());
  }

  _loop(t) {
    if (!this.running) return;
    if (this.video.readyState >= 2 && this.video.currentTime !== this.lastVideoTime) {
      this.lastVideoTime = this.video.currentTime;
      this.lastDetectFrame = t;
      const result = this.landmarker.detectForVideo(this.video, performance.now());
      this._handleResult(result);
    }
    requestAnimationFrame(this._loop);
  }

  _handleResult(result) {
    this.overlayCtx.clearRect(0, 0, this.overlay.width, this.overlay.height);

    const matrixInfo = result.facialTransformationMatrixes?.[0];
    const landmarks = result.faceLandmarks?.[0];
    this.hasFace = !!matrixInfo && !!landmarks;

    let yaw = null;
    let pitch = null;
    if (this.hasFace) {
      ({ yaw, pitch } = anglesFromMatrix(matrixInfo.data));
      const targetX = clamp(0.5 + (this.invertX ? -1 : 1) * (yaw / this.yawRange) * 0.5, 0, 1);
      const targetY = clamp(0.5 + (this.invertY ? -1 : 1) * (pitch / this.pitchRange) * 0.5, 0, 1);
      this.nx += (targetX - this.nx) * this.smoothing;
      this.ny += (targetY - this.ny) * this.smoothing;
    }

    const shapes = result.faceBlendshapes?.[0]?.categories;
    let left = 0;
    let right = 0;
    let jawOpen = 0;
    if (shapes) {
      for (const c of shapes) {
        if (c.categoryName === "eyeBlinkLeft") left = c.score;
        else if (c.categoryName === "eyeBlinkRight") right = c.score;
        else if (c.categoryName === "jawOpen") jawOpen = c.score;
      }
    }
    const eyesClosed = !!shapes && left > this.blinkThreshold && right > this.blinkThreshold;
    if (eyesClosed) {
      this.closedStreak++;
      this.openStreak = 0;
    } else {
      this.openStreak++;
      this.closedStreak = 0;
    }
    if (!this.blinking && this.closedStreak >= this.blinkDebounce) {
      this.blinking = true;
      this.onBlink?.();
    } else if (this.blinking && this.openStreak >= this.blinkDebounce) {
      this.blinking = false;
    }

    const mouthIsOpen = !!shapes && jawOpen > this.mouthThreshold;
    if (mouthIsOpen) {
      this.mouthOpenStreak++;
      this.mouthClosedStreak = 0;
    } else {
      this.mouthClosedStreak++;
      this.mouthOpenStreak = 0;
    }
    if (!this.mouthOpen && this.mouthOpenStreak >= this.mouthDebounce) {
      this.mouthOpen = true;
      this.onMouthOpen?.();
    } else if (this.mouthOpen && this.mouthClosedStreak >= this.mouthDebounce) {
      this.mouthOpen = false;
    }

    if (landmarks) this._drawFaceBox(landmarks);

    this.onUpdate?.({ hasFace: this.hasFace, nx: this.nx, ny: this.ny });
    this.onDebug?.({
      hasFace: this.hasFace, yaw, pitch, nx: this.nx, ny: this.ny,
      left, right, blinking: this.blinking, jawOpen, mouthOpen: this.mouthOpen,
    });
  }

  _drawFaceBox(landmarks) {
    const ctx = this.overlayCtx;
    const w = this.overlay.width;
    const h = this.overlay.height;
    let minX = 1;
    let maxX = 0;
    let minY = 1;
    let maxY = 0;
    for (const p of landmarks) {
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;
    }
    ctx.strokeStyle = this.blinking ? "#f87171" : "#4ade80";
    ctx.lineWidth = 2;
    ctx.strokeRect(minX * w, minY * h, (maxX - minX) * w, (maxY - minY) * h);
  }
}

// `m` is MediaPipe's 4x4 facial transformation matrix. Only the magnitude of
// yaw/pitch is used downstream, so this is robust to row/column-major ambiguity.
function anglesFromMatrix(m) {
  const r20 = m[2];
  const r21 = m[6];
  const r22 = m[10];
  const pitch = Math.atan2(r21, r22) * (180 / Math.PI);
  const yaw = Math.atan2(-r20, Math.sqrt(r21 * r21 + r22 * r22)) * (180 / Math.PI);
  return { yaw, pitch };
}
