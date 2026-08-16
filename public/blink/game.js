const WIDTH = 480;
const HEIGHT = 360;
// The board is displayed at up to 960px wide, so the canvas backing store is
// rendered at RENDER_SCALE times the logical size and every draw call runs
// under a matching base transform. That keeps every coordinate in this file —
// viewmodel offsets, blade length, sprite math — in the 480x360 space it was
// authored in, while the picture stays sharp at twice the size. Rays are still
// cast one per logical column; on flat-shaded walls the 2px column width is
// invisible, and it keeps the per-column work where it was.
const RENDER_SCALE = 2;
const STEP_MS = 16; // fixed physics sub-step, for deterministic/testable ticking

const FOV = (66 * Math.PI) / 180;
const MAX_VIEW_DIST = 20;

// The level is one picture. Geometry and every placement are read out of it,
// so changing the map means editing this block and nothing else — the four
// separate coordinate arrays this replaced all silently assumed one grid.
//   #  wall            .  floor
//   P  player start    e  enemy spawn
//   a  ammo pickup     S  SMG pickup     H  heal pad
//
// Deliberately asymmetric: a big open arena filling the east where you get
// flanked, irregular alcoves down the west wall, a one-door room at
// top-centre that can only be approached from the south, and an open sweep
// along the southern edge for the one long sightline. Validate any edit with
// unreachableFloorTiles() — it must come back empty.
const LAYOUT = [
  "####################",
  "#.e.#.eHe.e.e..e...#",
  "#...#...........ae.#",
  "#.###....####......#",
  "#.a..e.e.#.S#...e..#",
  "#.####...#..#...##.#",
  "#.e..#...#.##...##e#",
  "##..e#..e......e...#",
  "#....#.e..###.a....#",
  "#.####....#.#......#",
  "#.P....e..#.#.e##..#",
  "#..###....#.#..##..#",
  "#.e#.#.....e.......#",
  "#..#.#....####...e.#",
  "#....e.a..e...e....#",
  "####################",
];
// 24 `e` markers against LATE_WAVE_MAX_ENEMIES of 16. The nearest-but-safe
// selection can only do its job if it has candidates to reject — with barely
// more points than enemies a late wave takes almost all of them, distant ones
// included, and the pacing benefit disappears. A 16-enemy wave already reaches
// 15.8 units out, so this margin is thin: add markers before adding enemies.

const MAP_W = LAYOUT[0].length;
const MAP_H = LAYOUT.length;

// Every non-'#' cell is walkable; the letters are placements as well as floor.
function readLayout(mark) {
  const out = [];
  LAYOUT.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) if (row[x] === mark) out.push([x + 0.5, y + 0.5]);
  });
  return out;
}

const PLAYER_RADIUS = 0.2;
const MOVE_SPEED = 2.2; // units/s
const TURN_SPEED = 2.0; // rad/s
const PLAYER_MAX_HP = 100;
const PLAYER_INVULN_MS = 800;

const ENEMY_HP = 2;
const ENEMY_SPEED = 0.6; // units/s
const ENEMY_CONTACT_RANGE = 0.6;
const ENEMY_DAMAGE = 15;
const ENEMY_SCORE = 100;
const HIT_FLASH_MS = 150;
const FIRE_FLASH_MS = 120;
const DEATH_ANIM_MS = 250; // kills fade/shrink out over this long instead of vanishing instantly
const SABER_SWING_MS = 260;
// How long a swing roots the player in place. Slightly longer than the swing
// animation so the commitment outlasts the visual and reads as a cost rather
// than as a hitch — see the note in _step.
const SABER_MOVE_LOCK_MS = 320;
// Phase boundaries within the swing, as fractions of SABER_SWING_MS: wind up
// until the first, slash until the second, recover after. The slash is the
// short middle slice on purpose — that's what makes it snap.
const SABER_WINDUP_T = 0.28;
const SABER_RECOVER_T = 0.5;
// Blade angles, radians, clockwise from straight up. Rest leans right so the
// blade never sits over the reticle; the slash runs from up-right, over the
// top, down to the left — roughly 135 degrees of arc, which is what makes it
// read as a cut across the whole view rather than a poke.
const SABER_REST_ANGLE = 0.42;
const SABER_WINDUP_ANGLE = 0.85;
const SABER_SLASH_ANGLE = -1.5;
const SABER_BLADE_LEN = 168;
// Few and widely spaced on purpose. Nine tightly-spaced samples fused into a
// single continuous lit arc, which is what a real saber smear looks like and
// is exactly why it didn't belong next to a pistol drawn as two rectangles.
const SABER_TRAIL_SAMPLES = 3;
const SABER_TRAIL_STEP = 0.05; // in swing-fraction; see the note in _drawSaberViewmodel

const ENEMY_SPAWNS = readLayout("e");
// Nothing spawns inside this radius. It matters more than it looks because
// the selection below prefers the *nearest* safe points, so this figure is
// effectively where enemies appear, not just a floor. At the old 3.5 a runner
// was on you in 3.4s and a watcher in 2.7s, which is what made new waves feel
// like they materialised on top of you.
//
// It trades against pacing: 3.5 -> 12s average walk, 6 -> 15s, 8 -> 18s. Past
// about 6 the map also starts running out of spawn points outside the radius
// (12 remain at 6u, only 5 at 8u), and once there are fewer points than
// enemies the wave doubles up on them.
const MIN_SPAWN_DIST_FROM_PLAYER = 6;
const PLAYER_START = readLayout("P")[0];
const PLAYER_START_ANGLE = 0;

const SABER_RANGE = 1.0;

// Melee is a weapon slot rather than something you can do with the pistol
// out, so it sits in the same cycle as the guns and swings on the same blink
// that fires them. It is the floor of the cycle: it never runs out, which is
// what lets a dry pistol fall through to it instead of leaving the player
// holding an empty gun with no attack at all.
const WEAPON_CYCLE = ["pistol", "smg", "saber"];

// Enemies push each other apart below this range. Without it they have no
// mutual collision at all, so a wave converging from different spawns stacks
// into one spot and reads as a single thick sprite.
const ENEMY_SEPARATION_DIST = 0.55;
const ENEMY_SEPARATION_STRENGTH = 0.8;

// How fast an enemy's heading eases toward the direction it wants, per
// 16ms step. Both steering sources change target abruptly, so without this
// the movement snaps — see _moveEnemy.
const ENEMY_TURN_SMOOTHING = 0.15;

// Enemies are pushed off any wall face they come within WALL_CLEARANCE of.
// Nothing else keeps them clear: the flow field aims at tile centres and the
// per-axis collision lets them slide along a surface, so without this they
// spent 12.4% of every journey within 0.3u of a wall. These values cut that
// to 5.3%.
//
// It is a genuine trade, not a free win. The push fights the flow field's
// tile-centre targets, so raising it makes enemies weave: turn-direction
// reversals go from 0.12 per unit travelled at zero, to 0.41 here, to 0.58 at
// clearance 0.55 / strength 1.1 (which would get hugging down to 3.4%). This
// setting sits at the knee — past it, weaving grows faster than hugging falls.
//
// Making the *route* prefer open tiles instead, by weighting the flood by how
// many walls each tile touches, was tried and reverted: it matched the plain
// flood to within noise at every force setting, because the route only picks
// which tiles to cross and the scraping happens within a tile.
const WALL_CLEARANCE = 0.45;
const WALL_AVOID_STRENGTH = 0.7;

// Straggler catch-up. An enemy that's a long way off speeds up, so the tail of
// a wave isn't spent waiting on one slow walker crossing the map — the wave
// can't roll over until the last one is dead, and at ENEMY_SPEED a long route
// is most of half a minute.
//
// The distance is read out of the flow field, which already holds each tile's
// step count from the player and is therefore both free and wall-aware.
// Straight-line distance would be the wrong measure: an enemy one tile away
// through a wall is not close, and would get no help at all when it needs it
// most.
//
// Measured over the 18 spawn markers at least MIN_SPAWN_DIST_FROM_PLAYER from
// the player's own spawn, walking a `normal` enemy in from each: average
// arrival 21.4s -> 17.4s, worst 29.7s -> 20.7s. The curve keeps paying past
// this point but only just — 0.25/tile capped at 4x buys another 1.9s off the
// worst case, for a normal enemy moving at 2.4 u/s, which is the thing
// CATCHUP_SPEED_CAP exists to forbid.
//
// Nothing starts until 8 tiles out, which is roughly where sightlines stop
// carrying: 6 of the 24 markers get no boost at all at spawn, and every
// enemy's boost has tapered back to nothing by the time it's fighting you.
// That's the point — this is a fix for the tail of a wave, not a difficulty
// increase.
const CATCHUP_START_TILES = 8;
const CATCHUP_PER_TILE = 0.15;
const CATCHUP_MAX_MULT = 3;
// Hard ceiling in u/s on what catch-up can produce, against MOVE_SPEED's 2.2.
// No amount of distance may let anything outrun the player, or backing off to
// reload stops working. It also means the fast types opt out on their own:
// a watcher's 1.98 base is already above this, so it never gets any.
const CATCHUP_SPEED_CAP = 1.8;

const ORTHO4 = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const NEIGHBORS8 = [
  [1, 0], [-1, 0], [0, 1], [0, -1],
  [1, 1], [1, -1], [-1, 1], [-1, -1],
];

const STARTING_AMMO = 10;
const AMMO_PER_PICKUP = 6;
const MAX_AMMO_CAP = 20;
const PICKUP_RANGE = 0.5;
// Crates come back at the start of each wave and not on a timer, so a wave's
// ammo is a fixed budget: STARTING_AMMO once, then AMMO_PER_PICKUP per crate
// per wave, against MAX_AMMO_CAP carried at any moment. The 15s respawn this
// replaced meant a long wave could be farmed off one crate indefinitely, which
// made running dry a matter of patience rather than a decision. It also puts
// the ammo crates on the same footing as the heal pad and the SMG, neither of
// which respawns on a timer either.
const AMMO_SPAWNS = readLayout("a");

const RANGED_PREFERRED_DIST = 3.5; // shooters try to hover around this range
const RANGED_FIRE_RANGE = 6;
const RANGED_FIRE_INTERVAL_MS = 1800;
const RANGED_DAMAGE = 10;
const PROJECTILE_SPEED = 4; // units/s
const PROJECTILE_HIT_RANGE = 0.3;
const RANGED_FIRE_FLASH_MS = 120;

