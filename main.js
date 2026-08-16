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
const settingsBtn = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");
const settingsClose = document.getElementById("settingsClose");
const controlsList = document.getElementById("controlsList");
const volumeSlider = document.getElementById("volumeSlider");
const volumeVal = document.getElementById("volumeVal");
const blinkSensSlider = document.getElementById("blinkSensSlider");
const blinkSensVal = document.getElementById("blinkSensVal");
const startChoice = document.getElementById("startChoice");
const startKeyboardBtn = document.getElementById("startKeyboardBtn");
const startHandsBtn = document.getElementById("startHandsBtn");
const restartChoice = document.getElementById("restartChoice");
const restartKeyboardBtn = document.getElementById("restartKeyboardBtn");
const restartHandsBtn = document.getElementById("restartHandsBtn");
const startPrompt = document.getElementById("startPrompt");
const startIntro = document.getElementById("startIntro");
const mobileNotice = document.getElementById("mobileNotice");
const camError = document.getElementById("camError");
const fallbackBtn = document.getElementById("fallbackBtn");
const blinkCountEl = document.getElementById("blinkCount");
const perfEl = document.getElementById("perf");
const handStateEl = document.getElementById("handState");
const handOverlay = document.getElementById("handOverlay");
const invertHandsBox = document.getElementById("invertHands");
const handStopOpenBox = document.getElementById("handStopOpen");
const calibrateHandsBtn = document.getElementById("calibrateHands");
const calibrateResult = document.getElementById("calibrateResult");
// [slider, label, key, scale] — scale converts the integer slider to the
// option's units, so the percentage sliders read as percentages.
const HAND_SLIDERS = [
  ["handHzSlider", "handHzVal", "detectHz", 1],
  ["handTiltDeadSlider", "handTiltDeadVal", "wheelTiltDead", 1],
  ["handTiltRangeSlider", "handTiltRangeVal", "wheelTiltRange", 1],
  ["handRaiseDeadSlider", "handRaiseDeadVal", "wheelRaiseDead", 0.01],
  ["handRaiseRangeSlider", "handRaiseRangeVal", "wheelRaiseRange", 0.01],
  ["handMinSpeedSlider", "handMinSpeedVal", "wheelMinSpeed", 0.01],
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
const faceHzSlider = document.getElementById("faceHzSlider");
const faceHzVal = document.getElementById("faceHzVal");

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
// The URL param no longer switches hand steering on — the start screen does
// that — but it still picks *which* scheme (`?hands=wheel` / `?hands=thumb`)
// and pre-reveals the tuning panel for a session that's going to use it.
const HANDS_PARAM = new URLSearchParams(location.search).get("hands");
let handsEnabled = false;

function revealHandPanel() {
  document.querySelectorAll(".hands-only").forEach((el) => el.classList.remove("hands-only"));
}
if (HANDS_PARAM != null) revealHandPanel();

const game = new CorridorGame(canvas);
const sound = new SoundFX();
let tracker = null;
let handTracker = null;
let handMove = 0;
let handStrafe = 0;
let lastHandReadout = "";
let lastReadoutAt = 0;
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
  restartChoice.classList.remove("hidden");
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
// The settings gear is a DOM button in this corner, occupying logical x 6..28
// (it is sized as a share of the board precisely so that stays true at any
// display size), so the wave readout starts clear of it rather than under it.
const HUD_WAVE_X = 34;
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

  hudText("WAVE", HUD_WAVE_X, 20, HUD_LABEL, HUD_MUTED, "left", "1.2px");
  hudText(String(game.wave), HUD_WAVE_X, 38, HUD_VALUE, "#e7e9ee", "left");

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

// Top centre, on the canvas, because the readout below the board is
// unreadable while playing — this game turns you when you look away from the
// screen, so a panel under it may as well not exist. The four corners are
// taken by the real HUD and the viewmodel owns the bottom centre; the top
// centre is the one free strip.
function renderPerf() {
  if (!perfText) return;
  hudCtx.shadowColor = "rgba(0,0,0,0.9)";
  hudCtx.shadowBlur = 4;
  hudCtx.font = "600 8px ui-monospace, SFMono-Regular, Menlo, monospace";
  hudCtx.fillStyle = "rgba(231,233,238,0.8)";
  hudCtx.textAlign = "center";
  hudCtx.textBaseline = "alphabetic";
  perfText.split("\n").forEach((line, i) => hudCtx.fillText(line, WIDTH / 2, 15 + i * 11));
  hudCtx.shadowBlur = 0;
}

function renderHud() {
  hudCtx.setTransform(RENDER_SCALE, 0, 0, RENDER_SCALE, 0, 0);
  hudCtx.clearRect(0, 0, WIDTH, HEIGHT);
  if (DEBUG) renderPerf();
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
    // Pause and game over share one overlay; switching scheme belongs only to
    // the latter, where a restart is about to happen anyway.
    restartChoice.classList.add("hidden");
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
}

// Player-facing settings, as distinct from the ?debug=1 tuning panel. These are
// the two knobs someone who isn't the author actually needs: a blink threshold
// calibrated for one person in one room misfires for everybody else, and there
// was previously no way to turn the sound off at all. Both persist, so a player
// who gets it right once never does it again.
const VOLUME_KEY = "corridor-volume";
const BLINK_SENS_KEY = "corridor-blink-sens";

let settingsOpen = false;

function applyVolume(pct) {
  volumeVal.textContent = String(pct);
  if (volumeSlider.value !== String(pct)) volumeSlider.value = String(pct);
  sound.setVolume(pct / 100);
  localStorage.setItem(VOLUME_KEY, String(pct));
}

// The tracker takes a *threshold* — the blendshape level an eye has to pass to
// count as shut — so a lower number fires more easily. The player-facing slider
// runs the intuitive way round, which is why this is the one place the two are
// inverted against each other. Writing the debug slider as well matters beyond
// keeping them agreeing on screen: a tracker constructed later reads its
// thresholds off that panel wholesale.
function applyBlinkSensitivity(sens, { syncDebug = true } = {}) {
  blinkSensVal.textContent = String(sens);
  if (blinkSensSlider.value !== String(sens)) blinkSensSlider.value = String(sens);
  tracker?.setThresholds({ blinkThreshold: (100 - sens) / 100 });
  if (syncDebug) {
    threshSlider.value = String(100 - sens);
    threshVal.textContent = threshSlider.value;
  }
  localStorage.setItem(BLINK_SENS_KEY, String(sens));
}

// Read at open time rather than wired to a scheme-change event: the scheme can
// be switched from the start screen, the game-over screen, or the debug panel's
// mode select, and an event hooked to only some of those goes stale silently.
function syncControlsList() {
  const mode = handsEnabled ? (handModeSelect.value === "thumb" ? "thumb" : "wheel") : "keys";
  controlsList.className = `controls-list mode-${mode}`;
}

function openSettings() {
  if (settingsOpen) return;
  settingsOpen = true;
  syncControlsList();
  // Reuse manualPause rather than inventing a second notion of "stopped" — it
  // already gates physics, audio, and input everywhere they need gating.
  if (started && game.alive) {
    manualPause = true;
    refreshPauseOverlay();
  }
  settingsPanel.classList.remove("hidden");
}

function closeSettings() {
  if (!settingsOpen) return;
  settingsOpen = false;
  settingsPanel.classList.add("hidden");
  // Deliberately leaves the game paused. Closing the panel shouldn't drop you
  // straight back into a live wave with enemies already on top of you, and in
  // hands mode you need a moment to get your hands back up first. The pause
  // overlay takes over from here and space resumes when you're ready.
  refreshPauseOverlay();
}

settingsBtn.addEventListener("click", () => (settingsOpen ? closeSettings() : openSettings()));
settingsClose.addEventListener("click", closeSettings);
// Clicking the dimmed margin outside the card closes it too.
settingsPanel.addEventListener("click", (e) => {
  if (e.target === settingsPanel) closeSettings();
});
volumeSlider.addEventListener("input", () => applyVolume(Number(volumeSlider.value)));
blinkSensSlider.addEventListener("input", () => applyBlinkSensitivity(Number(blinkSensSlider.value)));

applyVolume(Number(localStorage.getItem(VOLUME_KEY) ?? volumeSlider.value));
applyBlinkSensitivity(Number(localStorage.getItem(BLINK_SENS_KEY) ?? blinkSensSlider.value));

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

// Frame-time instrumentation. The point of this is that a stutter can't be
// diagnosed from a machine that isn't stuttering — the median tells you the
// steady rate, `worst` tells you whether single frames are being blown (which
// is what a stutter actually is, as opposed to a uniformly low rate), and the
// detection counts say which model is spending the time.
const FRAME_WINDOW = 180;
// Two different things, and conflating them is misleading now that the render
// is capped below the refresh rate: `refreshTimes` is how often the display
// asks for a frame, which only identifies the panel, and `frameTimes` is
// render-to-render, which is what the player actually sees.
const refreshTimes = [];
const frameTimes = [];
// Ignore the first stretch after starting. The hand model's download and WASM
// compile can land after the start blink and stall for over 100ms, which is a
// one-off and would otherwise dominate a figure meant to describe steady play.
const PERF_SETTLE_MS = 2500;
let perfSettleAt = 0;
let perfSampledAt = 0;
let perfFaceCount = 0;
let perfHandCount = 0;
let perfText = "";
// Never decays, unlike the rolling window. The rolling numbers are gone by the
// time you've finished flinching at a stutter, so the thing you actually want
// to read afterwards is the worst frame of the whole session.
let perfWorstEver = 0;
let perfDroppedEver = 0;
// "Dropped" has to be measured against the display, not against 60Hz. On a
// 120Hz panel a frame is 8.3ms and anything past ~12ms has already missed a
// refresh, so a fixed 20ms threshold reports a handful of drops on a machine
// that is missing most of them. Derived from the observed median.
let perfDropThreshold = 20;

function samplePerf(t, dt) {
  frameTimes.push(dt);
  if (frameTimes.length > FRAME_WINDOW) frameTimes.shift();
  // dt over 500ms is a tab switch, not a stutter.
  if (started && t > perfSettleAt && dt < 500) {
    if (dt > perfWorstEver) perfWorstEver = dt;
    if (dt > perfDropThreshold) perfDroppedEver++;
  }
  if (t - perfSampledAt < 1000 || frameTimes.length < 10) return;
  const elapsed = (t - perfSampledAt) / 1000;
  perfSampledAt = t;
  const sorted = [...frameTimes].sort((a, b) => a - b);
  const median = sorted[sorted.length >> 1];
  const face = tracker?.detectCount ?? 0;
  const hand = handTracker?.detectCount ?? 0;
  const faceRate = Math.round((face - perfFaceCount) / elapsed);
  const handRate = Math.round((hand - perfHandCount) / elapsed);
  perfFaceCount = face;
  perfHandCount = hand;
  // 1.5 refreshes: past this the frame has certainly missed one.
  perfDropThreshold = median * 1.5;
  const dropped = sorted.filter((x) => x > perfDropThreshold).length;
  const refresh = [...refreshTimes].sort((a, b) => a - b)[refreshTimes.length >> 1] || median;
  perfText =
    `fps ${Math.round(1000 / median)}   frame ${median.toFixed(1)}ms   ` +
    `worst ${sorted[sorted.length - 1].toFixed(1)}ms   ` +
    `>${perfDropThreshold.toFixed(0)}ms ${dropped}/${sorted.length}\n` +
    `session worst ${perfWorstEver.toFixed(1)}ms   dropped ${perfDroppedEver}   ` +
    `panel ${Math.round(1000 / refresh)}Hz   infer face ${faceRate}/s hand ${handRate}/s`;
  perfEl.textContent = `${Math.round(1000 / median)}`;
  // The tracker's own debug callback owns the readout when a camera is
  // running; without one, nothing else would ever write this line.
  if (!tracker && debugToggle.checked) debugReadout.textContent = perfText;
}

// Render at most ~60fps even on a 120Hz display. A 480x360 raycaster gains
// nothing from 120, and on a ProMotion panel the frame budget is 8.3ms while a
// single MediaPipe call is 5-12ms — so at 120Hz an inference call cannot fit
// beside anything. Rendering every other refresh halves how often a render
// shares a frame with one, and gives a steady 60Hz cadence instead of a
// nominal 120 punctured by misses, which is what actually reads as stutter.
const RENDER_MIN_MS = 15;
let lastRenderAt = 0;

function loop(t) {
  requestAnimationFrame(loop);
  const dt = lastFrameTime ? t - lastFrameTime : 16;
  lastFrameTime = t;
  if (DEBUG) {
    refreshTimes.push(dt);
    if (refreshTimes.length > FRAME_WINDOW) refreshTimes.shift();
  }
  if (!started) return;
  if (t - lastRenderAt < RENDER_MIN_MS) return;
  // Physics must step by the render interval, not the refresh interval, or
  // capping the rate would halve the speed of the whole game.
  const rdt = lastRenderAt ? t - lastRenderAt : 16;
  lastRenderAt = t;
  if (DEBUG) samplePerf(t, rdt);
  // Clamp so a backgrounded/throttled tab can't fast-forward the player
  // through many physics steps (and through walls) in one jump.
  if (game.alive && !manualPause) game.advance(Math.min(rdt, 100));
  renderHud();
  updateDanger();
  updateSaberHum();
  updateSmgAutoFire(rdt);
}
requestAnimationFrame((t) => {
  lastFrameTime = t;
  loop(t);
});

// Keys and hand share one axis each, and a held key wins. Summing them instead
// would let a thumb cancel a keypress out to a standstill, which is a confusing
// thing to happen to someone who has just reached for the keyboard. In hands
// mode the movement keys never fire at all (see the keydown handler), so this
// only ever resolves in the hand's favour there.
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
  // With the panel up, the keyboard belongs to it — otherwise space would
  // resume the game underneath, and the arrow keys would walk you rather than
  // move the slider you're holding.
  if (settingsOpen) {
    if (e.key === "Escape") closeSettings();
    return;
  }
  const key = e.key.toLowerCase();
  // Hands mode is hands only: walking and the weapon cycle come off the camera,
  // so the keys that duplicate them are dead. Space is the deliberate exception
  // — pause and restart have no gesture, and a player mid-run can reach the
  // spacebar without being able to find a button. Note keyup is *not* gated, so
  // a key held across a scheme switch still clears its flag.
  const handKeys = handsEnabled;
  if (!handKeys && ["arrowup", "w"].includes(key)) {
    forwardHeld = true;
    updateMoveDir();
  } else if (!handKeys && ["arrowdown", "s"].includes(key)) {
    backHeld = true;
    updateMoveDir();
  } else if (!handKeys && ["arrowleft", "a"].includes(key)) {
    strafeLeftHeld = true;
    updateStrafeDir();
  } else if (!handKeys && ["arrowright", "d"].includes(key)) {
    strafeRightHeld = true;
    updateStrafeDir();
  } else if (key === "r" && started && !handKeys) {
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
  restartChoice.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Playing this hands-free means going minutes without a keypress or a mouse
// move, which is exactly what the OS reads as "idle" — so the display sleeps
// mid-game. The Wake Lock API is the supported way to say otherwise. It is
// dropped automatically whenever the tab is hidden, so it has to be taken
// again on the way back rather than once at startup.
let wakeLock = null;

async function requestWakeLock() {
  if (wakeLock || !navigator.wakeLock) return;
  try {
    wakeLock = await navigator.wakeLock.request("screen");
    wakeLock.addEventListener("release", () => { wakeLock = null; });
  } catch (err) {
    // Unsupported, or refused because the document isn't visible. Not worth
    // surfacing: the game plays fine, the screen just dims eventually.
    wakeLock = null;
  }
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && started) requestWakeLock();
});

