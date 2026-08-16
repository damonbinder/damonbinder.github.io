// Hand landmarking, off the main thread.
//
// This exists for one measured reason. detectForVideo is synchronous, and on a
// 120Hz display the refresh is 8.3ms while a hand inference is 5-12ms — so on
// the main thread every single detection overruns a frame, and no scheduling
// or rate reduction can change that. Measured on the game's own readout: hands
// off, 8 dropped frames a session; hands on at 11Hz, 264. Here the main thread
// only pays for createImageBitmap, and the inference happens elsewhere.
//
// Only landmarks cross back. All the classification (analyzeThumb,
// analyzeWheel) stays on the main thread, where it is pure and costs nothing.

// This is a CLASSIC worker, not a module worker, and that is not a stylistic
// choice. MediaPipe's wasm loader calls importScripts internally, which module
// workers forbid outright — `Module scripts don't support importScripts()`,
// confirmed on 0.10.3, 0.10.14 and 0.10.22, so it isn't a version to bump past
// either. A classic worker allows importScripts, and dynamic import() then
// still loads the ESM bundle. Don't "modernise" this to type: "module".

const CDN_BASE = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3";
const MODEL_URL =
  "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task";

let landmarker = null;
let busy = false;

async function init() {
  const { FilesetResolver, HandLandmarker } = await import(CDN_BASE);
  const fileset = await FilesetResolver.forVisionTasks(`${CDN_BASE}/wasm`);
  const opts = { runningMode: "VIDEO", numHands: 2 };
  try {
    landmarker = await HandLandmarker.createFromOptions(fileset, {
      baseOptions: { modelAssetPath: MODEL_URL, delegate: "GPU" },
      ...opts,
    });
  } catch (err) {
    // 3x slower, but off the main thread it no longer costs frames.
    landmarker = await HandLandmarker.createFromOptions(fileset, {
      baseOptions: { modelAssetPath: MODEL_URL, delegate: "CPU" },
      ...opts,
    });
  }
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
    // Drop rather than queue. A backlog would show up as hand input lagging
    // further behind the longer you play, which is worse than a missed sample.
    if (!landmarker || busy) {
      msg.bitmap.close();
      if (!landmarker) self.postMessage({ type: "result", landmarks: [] });
      return;
    }
    busy = true;
    let landmarks = [];
    try {
      const result = landmarker.detectForVideo(msg.bitmap, msg.ts);
      // Strip to plain points: the raw objects carry prototypes that don't
      // survive structured clone, and this is a smaller payload anyway.
      landmarks = (result.landmarks || []).map((hand) =>
        hand.map((p) => ({ x: p.x, y: p.y, z: p.z ?? 0 })),
      );
    } catch (err) {
      landmarks = [];
    } finally {
      msg.bitmap.close();
      busy = false;
    }
    self.postMessage({ type: "result", landmarks });
  }
};
