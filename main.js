import { CorridorGame, CORRIDOR_CONST } from "./game.js";
import { FaceTracker } from "./tracker.js";
import { HandTracker } from "./hands.js";
import { SoundFX } from "./sound.js";

// Units; proximity tension ramps up from this distance down to 0. Raised from
// the original 4 with the 20x16 map: the cue exists to warn about things you
// can't turn fast enough to see, so it wants to start well before contact.
// It's deliberately paired with a steep BP_CURVE — a long range with a linear
// ramp is just constant noise, whereas a long range with a late ramp gives a
// barely-there presence far out that rushes in over the last few units.
const DANGER_RANGE = 9;

const { WIDTH, HEIGHT, RENDER_SCALE, SMG_FIRE_INTERVAL_MS, PLAYER_MAX_HP } = CORRIDOR_CONST;

const canvas = document.getElementById("game");
const hud = document.getElementById("hud");
hud.width = WIDTH * RENDER_SCALE;
hud.height = HEIGHT * RENDER_SCALE;
const hudCtx = hud.getContext("2d");
const board = document.querySelector(".board");
const video = document.getElementById("video");
const videoOverlay = document.getElementById("videoOverlay");
const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlayTitle");
const overlaySub = document.getElementById("overlaySub");
const startOverlay = document.getElementById("startOverlay");
const startBtn = document.getElementById("startBtn");
const startPrompt = document.getElementById("startPrompt");
const camError = document.getElementById("camError");
const fallbackBtn = document.getElementById("fallbackBtn");
const blinkCountEl = document.getElementById("blinkCount");
const handStateEl = document.getElementById("handState");
const handOverlay = document.getElementById("handOverlay");
const invertHandsBox = document.getElementById("invertHands");
const calibrateHandsBtn = document.getElementById("calibrateHands");
const calibrateResult = document.getElementById("calibrateResult");
// [slider, label, key, scale] — scale converts the integer slider to the
// option's units, so the percentage sliders read as percentages.
const HAND_SLIDERS = [
  ["handTiltDeadSlider", "handTiltDeadVal", "wheelTiltDead", 1],
  ["handTiltRangeSlider", "handTiltRangeVal", "wheelTiltRange", 1],
  ["handRaiseDeadSlider", "handRaiseDeadVal", "wheelRaiseDead", 0.01],
  ["handRaiseRangeSlider", "handRaiseRangeVal", "wheelRaiseRange", 0.01],
  ["handOffsetSlider", "handOffsetVal", "angleOffset", 1],
  ["handHorizSlider", "handHorizVal", "horizHalf", 1],
  ["handVertSlider", "handVertVal", "vertHalf", 1],
  ["handCurlSlider", "handCurlVal", "minCurled", 1],
  ["handOutSlider", "handOutVal", "thumbOut", 0.01],
  ["handLenSlider", "handLenVal", "minLen", 0.01],
  ["handTowardSlider", "handTowardVal", "towardDominance", 0.01],
  ["handDebounceSlider", "handDebounceVal", "debounce", 1],
];
const handModeSelect = document.getElementById("handModeSelect");
const trackStateEl = document.getElementById("trackState");
const mouthStateEl = document.getElementById("mouthState");
const swingCountEl = document.getElementById("swingCount");
const showCameraToggle = document.getElementById("showCamera");
const cameraPanel = document.querySelector(".camera-panel");
const debugToggle = document.getElementById("debugToggle");
const debugReadout = document.getElementById("debugReadout");
const yawSlider = document.getElementById("yawSlider");
const pitchSlider = document.getElementById("pitchSlider");
const smoothSlider = document.getElementById("smoothSlider");
const threshSlider = document.getElementById("threshSlider");
const debounceSlider = document.getElementById("debounceSlider");
const mouthThreshSlider = document.getElementById("mouthThreshSlider");
const mouthDebounceSlider = document.getElementById("mouthDebounceSlider");
const invertXBox = document.getElementById("invertX");
const invertYBox = document.getElementById("invertY");
const yawVal = document.getElementById("yawVal");
const pitchVal = document.getElementById("pitchVal");
const smoothVal = document.getElementById("smoothVal");
const threshVal = document.getElementById("threshVal");
const debounceVal = document.getElementById("debounceVal");
const mouthThreshVal = document.getElementById("mouthThreshVal");
const mouthDebounceVal = document.getElementById("mouthDebounceVal");