// A findable, temporary weapon: fires automatically for as long as the
// player's eyes stay closed (reuses the same continuous blink signal the
// watcher enemy freeze check runs on), draining a small dedicated ammo pool
// fast enough that it's naturally spent within a few seconds.
// The pickup appears on wave 4 and every second wave after (4, 6, 8, ...) and
// then waits on the floor until it's taken — it does not expire on the waves
// in between. Unlike the heal pad, which is a periodic event that comes and
// goes whether or not it was used, this is a findable object.
const SMG_UNLOCK_WAVE = 4;
const SMG_WAVE_INTERVAL = 2;
const SMG_SPAWN = readLayout("S")[0];
const SMG_AMMO_ON_PICKUP = 30;
const SMG_FIRE_INTERVAL_MS = 90;

function smgWaveHasPickup(wave) {
  return wave >= SMG_UNLOCK_WAVE && (wave - SMG_UNLOCK_WAVE) % SMG_WAVE_INTERVAL === 0;
}

// A healing pad that shows up only on every HEAL_WAVE_INTERVAL-th wave.
// Standing on it builds a charge over HEAL_CHARGE_MS, after which it ticks
// HEAL_TICK_HP every HEAL_TICK_MS — but a blink drops the charge straight
// back to zero rather than pausing it. Since firing is a blink, holding a
// heal means holding fire for the whole time. Its remaining budget is also
// capped in proportion to the wave's surviving enemies, so the pad is at its
// most generous exactly while the wave is at its most dangerous.
const HEAL_WAVE_INTERVAL = 3; // appears on waves 3, 6, 9, ...
// Sited by map-wide visibility, not by eye: the centre of this map is walled
// off by the middle pillar, so anything "central" is invisible from most of
// the floor and the player never finds it. This tile sits on the open
// northern lane (row y=2 is unobstructed end to end) and is in line of sight
// from the player's spawn corner. Revisit when the map layouts land.
const HEAL_SPAWN = readLayout("H")[0];
const HEAL_BUDGET_HP = 30;
const HEAL_RANGE = 0.9;
const HEAL_CHARGE_MS = 1000;
const HEAL_TICK_MS = 300;
const HEAL_TICK_HP = 1;
const HEAL_TINT_MAX_ALPHA = 0.22;

const WATCHER_BLINK_DASH_MULT = 3.6; // extra speed multiplier while lunging specifically during a blink window

// Once the head count has capped (wave 14) nothing else about a wave changes,
// so enemies get slightly faster from there instead. It is capped twice over on
// purpose: the multiplier tops out at WAVE_SPEED_MAX_MULT, and WAVE_SPEED_ABS_CAP
// then holds the result under the player's MOVE_SPEED of 2.2 whatever the
// multiplier says. That second cap is not belt and braces — the watcher's 1.98
// base is deliberately just short of the player's pace, and the percentage alone
// would put it past them (2.28) by wave 20, which is the one thing the speed
// rules here have always forbidden. The blink dash keeps the *unscaled* base:
// at 7.13 u/s it needs no help, and compounding the two was never intended.
const WAVE_SPEED_START = 14;
const WAVE_SPEED_PER_WAVE = 0.025;
const WAVE_SPEED_MAX_MULT = 1.15; // reached at wave 20
const WAVE_SPEED_ABS_CAP = 2.1;
const WATCHER_MAX_FROZEN_MS = 4000; // anti-softlock escape valve — see the frozen-time check in _step

// Per-type stats/visuals. Unlocked progressively by wave (see ENEMY_UNLOCKS)
// so variety ramps up instead of hitting the player all at once.
const ENEMY_TYPES = {
  normal: { hp: ENEMY_HP, speed: ENEMY_SPEED, color: "#f87171", flashColor: "#fecaca", score: ENEMY_SCORE },
  runner: { hp: ENEMY_HP, speed: ENEMY_SPEED * 1.7, color: "#fb923c", flashColor: "#fed7aa", score: 130, sizeMult: 0.85 },
  headless: { hp: ENEMY_HP, speed: ENEMY_SPEED, color: "#a78bfa", flashColor: "#ddd6fe", score: 150, headless: true },
  watcher: { hp: ENEMY_HP, speed: ENEMY_SPEED * 3.3, color: "#38bdf8", flashColor: "#e0f2fe", score: 150 },
  ranged: { hp: ENEMY_HP, speed: ENEMY_SPEED * 0.7, color: "#34d399", flashColor: "#a7f3d0", score: 150 },
  // Three stacked circles, one per remaining hit point, so the silhouette is
  // its own health bar and it visibly shortens as you land shots. Every hit
  // takes exactly one segment wherever it lands — a headshot can't skip the
  // stack — so it's the only enemy the pistol needs three rounds for.
  triple: { hp: 3, speed: ENEMY_SPEED * 0.8, color: "#f472b6", flashColor: "#fbcfe8", score: 220, segments: 3 },
};

const ENEMY_UNLOCKS = [
  { wave: 3, type: "runner" },
  { wave: 4, type: "headless" },
  { wave: 5, type: "watcher" },
  { wave: 6, type: "ranged" },
  { wave: 8, type: "triple" },
];

function poolForWave(wave) {
  const pool = ["normal"];
  for (const u of ENEMY_UNLOCKS) if (wave >= u.wave) pool.push(u.type);
  return pool;
}

// Waves 1-6 are hand-authored; 7 onward are generated. Each entry is a head
// count plus optional guarantees — `min` forces at least that many of a type,
// `max` caps one, `exclude` keeps a type out of the wave entirely. Whatever
// the quotas leave over is filled at random from the unlocked types.
//
// This replaced a flat `min(3 + wave, 10)` count with a uniform random draw
// per enemy, which meant composition was pure chance: about one wave in nine
// contained none of a given type, and one in six was half a single type.
const WAVE_TABLE = [
  { count: 4 },
  { count: 6 },
  { count: 6, min: { runner: 2 }, max: { runner: 4 } },
  { count: 8, min: { runner: 2, headless: 2 } },
  { count: 8, min: { watcher: 3 } },
  { count: 8, min: { ranged: 3 }, exclude: ["watcher"] },
];

// Past the table the count keeps climbing and the shape cycles through themes,
// so late waves stay distinguishable from one another instead of collapsing
// back into an even mix of everything.
const LATE_WAVE_THEMES = [
  { min: { runner: 4 } },                                        // rush
  { min: { ranged: 3, headless: 2 }, exclude: ["runner"] },      // gauntlet
  { min: { watcher: 4 }, exclude: ["ranged"] },                  // stalkers
  { min: { triple: 3, headless: 2 } },                           // bulwark
  { min: { runner: 2, watcher: 2, ranged: 2 } },                 // everything
];
const LATE_WAVE_MAX_ENEMIES = 16;

// The head count caps out at wave 14, which is where every other axis of a wave
// stops changing too — the pool has been complete since 8 and the five themes
// just repeat. From DEEP_WAVE_START the rotation gains a sixth entry, which
// matters twice over: it is the pairing the mid-game table deliberately forbids
// (stalkers excludes ranged), and six themes against five means the deep cycle
// no longer lines up with the wave numbers the old one used.
//
// Watchers and ranged together pull in opposite directions. A watcher only
// advances while you are *not* looking at it, so it has to be held in view; a
// ranged enemy fires down exactly the sightline you are holding to do that.
const DEEP_WAVE_START = 15;
const DEEP_WAVE_THEMES = [{ min: { watcher: 3, ranged: 3 } }, ...LATE_WAVE_THEMES];

function specForWave(wave) {
  if (wave <= WAVE_TABLE.length) return WAVE_TABLE[wave - 1];
  const over = wave - WAVE_TABLE.length;
  const last = WAVE_TABLE[WAVE_TABLE.length - 1].count;
  // The deep cycle is indexed from its own start rather than continuing the
  // mid-game count. That puts the new theme on wave 15 itself — the wave the
  // head count caps on, and so the exact point the game used to go flat — and
  // avoids handing wave 16 a repeat of wave 14's watcher theme, which is what
  // carrying the index across gave us.
  const deep = wave >= DEEP_WAVE_START;
  const themes = deep ? DEEP_WAVE_THEMES : LATE_WAVE_THEMES;
  const idx = deep ? wave - DEEP_WAVE_START : over - 1;
  return {
    count: Math.min(LATE_WAVE_MAX_ENEMIES, last + over),
    ...themes[idx % themes.length],
  };
}