function beginGame() {
  if (started) return;
  started = true;
  requestWakeLock();
  awaitingStartBlink = false;
  perfSettleAt = performance.now() + PERF_SETTLE_MS;
  startOverlay.classList.add("hidden");
}

// Second beat of the start flow. The click on Start is what the browser's
// autoplay policy needs to open the AudioContext and what prompts for the
// camera; the game itself then waits for a blink. The prompt only appears
// once the tracker is actually live, so it never asks for a gesture nothing
// is watching for.
function armBlinkStart() {
  awaitingStartBlink = true;
  startChoice.classList.add("hidden");
  // The camera is granted and running by now, so the note has done its job.
  startIntro.classList.add("hidden");
  // In wheel mode the starting blink doubles as the calibration sample, so
  // the prompt has to ask for the hands too. Whatever height and tilt the
  // player is resting at when they blink becomes the neutral, which beats any
  // default: the alternative is guessing where someone sits relative to their
  // own webcam.
  if (handsEnabled && handModeSelect.value === "wheel") {
    startPrompt.textContent = "Hold your hands up, then blink to start";
  } else {
    startPrompt.textContent = "Blink to start";
  }
  startPrompt.classList.remove("hidden");
}

// Deliberately never blocks the start. Hand tracking is loaded fire-and-forget
// and can still be downloading, or can have failed outright, and neither is a
// reason to leave someone stuck on the start screen — they just get the
// default neutral and the panel's calibrate button.
function calibrateWheelFromStart() {
  if (!handTracker || handTracker.opts.mode !== "wheel") return;
  const res = handTracker.calibrate();
  // calibrate() returns null unless it actually saw two hands, so a player
  // who blinked with their hands down keeps the previous neutral rather than
  // having it set to their lap.
  if (res) calibrateResult.textContent = `neutral ${res.neutral}, tilt ${res.tilt}°`;
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
    detectHz: Number(faceHzSlider.value),
  });
  tracker.onUpdate = ({ hasFace, nx, ny }) => {
    reticleNX = nx;
    reticleNY = ny;
    game.setTurnDir(turnInputFromNX(reticleNX));
    // Only on change: this runs at the detection rate, and assigning className
    // is a style recalc whether or not the value differs.
    setStat(trackStateEl, hasFace ? "Tracking" : "Lost", hasFace ? "gaze-running" : "gaze-paused");
  };
  tracker.onBlink = () => {
    blinkCount++;
    blinkCountEl.textContent = blinkCount;
    // The blink that starts the game shouldn't also be the first shot, and in
    // wheel mode it's also the moment the player's resting hand position is
    // sampled.
    if (awaitingStartBlink) {
      calibrateWheelFromStart();
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
    setStat(mouthStateEl, mouthOpen ? "Open" : "Closed", mouthOpen ? "gaze-paused" : "gaze-running");
    if (!debugToggle.checked) return;
    // Throttled hard. This fires at the face detection rate, and rewriting a
    // multi-line textContent 24 times a second is a style recalc 24 times a
    // second — enough to show up as jitter in the very numbers it is printing.
    // Nothing here changes fast enough to be worth reading more often.
    const nowMs = performance.now();
    if (nowMs - lastReadoutAt < 250) return;
    lastReadoutAt = nowMs;
    const fmt = (n) => (n == null ? "—" : n.toFixed(1));
    debugReadout.textContent =
      `face: ${hasFace ? "yes" : "no"}\n` +
      `yaw:   ${fmt(yaw)}°  pitch: ${fmt(pitch)}°\n` +
      `aim:   ${(nx * 100).toFixed(0)}%, ${(ny * 100).toFixed(0)}%\n` +
      `blink: L ${(left * 100).toFixed(0)}%  R ${(right * 100).toFixed(0)}%  ${blinking ? "BLINK" : ""}\n` +
      `mouth: ${(jawOpen * 100).toFixed(0)}%  ${mouthOpen ? "OPEN" : ""}` +
      (lastHandReadout ? `\n${lastHandReadout}` : "") +
      (perfText ? `\n${perfText}` : "");
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
    if (handsEnabled) startHandTracking();
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
// Writes only when the value actually changed. These stats update at the
// detection rate, and both textContent and className cost a style recalc on
// every assignment regardless of whether anything differs.
function setStat(el, text, cls) {
  if (el.textContent !== text) el.textContent = text;
  const full = `value ${cls}`;
  if (el.className !== full) el.className = full;
}

function handOptionsFromPanel() {
  // Unchecked is the expected case: raw front-camera frames aren't mirrored,
  // so the sign flip is on by default. The checkbox is here because this is
  // the one thing in the classifier that can't be verified without a camera.
  const opts = {
    mirrored: !invertHandsBox.checked,
    mode: handModeSelect.value,
    wheelStopOnOpenPalms: handStopOpenBox.checked,
  };
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
  // Never let the two models' inference land in the same animation frame.
  handTracker.yieldTo = () => tracker?.lastDetectFrame;
  handTracker.onSteer = applyHandSteer;
  handTracker.onUpdate = ({ mode, hasHand, handCount, direction, steer, info, seenPct, posePct, medianAngle }) => {
    const live = steer.move !== 0 || steer.strafe !== 0;
    setStat(
      handStateEl,
      mode === "wheel"
        ? info.stopped ? "STOP" : `${handCount}h ${steer.move.toFixed(1)}/${steer.strafe.toFixed(1)}`
        : hasHand ? direction || "—" : "none",
      live ? "gaze-running" : "gaze-unknown",
    );
    // Kept separate from the face tracker's readout below rather than merged
    // into it: this updates at the hand detection rate, that one at video rate.
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
        `neutral y ${o.wheelNeutral.toFixed(3)}  tilt zero ${Math.round(o.wheelTiltOffset)}°\n` +
        `open:  ${info.openPalms}/2 palms${info.stopped ? "   STOPPED" : ""}`
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

// Both start buttons do the same thing bar the control scheme: the camera is
// needed either way, since aiming and firing are gaze and blink whichever way
// you walk.
function chooseScheme(useHands) {
  sound.resume(); // must happen synchronously in this gesture handler (autoplay policy)
  requestWakeLock(); // likewise wants a real gesture behind it on some browsers
  handsEnabled = useHands;
  if (useHands) revealHandPanel();
  startWithCamera();
}

startKeyboardBtn.addEventListener("click", (e) => { e.stopPropagation(); chooseScheme(false); });
startHandsBtn.addEventListener("click", (e) => { e.stopPropagation(); chooseScheme(true); });

// On the game-over screen the camera and audio are already running, so these
// only swap the walking scheme and restart.
async function restartWith(useHands) {
  if (useHands === handsEnabled) {
    restart();
    return;
  }
  handsEnabled = useHands;
  if (useHands) {
    revealHandPanel();
    await startHandTracking();
  } else {
    handTracker?.stop();
    handTracker = null;
    applyHandSteer({ move: 0, strafe: 0 });
  }
  restart();
}

restartKeyboardBtn.addEventListener("click", (e) => { e.stopPropagation(); restartWith(false); });
restartHandsBtn.addEventListener("click", (e) => { e.stopPropagation(); restartWith(true); });

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
// Routed through applyBlinkSensitivity so the player-facing slider follows the
// debug one; syncDebug is off to stop the two writing back at each other.
bindSlider(threshSlider, threshVal, (v) => applyBlinkSensitivity(100 - v, { syncDebug: false }));
bindSlider(debounceSlider, debounceVal, (v) => tracker?.setThresholds({ blinkDebounce: v }));
bindSlider(mouthThreshSlider, mouthThreshVal, (v) => tracker?.setThresholds({ mouthThreshold: v / 100 }));
bindSlider(mouthDebounceSlider, mouthDebounceVal, (v) => tracker?.setThresholds({ mouthDebounce: v }));
bindSlider(faceHzSlider, faceHzVal, (v) => tracker?.setThresholds({ detectHz: v }));

invertXBox.addEventListener("change", () => tracker?.setThresholds({ invertX: invertXBox.checked }));
invertYBox.addEventListener("change", () => tracker?.setThresholds({ invertY: invertYBox.checked }));

for (const [slider, label] of HAND_SLIDERS) {
  const el = document.getElementById(slider);
  el.addEventListener("input", () => {
    document.getElementById(label).textContent = el.value;
    handTracker?.setOptions(handOptionsFromPanel());
  });
}

for (const box of [invertHandsBox, handStopOpenBox]) {
  box.addEventListener("change", () => handTracker?.setOptions(handOptionsFromPanel()));
}

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

// A capability test rather than a UA sniff: a phone or tablet has no fine
// pointer, while a laptop has one even when its screen is also a touchscreen.
// A narrow window on a desktop is deliberately *not* caught — that's a real
// player who can resize, and turning them away would be worse than a cramped
// layout. With the choice row hidden there is nothing to click, so the camera
// is never requested on a device that couldn't use it anyway.
if (!window.matchMedia("(any-pointer: fine)").matches) {
  startChoice.classList.add("hidden");
  startIntro.classList.add("hidden");
  mobileNotice.classList.remove("hidden");
}

window.addEventListener("beforeunload", () => {
  tracker?.stop();
  handTracker?.stop();
});