const BEST_KEY = "corridor-best";

const DEBUG = new URLSearchParams(location.search).has("debug");
if (DEBUG) {
  document.querySelectorAll(".debug-only").forEach((el) => el.classList.remove("debug-only"));
}

// Opt-in second camera signal that walks the player — two hands held like
// handlebars, or a thumb pointed in one of four directions. Gated behind a URL
// flag like the tuning panel is, because it loads and runs a second MediaPipe
// model over every frame of the same stream and there's no reason to charge
// that to someone playing on the keyboard. `?hands=wheel` or `?hands=thumb`
// picks a scheme; a bare `?hands=1` takes the panel's default.
const HANDS_PARAM = new URLSearchParams(location.search).get("hands");
const HANDS = HANDS_PARAM != null;
if (HANDS) {
  document.querySelectorAll(".hands-only").forEach((el) => el.classList.remove("hands-only"));
}

const game = new CorridorGame(canvas);
const sound = new SoundFX();
let tracker = null;
let handTracker = null;
let handMove = 0;
let handStrafe = 0;
let lastHandReadout = "";
let started = false;
let awaitingStartBlink = false;
let lastFrameTime = 0;
let blinkCount = 0;
let swingCount = 0;
let reticleNX = 0.5;
let reticleNY = 0.5;
let mouseAimActive = false;
let forwardHeld = false;
let backHeld = false;
let strafeLeftHeld = false;
let strafeRightHeld = false;
let manualPause = false;
let smgFireCooldown = 0;
let debugEyesClosed = false; // DEBUG-only substitute for a sustained eyes-closed hold, for testing without a camera

// Turning has no keyboard control at all — it only happens by looking (or,
// under ?debug with no camera, moving the mouse) toward the outer edges of
// the screen, past TURN_ZONE. Looking within the zone just aims/moves the
// reticle; it's the same nx signal driving both.
const TURN_ZONE = 0.22;
function turnInputFromNX(nx) {
  if (nx < TURN_ZONE) return -(TURN_ZONE - nx) / TURN_ZONE;
  if (nx > 1 - TURN_ZONE) return (nx - (1 - TURN_ZONE)) / TURN_ZONE;
  return 0;
}

let best = Number(localStorage.getItem(BEST_KEY) || 0);

// Score, health, ammo, weapon and wave are all read straight off the game
// each frame by renderHud() and drawn on the canvas, so none of them needs a
// change callback any more. Only the two things the game itself can't know —
// the stored best, and the SMG's fire cooldown — are still hooked here.
const WEAPON_LABELS = { smg: "SMG", saber: "Saber", pistol: "Pistol" };

game.onWeaponChange = (weapon) => {
  if (weapon === "smg") smgFireCooldown = 0; // ready to fire the instant eyes close, not stale from before
};

game.onGameOver = (score) => {
  if (score > best) {
    best = score;
    localStorage.setItem(BEST_KEY, String(best));
  }
  overlayTitle.textContent = "Game over";
  overlaySub.textContent = `Score ${score} — press space to restart`;
  overlay.classList.remove("hidden");
};

game.onShoot = () => sound.playShoot();
game.onEmptyFire = () => sound.playEmptyClick();
game.onPlayerHurt = () => sound.playHurt();
game.onEnemyShoot = () => sound.playEnemyShoot();
game.onSmgShoot = () => sound.playSmgShoot();
game.onAmmoPickup = () => sound.playAmmoPickup();

// Every swing comes through here now that melee is a weapon slot swung by
// blinking, so this is also where the debug swing counter is kept.
game.onSaberSwing = () => {
  sound.playSaberSwing();
  swingCount++;
  swingCountEl.textContent = swingCount;
};