// Returns the list of enemy types for a wave, already shuffled so quota types
// don't systematically claim the nearest spawn points.
function composeWave(wave) {
  const spec = specForWave(wave);
  const excluded = new Set(spec.exclude || []);
  const allowed = poolForWave(wave).filter((t) => !excluded.has(t));
  const counts = {};
  for (const t of allowed) counts[t] = 0;

  // Quotas first, skipping any naming a type this wave hasn't unlocked yet —
  // a theme can reference `triple` before wave 8 and simply not apply it.
  let placed = 0;
  for (const [type, n] of Object.entries(spec.min || {})) {
    if (!(type in counts)) continue;
    const take = Math.min(n, spec.count - placed);
    counts[type] += take;
    placed += take;
  }

  const maxes = spec.max || {};
  while (placed < spec.count) {
    const candidates = allowed.filter((t) => counts[t] < (maxes[t] ?? Infinity));
    if (!candidates.length) break; // every allowed type is capped out
    counts[candidates[Math.floor(Math.random() * candidates.length)]]++;
    placed++;
  }

  const out = [];
  for (const [t, n] of Object.entries(counts)) for (let i = 0; i < n; i++) out.push(t);
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function buildMap() {
  return LAYOUT.map((row) => [...row].map((c) => (c === "#" ? 1 : 0)));
}

// Classic DDA grid-stepping raycast (Lodev-style). Returns the perpendicular
// wall distance (already fisheye-corrected by construction) and which axis
// the ray crossed last, for basic side-shading.
function castRay(px, py, angle, grid) {
  const dirX = Math.cos(angle);
  const dirY = Math.sin(angle);
  let mapX = Math.floor(px);
  let mapY = Math.floor(py);
  const deltaDistX = dirX === 0 ? 1e30 : Math.abs(1 / dirX);
  const deltaDistY = dirY === 0 ? 1e30 : Math.abs(1 / dirY);
  let stepX;
  let stepY;
  let sideDistX;
  let sideDistY;
  if (dirX < 0) {
    stepX = -1;
    sideDistX = (px - mapX) * deltaDistX;
  } else {
    stepX = 1;
    sideDistX = (mapX + 1 - px) * deltaDistX;
  }
  if (dirY < 0) {
    stepY = -1;
    sideDistY = (py - mapY) * deltaDistY;
  } else {
    stepY = 1;
    sideDistY = (mapY + 1 - py) * deltaDistY;
  }
  let side = 0;
  let hit = false;
  let guard = 0;
  while (!hit && guard++ < 256) {
    if (sideDistX < sideDistY) {
      sideDistX += deltaDistX;
      mapX += stepX;
      side = 0;
    } else {
      sideDistY += deltaDistY;
      mapY += stepY;
      side = 1;
    }
    if (mapX < 0 || mapX >= MAP_W || mapY < 0 || mapY >= MAP_H) {
      hit = true;
      break;
    }
    if (grid[mapY][mapX] > 0) hit = true;
  }
  const perpDist = side === 0 ? (mapX - px + (1 - stepX) / 2) / dirX : (mapY - py + (1 - stepY) / 2) / dirY;
  return { dist: Math.max(perpDist, 0.05), side };
}

function normalizeAngle(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

export class CorridorGame {
  constructor(canvas) {
    this.canvas = canvas;
    canvas.width = WIDTH * RENDER_SCALE;
    canvas.height = HEIGHT * RENDER_SCALE;
    this.ctx = canvas.getContext("2d");
    this.onScoreChange = null;
    this.onHealthChange = null;
    this.onWaveChange = null;
    this.onAmmoChange = null;
    this.onGameOver = null;
    this.onShoot = null;
    this.onEmptyFire = null;
    this.onSaberSwing = null;
    this.onPlayerHurt = null;
    this.onEnemyShoot = null;
    this.onWeaponChange = null;
    this.onSmgShoot = null;
    this.onAmmoPickup = null;
    this.reset();
  }

  reset() {
    this.grid = buildMap();
    this.player = { x: PLAYER_START[0], y: PLAYER_START[1], angle: PLAYER_START_ANGLE };
    this.wave = 1;
    this.score = 0;
    this.health = PLAYER_MAX_HP;
    this.ammo = STARTING_AMMO;
    this.pickups = AMMO_SPAWNS.map(([x, y]) => ({ x, y, active: true }));
    this.projectiles = [];
    this.weapon = "pistol";
    this.smgAmmo = 0;
    this.smgPickup = { x: SMG_SPAWN[0], y: SMG_SPAWN[1], active: false };
    this.healPad = { x: HEAL_SPAWN[0], y: HEAL_SPAWN[1], active: false, budget: 0, charge: 0, tickTimer: 0 };
    this._waveEnemyCount = 0;
    this._healPulse = 0;
    this._flowDist = new Int32Array(MAP_W * MAP_H);
    this._flowTileX = -1;
    this._flowTileY = -1;
    this._rebuildFlowField();
    this.hitFlash = 0;
    this.fireFlash = 0;
    this.saberRemaining = 0;
    this.saberMoveLock = 0;
    this._saberIdle = 0;
    this.moveDir = 0;
    this.strafeDir = 0;
    this.turnDir = 0;
    this.playerBlinking = false;
    this.alive = true;
    this._acc = 0;
    this.depthBuffer = new Array(WIDTH).fill(MAX_VIEW_DIST);
    this._wallSide = new Array(WIDTH).fill(0);
    this._projections = [];
    this._pickupProjections = [];
    this._projectileProjections = [];
    this._smgPickupProjection = null;
    this._healPadProjection = null;
    this._spawnWave();
    this._notifyScore();
    this._notifyAmmo();
    this._notifyHealth();
    this._notifyWave();
    this._notifyWeapon();
    this._raycastAndProject();
    this.draw();
  }

  _spawnWave() {
    // Every crate is back on the floor for the new wave, drained or not.
    for (const pk of this.pickups) pk.active = true;

    const types = composeWave(this.wave);
    const count = types.length;
    // Closest spawn points that are still a safe distance away, rather than
    // the farthest. Farthest-first was redundant: the
    // MIN_SPAWN_DIST_FROM_PLAYER push-out below is what actually stops an
    // enemy appearing on top of the player. On this map it also cost real
    // pacing — it produced 19s average and 36s worst-case walks, versus 13s
    // and 25s for the same map picking nearest-but-safe, which is where the
    // original 16x12 grid already sat. Falling back to farthest-first covers
    // the degenerate case where every spawn point is inside the safe radius.
    const byDist = ENEMY_SPAWNS.map((s) => ({
      s,
      dist: Math.hypot(s[0] - this.player.x, s[1] - this.player.y),
    }));
    const safe = byDist.filter((c) => c.dist >= MIN_SPAWN_DIST_FROM_PLAYER);
    const orderedSpawns = (
      safe.length ? safe.sort((a, b) => a.dist - b.dist) : byDist.sort((a, b) => b.dist - a.dist)
    ).map((c) => c.s);
    this.enemies = [];
    for (let i = 0; i < count; i++) {
      const base = orderedSpawns[i % orderedSpawns.length];
      const jitter = i >= orderedSpawns.length ? (Math.random() - 0.5) * 0.6 : 0;
      let x = base[0] + jitter;
      let y = base[1] + jitter;
      const dist = Math.hypot(x - this.player.x, y - this.player.y);
      if (dist > 1e-4 && dist < MIN_SPAWN_DIST_FROM_PLAYER) {
        // Push straight out along the player->point line — but only take it
        // if that landing spot is still open floor. Pushing far enough (a
        // huge scale factor when the player stands right on a spawn point)
        // can otherwise shove the point through a nearby wall or off the
        // map edge, embedding the enemy in a wall tile it can never step out
        // of again (per-step movement is far smaller than a whole tile), so
        // it sits there alive forever and the wave can never clear.
        const scale = MIN_SPAWN_DIST_FROM_PLAYER / dist;
        const pushedX = this.player.x + (x - this.player.x) * scale;
        const pushedY = this.player.y + (y - this.player.y) * scale;
        if (!this._isWall(pushedX, pushedY)) {
          x = pushedX;
          y = pushedY;
        }
      }
      // Last-resort net: never let an enemy spawn embedded in a wall at all
      // (also covers jitter alone landing on a wall), falling back to the
      // untouched, hand-placed point, which is always valid floor.
      if (this._isWall(x, y)) {
        x = base[0];
        y = base[1];
      }
      this.enemies.push(this._makeEnemy(types[i], x, y));
    }
    this._waveEnemyCount = count; // denominator for the heal pad's kill-count decay

    // The pad is a periodic event rather than a fixture: it arrives with a
    // fresh budget every HEAL_WAVE_INTERVAL waves and is gone again on the
    // next one, whether or not it was drained.
    const padWave = this.wave % HEAL_WAVE_INTERVAL === 0;
    this.healPad.active = padWave;
    this.healPad.budget = padWave ? HEAL_BUDGET_HP : 0;
    this.healPad.charge = 0;
    this.healPad.tickTimer = 0;

    // The SMG is *not* the same shape as the pad. It arrives on its own waves
    // and then stays put until someone actually picks it up — only
    // _stepSmgPickup clears it. This used to assign the flag outright, which
    // meant an untouched SMG silently vanished off the floor on every
    // intervening wave (spawned on 4, gone on 5), so a player who saw it but
    // couldn't safely reach it that wave lost it for nothing.
    //
    // It spawns whether or not the player is already holding one, so its waves
    // are a restock as well as a first pickup — 30 rounds empty in a few
    // seconds of held fire, and having kept the gun shouldn't be what locks you
    // out of the next magazine.
    if (smgWaveHasPickup(this.wave)) this.smgPickup.active = true;
  }

  _makeEnemy(type, x, y) {
    const info = ENEMY_TYPES[type] || ENEMY_TYPES.normal;
    return {
      type, x, y, alive: true, hp: info.hp, hitFlash: 0, deathAnim: 0, frozen: false, fireFlash: 0,
      frozenMs: 0, blinkDash: false,
      // Stable per-enemy direction, used only to break a dead heat between
      // exactly coincident enemies — see _separation.
      nudgeAngle: Math.random() * Math.PI * 2,
      dirX: 0, dirY: 0, // current eased heading; 0,0 means "not yet moving"
      fireCooldown: type === "ranged" ? RANGED_FIRE_INTERVAL_MS * (0.4 + Math.random() * 0.6) : 0,
    };
  }

  // ?debug convenience: jump straight to the next wave, for reaching
  // wave-gated content (the heal pad on 3/6/9, the SMG from 4) without having
  // to clear every wave below it by hand first.
  skipWave() {
    if (!this.alive) return;
    this._nextWave();
  }

  _nextWave() {
    this.wave++;
    this._spawnWave();
    this._notifyWave();
  }

  setMoveDir(dir) {
    this.moveDir = Math.max(-1, Math.min(1, dir));
  }

  setStrafeDir(dir) {
    this.strafeDir = Math.max(-1, Math.min(1, dir));
  }

  setTurnDir(dir) {
    this.turnDir = Math.max(-1, Math.min(1, dir));
  }

  setPlayerBlinking(blinking) {
    this.playerBlinking = blinking;
  }

  // A weapon is selectable only while it can actually attack. The SMG needs
  // leftover smgAmmo from a pickup — it doesn't grant a fresh magazine, just
  // lets the player hold onto and ration what they're already carrying
  // instead of it always firing the moment their eyes close. A dry pistol is
  // skipped for the same reason: cycling onto it could only ever produce
  // empty clicks. The saber is always available.
  _weaponAvailable(weapon) {
    if (weapon === "saber") return true;
    if (weapon === "smg") return this.smgAmmo > 0;
    return this.ammo > 0;
  }

  // Manual weapon swap: steps to the next slot that can attack, wrapping.
  toggleWeapon() {
    if (!this.alive) return;
    const from = WEAPON_CYCLE.indexOf(this.weapon);
    for (let i = 1; i < WEAPON_CYCLE.length; i++) {
      const next = WEAPON_CYCLE[(from + i) % WEAPON_CYCLE.length];
      if (this._weaponAvailable(next)) {
        this.equipWeapon(next);
        return;
      }
    }
  }

  equipWeapon(weapon) {
    if (!this.alive || weapon === this.weapon || !this._weaponAvailable(weapon)) return;
    this.weapon = weapon;
    this._notifyWeapon();
    this._notifyAmmo();
  }

  // Running a weapon dry drops the player straight onto the next thing that
  // can still attack rather than leaving them holding an empty gun mid-wave.
  // The SMG hands back to the pistol if there's anything left in it; a dry
  // pistol falls through to the saber, which never runs out. Callers notify
  // ammo themselves afterwards, so the HUD ends up showing whichever pool is
  // actually active rather than the one that just hit zero.
  _autoSwitchIfDry() {
    if (this._weaponAvailable(this.weapon)) return;
    this.weapon = this.weapon === "smg" && this.ammo > 0 ? "pistol" : "saber";
    this._notifyWeapon();
  }

  advance(dtMs) {
    if (!this.alive) return;
    this._acc += dtMs;
    while (this._acc >= STEP_MS) {
      this._acc -= STEP_MS;
      this._step(STEP_MS);
      if (!this.alive) break;
    }
    this._raycastAndProject();
    this.draw();
  }

  _step(stepMs) {
    const dt = stepMs / 1000;
    this._healPulse += stepMs;
    if (this.hitFlash > 0) this.hitFlash -= stepMs;
    if (this.fireFlash > 0) this.fireFlash -= stepMs;
    if (this.saberRemaining > 0) this.saberRemaining -= stepMs;
    if (this.saberMoveLock > 0) this.saberMoveLock -= stepMs;
    this._saberIdle += stepMs; // drives the blade's idle sway

    this.player.angle += this.turnDir * TURN_SPEED * dt;
    // Swinging roots the player for SABER_MOVE_LOCK_MS: the saber one-shots
    // anything it reaches, so committing to it has to cost something, and
    // standing still inside melee range with a wave closing is that cost.
    // Turning is deliberately exempt — it's gaze-driven, so freezing it would
    // fight the aim system rather than read as a commitment.
    const rooted = this.saberMoveLock > 0;
    const strafeAngle = this.player.angle + Math.PI / 2; // + = strafe right, independent of turning
    const moveDir = rooted ? 0 : this.moveDir;
    const strafeDir = rooted ? 0 : this.strafeDir;
    const dx =
      Math.cos(this.player.angle) * moveDir * MOVE_SPEED * dt +
      Math.cos(strafeAngle) * strafeDir * MOVE_SPEED * dt;
    const dy =
      Math.sin(this.player.angle) * moveDir * MOVE_SPEED * dt +
      Math.sin(strafeAngle) * strafeDir * MOVE_SPEED * dt;
    this._moveWithCollision(dx, dy);

    // Only reflood when the player actually changes tile.
    const ptx = Math.floor(this.player.x);
    const pty = Math.floor(this.player.y);
    if (ptx !== this._flowTileX || pty !== this._flowTileY) {
      this._flowTileX = ptx;
      this._flowTileY = pty;
      this._rebuildFlowField();
    }

    let aliveCount = 0;
    let anyDying = false;
    for (const en of this.enemies) {
      if (en.deathAnim > 0) {
        en.deathAnim -= stepMs;
        if (en.deathAnim > 0) anyDying = true;
      }
      if (!en.alive) continue;
      aliveCount++;
      if (en.hitFlash > 0) en.hitFlash -= stepMs;

      const typeInfo = ENEMY_TYPES[en.type] || ENEMY_TYPES.normal;
      const ddx = this.player.x - en.x;
      const ddy = this.player.y - en.y;
      const dist = Math.hypot(ddx, ddy);

      // A watcher only holds still while it's actually visible to the player
      // (on screen and not hidden behind a wall) AND they aren't mid-blink —
      // since firing needs a blink, every shot gives every watcher on the
      // map a free step forward, and it lunges extra fast to make the most
      // of that window (WATCHER_BLINK_DASH_MULT below).
      en.blinkDash = false;
      if (en.type === "watcher") {
        const watched = this._isWatched(en);
        const rawFrozen = watched && !this.playerBlinking;
        en.frozenMs = rawFrozen ? (en.frozenMs || 0) + stepMs : 0;
        // Escape valve: never held frozen indefinitely, even if the tracker
        // drops face detection for a stretch (which reads as "never
        // blinking") — that combination must not be able to soft-lock a wave.
        const escapedByTimeout = rawFrozen && en.frozenMs > WATCHER_MAX_FROZEN_MS;
        en.frozen = rawFrozen && !escapedByTimeout;
        en.blinkDash = !en.frozen && watched && this.playerBlinking;
      } else {
        en.frozen = false;
      }

      if (en.type === "ranged") {
        this._stepRanged(en, dt, stepMs, typeInfo, ddx, ddy, dist);
      } else if (!en.frozen && dist > 0.05) {
        // The two never compound. Only a watcher blink-dashes, and a watcher
        // is already faster than CATCHUP_SPEED_CAP, so it takes no catch-up in
        // the first place — but writing it as a branch keeps that true even if
        // a slower type is given a dash later.
        const speed = en.blinkDash
          ? typeInfo.speed * WATCHER_BLINK_DASH_MULT
          : this._catchupSpeed(en, this._baseSpeed(typeInfo));
        const { x: sx, y: sy } = this._chaseDir(en, ddx, ddy, dist);
        this._moveEnemy(en, sx, sy, speed, dt);
      }

      if (dist < ENEMY_CONTACT_RANGE && this.hitFlash <= 0) {
        this._hurtPlayer(ENEMY_DAMAGE);
      }
    }
    // Must run before the wave rollover below, or the last kill of a wave
    // would apply this wave's (now zero) alive count to the *next* wave's
    // freshly-spawned pad and empty it on arrival.
    this._stepHealPad(stepMs, aliveCount);

    if (aliveCount === 0 && !anyDying) this._nextWave();

    this._stepProjectiles(dt, stepMs);

    for (const pk of this.pickups) {
      if (!pk.active) continue;
      const dist = Math.hypot(pk.x - this.player.x, pk.y - this.player.y);
      if (dist < PICKUP_RANGE) {
        pk.active = false;
        this.ammo = Math.min(MAX_AMMO_CAP, this.ammo + AMMO_PER_PICKUP);
        this.onAmmoPickup?.();
        // Deliberately does *not* switch you off the saber — walking over a
        // crate refills the pistol, it doesn't decide for you which weapon
        // you're holding. Cycle back with R when you want it.
        this._notifyAmmo();
      }
    }

    this._stepSmgPickup();
  }

  _stepHealPad(stepMs, aliveCount) {
    const pad = this.healPad;
    if (!pad.active) return;

    // Clearing the wave burns the pad down with it, so healing is plentiful
    // while the room is still full and worthless once it's nearly empty —
    // the opposite of the "kill everything, then top up in safety" pattern.
    if (this._waveEnemyCount > 0) {
      const cap = HEAL_BUDGET_HP * (aliveCount / this._waveEnemyCount);
      if (pad.budget > cap) pad.budget = cap;
    }
    if (pad.budget <= 0) {
      pad.active = false;
      pad.charge = 0;
      pad.tickTimer = 0;
      return;
    }

    // A blink zeroes the charge outright instead of pausing it, so any shot
    // fired costs the player the full HEAL_CHARGE_MS wind-up again.
    const dist = Math.hypot(pad.x - this.player.x, pad.y - this.player.y);
    if (dist >= HEAL_RANGE || this.playerBlinking || this.health >= PLAYER_MAX_HP) {
      pad.charge = 0;
      pad.tickTimer = 0;
      return;
    }

    pad.charge = Math.min(HEAL_CHARGE_MS, pad.charge + stepMs);
    if (pad.charge < HEAL_CHARGE_MS) return;

    pad.tickTimer += stepMs;
    while (pad.tickTimer >= HEAL_TICK_MS && pad.budget > 0 && this.health < PLAYER_MAX_HP) {
      pad.tickTimer -= HEAL_TICK_MS;
      const amount = Math.min(HEAL_TICK_HP, pad.budget, PLAYER_MAX_HP - this.health);
      this.health += amount;
      pad.budget -= amount;
      this._notifyHealth();
    }
  }

  _stepSmgPickup() {
    const pk = this.smgPickup;
    if (!pk.active) return;
    const dist = Math.hypot(pk.x - this.player.x, pk.y - this.player.y);
    if (dist < PICKUP_RANGE) {
      pk.active = false; // gone until the next wave that carries one
      // Taken while already holding one, this is a restock: the magazine is
      // set rather than added to, so it can't be banked past
      // SMG_AMMO_ON_PICKUP by collecting on a full clip.
      this.weapon = "smg";
      this.smgAmmo = SMG_AMMO_ON_PICKUP;
      this._notifyWeapon();
      this._notifyAmmo();
    }
  }

  // Ranged enemies hover near RANGED_PREFERRED_DIST rather than closing to
  // melee, and fire a projectile down a clear line of sight on a cooldown.
  _stepRanged(en, dt, stepMs, typeInfo, ddx, ddy, dist) {
    if (en.fireFlash > 0) en.fireFlash -= stepMs;
    if (dist > RANGED_PREFERRED_DIST + 0.4) {
      // Closing in: route around geometry like anything else, so a shooter
      // stuck behind a pillar walks out to find its angle instead of pressing
      // into the wall until the player happens to wander into view.
      const { x: sx, y: sy } = this._chaseDir(en, ddx, ddy, dist);
      this._moveEnemy(en, sx, sy, this._catchupSpeed(en, this._baseSpeed(typeInfo)), dt);
    } else if (dist < RANGED_PREFERRED_DIST - 0.4) {
      // No catch-up on the retreat: it's backing off from something already
      // close, which is the one case the boost has no business touching. The
      // wave scaling still applies — a faster shooter backs off faster too.
      this._moveEnemy(en, -ddx / dist, -ddy / dist, this._baseSpeed(typeInfo), dt);
    }

    en.fireCooldown -= stepMs;
    if (en.fireCooldown <= 0 && dist > 0.05 && dist <= RANGED_FIRE_RANGE) {
      const angle = Math.atan2(ddy, ddx);
      if (this._hasLineOfSight(en.x, en.y, this.player.x, this.player.y, dist)) {
        this.projectiles.push({ x: en.x, y: en.y, angle, life: 4000 });
        en.fireFlash = RANGED_FIRE_FLASH_MS;
        en.fireCooldown = RANGED_FIRE_INTERVAL_MS;
        this.onEnemyShoot?.();
      } else {
        en.fireCooldown = 200; // no line of sight yet — recheck soon rather than waiting a full cycle
      }
    }
  }

  _stepProjectiles(dt, stepMs) {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const pr = this.projectiles[i];
      const nx = pr.x + Math.cos(pr.angle) * PROJECTILE_SPEED * dt;
      const ny = pr.y + Math.sin(pr.angle) * PROJECTILE_SPEED * dt;
      if (this._isWall(nx, ny)) {
        this.projectiles.splice(i, 1);
        continue;
      }
      pr.x = nx;
      pr.y = ny;
      pr.life -= stepMs;
      if (pr.life <= 0) {
        this.projectiles.splice(i, 1);
        continue;
      }
      const dist = Math.hypot(pr.x - this.player.x, pr.y - this.player.y);
      if (dist < PROJECTILE_HIT_RANGE && this.hitFlash <= 0) {
        this.projectiles.splice(i, 1);
        this._hurtPlayer(RANGED_DAMAGE);
      }
    }
  }

  // Shared by enemy/pickup/projectile projection and the watcher gaze check:
  // relative angle -> screen-space x, plus the same onScreen cutoff used
  // throughout (a low distance floor so point-blank targets don't vanish).
  _relativeScreenX(ex, ey) {
    const ddx = ex - this.player.x;
    const ddy = ey - this.player.y;
    const dist = Math.hypot(ddx, ddy);
    const rel = normalizeAngle(Math.atan2(ddy, ddx) - this.player.angle);
    const onScreen = Math.abs(rel) < FOV * 0.75 && dist > 0.02;
    const screenX = (0.5 + rel / FOV) * WIDTH;
    return { screenX, onScreen, dist };
  }

  // True if any part of the enemy is actually rendered on screen right now:
  // within the real (not the wider hit-test-forgiving) FOV column range, and
  // not hidden behind a wall/pillar — checked against the depth buffer, not
  // just angle, so a watcher stuck behind cover never wrongly freezes.
  _isWatched(en) {
    const { screenX, dist } = this._relativeScreenX(en.x, en.y);
    if (screenX < 0 || screenX >= WIDTH || dist <= 0.02) return false;
    const col = Math.max(0, Math.min(WIDTH - 1, Math.floor(screenX)));
    return dist < this.depthBuffer[col];
  }

  // Breadth-first distance field over open floor, flooding out from the tile
  // the player is standing in. Recomputed only when they cross a tile
  // boundary, and the grid is 16x12, so the cost is irrelevant. This is what
  // replaced the old walk-straight-at-the-player steering: that had no notion
  // of a route, so any concave geometry either stalled an enemy outright (both
  // axes rejected by the wall test) or ground it along a wall face heading
  // away from the player.
  _rebuildFlowField() {
    const dist = this._flowDist;
    dist.fill(-1);
    const px = Math.floor(this.player.x);
    const py = Math.floor(this.player.y);
    if (px < 0 || px >= MAP_W || py < 0 || py >= MAP_H) return;
    if (this.grid[py][px] > 0) return;

    const start = py * MAP_W + px;
    dist[start] = 0;
    const queue = [start];
    for (let head = 0; head < queue.length; head++) {
      const idx = queue[head];
      const cx = idx % MAP_W;
      const cy = (idx - cx) / MAP_W;
      const next = dist[idx] + 1;
      for (const [ox, oy] of ORTHO4) {
        const nx = cx + ox;
        const ny = cy + oy;
        if (nx < 0 || nx >= MAP_W || ny < 0 || ny >= MAP_H) continue;
        const nIdx = ny * MAP_W + nx;
        if (dist[nIdx] !== -1 || this.grid[ny][nx] > 0) continue;
        dist[nIdx] = next;
        queue.push(nIdx);
      }
    }
  }

  // Gradient descent over that field. Diagonals are considered so the result
  // doesn't read as four-directional, but a diagonal is only taken when both
  // of its orthogonal neighbours are open, so nothing ever clips a corner.
  _flowDir(ex, ey) {
    const cx = Math.floor(ex);
    const cy = Math.floor(ey);
    if (cx < 0 || cx >= MAP_W || cy < 0 || cy >= MAP_H) return null;
    const here = this._flowDist[cy * MAP_W + cx];
    if (here <= 0) return null; // unreachable, or already in the player's tile

    let bestD = here;
    let bx = 0;
    let by = 0;
    for (const [ox, oy] of NEIGHBORS8) {
      const nx = cx + ox;
      const ny = cy + oy;
      if (nx < 0 || nx >= MAP_W || ny < 0 || ny >= MAP_H) continue;
      if (this.grid[ny][nx] > 0) continue;
      if (ox !== 0 && oy !== 0 && (this.grid[cy][nx] > 0 || this.grid[ny][cx] > 0)) continue;
      const d = this._flowDist[ny * MAP_W + nx];
      if (d === -1 || d >= bestD) continue;
      bestD = d;
      bx = nx;
      by = ny;
    }
    if (bestD === here) return null;

    // Steer at the centre of the chosen tile rather than snapping to the grid.
    const vx = bx + 0.5 - ex;
    const vy = by + 0.5 - ey;
    const len = Math.hypot(vx, vy);
    return len < 1e-6 ? null : { x: vx / len, y: vy / len };
  }

  // Walk speed adjusted for how far this enemy still has to go. Reads the flow
  // field's step count directly, so an enemy that's close as the crow flies but
  // a long way round the geometry still gets the help.
  // A type's walking speed for the current wave. Flat until WAVE_SPEED_START,
  // then ramped and hard-capped — see the constants for why there are two caps.
  _baseSpeed(typeInfo) {
    if (this.wave <= WAVE_SPEED_START) return typeInfo.speed;
    const mult = Math.min(
      WAVE_SPEED_MAX_MULT,
      1 + (this.wave - WAVE_SPEED_START) * WAVE_SPEED_PER_WAVE,
    );
    return Math.min(WAVE_SPEED_ABS_CAP, typeInfo.speed * mult);
  }

  _catchupSpeed(en, base) {
    if (base >= CATCHUP_SPEED_CAP) return base;
    const cx = Math.floor(en.x);
    const cy = Math.floor(en.y);
    if (cx < 0 || cx >= MAP_W || cy < 0 || cy >= MAP_H) return base;
    // -1 is a wall or an unreachable pocket, and falls through this same test.
    const tiles = this._flowDist[cy * MAP_W + cx];
    if (tiles <= CATCHUP_START_TILES) return base;
    const mult = Math.min(CATCHUP_MAX_MULT, 1 + (tiles - CATCHUP_START_TILES) * CATCHUP_PER_TILE);
    return Math.min(CATCHUP_SPEED_CAP, base * mult);
  }

  // Every open floor tile the player currently can't be reached from. Should
  // always be empty on a well-formed map — a non-empty result means the
  // layout has a sealed pocket, which would strand any enemy spawned in it.
  unreachableFloorTiles() {
    const out = [];
    for (let y = 0; y < MAP_H; y++) {
      for (let x = 0; x < MAP_W; x++) {
        if (this.grid[y][x] === 0 && this._flowDist[y * MAP_W + x] === -1) out.push([x, y]);
      }
    }
    return out;
  }

  // Straight at the player whenever the line is clear, so open-floor chases
  // keep the direct, un-gridded look they always had. The flow field only
  // takes over when the direct line is blocked — which is exactly where the
  // old steering used to stall or grind along a wall.
  _chaseDir(en, ddx, ddy, dist) {
    if (!this._hasLineOfSight(en.x, en.y, this.player.x, this.player.y, dist)) {
      const flow = this._flowDir(en.x, en.y);
      if (flow) return flow;
    }
    return { x: ddx / dist, y: ddy / dist };
  }

  // Applies a steering direction plus the separation push, then commits each
  // axis independently so a blocked axis still allows sliding along the wall.
  _moveEnemy(en, sx, sy, speed, dt) {
    const sep = this._separation(en);
    const avoid = this._wallAvoidance(en);
    let vx = sx + sep.x + avoid.x;
    let vy = sy + sep.y + avoid.y;
    const len = Math.hypot(vx, vy);
    if (len < 1e-6) return;
    vx /= len;
    vy /= len;

    // Ease the heading toward what's wanted rather than snapping to it. Both
    // steering sources change target discontinuously — line of sight flickers
    // on and off as an enemy rounds a corner, flipping it between chasing
    // directly and following the field, and the field itself re-aims at a new
    // tile centre on every boundary crossing. Snapping made both visible as a
    // hard turn mid-stride.
    if (en.dirX === 0 && en.dirY === 0) {
      en.dirX = vx;
      en.dirY = vy;
    } else {
      en.dirX += (vx - en.dirX) * ENEMY_TURN_SMOOTHING;
      en.dirY += (vy - en.dirY) * ENEMY_TURN_SMOOTHING;
      const dl = Math.hypot(en.dirX, en.dirY);
      if (dl < 1e-6) {
        en.dirX = vx;
        en.dirY = vy;
      } else {
        en.dirX /= dl;
        en.dirY /= dl;
      }
    }

    const nxp = en.x + en.dirX * speed * dt;
    const nyp = en.y + en.dirY * speed * dt;
    if (!this._isWall(nxp, en.y)) en.x = nxp;
    if (!this._isWall(en.x, nyp)) en.y = nyp;
  }

  _hasLineOfSight(fromX, fromY, toX, toY, dist) {
    if (dist <= 0.05) return true;
    const los = castRay(fromX, fromY, Math.atan2(toY - fromY, toX - fromX), this.grid);
    return los.dist >= dist - 0.15;
  }

  // Small mutual push so a converging wave spreads into a group rather than
  // collapsing onto one point. Capped at ten enemies a wave, so O(n^2) here
  // is nothing.
  _separation(en) {
    let sx = 0;
    let sy = 0;
    for (const other of this.enemies) {
      if (other === en || !other.alive) continue;
      const ox = en.x - other.x;
      const oy = en.y - other.y;
      const d = Math.hypot(ox, oy);
      if (d >= ENEMY_SEPARATION_DIST) continue;
      if (d < 1e-4) {
        // Exactly coincident, so there is no direction to push along. It has
        // to be each enemy's *own* stable angle: pushing them all the same
        // way (the obvious fix, and what this used to do) moves them
        // identically and they stay welded together forever.
        sx += Math.cos(en.nudgeAngle);
        sy += Math.sin(en.nudgeAngle);
        continue;
      }
      const push = (ENEMY_SEPARATION_DIST - d) / ENEMY_SEPARATION_DIST;
      sx += (ox / d) * push;
      sy += (oy / d) * push;
    }
    return { x: sx * ENEMY_SEPARATION_STRENGTH, y: sy * ENEMY_SEPARATION_STRENGTH };
  }

  // Push away from any wall surface within WALL_CLEARANCE. Measures to the
  // nearest point on each neighbouring wall tile's square rather than to its
  // centre, so outside corners repel diagonally instead of only along an axis.
  _wallAvoidance(en) {
    let sx = 0;
    let sy = 0;
    const cx = Math.floor(en.x);
    const cy = Math.floor(en.y);
    for (let oy = -1; oy <= 1; oy++) {
      for (let ox = -1; ox <= 1; ox++) {
        const tx = cx + ox;
        const ty = cy + oy;
        if (!this._isWall(tx + 0.5, ty + 0.5)) continue;
        const nx = Math.max(tx, Math.min(en.x, tx + 1));
        const ny = Math.max(ty, Math.min(en.y, ty + 1));
        const dx = en.x - nx;
        const dy = en.y - ny;
        const d = Math.hypot(dx, dy);
        // d of 0 means it's inside the tile, which only the collision test
        // can get it out of; pushing on a zero-length vector does nothing.
        if (d < 1e-4 || d >= WALL_CLEARANCE) continue;
        const push = (WALL_CLEARANCE - d) / WALL_CLEARANCE;
        sx += (dx / d) * push;
        sy += (dy / d) * push;
      }
    }
    return { x: sx * WALL_AVOID_STRENGTH, y: sy * WALL_AVOID_STRENGTH };
  }

  _isWall(gx, gy) {
    const ix = Math.floor(gx);
    const iy = Math.floor(gy);
    if (ix < 0 || ix >= MAP_W || iy < 0 || iy >= MAP_H) return true;
    return this.grid[iy][ix] > 0;
  }

  _moveWithCollision(dx, dy) {
    const r = PLAYER_RADIUS;
    const p = this.player;
    const nx = p.x + dx;
    if (!this._isWall(nx + Math.sign(dx) * r, p.y)) p.x = nx;
    const ny = p.y + dy;
    if (!this._isWall(p.x, ny + Math.sign(dy) * r)) p.y = ny;
  }

  _hurtPlayer(dmg) {
    this.health = Math.max(0, this.health - dmg);
    this.hitFlash = PLAYER_INVULN_MS;
    this._notifyHealth();
    this.onPlayerHurt?.();
    if (this.health <= 0) this._die();
  }

  _die() {
    this.alive = false;
    this.onGameOver?.(this.score);
  }

  _notifyScore() {
    this.onScoreChange?.(this.score);
  }

  _notifyHealth() {
    this.onHealthChange?.(this.health);
  }

  _notifyWave() {
    this.onWaveChange?.(this.wave);
  }

  _notifyAmmo() {
    this.onAmmoChange?.(this.weapon === "smg" ? this.smgAmmo : this.ammo);
  }

  _notifyWeapon() {
    this.onWeaponChange?.(this.weapon);
  }

  _raycastAndProject() {
    for (let x = 0; x < WIDTH; x++) {
      const rayAngle = this.player.angle - FOV / 2 + (x / WIDTH) * FOV;
      const { dist, side } = castRay(this.player.x, this.player.y, rayAngle, this.grid);
      this.depthBuffer[x] = dist;
      this._wallSide[x] = side;
    }

    this._projections = [];
    for (const en of this.enemies) {
      if (!en.alive && en.deathAnim <= 0) continue;
      // A low onScreen distance floor (not 0.15+) matters here: enemies
      // close to melee range regularly, and melee/gun both need to
      // still be able to hit them point-blank instead of them vanishing.
      const { screenX, onScreen, dist } = this._relativeScreenX(en.x, en.y);
      const sizeMult = (ENEMY_TYPES[en.type] || ENEMY_TYPES.normal).sizeMult || 1;
      const height = Math.min(HEIGHT * 2, (HEIGHT / Math.max(dist, 0.1)) * 0.7) * sizeMult;
      const width = height * 0.55;
      const wallColHeight = HEIGHT / Math.max(dist, 0.1);
      const bottom = HEIGHT / 2 + wallColHeight / 2;
      const info = ENEMY_TYPES[en.type] || ENEMY_TYPES.normal;
      if (info.segments) {
        // A column of circles standing on the floor, one per remaining hit
        // point. Height tracks hp, so the hittable box shrinks with it and a
        // nearly-dead one is a genuinely smaller target.
        const segR = width * 0.5;
        const segs = Math.max(1, Math.min(info.segments, en.hp));
        const stackH = segR * 2 * segs;
        this._projections.push({
          ref: en, dist, screenX, width, height: stackH, bottom,
          top: bottom - stackH, left: screenX - segR, right: screenX + segR, onScreen,
          bodyTop: bottom - stackH, segR, segments: segs,
          // No head region at all — every hit takes one segment wherever it
          // lands, so the headshot test must never pass.
          headR: segR, headTop: Infinity, headBottom: -Infinity,
        });
        continue;
      }
      const bodyTop = bottom - height * 0.62;
      const headR = width * 0.42;
      const headCenterY = bodyTop - headR * 0.9;
      this._projections.push({
        ref: en, dist, screenX, width, height, bottom,
        top: bottom - height, left: screenX - width / 2, right: screenX + width / 2, onScreen,
        bodyTop, headR, headTop: headCenterY - headR, headBottom: headCenterY + headR,
      });
    }

    this._pickupProjections = [];
    for (const pk of this.pickups) {
      if (!pk.active) continue;
      const { screenX, onScreen, dist } = this._relativeScreenX(pk.x, pk.y);
      const height = Math.min(HEIGHT, (HEIGHT / Math.max(dist, 0.1)) * 0.28);
      const width = height * 1.3;
      const wallColHeight = HEIGHT / Math.max(dist, 0.1);
      const bottom = HEIGHT / 2 + wallColHeight / 2;
      this._pickupProjections.push({
        ref: pk, dist, screenX, width, height, bottom,
        top: bottom - height, left: screenX - width / 2, right: screenX + width / 2, onScreen,
      });
    }

    this._projectileProjections = [];
    for (const pr of this.projectiles) {
      const { screenX, onScreen, dist } = this._relativeScreenX(pr.x, pr.y);
      if (!onScreen) continue;
      const height = Math.min(HEIGHT * 0.15, (HEIGHT / Math.max(dist, 0.1)) * 0.08);
      const width = height;
      const wallColHeight = HEIGHT / Math.max(dist, 0.1);
      const bottom = HEIGHT / 2 + wallColHeight * 0.42; // roughly chest height, where they're fired from
      this._projectileProjections.push({
        ref: pr, dist, screenX, width, height, bottom,
        top: bottom - height, left: screenX - width / 2, right: screenX + width / 2, onScreen,
      });
    }

    this._smgPickupProjection = null;
    if (this.smgPickup.active) {
      const { screenX, onScreen, dist } = this._relativeScreenX(this.smgPickup.x, this.smgPickup.y);
      const height = Math.min(HEIGHT, (HEIGHT / Math.max(dist, 0.1)) * 0.3);
      const width = height * 1.6;
      const wallColHeight = HEIGHT / Math.max(dist, 0.1);
      const bottom = HEIGHT / 2 + wallColHeight / 2;
      this._smgPickupProjection = {
        ref: this.smgPickup, dist, screenX, width, height, bottom,
        top: bottom - height, left: screenX - width / 2, right: screenX + width / 2, onScreen,
      };
    }

    // Bottom-anchored, because it's a floor plate. The close-range blowup is
    // handled by clamping the height outright rather than by scaling the
    // whole sprite down — the first version used a tiny 0.18 factor for that,
    // which kept it off the screen up close at the cost of rendering it about
    // 11px tall at across-the-room distance, where it simply could not be
    // seen. Scale generously, then cap.
    this._healPadProjection = null;
    if (this.healPad.active) {
      const { screenX, onScreen, dist } = this._relativeScreenX(this.healPad.x, this.healPad.y);
      const height = Math.min(HEIGHT * 0.28, (HEIGHT / Math.max(dist, 0.1)) * 0.34);
      const width = height * 2.2;
      const wallColHeight = HEIGHT / Math.max(dist, 0.1);
      const bottom = HEIGHT / 2 + wallColHeight / 2;
      this._healPadProjection = {
        ref: this.healPad, dist, screenX, width, height, bottom,
        top: bottom - height, left: screenX - width / 2, right: screenX + width / 2, onScreen,
      };
    }
  }

  _hitTestAt(nx, ny) {
    const screenX = nx * WIDTH;
    const screenY = ny * HEIGHT;
    const col = Math.max(0, Math.min(WIDTH - 1, Math.floor(screenX)));
    const wallDist = this.depthBuffer[col] ?? Infinity;
    let best = null;
    let bestDist = Infinity;
    for (const p of this._projections) {
      if (!p.onScreen || !p.ref.alive) continue;
      if (screenX < p.left || screenX > p.right || screenY < p.top || screenY > p.bottom) continue;
      if (p.dist >= wallDist) continue;
      if (p.dist < bestDist) {
        bestDist = p.dist;
        best = p;
      }
    }
    if (!best) return null;
    const isHeadless = (ENEMY_TYPES[best.ref.type] || ENEMY_TYPES.normal).headless;
    const headshot = !isHeadless && screenY >= best.headTop && screenY <= best.headBottom;
    return { proj: best, headshot };
  }

  fireAt(nx, ny) {
    if (!this.alive) return false;
    // Single entry point for "attack with whatever is equipped", whichever
    // control path called it — melee is a weapon slot now, so the same
    // blink that fires a gun swings it, and no caller has to know which.
    if (this.weapon === "saber") return this.trySwing();
    const usingSmg = this.weapon === "smg";
    if (usingSmg ? this.smgAmmo <= 0 : this.ammo <= 0) {
      this.onEmptyFire?.();
      return false;
    }
    if (usingSmg) this.smgAmmo--;
    else this.ammo--;
    if (usingSmg) this.onSmgShoot?.();
    else this.onShoot?.();
    this.fireFlash = FIRE_FLASH_MS;
    this._autoSwitchIfDry();
    // Notified after the possible switch above, so the HUD ends up showing
    // whichever pool is actually active now, not a stale just-hit-zero count.
    this._notifyAmmo();
    const hit = this._hitTestAt(nx, ny);
    if (!hit) return false;
    const en = hit.proj.ref;
    // A segmented enemy loses exactly one segment per hit; nothing one-shots
    // it except a saber swing, which bypasses hp entirely.
    if (hit.headshot && !(ENEMY_TYPES[en.type] || ENEMY_TYPES.normal).segments) en.hp = 0;
    else en.hp -= 1;
    en.hitFlash = HIT_FLASH_MS;
    if (en.hp <= 0) {
      en.alive = false;
      en.deathAnim = DEATH_ANIM_MS;
      this.score += (ENEMY_TYPES[en.type] || ENEMY_TYPES.normal).score;
      this._notifyScore();
    }
    return true;
  }

  peekTarget(nx, ny) {
    if (!this.alive) return { hit: false, headshot: false };
    const hit = this._hitTestAt(nx, ny);
    return { hit: !!hit, headshot: !!hit?.headshot };
  }

  // Melee: doesn't use ammo or need precise aim, just the nearest visible,
  // unoccluded enemy within short range. Only swings while the saber is the
  // equipped weapon — it is a slot you switch to, not something available
  // with a gun in your hands.
  trySwing() {
    if (!this.alive || this.weapon !== "saber") return false;
    this.saberRemaining = SABER_SWING_MS; // swing plays whether or not it connects
    this.saberMoveLock = SABER_MOVE_LOCK_MS; // and roots you whether or not it connects, too
    this.onSaberSwing?.();
    let best = null;
    let bestDist = Infinity;
    for (const p of this._projections) {
      if (!p.onScreen || !p.ref.alive || p.dist > SABER_RANGE) continue;
      const col = Math.max(0, Math.min(WIDTH - 1, Math.round(p.screenX)));
      if (p.dist >= this.depthBuffer[col]) continue;
      if (p.dist < bestDist) {
        bestDist = p.dist;
        best = p;
      }
    }
    if (!best) return false;
    best.ref.alive = false;
    best.ref.deathAnim = DEATH_ANIM_MS;
    best.ref.hitFlash = HIT_FLASH_MS;
    this.score += (ENEMY_TYPES[best.ref.type] || ENEMY_TYPES.normal).score;
    this._notifyScore();
    return true;
  }

  // Two-handed energy blade, gripped at the bottom centre of the screen.
  // Centred is *correct* here rather than a compromise: two hands on one hilt
  // belong in the middle, which a single fist never did — that pose was
  // anatomically wrong and read as one arm growing out of the sternum.
  //
  // The hilt and hands are flat blocky shapes with hard outlines, matching
  // the pistol's rectangles. Only the blade breaks that, and it has to: it is
  // the one lit object in the game, so it is drawn additively in layers
  // instead of filled.
  _drawSaberViewmodel() {
    const { ctx } = this;
    const swinging = this.saberRemaining > 0;
    const t = swinging ? 1 - this.saberRemaining / SABER_SWING_MS : 0; // 0 -> 1 across the swing

    // Arc smear: a few blade-only copies from earlier in the slash. These are
    // now widely spaced and few, so they read as a handful of stamped blades
    // rather than a continuous lit arc — the smear used nine tightly-spaced
    // additive samples to fuse into one glowing sweep, which was exactly the
    // look that made the saber sit apart from everything else.
    if (swinging && t > SABER_WINDUP_T && t < SABER_RECOVER_T + 0.12) {
      for (let i = SABER_TRAIL_SAMPLES; i >= 1; i--) {
        const back = t - i * SABER_TRAIL_STEP;
        if (back <= SABER_WINDUP_T) continue;
        ctx.save();
        ctx.globalAlpha = 0.3 * (1 - i / (SABER_TRAIL_SAMPLES + 1));
        this._drawSaber(this._saberPose(back, true), true);
        ctx.restore();
      }
    }
    this._drawSaber(this._saberPose(t, swinging), false);
  }

  // Pure rotation about the grip, unlike the fist's scale-based thrust: a
  // blade on a stick sweeps, and the pivot sits near the bottom edge so a
  // modest rotation throws the tip right across the view. Three phases —
  // wind up, slash, recover — with the slash as the short middle slice, so
  // it snaps rather than drifting.
  _saberPose(t, swinging) {
    const x = WIDTH / 2;
    const y = HEIGHT - 26;
    // Idle sway. A perfectly still blade reads as a decal pasted on the
    // screen; this is small enough not to disturb aim and is the only thing
    // that says the weapon is powered.
    const idle = Math.sin(this._saberIdle / 240) * 0.016;
    const rest = SABER_REST_ANGLE + idle;
    if (!swinging) return { x, y, angle: rest };
    if (t < SABER_WINDUP_T) {
      const u = t / SABER_WINDUP_T;
      return { x, y, angle: rest + u * (SABER_WINDUP_ANGLE - rest) };
    }
    if (t < SABER_RECOVER_T) {
      // Ease-out: leaves fast, decelerates into the end of the arc.
      const u = (t - SABER_WINDUP_T) / (SABER_RECOVER_T - SABER_WINDUP_T);
      const e = 1 - Math.pow(1 - u, 3);
      return { x, y, angle: SABER_WINDUP_ANGLE + e * (SABER_SLASH_ANGLE - SABER_WINDUP_ANGLE) };
    }
    // Recover: smoothstep back to rest, slower than the slash so the strike
    // keeps its snap and the return doesn't read as a second swing.
    const u = (t - SABER_RECOVER_T) / (1 - SABER_RECOVER_T);
    const e = u * u * (3 - 2 * u);
    return { x, y, angle: SABER_SLASH_ANGLE + e * (rest - SABER_SLASH_ANGLE) };
  }

  // Local space: origin at the grip, blade running up -y. Ghost copies draw
  // the blade alone — the hands don't smear, they're attached to the player.
  //
  // Deliberately crude, and this is a correction rather than a shortcut. The
  // saber used to be the only lit object in the game: an additively-blended
  // bloom with a nine-sample smeared arc, hands with knuckle rows and thumb
  // blocks. It looked good and it looked like it came from a different game,
  // because the pistol two slots along is literally two grey rectangles and
  // the enemies are flat circles on flat torsos. Everything here is flat fill
  // plus a dark outline, in the same register as the rest.
  _drawSaber({ x, y, angle }, ghost) {
    const { ctx } = this;
    const box = (bx, by, w, h, fill) => {
      ctx.fillStyle = fill;
      ctx.fillRect(bx, by, w, h);
      ctx.strokeRect(bx, by, w, h);
    };

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.strokeStyle = "rgba(10,12,16,0.85)";
    ctx.lineWidth = 2;

    if (!ghost) {
      box(-8, -54, 16, 84, "#2b3038"); // hilt
      box(-11, -58, 22, 12, "#5b6577"); // emitter
      box(-10, 22, 20, 10, "#4b5563"); // pommel
      // Two flat blocks for the hands. No knuckles, no thumb: at this size
      // and against a pistol made of two rectangles, the detail was the part
      // that looked out of place.
      for (const hy of [-34, -4]) box(-24, hy, 48, 24, "#3f4855");
    }

    // Blade: two flat bars, a wide body and a narrow core, no additive
    // blending. It reads as a coloured blade rather than a light source,
    // which is the point.
    const top = -58 - SABER_BLADE_LEN;
    box(-9, top, 18, SABER_BLADE_LEN + 8, "#22d3ee");
    ctx.fillStyle = "#cffafe";
    ctx.fillRect(-3, top + 2, 6, SABER_BLADE_LEN + 4);

    ctx.restore();
  }

  draw() {
    const { ctx } = this;
    // Re-established every frame rather than once at init, so a stray
    // unbalanced save/restore anywhere below can't leave the whole picture
    // drawing at the wrong scale from then on.
    ctx.setTransform(RENDER_SCALE, 0, 0, RENDER_SCALE, 0, 0);
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    ctx.fillStyle = "#14161d";
    ctx.fillRect(0, 0, WIDTH, HEIGHT / 2);
    ctx.fillStyle = "#1c1f28";
    ctx.fillRect(0, HEIGHT / 2, WIDTH, HEIGHT / 2);

    for (let x = 0; x < WIDTH; x++) {
      const dist = this.depthBuffer[x];
      const side = this._wallSide[x];
      const wallH = Math.min(HEIGHT * 3, HEIGHT / Math.max(dist, 0.05));
      const top = HEIGHT / 2 - wallH / 2;
      const bright = Math.max(0.15, 1 - dist / MAX_VIEW_DIST) * (side === 1 ? 0.72 : 1);
      const r = Math.floor(90 * bright);
      const g = Math.floor(112 * bright);
      const b = Math.floor(145 * bright);
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(x, top, 1, wallH);
    }

    const billboards = [
      ...this._projections.map((p) => ({ p, kind: "enemy" })),
      ...this._pickupProjections.map((p) => ({ p, kind: "ammo" })),
      ...this._projectileProjections.map((p) => ({ p, kind: "projectile" })),
      ...(this._smgPickupProjection ? [{ p: this._smgPickupProjection, kind: "smg" }] : []),
      ...(this._healPadProjection ? [{ p: this._healPadProjection, kind: "heal" }] : []),
    ].sort((a, b) => b.p.dist - a.p.dist);

    for (const { p, kind } of billboards) {
      if (!p.onScreen) continue;
      const left = Math.max(0, Math.floor(p.left));
      const right = Math.min(WIDTH - 1, Math.ceil(p.right));
      if (left > right) continue;

      // Clip to the screen columns where this sprite is nearer than the
      // wall, so enemies/pickups correctly disappear behind pillars/walls
      // instead of drawing straight through them.
      ctx.save();
      ctx.beginPath();
      let anyVisible = false;
      let x = left;
      while (x <= right) {
        if (p.dist < this.depthBuffer[x]) {
          const runStart = x;
          while (x <= right && p.dist < this.depthBuffer[x]) x++;
          ctx.rect(runStart, 0, x - runStart, HEIGHT);
          anyVisible = true;
        } else {
          x++;
        }
      }
      if (!anyVisible) {
        ctx.restore();
        continue;
      }
      ctx.clip();

      if (kind === "enemy") {
        // Kills fade + sink over DEATH_ANIM_MS instead of vanishing the
        // instant they die, so an insta-kill (headshot/saber) still reads as
        // an actual death rather than the target just disappearing.
        const dying = !p.ref.alive;
        const fadeT = dying ? Math.max(0, p.ref.deathAnim / DEATH_ANIM_MS) : 1;
        const sink = dying ? (1 - fadeT) * 24 : 0;
        ctx.globalAlpha = fadeT;
        const typeInfo = ENEMY_TYPES[p.ref.type] || ENEMY_TYPES.normal;
        const flashing = p.ref.hitFlash > 0;
        let bodyColor = flashing ? typeInfo.flashColor : typeInfo.color;
        if (p.ref.type === "watcher" && p.ref.frozen && !flashing) bodyColor = "#f0f9ff";
        ctx.fillStyle = bodyColor;

        if (p.segments) {
          // Stack of circles, bottom-up, one per remaining hit point. Slightly
          // under-sized against the segment pitch so the joins read as
          // separate heads rather than one blurred column.
          for (let s = 0; s < p.segments; s++) {
            const cy = p.bottom + sink - p.segR * (2 * s + 1);
            ctx.beginPath();
            ctx.arc(p.screenX, cy, p.segR * 0.9, 0, Math.PI * 2);
            ctx.fill();
          }
          // Eyes on the topmost circle only, so it reads as facing you and
          // you can see at a glance which end is the one left to shoot off.
          const topY = p.bottom + sink - p.segR * (2 * p.segments - 1);
          ctx.fillStyle = flashing ? "#be185d" : "#831843";
          const eyeDX = p.segR * 0.36;
          const eyeR = Math.max(1, p.segR * 0.17);
          ctx.beginPath();
          ctx.arc(p.screenX - eyeDX, topY, eyeR, 0, Math.PI * 2);
          ctx.arc(p.screenX + eyeDX, topY, eyeR, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
          ctx.restore();
          continue;
        }

        const bw = p.width;
        const bx = p.screenX - bw / 2;
        ctx.fillRect(bx, p.bodyTop + sink, bw, p.bottom - p.bodyTop);

        if (typeInfo.headless) {
          // No head hitbox — drawn as a dark stump so it reads as
          // deliberately headless rather than a rendering glitch.
          ctx.fillStyle = "#2e1065";
          ctx.fillRect(p.screenX - p.headR * 0.6, p.bodyTop + sink - p.headR * 0.5, p.headR * 1.2, p.headR * 0.6);
        } else {
          ctx.beginPath();
          ctx.arc(p.screenX, (p.headTop + p.headBottom) / 2 + sink, p.headR, 0, Math.PI * 2);
          ctx.fill();
          if (p.ref.type === "watcher") {
            ctx.fillStyle = p.ref.frozen ? "#0369a1" : "#0c4a6e";
            const eyeY = (p.headTop + p.headBottom) / 2 + sink;
            const eyeDX = p.headR * 0.4;
            const eyeR = Math.max(1, p.headR * 0.2);
            ctx.beginPath();
            ctx.arc(p.screenX - eyeDX, eyeY, eyeR, 0, Math.PI * 2);
            ctx.arc(p.screenX + eyeDX, eyeY, eyeR, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        if (p.ref.type === "ranged" && p.ref.fireFlash > 0) {
          ctx.fillStyle = "#fef9c3";
          ctx.beginPath();
          ctx.arc(p.screenX, p.bodyTop + sink + (p.bottom - p.bodyTop) * 0.3, p.headR * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      } else if (kind === "ammo") {
        ctx.fillStyle = "#fbbf24";
        ctx.fillRect(p.screenX - p.width / 2, p.top, p.width, p.height);
        ctx.fillStyle = "#78350f";
        ctx.fillRect(p.screenX - p.width * 0.15, p.top + p.height * 0.2, p.width * 0.3, p.height * 0.6);
      } else if (kind === "smg") {
        // A gun silhouette (barrel + grip), distinct from the amber ammo
        // crate, so it reads as a weapon to pick up rather than more ammo.
        ctx.fillStyle = "#4338ca";
        ctx.fillRect(p.screenX - p.width / 2, p.top + p.height * 0.35, p.width * 0.85, p.height * 0.28);
        ctx.fillStyle = "#c7d2fe";
        ctx.fillRect(p.screenX + p.width * 0.2, p.top + p.height * 0.4, p.width * 0.3, p.height * 0.1);
        ctx.fillStyle = "#312e81";
        ctx.fillRect(p.screenX - p.width * 0.15, p.top + p.height * 0.6, p.width * 0.22, p.height * 0.4);
      } else if (kind === "heal") {
        // Lit patch of floor with a cross marked on it, rather than an
        // upright slab. Two things carry that read: the pool is an ellipse
        // (perspective turns a ground circle into one, so it lands on the
        // floor instead of standing on it), and everything is drawn
        // additively, which makes it register as light over the walls rather
        // than as opaque paint on top of them.
        const cx = p.screenX;
        const floorY = p.bottom;
        const rx = p.width * 0.48; // stay inside the sprite's clipped columns
        const squash = 0.34; // fixed horizon, so one foreshortening ratio holds
        const pulse = 0.5 + 0.5 * Math.sin(this._healPulse / 420);
        const charge = Math.min(1, p.ref.charge / HEAL_CHARGE_MS);
        const bloom = Math.max(pulse * 0.35, charge); // idles gently, blooms as it charges

        ctx.globalCompositeOperation = "lighter";

        // Tapering column of light. Without it the pad is a floor decal a few
        // pixels tall at range, which is not findable however pretty it is.
        const beamH = rx * 3.4;
        const beam = ctx.createLinearGradient(0, floorY - beamH, 0, floorY);
        beam.addColorStop(0, "rgba(74,222,128,0)");
        beam.addColorStop(1, `rgba(74,222,128,${(0.16 + 0.2 * bloom).toFixed(3)})`);
        ctx.fillStyle = beam;
        ctx.beginPath();
        ctx.moveTo(cx - rx * 0.1, floorY - beamH);
        ctx.lineTo(cx + rx * 0.1, floorY - beamH);
        ctx.lineTo(cx + rx * 0.34, floorY);
        ctx.lineTo(cx - rx * 0.34, floorY);
        ctx.closePath();
        ctx.fill();

        // Pool and cross share a vertically squashed space, so the cross
        // foreshortens with the floor it's painted on.
        ctx.save();
        ctx.translate(cx, floorY);
        ctx.scale(1, squash);
        const pool = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
        pool.addColorStop(0, `rgba(52,211,153,${(0.5 + 0.3 * bloom).toFixed(3)})`);
        pool.addColorStop(0.6, `rgba(34,197,94,${(0.26 + 0.2 * bloom).toFixed(3)})`);
        pool.addColorStop(1, "rgba(22,163,74,0)");
        ctx.fillStyle = pool;
        ctx.beginPath();
        ctx.arc(0, 0, rx, 0, Math.PI * 2);
        ctx.fill();

        // Kept deliberately dim for an additive draw: it lands on top of the
        // pool's bright centre, so anything near full intensity sums past
        // white and the cross stops reading as green at all.
        const arm = rx * 0.5;
        const thick = rx * 0.17;
        ctx.fillStyle = `rgba(${Math.round(74 + 60 * bloom)},${Math.round(210 + 30 * bloom)},${Math.round(130 + 50 * bloom)},${(0.5 + 0.3 * bloom).toFixed(3)})`;
        ctx.fillRect(-thick, -arm, thick * 2, arm * 2);
        ctx.fillRect(-arm, -thick, arm * 2, thick * 2);
        ctx.restore();

        ctx.globalCompositeOperation = "source-over";
      } else {
        ctx.fillStyle = "#5eead4";
        ctx.beginPath();
        ctx.arc(p.screenX, (p.top + p.bottom) / 2, Math.max(2, p.width / 2), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    const kick = this.fireFlash > 0 ? Math.min(14, (this.fireFlash / FIRE_FLASH_MS) * 14) : 0;
    if (this.weapon === "saber") {
      this._drawSaberViewmodel();
    } else {
      const wieldingSmg = this.weapon === "smg";
      ctx.fillStyle = wieldingSmg ? "#312e81" : "#262b36";
      ctx.fillRect(WIDTH / 2 - 26, HEIGHT - 70 + kick, 52, 60);
      ctx.fillStyle = wieldingSmg ? "#1e1b4b" : "#171a21";
      ctx.fillRect(WIDTH / 2 - 10, HEIGHT - 100 + kick, 20, 40);
    }

    // Ramps in across the charge second, then holds flat while the pad
    // ticks. Because a blink zeroes the charge, the tint has vanished by the
    // time the player's eyes reopen — which is the only moment they can see
    // it at all, and so the only moment the reset can teach them anything.
    const healT = this.healPad.active ? Math.min(1, this.healPad.charge / HEAL_CHARGE_MS) : 0;
    if (healT > 0) {
      ctx.fillStyle = `rgba(74,222,128,${healT * HEAL_TINT_MAX_ALPHA})`;
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }

    if (this.hitFlash > 0) {
      ctx.fillStyle = `rgba(248,113,113,${Math.min(0.35, (this.hitFlash / PLAYER_INVULN_MS) * 0.35)})`;
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }
  }
}

export const CORRIDOR_CONST = { WIDTH, HEIGHT, RENDER_SCALE, SMG_FIRE_INTERVAL_MS, PLAYER_MAX_HP };
