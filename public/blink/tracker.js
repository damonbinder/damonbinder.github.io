// Vendored under vendor/ rather than fetched from jsdelivr and Google, for
// three reasons in descending order of weight. The start screen promises
// nothing is sent anywhere, and two third-party requests hand every visitor's
// IP to someone else. A blocked or down CDN is otherwise the single likeliest
// way this fails for a stranger. And this folder is meant to drop onto a site
// self-contained. Resolved against import.meta.url so the paths hold wherever
// it is mounted.
const VENDOR = new URL("./vendor/", import.meta.url).href;
const VISION_BUNDLE = `${VENDOR}tasks-vision/vision_bundle.mjs`;
const WASM_DIR = `${VENDOR}tasks-vision/wasm`;
const MODEL_URL = `${VENDOR}models/face_landmarker.task`;

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
    this.landmarker = null;   // main-thread fallback only
    this.worker = null;
    this._inFlight = false;
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
    // Cap on detections per second. Uncapped it runs at the camera's frame
    // rate. This mattered much more before inference moved into a worker,
    // when each call was several blocking milliseconds on the render thread;
    // it now mostly trades aim smoothness and blink latency against the cost
    // of a createImageBitmap per detection.
    this.detectHz = 30;
    this._lastDetect = 0;
    // The rAF timestamp of the last frame this ran inference on *inline*.
    // Only the fallback path sets it: detectForVideo blocks the main thread,
    // so HandTracker.yieldTo needs to know not to pile into the same frame.
    // With the worker running there is nothing here to collide with.
    this.lastDetectFrame = -1;
    this.detectCount = 0; // for the debug perf readout
    this._loop = this._loop.bind(this);
  }

  setThresholds({
    yawRange, pitchRange, smoothing, invertX, invertY,
    blinkThreshold, blinkDebounce, mouthThreshold, mouthDebounce, detectHz,
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
    if (detectHz != null) this.detectHz = detectHz;
  }

  // Throws with `phase` set to "model" or "camera". The two fail for entirely
  // different reasons and want entirely different advice — a blocked CDN and a
  // denied permission are not the same problem — and from outside this method
  // they are otherwise indistinguishable.
  async init() {
    this._phase = "model";
    try {
      await this._initModel();
      this._phase = "camera";
      await this._initCamera();
    } catch (err) {
      err.phase = this._phase;
      throw err;
    }
  }

  // Inference runs in a worker when the browser allows it: detectForVideo is
  // synchronous, and ~2.6ms a call at 24-30/s is a third of a frame on a 120Hz
  // display, spent on the thread that also renders. Falls back to the main
  // thread if the worker can't start, which is what yieldTo still exists for.
  async _initModel() {
    this.onPhase?.("model");
    try {
      await this._initWorker();
      return;
    } catch (err) {
      console.warn("Face worker unavailable, falling back to main thread:", err);
      this.worker = null;
    }
    await this._initInline();
  }

  _initWorker() {
    return new Promise((resolve, reject) => {
      // Classic worker deliberately — see the note at the top of the worker.
      const worker = new Worker(new URL("./face-worker.js", import.meta.url));
      const timeout = setTimeout(() => {
        worker.terminate();
        reject(new Error("worker init timed out"));
      }, 20000);
      worker.onmessage = (e) => {
        if (e.data.type === "ready") {
          clearTimeout(timeout);
          this.worker = worker;
          // Past init, every message is a detection result.
          worker.onmessage = (ev) => {
            if (ev.data.type !== "result") return;
            this._inFlight = false;
            if (!ev.data.payload) return;
            this.detectCount++;
            this._handleResult(ev.data.payload);
          };
          resolve();
        } else if (e.data.type === "failed") {
          clearTimeout(timeout);
          worker.terminate();
          reject(new Error(e.data.error));
        }
      };
      worker.onerror = (err) => {
        clearTimeout(timeout);
        worker.terminate();
        reject(err);
      };
      worker.postMessage({ type: "init" });
    });
  }

  async _initInline() {
    const { FilesetResolver, FaceLandmarker } = await import(VISION_BUNDLE);
    const fileset = await FilesetResolver.forVisionTasks(WASM_DIR);

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
  }

  async _initCamera() {
    this.onPhase?.("camera");
    // Undefined rather than throwing a DOMException on an insecure origin, so
    // this is the failure a plain-http deployment produces. Named explicitly
    // because "camera didn't start" would send the player looking at their
    // browser settings for a problem that is entirely on the server.
    if (!navigator.mediaDevices?.getUserMedia) {
      const err = new Error("Camera access requires a secure (https) context");
      err.name = "InsecureContextError";
      throw err;
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
    this.worker?.terminate();
    this.worker = null;
    this._inFlight = false;
    const stream = this.video.srcObject;
    if (stream) stream.getTracks().forEach((t) => t.stop());
  }

  _loop(t) {
    if (!this.running) return;
    const now = performance.now();
    const due = now - this._lastDetect >= 1000 / Math.max(1, this.detectHz);
    if (due && this.video.readyState >= 2 && this.video.currentTime !== this.lastVideoTime) {
      this._lastDetect = now;
      this.lastVideoTime = this.video.currentTime;
      if (this.worker) {
        this._detectInWorker();
      } else {
        // lastDetectFrame is only meaningful on this path: it tells HandTracker
        // not to pile a second synchronous inference into the same frame. With
        // the worker running there is nothing on this thread to collide with.
        this.lastDetectFrame = t;
        this.detectCount++;
        this._handleResult(summariseResult(this.landmarker.detectForVideo(this.video, performance.now())));
      }
    }
    requestAnimationFrame(this._loop);
  }

  // At most one frame in flight. Queueing instead would show up as aim
  // drifting further behind the longer you play, and as firing lagging too.
  _detectInWorker() {
    if (this._inFlight) return;
    this._inFlight = true;
    const ts = performance.now();
    createImageBitmap(this.video).then(
      (bitmap) => {
        if (!this.worker || !this.running) {
          bitmap.close();
          this._inFlight = false;
          return;
        }
        this.worker.postMessage({ type: "frame", bitmap, ts }, [bitmap]);
      },
      () => { this._inFlight = false; },
    );
  }

  // Takes the summarised shape in both paths — see summariseResult below — so
  // everything from here down is identical whether inference ran in the worker
  // or on this thread.
  _handleResult({ matrix, hasFace, hasShapes, left, right, jawOpen, box }) {
    this.overlayCtx.clearRect(0, 0, this.overlay.width, this.overlay.height);

    this.hasFace = hasFace;

    let yaw = null;
    let pitch = null;
    if (this.hasFace) {
      ({ yaw, pitch } = anglesFromMatrix(matrix));
      const targetX = clamp(0.5 + (this.invertX ? -1 : 1) * (yaw / this.yawRange) * 0.5, 0, 1);
      const targetY = clamp(0.5 + (this.invertY ? -1 : 1) * (pitch / this.pitchRange) * 0.5, 0, 1);
      this.nx += (targetX - this.nx) * this.smoothing;
      this.ny += (targetY - this.ny) * this.smoothing;
    }

    const shapes = hasShapes;
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

    if (box) this._drawFaceBox(box);

    this.onUpdate?.({ hasFace: this.hasFace, nx: this.nx, ny: this.ny });
    this.onDebug?.({
      hasFace: this.hasFace, yaw, pitch, nx: this.nx, ny: this.ny,
      left, right, blinking: this.blinking, jawOpen, mouthOpen: this.mouthOpen,
    });
  }

  _drawFaceBox({ minX, maxX, minY, maxY }) {
    const ctx = this.overlayCtx;
    const w = this.overlay.width;
    const h = this.overlay.height;
    ctx.strokeStyle = this.blinking ? "#f87171" : "#4ade80";
    ctx.lineWidth = 2;
    ctx.strokeRect(minX * w, minY * h, (maxX - minX) * w, (maxY - minY) * h);
  }
}

// The main-thread fallback produces the same shape the worker posts back, so
// _handleResult never has to know which path it came from. Kept in step with
// summarise() in face-worker.js.
function summariseResult(result) {
  const matrix = result.facialTransformationMatrixes?.[0]?.data;
  const landmarks = result.faceLandmarks?.[0];
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

  let box = null;
  if (landmarks) {
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
    box = { minX, maxX, minY, maxY };
  }

  return { matrix: matrix ? Array.from(matrix) : null, hasFace: !!matrix && !!landmarks, hasShapes: !!shapes, left, right, jawOpen, box };
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