function updateDanger() {
  if (!started || !game.alive || manualPause) {
    sound.setThreats([]);
    return;
  }
  // Every enemy inside the range, not just the nearest — the cue stacks a
  // voice per threat, so it needs all of them and their individual distances.
  const dangers = [];
  for (const en of game.enemies) {
    if (!en.alive) continue;
    // A frozen watcher is held still by being looked at, so it isn't a threat
    // for as long as that lasts — it goes silent, and its voice dropping out
    // of the chord is the feedback that you've pinned it. It sounds again the
    // instant it starts moving, including the blink-dash and the
    // WATCHER_MAX_FROZEN_MS escape valve, both of which clear en.frozen.
    if (en.frozen) continue;
    const d = Math.hypot(en.x - game.player.x, en.y - game.player.y);
    if (d >= DANGER_RANGE) continue;
    dangers.push(1 - d / DANGER_RANGE);
  }
  sound.setThreats(dangers);
}

// The blade hums whenever it's actually drawn and usable. Driven off the
// current state every frame rather than off weapon-change events, so there's
// no path — death, pause, a swap mid-swing — that can leave it running.
function updateSaberHum() {
  sound.setSaberActive(started && game.alive && !manualPause && game.weapon === "saber");
}

// --- On-screen readouts -----------------------------------------------------
// All of it lives in the four corners rather than in a bar along the bottom:
// the viewmodel occupies the bottom centre (the saber's hands sit at
// HEIGHT-26 and its blade runs up the middle), so a bar would cover the one
// part of the frame the player is already looking at.
const HUD_FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const HUD_MARGIN = 15;
const HUD_LABEL = `600 7px ${HUD_FONT}`;
const HUD_VALUE = `700 18px ${HUD_FONT}`;
const HUD_SMALL = `600 8px ${HUD_FONT}`;
const HUD_MUTED = "rgba(231,233,238,0.5)";
const HUD_BAR_W = 92;
const HUD_BAR_H = 4;
// Matches each weapon's viewmodel tint, so the word and the thing in your
// hands are the same colour.
const WEAPON_TINTS = { smg: "#a5b4fc", saber: "#67e8f9", pistol: "#e7e9ee" };

function hudText(text, x, y, font, color, align, spacing = "0px") {
  hudCtx.font = font;
  hudCtx.fillStyle = color;
  hudCtx.textAlign = align;
  hudCtx.letterSpacing = spacing;
  hudCtx.fillText(text, x, y);
  hudCtx.letterSpacing = "0px";
}

function healthColor(hp) {
  const frac = hp / PLAYER_MAX_HP;
  if (frac > 0.5) return "#4ade80";
  if (frac > 0.25) return "#fbbf24";
  return "#f87171";
}

function renderStats() {
  const right = WIDTH - HUD_MARGIN;
  const hp = Math.max(0, Math.round(game.health));
  const isSaber = game.weapon === "saber";
  const ammo = isSaber ? "∞" : String(game.weapon === "smg" ? game.smgAmmo : game.ammo);
  const weaponLabel = (WEAPON_LABELS[game.weapon] || "Pistol").toUpperCase();

  // Walls run from near-black to fairly bright and the heal pad washes the
  // whole frame green, so every glyph gets a soft dark halo rather than
  // relying on the background staying dark behind it.
  hudCtx.shadowColor = "rgba(0,0,0,0.9)";
  hudCtx.shadowBlur = 4;
  hudCtx.textBaseline = "alphabetic";

  hudText("WAVE", HUD_MARGIN, 20, HUD_LABEL, HUD_MUTED, "left", "1.2px");
  hudText(String(game.wave), HUD_MARGIN, 38, HUD_VALUE, "#e7e9ee", "left");

  hudText("SCORE", right, 20, HUD_LABEL, HUD_MUTED, "right", "1.2px");
  hudText(String(game.score), right, 38, HUD_VALUE, "#e7e9ee", "right");
  hudText(`BEST ${Math.max(best, game.score)}`, right, 50, HUD_SMALL, HUD_MUTED, "right");

  hudText("HEALTH", HUD_MARGIN, HEIGHT - 44, HUD_LABEL, HUD_MUTED, "left", "1.2px");
  hudText(String(hp), HUD_MARGIN, HEIGHT - 26, HUD_VALUE, healthColor(game.health), "left");
  hudCtx.shadowBlur = 0;
  hudCtx.fillStyle = "rgba(231,233,238,0.16)";
  hudCtx.fillRect(HUD_MARGIN, HEIGHT - 20, HUD_BAR_W, HUD_BAR_H);
  hudCtx.fillStyle = healthColor(game.health);
  hudCtx.fillRect(HUD_MARGIN, HEIGHT - 20, HUD_BAR_W * Math.max(0, game.health / PLAYER_MAX_HP), HUD_BAR_H);
  hudCtx.shadowBlur = 4;

  hudText(weaponLabel, right, HEIGHT - 44, HUD_LABEL, WEAPON_TINTS[game.weapon] || HUD_MUTED, "right", "1.2px");
  hudText(ammo, right, HEIGHT - 26, HUD_VALUE, !isSaber && Number(ammo) === 0 ? "#f87171" : "#e7e9ee", "right");

  hudCtx.shadowBlur = 0;
}

