// Face landmarking, off the main thread.
//
// The hand model moved into a worker first, and that fixed the large stutter.
// This is the remainder. detectForVideo is synchronous, and the face model
// measures ~2.6ms a call at 24-30 calls a second — against an 8.3ms budget on a
// 120Hz display that is roughly a third of every frame it lands in, spent on
// the one thread that also has to render.
//
// It costs about a frame of latency on blink-to-fire, because the result now
// arrives on a later tick than the frame it was captured from. In a game where
// firing *is* blinking that is a real trade, made deliberately.
//
// This is a CLASSIC worker, not a module worker, for the same reason as
// hands-worker.js: MediaPipe's wasm loader calls importScripts internally,
// which module workers forbid outright. Don't "modernise" this.

// Resolved against the worker's own script URL, which sits beside the game, so
// the folder stays relocatable.
const VENDOR = new URL("./vendor/", location.href).href;
const VISION_BUNDLE = `${VENDOR}tasks-vision/vision_bundle.mjs`;
const WASM_DIR = `${VENDOR}tasks-vision/wasm`;
const MODEL_URL = `${VENDOR}models/face_landmarker.task`;

let landmarker = null;
let busy = false;

async function init() {
  const { FilesetResolver, FaceLandmarker } = await import(VISION_BUNDLE);
  const fileset = await FilesetResolver.forVisionTasks(WASM_DIR);
  const opts = {
    outputFaceBlendshapes: true,
    outputFacialTransformationMatrixes: true,
    runningMode: "VIDEO",
    numFaces: 1,
  };
  // CPU first, as on the main thread: this model measured 2.6ms on CPU against
  // 4.0ms on GPU, and it leaves the GPU to the hand worker, which needs it
  // (5.5ms on GPU against 17.5ms on CPU).
  try {
    landmarker = await FaceLandmarker.createFromOptions(fileset, {
      baseOptions: { modelAssetPath: MODEL_URL, delegate: "CPU" },
      ...opts,
    });
  } catch (err) {
    landmarker = await FaceLandmarker.createFromOptions(fileset, {
      baseOptions: { modelAssetPath: MODEL_URL, delegate: "GPU" },
      ...opts,
    });
  }
}

// Only what the main thread actually uses crosses back: the 4x4 transform for
// yaw/pitch, three blendshape scores, and a bounding box. Shipping all 478
// landmarks so the caller could derive that box would be ~100x the payload for
// the same four numbers, and the raw objects carry prototypes that don't
// survive structured clone anyway.
function summarise(result) {
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

  return {
    matrix: matrix ? Array.from(matrix) : null,
    hasFace: !!matrix && !!landmarks,
    hasShapes: !!shapes,
    left,
    right,
    jawOpen,
    box,
  };
}

self.onmessage = async (e) => {
  const msg = e.data;

  if (msg.type === "init") {
    try {
      await init();
      self.postMessage({ type: "ready" });
    } catch (err) {
      self.postMessage({ type: "failed", error: String(err?.message || err) });
    }
    return;
  }

  if (msg.type === "frame") {
    // Drop rather than queue. A backlog would show up as aim drifting further
    // behind the longer you play, which is worse than a missed sample — and on
    // this tracker it would also delay firing.
    if (!landmarker || busy) {
      msg.bitmap.close();
      return;
    }
    busy = true;
    let payload = null;
    try {
      payload = summarise(landmarker.detectForVideo(msg.bitmap, msg.ts));
    } catch (err) {
      payload = null;
    } finally {
      msg.bitmap.close();
      busy = false;
    }
    self.postMessage({ type: "result", payload });
  }
};