function renderHud() {
  hudCtx.setTransform(RENDER_SCALE, 0, 0, RENDER_SCALE, 0, 0);
  hudCtx.clearRect(0, 0, WIDTH, HEIGHT);
  if (!started) return;
  renderStats();
  const px = reticleNX * WIDTH;
  const py = reticleNY * HEIGHT;
  const target = game.alive ? game.peekTarget(reticleNX, reticleNY) : { hit: false, headshot: false };
  hudCtx.strokeStyle = target.headshot ? "#fbbf24" : target.hit ? "#4ade80" : "rgba(231,233,238,0.85)";
  hudCtx.lineWidth = 2;
  const s = 9;
  hudCtx.beginPath();
  hudCtx.moveTo(px - s, py);
  hudCtx.lineTo(px - 3, py);
  hudCtx.moveTo(px + 3, py);
  hudCtx.lineTo(px + s, py);
  hudCtx.moveTo(px, py - s);
  hudCtx.lineTo(px, py - 3);
  hudCtx.moveTo(px, py + 3);
  hudCtx.lineTo(px, py + s);
  hudCtx.stroke();
}

function togglePause() {
  if (!started || !game.alive) return;
  manualPause = !manualPause;
  refreshPauseOverlay();
}

function refreshPauseOverlay() {
  if (!game.alive) return; // game-over overlay owns this state once you're dead
  if (manualPause) {
    overlayTitle.textContent = "Paused";
    overlaySub.textContent = "Press space to resume";
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
}

// The SMG has no manual trigger at all — as long as the player's eyes stay
// closed (game.playerBlinking, the same continuous signal the watcher
// freeze check runs on) it keeps firing on its own cooldown. A quick blink
// yields one round if the cooldown happened to be ready; holding your eyes
// shut yields a stream, right up until its small magazine runs dry.
function updateSmgAutoFire(dt) {
  const eyesClosed = game.playerBlinking || (DEBUG && debugEyesClosed);
  if (!started || !game.alive || manualPause || game.weapon !== "smg" || !eyesClosed) {
    smgFireCooldown = 0;
    return;
  }
  smgFireCooldown -= dt;
  if (smgFireCooldown <= 0) {
    game.fireAt(reticleNX, reticleNY);
    smgFireCooldown = SMG_FIRE_INTERVAL_MS;
  }
}

function loop(t) {
  requestAnimationFrame(loop);
  const dt = lastFrameTime ? t - lastFrameTime : 16;
  lastFrameTime = t;
  if (!started) return;
  // Clamp so a backgrounded/throttled tab can't fast-forward the player
  // through many physics steps (and through walls) in one jump.
  if (game.alive && !manualPause) game.advance(Math.min(dt, 100));
  renderHud();
  updateDanger();
  updateSaberHum();
  updateSmgAutoFire(dt);
}
requestAnimationFrame((t) => {
  lastFrameTime = t;
  loop(t);
});

// Keys and hand share one axis each, and a held key wins. Summing them instead
// would let a thumb cancel a keypress out to a standstill, which is a confusing
// thing to happen to someone who has just reached for the keyboard.
function updateMoveDir() {
  const keys = (forwardHeld ? 1 : 0) - (backHeld ? 1 : 0);
  game.setMoveDir(keys !== 0 ? keys : handMove);
}

function updateStrafeDir() {
  const keys = (strafeRightHeld ? 1 : 0) - (strafeLeftHeld ? 1 : 0);
  game.setStrafeDir(keys !== 0 ? keys : handStrafe);
}

function fire() {
  if (!started || !game.alive || manualPause) return;
  game.fireAt(reticleNX, reticleNY);
}

window.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  if (["arrowup", "w"].includes(key)) {
    forwardHeld = true;
    updateMoveDir();
  } else if (["arrowdown", "s"].includes(key)) {
    backHeld = true;
    updateMoveDir();
  } else if (["arrowleft", "a"].includes(key)) {
    strafeLeftHeld = true;
    updateStrafeDir();
  } else if (["arrowright", "d"].includes(key)) {
    strafeRightHeld = true;
    updateStrafeDir();
  } else if (key === "r" && started) {
    game.toggleWeapon();
  } else if (key === " ") {
    // Space restarts once you've died, and pauses/resumes any other time.
    if (started && !game.alive) restart();
    else togglePause();
  }
  if (["arrowup", "arrowdown", "arrowleft", "arrowright", " "].includes(key)) {
    e.preventDefault();
  }

  // Aiming/firing is gaze+blink only, and every weapon — the saber included —
  // attacks on that same blink. K is a ?debug convenience that jumps straight
  // to the saber slot, so it can be tested without cycling with R first.
  if (!DEBUG) return;
  if (key === "k" && started) game.equipWeapon("saber");
  // N jumps a wave, for reaching wave-gated content without clearing up to it.
  if (key === "n" && started) game.skipWave();
  // C simulates holding your eyes shut, for testing the SMG without a camera.
  if (key === "c") {
    debugEyesClosed = true;
    game.setPlayerBlinking(true);
  }
});

window.addEventListener("keyup", (e) => {
  const key = e.key.toLowerCase();
  if (["arrowup", "w"].includes(key)) {
    forwardHeld = false;
    updateMoveDir();
  } else if (["arrowdown", "s"].includes(key)) {
    backHeld = false;
    updateMoveDir();
  } else if (["arrowleft", "a"].includes(key)) {
    strafeLeftHeld = false;
    updateStrafeDir();
  } else if (["arrowright", "d"].includes(key)) {
    strafeRightHeld = false;
    updateStrafeDir();
  } else if (key === "c" && DEBUG) {
    debugEyesClosed = false;
    game.setPlayerBlinking(false);
  }
});

if (DEBUG) {
  board.addEventListener("mousemove", (e) => {
    if (!mouseAimActive) return;
    const rect = canvas.getBoundingClientRect();
    reticleNX = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    reticleNY = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    game.setTurnDir(turnInputFromNX(reticleNX));
  });
  board.addEventListener("click", fire);
}

function restart() {
  game.reset();
  manualPause = false;
  overlay.classList.add("hidden");
}

function beginGame() {
  if (started) return;
  started = true;
  awaitingStartBlink = false;
  startOverlay.classList.add("hidden");
}

// Second beat of the start flow. The click on Start is what the browser's
// autoplay policy needs to open the AudioContext and what prompts for the
// camera; the game itself then waits for a blink. The prompt only appears
// once the tracker is actually live, so it never asks for a gesture nothing
// is watching for.
function armBlinkStart() {
  awaitingStartBlink = true;
  startBtn.classList.add("hidden");
  startPrompt.classList.remove("hidden");
}

async function startWithCamera() {
  tracker = new FaceTracker(video, videoOverlay);
  tracker.setThresholds({
    yawRange: Number(yawSlider.value),
    pitchRange: Number(pitchSlider.value),
    smoothing: Number(smoothSlider.value) / 100,
    invertX: invertXBox.checked,
    invertY: invertYBox.checked,
    blinkThreshold: Number(threshSlider.value) / 100,
    blinkDebounce: Number(debounceSlider.value),
    mouthThreshold: Number(mouthThreshSlider.value) / 100,
    mouthDebounce: Number(mouthDebounceSlider.value),
  });
  tracker.onUpdate = ({ hasFace, nx, ny }) => {
    reticleNX = nx;
    reticleNY = ny;
    game.setTurnDir(turnInputFromNX(reticleNX));
    trackStateEl.textContent = hasFace ? "Tracking" : "Lost";
    trackStateEl.className = `value ${hasFace ? "gaze-running" : "gaze-paused"}`;
  };
  tracker.onBlink = () => {
    blinkCount++;
    blinkCountEl.textContent = blinkCount;
    // The blink that starts the game shouldn't also be the first shot.
    if (awaitingStartBlink) {
      beginGame();
      return;
    }
    // While the SMG is equipped, firing goes entirely through the
    // continuous eyes-closed check (updateSmgAutoFire) instead of this
    // single edge-triggered shot, so the two don't both fire on one blink.
    if (game.weapon !== "smg") fire();
  };
  // Opening your mouth cycles the weapon, the same job R does. jawOpen went
  // unused when melee moved off the mouth and onto the blink; switching is
  // what it's actually suited to, being deliberate and held, where firing
  // wants the involuntary gesture. Fires on the open edge only, so holding
  // your mouth open cycles once rather than spinning through the slots.
  tracker.onMouthOpen = () => {
    if (!started || !game.alive || manualPause) return;
    game.toggleWeapon();
  };
  // The mouth threshold and debounce sliders in the tuning panel exist for
  // this: talking or laughing at the wrong threshold will cycle your weapon.
  tracker.onDebug = ({ hasFace, yaw, pitch, nx, ny, left, right, blinking, jawOpen, mouthOpen }) => {
    game.setPlayerBlinking(blinking);
    mouthStateEl.textContent = mouthOpen ? "Open" : "Closed";
    mouthStateEl.className = `value ${mouthOpen ? "gaze-paused" : "gaze-running"}`;
    if (!debugToggle.checked) return;
    const fmt = (n) => (n == null ? "—" : n.toFixed(1));
    debugReadout.textContent =
      `face: ${hasFace ? "yes" : "no"}\n` +
      `yaw:   ${fmt(yaw)}°  pitch: ${fmt(pitch)}°\n` +
      `aim:   ${(nx * 100).toFixed(0)}%, ${(ny * 100).toFixed(0)}%\n` +
      `blink: L ${(left * 100).toFixed(0)}%  R ${(right * 100).toFixed(0)}%  ${blinking ? "BLINK" : ""}\n` +
      `mouth: ${(jawOpen * 100).toFixed(0)}%  ${mouthOpen ? "OPEN" : ""}` +
      (lastHandReadout ? `\n${lastHandReadout}` : "");
  };

  try {
    camError.classList.add("hidden");
    await tracker.init();
    tracker.start();
    mouseAimActive = false;
    trackStateEl.textContent = "Tracking";
    trackStateEl.className = "value gaze-running";
    armBlinkStart();
    // Not awaited: the hand model is a second few-megabyte download, and
    // making the start prompt wait on it would be a visible stall for a mode
    // that's fine to come online a moment late.
    if (HANDS) startHandTracking();
  } catch (err) {
    console.error("Camera/tracker init failed:", err);
    tracker = null;
    // Non-debug: no fallback control exists — aiming/firing needs the camera.
    if (DEBUG) {
      camError.textContent =
        "Couldn't access the camera (" + (err?.message || err) + "). Continuing without it.";
      camError.classList.remove("hidden");
      continueWithoutCamera();
    }
  }
}

// Runs on the stream the FaceTracker has already opened, so it can only be
// started once that has resolved. A failure here is non-fatal by design —
// aiming and firing still work, you're just back on the keyboard to walk.
// Read the whole panel at once. Doing it this way rather than pushing single
// values on each input event means a tracker created *after* the sliders have
// been touched still comes up with what's on screen.
function handOptionsFromPanel() {
  // Unchecked is the expected case: raw front-camera frames aren't mirrored,
  // so the sign flip is on by default. The checkbox is here because this is
  // the one thing in the classifier that can't be verified without a camera.
  const opts = { mirrored: !invertHandsBox.checked, mode: handModeSelect.value };
  for (const [slider, , key, scale] of HAND_SLIDERS) {
    opts[key] = Number(document.getElementById(slider).value) * scale;
  }
  return opts;
}

// Only one scheme's controls are worth showing at a time, and the calibrate
// button means a different thing in each.
function syncHandPanelToMode() {
  const wheel = handModeSelect.value === "wheel";
  document.querySelector(".wheel-only").style.display = wheel ? "" : "none";
  document.querySelector(".thumb-only").style.display = wheel ? "none" : "";
  calibrateHandsBtn.textContent = wheel
    ? "Hold both hands level, then click to calibrate"
    : "Hold thumb UP, then click to calibrate";
  calibrateResult.textContent = "";
}

function applyHandSteer({ move, strafe }) {
  handMove = move;
  handStrafe = strafe;
  updateMoveDir();
  updateStrafeDir();
}

async function startHandTracking() {
  handTracker = new HandTracker(video, handOverlay);
  handTracker.setOptions(handOptionsFromPanel());
  handTracker.onSteer = applyHandSteer;
  handTracker.onUpdate = ({ mode, hasHand, handCount, direction, steer, info, seenPct, posePct, medianAngle }) => {
    const live = steer.move !== 0 || steer.strafe !== 0;
    handStateEl.textContent = mode === "wheel"
      ? `${handCount}h ${steer.move.toFixed(1)}/${steer.strafe.toFixed(1)}`
      : hasHand ? direction || "—" : "none";
    handStateEl.className = `value ${live ? "gaze-running" : "gaze-unknown"}`;
    // Kept separate from the face tracker's readout below rather than merged
    // into it: this updates at DETECT_INTERVAL_MS, that one at video rate.
    const head =
      `hands: ${handCount}   seen ${seenPct}%  usable ${posePct}%` +
      `${info.reason ? `   ${info.reason}` : ""}\n` +
      `steer: move ${steer.move.toFixed(2)}  strafe ${steer.strafe.toFixed(2)}\n`;
    const o = handTracker.opts;
    lastHandReadout = mode === "wheel"
      ? head +
        `tilt:  ${info.tilt == null ? "—" : `${info.tilt}°`}  ` +
        `(dead ${o.wheelTiltDead}°, full ${o.wheelTiltRange}°)\n` +
        `raise: ${info.raise == null ? "—" : info.raise.toFixed(3)}  ` +
        `neutral y ${o.wheelNeutral.toFixed(3)}  tilt zero ${Math.round(o.wheelTiltOffset)}°`
      : head +
        `pose:  curled ${info.curled}/4  out ${info.thumbOut.toFixed(2)}  ` +
        // depth negative means the thumb tip is nearer the camera than its
        // knuckle, i.e. aimed at you
        `len ${info.len.toFixed(2)}  depth ${info.depth.toFixed(2)}\n` +
        // Raw is what calibration works off; corrected is what the sectors
        // judge. Showing only one makes the offset slider look inert.
        `angle: raw ${info.rawAngle == null ? "—" : `${info.rawAngle}°`}  ` +
        `median ${medianAngle == null ? "—" : `${medianAngle}°`}  ` +
        `corrected ${info.angle == null ? "—" : `${info.angle}°`}\n` +
        `axes:  right 0, up 90, left 180, down -90`;
  };
  try {
    await handTracker.init();
    handTracker.start();
  } catch (err) {
    console.error("Hand tracker init failed:", err);
    handTracker = null;
    handStateEl.textContent = "failed";
    handStateEl.className = "value gaze-paused";
  }
}

function continueWithoutCamera() {
  tracker?.stop();
  tracker = null;
  // No camera, no hands. Zero the axes as well as stopping the loop, or a
  // direction committed just before the failure would stick.
  handTracker?.stop();
  handTracker = null;
  applyHandSteer({ move: 0, strafe: 0 });
  cameraPanel.style.display = "none";
  trackStateEl.textContent = "off";
  trackStateEl.className = "value gaze-unknown";
  mouthStateEl.textContent = "off";
  mouthStateEl.className = "value gaze-unknown";
  mouseAimActive = true;
  reticleNX = 0.5;
  reticleNY = 0.5;
  beginGame();
}

startBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sound.resume(); // must happen synchronously in this gesture handler (autoplay policy)
  startWithCamera();
});

fallbackBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sound.resume();
  continueWithoutCamera();
});

showCameraToggle.addEventListener("change", () => {
  const box = video.closest(".video-box");
  box.style.visibility = showCameraToggle.checked ? "visible" : "hidden";
});

debugToggle.addEventListener("change", () => {
  debugReadout.classList.toggle("hidden", !debugToggle.checked);
});

function bindSlider(slider, label, apply) {
  slider.addEventListener("input", () => {
    label.textContent = slider.value;
    apply(Number(slider.value));
  });
}
bindSlider(yawSlider, yawVal, (v) => tracker?.setThresholds({ yawRange: v }));
bindSlider(pitchSlider, pitchVal, (v) => tracker?.setThresholds({ pitchRange: v }));
bindSlider(smoothSlider, smoothVal, (v) => tracker?.setThresholds({ smoothing: v / 100 }));
bindSlider(threshSlider, threshVal, (v) => tracker?.setThresholds({ blinkThreshold: v / 100 }));
bindSlider(debounceSlider, debounceVal, (v) => tracker?.setThresholds({ blinkDebounce: v }));
bindSlider(mouthThreshSlider, mouthThreshVal, (v) => tracker?.setThresholds({ mouthThreshold: v / 100 }));
bindSlider(mouthDebounceSlider, mouthDebounceVal, (v) => tracker?.setThresholds({ mouthDebounce: v }));

invertXBox.addEventListener("change", () => tracker?.setThresholds({ invertX: invertXBox.checked }));
invertYBox.addEventListener("change", () => tracker?.setThresholds({ invertY: invertYBox.checked }));

for (const [slider, label] of HAND_SLIDERS) {
  const el = document.getElementById(slider);
  el.addEventListener("input", () => {
    document.getElementById(label).textContent = el.value;
    handTracker?.setOptions(handOptionsFromPanel());
  });
}

invertHandsBox.addEventListener("change", () => {
  handTracker?.setOptions(handOptionsFromPanel());
});

// One held gesture beats seven sliders: thumbs-up is the easiest pose to hold
// steady, so calibrating off it rotates the frame by however far this person's
// hand and camera placement sit from where the classifier assumed, and all
// four directions move together.
calibrateHandsBtn.addEventListener("click", () => {
  const res = handTracker?.calibrate("up");
  if (res == null) {
    calibrateResult.textContent = handTracker ? "nothing held to calibrate from" : "hands not running";
    return;
  }
  if (res.offset != null) {
    // The thumb offset has a slider of its own, so keep the two in step.
    const el = document.getElementById("handOffsetSlider");
    el.value = String(res.offset);
    document.getElementById("handOffsetVal").textContent = String(res.offset);
    calibrateResult.textContent = `offset ${res.offset}°`;
  } else {
    calibrateResult.textContent = `neutral ${res.neutral}, tilt ${res.tilt}°`;
  }
});

if (HANDS_PARAM === "wheel" || HANDS_PARAM === "thumb") handModeSelect.value = HANDS_PARAM;

handModeSelect.addEventListener("change", () => {
  syncHandPanelToMode();
  handTracker?.setOptions(handOptionsFromPanel());
  applyHandSteer({ move: 0, strafe: 0 }); // don't carry a held input across a scheme change
});
syncHandPanelToMode();

window.addEventListener("beforeunload", () => {
  tracker?.stop();
  handTracker?.stop();
});
