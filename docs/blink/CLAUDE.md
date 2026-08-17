# Blink

A first-person shooter in the browser, aimed by head movement and fired by
blinking. Vanilla ES modules, canvas 2D, no build step — the whole game is the
files in this folder, and it makes no third-party requests at runtime.

The game lives at `public/blink/`, which Astro copies verbatim at build time,
so **editing it there is deploying it** — it is served at `djbinder.com/blink/`.

**These notes deliberately do not live beside it.** Everything under `public/`
is published, and this file explains the things the game makes you discover:
that watchers only advance while you are not looking at them, how the heal pad
decays as a wave clears, the whole wave table. `/blink/CLAUDE.md` is exactly
what a curious reader tries. Keep documentation here, in `docs/blink/`, and
code there. Local dev is `npm run dev` from the repo root — note the dev
server wants `/blink/index.html`; only production resolves the bare `/blink/`.

It began as `corridor/` in a private repo of five webcam games, and its history
came across with it. Those other four — Snake, Invaders, and two Flappy
variants — are still there, and several notes below refer to them. The rule
they live under is that a game's twist is never named in its own UI, and **this
game is the deliberate exception**: it is called Blink and its start screen says
"Blink to start" out loud. Damon granted that on 2026-08-15. The exception
covers the title and the start prompt, not a licence to explain the aim,
watcher, or heal-pad mechanics too.

## What this is for

**The aim is not a good game. The aim is an entertaining, weird gimmick** —
Damon, 2026-08-16, and worth reading before proposing anything.

The product is the first thirty seconds: the camera prompt, a corridor, and the
moment someone works out that it fired because they blinked. Almost nobody will
see wave 8, let alone wave 20. So depth, progression and balance are not what
this is judged on, and "the late game flatlines" is close to irrelevant however
true it is.

What follows from that:

- **The weirdness is the asset.** Firing on an involuntary reflex, and watchers
  that only advance while you are not looking at them, are the parts someone
  repeats to the person next to them. Protect those over anything measurable.
- **Shareability beats retention.** The link preview, and working for a stranger
  on their own laptop, are worth more than any balance change.
- **Suspect proposals that make it a better *game*.** More content, more
  progression, more systems. They cost the thing that makes it worth sending to
  someone.

### Enemy roster

Enemy variety unlocks progressively by wave (see `ENEMY_UNLOCKS`/`poolForWave`
in `game.js` — each wave's spawn pool is every type unlocked so far,
picked uniformly at random per enemy):

| Type | Unlocks | Behavior | Look |
|---|---|---|---|
| `normal` | wave 1 | Walks straight at the player. | Red, has a head (headshot-able). |
| `runner` | wave 3 | Same as normal but 1.7x speed. | Orange, slightly smaller. |
| `headless` | wave 4 | Same as normal but never registers a headshot (gun only, body hits). | Violet, dark stump instead of a head. |
| `watcher` | wave 5 | Only advances while it's *not* actually visible to the player (off screen, or hidden behind a wall — checked against the depth buffer, `_isWatched`), or while the player *is* mid-blink — since firing needs a blink, every gunshot gives every watcher on the map a free step, at an extra-fast `WATCHER_BLINK_DASH_MULT` lunge speed (`en.blinkDash`) on top of its already-boosted base speed. Measured against the player's 2.2 u/s walk: 1.98 u/s unwatched (3.3x `ENEMY_SPEED`, so it very nearly keeps pace with you) and 7.13 u/s mid-blink (a further 3.6x), which is a unit and a half of ground for a 200ms blink. Late-wave speed scaling takes the unwatched figure to 2.1 by wave 17 and no further — see that section for why the absolute cap matters most for this type. A `WATCHER_MAX_FROZEN_MS` escape valve force-unfreezes one that's been stared at continuously for too long (e.g. a stuck tracker never registering a blink), so it can never soft-lock a wave. | Icy blue; turns bright white with visible eyes while frozen. |
| `ranged` | wave 6 | Holds around `RANGED_PREFERRED_DIST` instead of closing to melee, and fires a projectile (`_stepProjectiles`) down a clear line-of-sight (reuses `castRay`) on a cooldown. Has its own sound cue (`onEnemyShoot`/`playEnemyShoot`, distinct from the player's own gunshot). | Green, brief yellow muzzle flash when firing. |
| `triple` | wave 8 | 3 HP, and the only enemy a headshot doesn't one-shot — every hit takes exactly one segment wherever it lands (see the `segments` check in `fireAt`). Walks straight at 0.8x speed. | Pink stack of three circles with eyes on the top one. |

`triple` is the only type with `segments` set, and that flag does real work in
three places: the projection builds a stack whose height is `hp * 2 * segR`
rather than the usual body-plus-head, so the hitbox shrinks as it dies; the
draw branch renders circles instead of a torso; and `fireAt` suppresses the
headshot instant-kill. Its `headTop`/`headBottom` are set to
`Infinity`/`-Infinity` so the headshot test can never pass by accident.

All types can still be one-shot by the saber (melee doesn't check headshot/hp
at all, just kills the nearest visible unoccluded target in range) and award
more score than `normal` to reflect the extra difficulty. Enemy spawn points
are also pushed away from the player if they'd land within
`MIN_SPAWN_DIST_FROM_PLAYER`, so a new wave never pops in on top of you — but
that push is only applied if the pushed-out point is still open floor
(`_isWall` check in `_spawnWave`). A large push (player standing right on a
spawn point) can otherwise overshoot straight through a nearby wall or off
the map edge; an enemy embedded in a wall tile can never step back out (each
physics step's movement is far smaller than a whole tile, so `_isWall` keeps
rejecting it forever), so it sits there alive permanently and the wave can
never clear — this was a real, previously-shipped bug ("waves sometimes not
spawning"), not just a theoretical one. There's also a last-resort check
right after that falls back to the untouched, hand-placed spawn point if the
final position is a wall for any reason (e.g. jitter alone), so no code path
can ever spawn an enemy inside a wall.

### Wave table

Waves are composed by `composeWave()` from `WAVE_TABLE` (hand-authored, waves
1-6) and `LATE_WAVE_THEMES` (generated, 7 onward). Each entry is a head count
plus optional `min` quotas, a `max` cap, and an `exclude` list; whatever the
quotas leave over is filled at random from the types unlocked so far, then the
whole list is shuffled so quota types don't systematically claim the nearest
spawn points. Quotas naming a type that isn't unlocked yet are skipped, which
is what lets a late theme reference `triple` harmlessly before wave 8.

| wave | count | shape |
|---|---|---|
| 1-2 | 4, 6 | plain |
| 3 | 6 | 2-4 runners |
| 4 | 8 | 2+ runners, 2+ headless |
| 5 | 8 | 3+ watchers |
| 6 | 8 | 3+ ranged, **no watchers** |
| 7-14 | 9 up to `LATE_WAVE_MAX_ENEMIES` (16) | five themes on rotation: runner rush, ranged gauntlet, watcher stalk, `triple` bulwark, everything |
| 15+ | 16 | six themes: the five above plus **watcher + ranged**, and enemies begin scaling in speed |

This replaced `min(3 + wave, 10)` enemies each drawn uniformly at random.
That flatlined completely at wave 7 — count capped, pool complete, so wave 7
and wave 50 were identical — and composition was pure chance, with about one
wave in nine missing a type entirely and one in six being half a single type.

**Wave 15 is where the count caps, and therefore where the game used to go
flat a second time.** `DEEP_WAVE_THEMES` adds a sixth theme from there, which
does two jobs: six themes against five means the deep cycle no longer lands on
the same wave numbers as the mid one, and the new theme is the pairing the mid
table deliberately forbids. Watchers and ranged together pull in opposite
directions — a watcher only advances while you are *not* looking at it, so it
has to be held in view, and a ranged enemy fires down exactly the sightline you
are holding to do that.

The deep rotation is indexed from `DEEP_WAVE_START` rather than continuing the
mid-game count. Carrying the index across put the new theme on wave 19 and
handed wave 16 a repeat of wave 14's watcher theme; indexing from its own start
puts it on wave 15 itself. Measured composition, 300 spawns a wave: 15 watcher
4.8 / ranged 4.5, 16 runner 5.9, 17 ranged 5.2 / headless 4.2, 18 watcher 6.4,
19 triple 4.7 / headless 3.8, 20 runner 3.7 / ranged 3.7 / watcher 3.6, then 21
back to watcher + ranged.

**Do not answer a flat late game by raising `LATE_WAVE_MAX_ENEMIES`.** A
16-enemy wave already draws spawn points from 6.7 to 15.8 units away — nearly
every one of the 24 markers, out to the far corner. More enemies only lengthens
the tail, which is the straggler dead-time `_catchupSpeed` exists to fix.

`MIN_SPAWN_DIST_FROM_PLAYER` is 6, and it is load-bearing rather than a floor:
because selection prefers the *nearest* safe points, that radius is
effectively where enemies appear. At the old 3.5 a runner reached you in 3.4s
and a watcher in 2.7s, which read as waves materialising on top of you; at 6
that's 5.9s and 4.5s.

Raising it costs walk time (11s average / 24s worst became 15s / 28s), and
the compensation is spawn-point *density*, not placement cleverness — the
worst case is the Nth-nearest safe point for an N-enemy wave, so what matters
is having plenty of candidates in the 6-10u band. The layout carries 24
markers for that reason. Two places must stay clear of them: true dead ends
and the one-door room at (10,4)-(10,6). Careful with the test for this — the
obvious "tiles with <=2 open neighbours" catches every ordinary corridor tile
as well and will tell you 12% of spawns are in refuges when the real figure
is zero.

Resource cadence is deliberately offset so the two rarely coincide: heal pad
every 3rd wave (3, 6, 9…), SMG on wave 4 and every 2nd after (4, 6, 8…) —
`smgWaveHasPickup()` and the `padWave` check in `_spawnWave`. Neither
respawns on a timer any more, but they expire differently, and the difference
is deliberate:

- **The pad is a periodic event.** It arrives with a fresh budget and is gone
  again on the next wave whether or not it was drained. Being able to bank it
  is the whole thing it must not allow.
- **The SMG is a findable object.** It arrives on its waves and then waits on
  the floor until someone picks it up; only `_stepSmgPickup` clears it. It
  does *not* expire on the waves in between. Assigning the flag outright in
  `_spawnWave` — which is what the code used to do — made an untouched SMG
  silently vanish on wave 5, so a player who saw it across the room but
  couldn't safely cross to it lost it for nothing.

**The SMG spawns whether or not the player is already holding one**, so its
waves are a restock as well as a first pickup — 30 rounds empty in a few
seconds of held fire, and having kept the gun shouldn't be what locks you out
of the next magazine. This needed *two* guards removing, one in `_spawnWave`
and one at the top of `_stepSmgPickup`; taking out only the first leaves the
pickup on the floor and uncollectable, which looks like a rendering bug.
`smgAmmo` is *set* to `SMG_AMMO_ON_PICKUP` rather than added to, so collecting
on a full clip can't bank past one magazine.

**Ammo crates are the third resource on this cadence, and behave like the
pad.** All four (the `a` markers in `LAYOUT`) come back at the top of every
wave, drained or not, and never respawn mid-wave. That makes a wave's ammo a
fixed budget: `STARTING_AMMO` 10 once, then 4 x `AMMO_PER_PICKUP` 6 per wave,
against a `MAX_AMMO_CAP` of 20 carried at any moment. The 15s respawn timer it
replaced meant a long wave could be farmed off a single crate forever, so
running dry was a question of patience rather than a decision. Worth watching
in play: a 16-enemy late wave with a `triple` quota can want more than 24
rounds, and the intended answers are the SMG on even waves and the saber, which
never runs out — `_autoSwitchIfDry` is what makes running the pistol dry a
weapon change rather than a death.

### SMG pickup

A findable, temporary second weapon (`game.js`, `SMG_*` constants
and `_stepSmgPickup`/`fireAt`). It has no manual trigger at all — it fires
automatically for as long as the player's eyes stay closed, reusing the same
continuous `playerBlinking` signal the watcher's freeze check runs on (fed in
from `main.js` via `game.setPlayerBlinking`, itself driven by the tracker's
per-frame `blinking` state). A quick blink yields one round if its cooldown
happened to be ready; holding your eyes shut yields a stream. It doesn't
appear before `SMG_UNLOCK_WAVE` (wave 4), and draws from its own small
`smgAmmo` pool (`SMG_AMMO_ON_PICKUP`) that empties in a few seconds of
continuous fire — once it hits zero, `weapon` reverts to `"pistol"`
automatically. The regular blink-edge-triggered pistol shot
(`tracker.onBlink` -> `fire()`) is suppressed while the SMG is equipped so a
blink can't double-fire both. Picking it up removes it until the next wave
that carries one; until then it simply sits where it spawned, and there is no
respawn timer (see the wave table section above for the cadence). Distinct
indigo pickup icon and viewmodel
tint; distinct rapid-fire sound (`onSmgShoot`/`playSmgShoot`) from the
pistol's.

R cycles weapons (`game.toggleWeapon()`) any time the player is alive **on the
keyboard scheme** — it is dead in hands mode, where the mouth does that job —
stepping to the next slot in `WEAPON_CYCLE` that can actually attack.
Switching to the SMG only works if `smgAmmo > 0` (i.e. it doesn't grant a
fresh magazine, just lets the player ration what they're already carrying
instead of it always firing the moment their eyes close), and a dry pistol is
skipped for the same reason — selecting it could only ever produce empty
clicks. `R` does nothing else — restart moved onto space, which pauses while
you're alive and restarts once you're dead (`main.js` keydown). One key per
job, so the whole control list fits five lines in the settings panel.

### Saber

Melee is a two-handed energy blade on a **weapon slot**, not a gesture layered
on top of the gun: `trySwing()` refuses unless `weapon === "saber"`, and
`fireAt()` routes to it when the saber is equipped, so the same blink that
fires a gun swings the blade and no caller has to know which is out. It was
originally a mouth-open knife lunge available with the pistol in hand;
`jawOpen`/`mouthOpen` now cycle the weapon instead, so the mouth still has a
job — just not an attacking one.

`_autoSwitchIfDry()` is the other half. Running a weapon dry drops the player
onto the next thing that can attack rather than leaving them holding an empty
gun mid-wave: the SMG hands back to the pistol if it has rounds, and a dry
pistol falls through to the saber, which never runs out and is therefore the
floor of the cycle. Walking over an ammo crate deliberately does **not**
switch you back off the saber — a crate refills the pistol, it doesn't pick
your weapon for you.

Swinging roots the player for `SABER_MOVE_LOCK_MS` (320ms, slightly longer
than the 260ms animation so the commitment outlasts the visual). The saber
one-shots anything it reaches, so it has to cost something, and standing
still inside melee range with a wave closing is that cost. Turning is
deliberately exempt: it's gaze-driven, so freezing it would fight the aim
system rather than read as a commitment. The lock is charged on every swing,
hit or miss — and since blinking is involuntary, holding the saber means
occasionally being rooted for no reason. That is intended.

The viewmodel (`_drawSaberViewmodel`/`_saberPose`/`_drawSaber`) is hilt,
hands and blade, pivoting about the grip at the bottom centre of the screen.
Several things there are load-bearing:

- **Centred is correct, not a compromise.** This went knife -> single fist ->
  saber. The fist was centred because that's what was asked for, and it was
  simply wrong: one arm cannot come out of the sternum. A two-handed weapon
  is the shape that actually belongs in the middle. If melee ever goes back
  to one hand, it has to move to a side of the screen.
- **The pivot is the grip, not a point above it.** Rotating about anything
  higher swings the hands out sideways under the blade's lean, so the grip
  drifts off-centre at rest.
- **The strike is pure rotation**, unlike the fist's scale-based thrust — a
  blade on a stick sweeps. Three phases split at `SABER_WINDUP_T` and
  `SABER_RECOVER_T` (wind up, slash, recover), the slash being the short
  middle slice so it snaps rather than drifts, running ~135 degrees from
  up-right over the top to down-left.
- **Trail sample count and spacing are a pair.** The slash is eased, so the
  blade covers most of its arc in the first few milliseconds; at wide spacing
  the copies land far enough apart to read as several separate blades instead
  of one lit arc. `SABER_TRAIL_SAMPLES` 9 at `SABER_TRAIL_STEP` 0.016 closes
  the gaps. Five at 0.035 did not.
- **It is deliberately crude, and that's a correction rather than a
  shortcut.** The blade used to be the only lit object in the game — four
  concentric bars under `globalCompositeOperation = "lighter"` summing to a
  white core in a cyan bloom, with a nine-sample smear that fused into one
  continuous lit arc, over hands with knuckle rows and thumb blocks. It
  looked good and it looked like it came from a different game, because the
  pistol two slots along is literally two grey rectangles and the enemies are
  flat circles on flat torsos. It is now flat fill plus a dark outline like
  everything else: a wide cyan bar with a pale core, a blocky hilt, and two
  plain blocks for hands. If you find yourself adding gradients or additive
  blending back, that is the thing to stop.
- **The trail is few and widely spaced on purpose** (3 at 0.05, from 9 at
  0.016). Tight spacing is what made the copies fuse into a single lit sweep,
  which is exactly the look that didn't belong.

Sound is two parts. `playSaberSwing()` is a pitch bend rather than a noise
whoosh — what makes a swung energy blade sound like one is Doppler on a
sustained tone, so it's two detuned saws bent up and released with a little
air noise under them. `setSaberActive()` drives a sustained idle hum: two
saws +/-9 cents apart through a lowpass with a slow LFO on pitch, at
`SABER_HUM_HZ` 132 — deliberately well clear of the tension drone's 58Hz so
the two occupy different registers. It is called **every frame from the
render loop**, like `setThreats()`, rather than switched on weapon-change
events; a sustained sound driven by events gets stranded on whichever path
nobody remembered (death, pause, running dry mid-swing) and hums forever.

### Heal pad

The only source of healing in the game (`game.js`, `HEAL_*`
constants and `_stepHealPad`). A green cross plate on the floor at
`HEAL_SPAWN`. Placement is chosen by *map-wide visibility*, not by eye —
pick the tile with line of sight from the largest share of the floor. The
two criteria turn out to be the same criterion: a tile visible from
everywhere is also exposed from everywhere, which is what makes standing on
it cost something. Judging it by eye fails badly. On the old 16x12 map the
first version sat at `[9.5, 5.5]`, which reads as "central and open" but was
screened by that map's middle pillar, leaving it invisible from 63% of the
floor including the player's spawn tile — in practice the pad could not be
found at all. Its position now comes from the `H` marker in `LAYOUT`, so
re-score it whenever the geometry changes. It appears only on every
`HEAL_WAVE_INTERVAL`-th wave (3, 6, 9, ...) with a fresh `HEAL_BUDGET_HP`
pool, and is gone on the next wave whether or not it was drained — a
periodic event rather than a fixture.

Standing within `HEAL_RANGE` builds `charge` over `HEAL_CHARGE_MS`, after
which it grants `HEAL_TICK_HP` every `HEAL_TICK_MS`. A blink zeroes the
charge outright rather than pausing it, reading the same continuous
`playerBlinking` signal the watcher freeze and the SMG run on. Since firing
*is* a blink, every shot costs the full wind-up again, so healing and
shooting are mutually exclusive for as long as you want the drip. Draining
the whole 30 HP needs ten unbroken seconds, which nobody gets under
pressure — it degrades gracefully into 6 HP bites from a 3s stretch.

The pad's remaining budget is also capped in proportion to the wave's
surviving enemies (`aliveCount / _waveEnemyCount`), so clearing the wave
burns the pad down with it. Healing is plentiful while the room is still
full and worthless once it's nearly empty, which kills the "clear
everything, then top up in safety" pattern before it can exist. Note that
`_stepHealPad` must run *before* the wave-rollover check in `_step`, or the
last kill of a wave applies a zero alive-count to the next wave's
freshly-spawned pad and empties it on arrival.

It renders as a lit patch of floor rather than an upright sprite: an
elliptical radial-gradient pool centred on the floor line, with the cross
drawn inside a vertically squashed transform so it foreshortens along with
it, plus a tapering `createLinearGradient` beam. All of it draws with
`globalCompositeOperation = "lighter"`. Additive is what makes it register
as light over the blue-grey walls instead of opaque paint on top of them —
but it also means the cross has to be kept dim, since anything near full
intensity sums past white over the pool's bright centre and stops reading as
green. This replaced a flat opaque slab, which looked like a billboard
standing on the floor, because that is exactly what it was.

Sprite sizing matters more than it looks. Bottom-anchored floor decals must
handle the close-range blowup by *clamping* height, not by scaling the whole
sprite down with a small factor — a 0.18 factor kept it off the screen up
close at the cost of rendering it ~11px tall across a room, which is
invisible in practice. The beam exists for the same reason: a floor decal a
few pixels tall is not findable however pretty it is. Two separate play
sessions failed to spot the pad before this was fixed.

Feedback is a full-screen green tint that ramps in across the charge second
and holds flat while ticking, layered *under* the red damage flash so a hit
still reads as a hit. The tint is the whole teaching mechanism: the player
cannot see the screen mid-blink, but the tint is already gone by the time
their eyes reopen, which is the only moment the reset can register. The
cross on the pad brightens with charge too, for when you're approaching
rather than standing on it.

### Settings panel

A gear in the board's top-left corner opens a card with the control list,
volume, and blink sensitivity. It replaced the hint line under the board, which
covered movement and pause and said nothing about the two controls the game is
actually built on. This game's twist-reveal exception is what lets it say "Blink
to shoot" outright; **don't copy this panel into the other four games**.

**The movement lines swap with the control scheme.** `syncControlsList()` puts
`mode-keys`, `mode-wheel`, or `mode-thumb` on the list and the CSS shows the
matching `li`s. Two things there are deliberate: the keyboard line is the
default in CSS, so a list with no mode class still reads correctly rather than
losing its movement line entirely; and the class is set when the panel *opens*
rather than on a scheme-change event, because the scheme can change from the
start screen, the game-over screen, or the debug panel's mode select, and an
event wired to only some of those goes stale without any sign of it. The wheel
copy has to carry the calibration point — resting hand position is read off the
starting blink — since a player who doesn't know that gets a permanent drift and
no way to explain it.

**Opening it pauses, and closing it does not resume.** The pause overlay takes
over and space resumes when the player is ready — closing a menu shouldn't drop
you back into a live wave with enemies already on you, and in hands mode you
need a moment to get your hands back up first. Measured: open sets
`manualPause`, close leaves it set with "Press space to resume" showing, space
clears it.

The card is a flex column with a scrolling middle section, not a scrolling box.
The hands control list is long enough to overflow it on a short viewport, and
when the whole card scrolled that pushed the Done button off the bottom.
`min-height: 0` on `.settings-body` is what actually lets the flex child scroll
instead of growing the card past its `max-height`. Verified down to a 520px
viewport.

The two sliders are the ones a player who isn't Damon actually needs. A blink
threshold calibrated for one person in one room misfires for everyone else, and
before this there was no way to turn the sound off at all. Both persist to
`localStorage` (`corridor-volume`, `corridor-blink-sens`), so getting it right
once is permanent.

Four things are load-bearing:

- **The gear is sized as a *share* of the board, not in pixels.** `--board-w`
  ranges from about 570 to 960 depending on the viewport, while the HUD is drawn
  in a fixed 480x360 logical space, so a fixed-px button occupies a different
  logical footprint at every window size and collides with the wave readout at
  some of them. At `left: 1.25%` / `width: 4.58%` it always spans logical x
  6..28 (measured at both 570 and 936), which is what makes the matching
  `HUD_WAVE_X` of 34 safe. Change one of those and you have to change the other.
- **Sensitivity is the inverse of the tracker's threshold**, which is the
  blendshape level an eye has to pass to count as shut, so a *lower* threshold
  fires more easily. The player-facing slider runs the intuitive way round and
  `applyBlinkSensitivity` is the only place the two are reconciled. It also
  writes the debug panel's threshold slider, which is not just cosmetic: a
  tracker constructed later reads its thresholds off that panel wholesale.
- **Opening the panel reuses `manualPause`** rather than introducing a second
  notion of "stopped". That flag already gates physics, audio, and input in
  every place they need gating, and a parallel flag would be missed by one of
  them. `settingsPausedGame` records whether the panel was what paused it, so
  closing it doesn't resume a game the player had paused themselves.
- **The keydown handler returns early while the panel is open.** Otherwise
  space resumes the game underneath the card, and the arrow keys walk you
  instead of moving the slider you're dragging.

### Display and on-screen HUD

The board is shown at `--board-w` = `min(92vw, 960px, 104vh)`, which is much
larger than the 480x360 the renderer was written against. It stays sharp
because the canvas *backing store* is `RENDER_SCALE` (2) times the logical
size and `draw()` sets a matching base transform on its first line, so every
coordinate in `game.js` — viewmodel offsets, `SABER_BLADE_LEN`, sprite
projection — is still in the 480x360 space it was authored in. Don't rescale
those constants; raise `RENDER_SCALE` instead. The transform is re-established
every frame rather than once at construction, so an unbalanced `save`/`restore`
can't strand the whole picture at the wrong scale. `main.js` sizes the `#hud`
canvas and sets the same transform in `renderHud()`.

Rays are still cast one per *logical* column, so a wall column is 2 device
pixels wide. That's invisible on flat-shaded walls and keeps the per-column
work exactly where it was; the 104vh term in `--board-w` caps the 4:3 height at
78vh so the board plus its chrome fits a laptop viewport without scrolling.

Score, health, ammo, weapon and wave are drawn on the HUD canvas
(`renderStats()`), not in DOM elements below the board — `game.onScoreChange`
and friends are gone, since the HUD reads live state off the game each frame
and never needs to be kept in sync. What's left in the DOM strip is
calibration readout, so the whole `.hud` div is `.debug-only` and the default
page is just the board.

They sit in the **four corners** deliberately: the viewmodel owns the bottom
centre (the saber's hands are at `HEIGHT - 26` with the blade running up the
middle), so a Doom-style bar would cover the one part of the frame the player
is already looking at. Every glyph is drawn with a dark `shadowBlur` halo
because walls range from near-black to fairly bright and the heal pad washes
the frame green — nothing can assume a dark background. The weapon label is
tinted to match its viewmodel (`WEAPON_TINTS`), and the saber shows `∞` for
ammo, which is true rather than decorative.

### Map layout

The level is a single ASCII block, `LAYOUT` at the top of `game.js`.
`MAP_W`/`MAP_H` are derived from it, `buildMap()` just converts it, and every
placement is a letter inside it (`P` player start, `e` enemy spawn, `a` ammo,
`S` SMG, `H` heal pad) read out by `readLayout()`. Editing the level means
editing that block and nothing else — it replaced four hand-maintained
coordinate arrays that each silently assumed the old 16x12 grid.

It is 20x16 and deliberately asymmetric, replacing a symmetric 16x12 hall
with five identical pillars. The old map had **four** tiles with two or fewer
open orthogonal neighbours, meaning there was effectively nowhere to put your
back; this one has 41. That matters more here than in a normal shooter
because turning is gaze-only at `TURN_SPEED`, so a 180 is slow and being
flanked is the main threat. For the same reason chokepoints make the player
*stronger*, not weaker — don't scatter them freely.

Always validate an edit with `unreachableFloorTiles()`, which must come back
empty. Judge the geometry on the spread between the most and least exposed
tile rather than on how enclosed it is: uniform maps make position
irrelevant whether they're open or cramped. This layout runs 38 points of
spread against the old map's 31, with a 17-unit longest sightline for ranged
enemies to hold.

### Enemy spawn selection

`_spawnWave` picks the **nearest** spawn points that are still at least
`MIN_SPAWN_DIST_FROM_PLAYER` away. It used to take the farthest, which was
redundant — the push-out later in the same function is what actually stops an
enemy appearing on top of the player — and on a larger map that policy alone
pushed the average walk from 11s to 19s and the worst case to 36s, which is
dead time spent waiting on a straggler.

The layout carries **more spawn points than the largest wave** — 24 markers
against `LATE_WAVE_MAX_ENEMIES` of 16. This is load-bearing, not decoration: a
nearest-first rule can only help if it has candidates to reject, and with
barely more points than enemies a late wave takes almost all of them, distant
ones included. Measured with 11 points the map ran 15s average / 34s worst,
against 11s / 24s with 20.

**That margin is now thin, and it is the real argument against bigger waves.**
A 16-enemy wave measured from the player's own start draws points from 6.7 to
15.8 units — nearly the whole set, out to the far corner. Raising the cap
lengthens the tail rather than the pressure.

### Proximity cue

`updateDanger()` in `main.js` collects *every* enemy within `DANGER_RANGE`
and passes their individual distances to `sound.setThreats([...])`, which
feeds two layers. The old one is a low 58Hz drone with a tremolo that speeds
up, driven by the nearest enemy alone. The main one is a Shepard–Risset
glissando (`BP_*` constants, `_startBarberPole`): octave-spaced sine partials
all gliding upward, each fading in at the bottom of the range and out at the
top, so the tone seems to climb forever without arriving. It gets louder
*and* glides faster as enemies close.

It runs one voice per nearby enemy, each a minor third below the one above
and each scaled by *its own* enemy's distance, so a chord thickens as a group
converges and thins as they're picked off. `BP_MAX_VOICES` is 4 for a
musical reason, not an arbitrary cap: stacked minor thirds close after four,
since the fifth is 12 semitones and merely doubles the root. Four voices is
the complete diminished seventh. Transposing a voice is done by *offsetting
its phase* rather than scaling frequencies — a Shepard stack is periodic in
log-frequency, so a phase offset of `0.25 / BP_OCTAVES` moves the whole stack
down a quarter octave while keeping every partial octave-spaced.

`DANGER_RANGE` and `BP_CURVE` are a pair and should be tuned together. A long
range with a shallow curve is just constant noise; the point of the steep
curve is that the far half of the range stays near-silent and the last few
units rush in. Raising `BP_CURVE` alone also quietens the cue *at contact*,
so `BP_MAX_GAIN` has to come up with it.

This carries real information rather than just atmosphere, because turning is
gaze-only and slow — you cannot cheaply check behind you, so an omnidirectional
proximity cue is the only warning about something at your back.

A **frozen watcher contributes no voice** (`updateDanger` skips `en.frozen`).
It's held still by being looked at, so it isn't a threat while that lasts,
and its voice dropping out of the chord is the feedback that you've pinned
it. It sounds again the moment it moves, including the blink-dash and the
`WATCHER_MAX_FROZEN_MS` escape valve, since both clear `en.frozen`.

Four things are easy to get wrong here, all verified by measurement:

- **`BP_PARTIALS` and `BP_OCTAVES` must be equal.** Partial spacing is
  `2^(BP_OCTAVES/BP_PARTIALS)`, and only octave spacing fuses into a single
  perceived pitch. The first version used 7 partials over 6 octaves, giving a
  1.81 ratio, which reads as a cluster chord sliding about rather than one tone.
- **Frequency must be *ramped* between updates, not set.** Setting it once per
  frame makes the glide a staircase — at 60fps and this sweep rate that's a
  ~5 cent jump 60 times a second, measured as 78% of wave cycles having no
  pitch change at all and then a jump. Chained `linearRampToValueAtTime` calls
  interpolate across the gap: 1% flat cycles, and 220x lower second difference
  in the frequency trajectory.
- **The wrap is the one exception, and jumps.** A partial passing off the top
  reappears at the bottom, and ramping that would sweep it audibly back down
  through every octave. Worth knowing: with the current window this measures
  *identical* either way, because the Hann window is ~0 (4e-7 of full scale)
  right where the wrap happens. The guard is kept for when the window or sweep
  rate is retuned, not because it currently changes the sound.
- **The Hann window over log-frequency is what keeps the level steady.** Summed
  across equally spaced partials it is mathematically flat; an offline render
  measures 0.2% RMS ripple over 500ms windows and no clicks.

`masterGain` feeds a `DynamicsCompressor` acting as a limiter before the
destination. The drone is sustained and loud up close, so gunfire or a hit
landing on top of four voices would otherwise sum past full scale and
hard-clip. Measured worst case — four voices at contact plus repeated
gunshots — peaks at 0.80 with zero clipped samples.

### Enemy movement

Enemies steer straight at the player whenever `_hasLineOfSight` is clear, so
open-floor chases keep their direct, un-gridded look. When the line is
blocked they follow a BFS distance field flooded out from the player's tile
(`_rebuildFlowField`, `_flowDir`), rebuilt only when the player crosses a
tile boundary — 2.8us over the grid, so the cost is irrelevant.
`_flowDir` descends the field considering diagonals, but only takes a
diagonal when both of its orthogonal neighbours are open, so nothing clips a
corner. `_moveEnemy` then adds a separation push (`_separation`) and a wall
push (`_wallAvoidance`), eases the heading toward the result by
`ENEMY_TURN_SMOOTHING` rather than setting it, and commits each axis
independently, which is what lets an enemy slide along a wall.

The easing is not cosmetic. Both steering sources change target
discontinuously — line of sight flickers on and off as an enemy rounds a
corner, flipping it between chasing directly and following the field, and the
field re-aims at a new tile centre on every boundary crossing — and setting
the heading directly turned each of those into a hard turn mid-stride, up to
82 degrees in a single 16ms frame. Easing caps that at about 10 without
changing the route.

Wall avoidance is a real trade rather than a free win, and the constants are
commented with the measured curve. Pushing enemies off walls fights the flow
field's tile-centre targets, so hugging and weaving move in opposite
directions; the shipped values sit at the knee. Two things worth knowing
before re-tuning: a weighted flood that makes the *route* prefer open tiles
was tried and reverted for measuring no better than the plain flood, because
the route only chooses tiles and the scraping happens within one; and no
setting tested ever made an enclosed tile unreachable, so the player cannot
hide in a corner — re-check that if the force is raised.

This replaced a pure walk-straight-at-the-player steer. That had no notion of
a route, so any concave geometry either stalled an enemy outright (both axes
rejected by the wall test, and nothing in the loop would ever back it out) or
ground it along a wall face heading away from the player. It also had no
enemy-to-enemy collision at all, so a converging wave stacked onto one point
and read as a single thick sprite. Don't reintroduce direct-only steering
when adding an enemy type — route through `_chaseDir`/`_moveEnemy`.

### Straggler catch-up

`_catchupSpeed()` raises an enemy's walk speed with how far it still has to
go, so the tail of a wave isn't spent waiting on one slow walker crossing the
map — nothing can roll the wave over until the last one is dead.

The distance comes out of the flow field: `_flowDist` already holds each
tile's step count from the player, so it's free and, more to the point,
wall-aware. Straight-line distance is the wrong measure here — an enemy one
tile away through a wall is not close, and would get no help exactly when it
needs it.

Two things bound it, and both are load-bearing:

- **Nothing starts until `CATCHUP_START_TILES` (8).** That's roughly where
  sightlines stop carrying, 6 of the 24 spawn markers are inside it, and every
  enemy's boost has tapered to nothing by the time it's fighting you. This is
  a fix for dead time, not a difficulty increase, and a visibly sprinting
  enemy is the failure mode.
- **`CATCHUP_SPEED_CAP` (1.8 u/s) is an absolute ceiling**, against
  `MOVE_SPEED`'s 2.2. No amount of distance may let anything outrun the
  player. It also makes the fast types opt out on their own: a watcher's 1.98
  base is already above the cap, so it never takes any catch-up, and the
  blink-dash branch in `_step` never compounds with this.

Measured over the 18 spawn markers at least `MIN_SPAWN_DIST_FROM_PLAYER` from
the player's own spawn, walking one enemy in from each (time to contact, or to
firing range for `ranged`):

| type | before (avg / worst) | after |
|---|---|---|
| `normal` | 21.4s / 29.7s | 17.4s / 20.7s |
| `runner` | 12.6s / 17.4s | 10.5s / 13.2s |
| `triple` | 26.7s / 37.1s | 21.8s / 25.9s |
| `ranged` | 18.0s / 31.3s | 12.3s / 18.6s |

The curve keeps paying past these constants, but only just: 0.25/tile capped
at 4x buys another 1.9s off `normal`'s worst case, at the price of a normal
enemy moving 2.4 u/s — faster than the player, which is the thing the cap
exists to forbid. Catch-up is also deliberately not applied to a `ranged`
enemy backing *off* (`_stepRanged`), which is the one case it has no business
touching.

### Late-wave speed scaling

From `WAVE_SPEED_START` (14) enemies walk `WAVE_SPEED_PER_WAVE` (2.5%) faster
per wave, reaching `WAVE_SPEED_MAX_MULT` (1.15) at wave 20 and holding there.
It exists because the head count caps at 14 and nothing else about a wave
changes after that; `_baseSpeed()` is the single place it applies.

There are **two** caps and the second is the load-bearing one.
`WAVE_SPEED_ABS_CAP` (2.1) holds the result under the player's `MOVE_SPEED` of
2.2 whatever the multiplier says. The watcher's 1.98 base is deliberately just
short of the player's pace, and the percentage alone would put it at 2.28 by
wave 20 — faster than the player, which every speed rule in this game forbids.
It reaches 2.1 at wave 17 and stops. At wave 20 the rest sit at normal 0.69,
runner 1.17, `triple` 0.55, ranged 0.48.

Two things it deliberately does not touch. The **blink dash** keeps the
unscaled base (1.98 x `WATCHER_BLINK_DASH_MULT`, 7.13 u/s), because it needs no
help and compounding the two was never intended. And `_catchupSpeed` still runs
on the scaled value, which changes nothing in practice: a scaled watcher is
above `CATCHUP_SPEED_CAP` and so takes no catch-up either way.

HP scaling was considered and rejected. It makes sponges, and with ammo now a
fixed per-wave budget it would press on the same constraint twice.

`unreachableFloorTiles()` returns every open tile with no path to the player,
and should always be empty. Use it to validate any new map layout: a
non-empty result means a sealed pocket, which would strand any enemy that
spawned in it. Note this is *separate* from the spawn-inside-a-wall guard in
`_spawnWave` — an enemy embedded in a wall tile still cannot move at all,
because `_flowDir` has no field value for a wall tile and the direct
fallback is rejected on both axes.

### Hand steering

An opt-in second camera signal that walks the player, in one of two schemes
(`mode` in `HAND_DEFAULTS`, switchable live from the panel, or forced with
`?hands=wheel` / `?hands=thumb`).

**Steering wheel (the default).** Two hands held like handlebars: tilt the
line between them to strafe, raise or lower both to move. It exists because
thumb *angle* is the fragile signal in all of this — a small, low-contrast
feature the model estimates poorly at webcam resolution — while a hand's
centroid is the most reliable number it produces. The wheel uses **nothing but
two centroids**: no finger curl, no thumb geometry, no `z`. Three consequences
worth keeping:

- **Both axes are proportional**, not on/off. `setMoveDir` takes a fraction, so
  this costs nothing, and it's most of why the wheel feels different from the
  thumb. Deadzone, then a ramp from `wheelMinSpeed` to full deflection.
- **`wheelMinSpeed` is not a detail, and 0 is the wrong value.** A true 0..1
  ramp means a comfortable raise of the hands walks you at a *third* of the
  speed a keypress would, and the game reads as sluggish — that shipped, and
  it was reported as the game being slow. Leaving the deadzone should already
  be a useful pace, with the ramp adding the rest. Measured against the
  keyboard's flat 2.2 u/s, at a raise of 8% of frame height: 0.59 u/s before,
  1.70 u/s now.
- **A wheel turned clockwise steers right**, i.e. right hand *down*. That's the
  car convention and the reason for the negation in `analyzeWheel`.
- **Opening both palms stops you dead**, whatever the tilt and height say.
  Returning to exactly neutral to stand still is fiddly and wants a glance
  down at the screen, which this game punishes; a flat hand needs none. It's
  both hands rather than either, so one hand relaxing mid-turn can't brake.
  The corollary is that the wheel is *gripped* — steer with fists, stop with
  open hands — which is what makes an open hand free to take this job without
  stealing a pose ordinary steering uses.
- **Hands are sorted by their position in the player's frame**, not by
  MediaPipe's handedness label, which isn't needed and isn't trusted.

Calibration matters more here than it looks: nobody holds two hands at exactly
the same height, and an uncorrected resting tilt is a permanent drift to one
side. It takes resting height and resting tilt together, and both accumulate
onto the current settings rather than replacing them.

**The starting blink is the calibration sample**, which is why the start
prompt reads "Hold your hands up, then blink to start" in wheel mode. There is
no sensible default here — it depends entirely on where someone sits relative
to their own webcam — and a player resting their hands at a natural height
against the shipped 0.5 neutral measures `move -0.91`, i.e. sprinting
backwards from the first frame. Two guards on that path, both deliberate:

- **It never blocks the start.** Hand tracking is loaded fire-and-forget and
  may still be downloading or may have failed; neither is a reason to leave
  someone stuck on the start screen.
- **`calibrate()` returns null unless it actually saw two hands**, so someone
  who blinks with their hands in their lap keeps the previous neutral instead
  of having it set to their lap.

The panel button does the same thing, for recalibrating mid-session.

**Thumb direction.** A thumb held out of an otherwise closed fist steers in
whichever of the four directions it points — up forward, down backward, left
and right strafing. **A thumb aimed at the camera also means backward**, which
is easier to hold than thumb-down; thumb-down still works as well.

Both schemes hand back the same `{move, strafe}` shape, so nothing downstream
knows which is running.
Turning stays gaze-only. That isn't an oversight: turning being slow is what
the whole proximity-drone system exists to compensate for, so putting turn on
a thumb would quietly undo it.

Chosen at the start and game-over screens rather than shipped on, because it
loads and runs a second MediaPipe model (`HandLandmarker`, a further 7.5MB) over
every frame, and there's no reason to charge that to someone playing on the
keyboard. `?hands=` no longer switches it on — it only picks *which* scheme and
pre-reveals the tuning panel.

`?hands=` and `?debug=1` are independent, and combining them is how you check
whether it's reading you. That adds three things, and they answer different
questions:

- **A hand skeleton on the camera preview**, on its own `#handOverlay` canvas.
  It has to be separate from `#videoOverlay` — the face box there is redrawn
  at video rate and would erase the skeleton between hand frames. **Green
  means the pose is being read as a direction right now, amber means the hand
  is tracked but the pose is rejected**, so a glance separates "it can't see
  my hand" from "it doesn't like my hand".
- **`seen %` and `pose %`** over a rolling 2s window, which is the pair a
  still frame can't give you: intermittent tracking and a consistently
  rejected pose look identical at any single instant.
- **A rejection reason**, from `analyzeThumb`. "No direction" has five quite
  different causes — fingers not curled, thumb not clear of the fist, thumb
  too short (hand side-on to the camera), diagonal, no hand at all — and
  telling them apart by staring at your own hand is hopeless.

Hand tracking starts as soon as the tracker is live, *before* the blink that
starts the game, so the whole panel can be checked from the start screen.

**Both landmarkers now run in workers, and that is the fix everything below
was working towards.** `detectForVideo` is *synchronous on the main thread* —
the thread `requestAnimationFrame` runs on — so it is not a background cost but
a subtraction from the frame budget. The notes here describe the era when they
shared that thread, and are kept because they are what the fallback paths still
do and why the delegate split is what it is.

When they did share it, `HandTracker` stood down for any frame the face tracker
had already spent — `yieldTo` against `FaceTracker.lastDetectFrame`, comparing
rAF timestamps so "same frame" was exact rather than heuristic, at a cost of one
frame of latency on the hand input. **`lastDetectFrame` is now set only on the
face tracker's inline fallback**, so `yieldTo` correctly does nothing when the
worker is running and there is nothing on this thread to collide with.

**The two models take opposite delegates, and this is measured rather than
conventional.** Both alive at once, interleaved, feeding each a canvas:

| config | face | hand | main thread |
|---|---|---|---|
| GPU + GPU | 3.99ms | 5.49ms | 230ms/s |
| **CPU face + GPU hand** | **2.61ms** | **5.65ms** | **191ms/s** |
| CPU + CPU | 2.89ms | 17.45ms | 436ms/s |

The hand model is 3x slower on CPU and *must* have the GPU — 17.5ms does not
fit in a frame at any detection rate worth having, so its fallback logs a
warning. The face model is genuinely faster on CPU, and putting it there also
stops two GPU-delegate landmarkers contending. `tracker.js` therefore asks for
**CPU first**, which looks like a mistake and isn't.

Two things worth knowing before optimising further. `numHands: 2` is **not**
what makes the hand model expensive — one hand measures 12.0ms against two at
11.8ms, because palm detection dominates and runs either way. And canvas
rendering is not a factor at all: at wave 9 with 11 enemies a full `draw()` is
0.33ms and the HUD 0.05ms against a 16.7ms budget, so `RENDER_SCALE`, the
second HUD canvas and the viewmodel are all innocent. Measure with a
`getImageData` flush *on the canvas being drawn to* — flushing the wrong one
reports the HUD as free.

**Hand inference runs in a worker** (`hands-worker.js`), and that is
the fix the rest of this section was working towards. On a 120Hz display a
5-12ms synchronous call cannot fit in an 8.3ms refresh under any scheduling,
so rate reduction only ever traded responsiveness for a smaller number of
blown frames. Measured on the game's own readout: hands off, 8 dropped frames
a session; hands on at 11Hz on the main thread, 264. In the worker the main
thread pays 0.1ms median (0.3ms worst) for `createImageBitmap` and nothing
else.

Three things about it are load-bearing:

- **It is a CLASSIC worker, not a module worker.** MediaPipe's wasm loader
  calls `importScripts` internally, which module workers forbid outright
  (`Module scripts don't support importScripts()`, confirmed identically on
  0.10.3, 0.10.14 and 0.10.22, so bumping the version does not help). A
  classic worker permits `importScripts`, and dynamic `import()` still loads
  the ESM bundle from inside it. Don't "modernise" this to `type: "module"`.
- **Only landmarks cross the boundary.** `analyzeThumb`/`analyzeWheel` stay on
  the main thread, where they're pure and cost nothing, so the worker has no
  idea which scheme is running.
- **At most one frame is in flight** (`_inFlight`). Queueing instead would show
  up as the hand input drifting further behind the longer you play, which is
  worse than dropping a sample.

The main-thread path is kept as a fallback and is what `yieldTo` still exists
for. `detectHz` remains the dial for what hand steering costs, and has a
slider — it matters much more on the fallback path than in the worker.

**The face model followed it into `face-worker.js`**, on the same pattern:
classic worker, dynamic `import()`, one frame in flight, `createImageBitmap`
on the main thread and nothing else. Two things differ from the hand worker.
Only a *summary* crosses back — the 4x4 transform, three blendshape scores, and
a face bounding box — because shipping all 478 landmarks so the caller could
derive that box would be ~100x the payload for the same four numbers; the
fallback runs the same reduction inline (`summariseResult`) so `_handleResult`
never knows which path produced it, and the two must be kept in step. And it
costs about a frame of latency on **blink-to-fire**, which in this game is the
whole control scheme rather than a walking input. That trade was made
deliberately: 24-30 calls a second at ~2.6ms each is roughly a third of every
frame it lands in on a 120Hz panel.

Both paths are worth testing after any change here, and the fallback is the one
that rots unnoticed. Overriding `window.Worker` to throw *after* page load but
*before* the start click forces it, since the worker is constructed at click
time.

**There is a frame-time readout under `?debug=1`, and it exists because a
stutter cannot be diagnosed from a machine that isn't stuttering.** Two
separate sessions were spent guessing at a reported stutter that no
measurement here could reproduce. It is drawn **on the HUD canvas, top
centre** — not in the DOM strip under the board, which is unreadable while
playing, since looking away from the screen is how this game turns you. The
four corners are taken by the real HUD and the viewmodel owns the bottom
centre, so the top strip is the one free space.

```
fps 60   frame 16.7ms   worst 38.0ms   >20ms 6/108
session worst 38.0ms   dropped 6   infer face 30/s hand 19/s
```

The `session worst` and `dropped` figures never decay, unlike the rolling
window. That's the point: the rolling numbers have already recovered by the
time you've finished flinching at a stutter, so the readable-afterwards
figures are the ones that survive a pause.

**The drop threshold is derived from the observed median (1.5 refreshes), not
fixed at 20ms.** That fix came from the readout itself: a 120Hz display has an
8.3ms frame, so a fixed 20ms threshold reported `3/180` on a machine that was
missing far more than that, while the never-decaying `dropped` counter said
640. If the median reads ~8.3ms rather than ~16.7ms, the machine is on a
ProMotion panel and **every MediaPipe call is longer than one frame** — 5-12ms
against an 8.3ms budget. That is the whole explanation for the reported
stutter, and it is why staggering the two models against *each other* didn't
fix it: they were never colliding, each call alone overran.

Three things follow from it, all of them in the code now:

- **The render loop is capped to ~60fps** (`RENDER_MIN_MS`). A 480x360
  raycaster gains nothing from 120, and rendering every other refresh halves
  how often a render shares a frame with an inference call. Physics steps by
  the render interval, not the refresh interval, or capping the rate would
  halve the speed of the game — measured identical at 30/60/120/144Hz.
- **The face model has a `detectHz` cap too**, defaulting to 30. Uncapped it
  ran at the camera's frame rate, and back when it ran inline that was a missed
  refresh every single time on a 120Hz panel. In the worker it now sets how
  often a `createImageBitmap` happens, and how fresh aim and blink are.
- Both rates have sliders, because the trade against aim smoothness and blink
  latency is a matter of taste and hardware, not something to hard-code.

Each number answers a different question, and the median alone answers none of
them: a stutter is a handful of blown frames against a healthy median, so
`worst` and the `>20ms` count are the ones that identify it, while a uniformly
low `fps` means something else entirely. `infer` says which model is spending
the time, and confirms the staggering is working rather than starving one of
them. A median frame time near 8.3ms rather than 16.7ms means a 120Hz display,
which halves the budget every figure above is measured against — worth ruling
in or out before touching anything else.

`hands.js` is a fourth tracker copy — the "don't unify the trackers"
rule in **Shared architecture** covers it too. It deliberately does *not* touch
`getUserMedia`: it runs on the `<video>` and `MediaStream` the `FaceTracker`
already opened, so there's one camera and one preview between them. Construct
it only after `tracker.init()` resolves, and let the face tracker own the
stream's lifetime — `HandTracker.stop()` halts its loop without stopping any
tracks.

Four things in the classifier are load-bearing:

- **The whole gesture set is one pose rotated**, so every test has to be
  rotation-invariant. Curl is "fingertip is nearer the wrist than its own
  middle joint", which holds at any hand angle; a y-coordinate comparison
  would only work for thumbs-up.
- **Every threshold is a ratio against palm length** (`wrist`→`middle MCP`),
  so nothing depends on how close to the camera the hand is.
- **"Is the thumb clear of the fist" has to be measured in 3D.** A thumb aimed
  at the camera sits almost on top of the index knuckle *in the image* while
  being nowhere near it in space, so a 2D `thumbOut` rejected that pose before
  the depth test could claim it as backward. Same reason the depth test runs
  *before* the minimum-length test rather than after: a thumb aimed at the
  camera is short in the image by definition, and the ordering is what decides
  whether that becomes a direction or a rejection.
- **The four `SECTORS` are deliberately unequal in width**, and this is the
  part most likely to need retuning. An even split assumes a thumb points
  where its owner thinks it points; in practice the measured angle carries a
  systematic *upward* bias, because a fist held in front of a webcam has the
  wrist below and the knuckles above and the thumb inherits that tilt whichever
  way it's aimed. Split evenly, "up" wins territory belonging to the other
  three — the symptom being up firing on almost anything while down, left and
  right take real effort, which is exactly what was reported in play. Up
  therefore gets the narrowest sector (61 degrees against left/right's 89) and
  the gaps between sectors are what keep a boundary thumb from flickering.
  The current widths are informed guesses at the size of that bias, not
  measurements — the debug readout reports a **median angle** per pose so they
  can be set from what a real hand in front of a real camera produces. Hold
  each of the four poses, read the median, centre the sectors on those four
  numbers.
- **Raw front-camera frames are not mirrored** — that's why the preview
  element carries a `scaleX(-1)` — so the player's right hand sits at *low* x
  and the sign of the thumb vector has to flip. This is the one thing here
  that can't be checked without a real camera in front of a real person, which
  is what the invert checkbox is for.

**Hands mode is hands only.** The movement keys and `R` are dead while it's
running (the `handKeys` checks in the `keydown` handler), because a hands-free
scheme with a keyboard sitting under it isn't one. **Space is the deliberate
exception** — pause and restart have no gesture, and a player mid-run can reach
the spacebar without being able to find a button. `keyup` is deliberately *not*
gated, so a key held across a scheme switch still clears its flag.

`updateMoveDir` / `updateStrafeDir` still resolve keys against hand input with
**a held key winning**, which now only matters on the fallback paths that can
set a key flag with hands enabled. Summing them would let a thumb cancel a
keypress out to a standstill, which is a baffling thing to happen to someone
who has just reached for the keyboard.

Everything the classifier keys off is in `HAND_DEFAULTS` and live-adjustable
from the hand panel, because none of it can be verified from here — there is
no camera in the sandbox, so every threshold shipped as an estimate. Three
things about that panel are worth knowing:

- **`angleOffset` is the important slider, and the calibrate button sets it.**
  The measured thumb angle carries a bias that varies by person and by where
  the camera sits. Rotating the whole decision frame by one number corrects
  all four directions at once; resizing sectors to absorb a bias just makes
  every direction sloppier to buy back the one being stolen. An earlier
  version narrowed the "up" sector to fix up over-triggering, which was
  treating the symptom.
- **`debounce` defaults to 1, i.e. off.** Detection runs at 20Hz, so even two
  frames is 100ms of lag on every change of direction and reads as the
  controls being unresponsive. The gaps between sectors are what stop a
  boundary thumb flickering.
- **`towardDominance` governs the thumb-at-camera pose**, which leans on
  MediaPipe's `z` — the least reliable number the model produces, hence a
  slider rather than a constant.

The panel carries both `.debug-only` and `.hands-only`, so it needs both URL
flags. `?hands=1` strips `hands-only` exactly as `?debug=1` strips
`debug-only`.

`analyzeThumb` (and its thin wrapper `classifyThumb`) is a pure function
precisely so it can be run against synthetic landmark sets with no camera:
build one canonical fist, rotate it, and assert the four directions plus the
rejections (fist with the thumb tucked, open palm, diagonals). That covers
everything except the mirror question above.

### Mouth-open weapon switch

Opening your mouth cycles the weapon, the same job `R` does — `tracker.onMouthOpen`
-> `game.toggleWeapon()` in `main.js`. This is what `jawOpen` is for again;
it went unused when melee moved off the mouth and onto the blink, and switching
is what it's actually suited to. The split is deliberate: **firing wants the
involuntary gesture and switching wants the deliberate one**, so a blink fires
and a held mouth-open switches, and neither can be mistaken for the other.

It fires on the open *edge*, so holding your mouth open cycles once rather
than spinning through the slots. The `mouthThreshold` and `mouthDebounce`
sliders in the tuning panel are load-bearing for this rather than vestigial:
at a low threshold, talking or laughing will change your weapon mid-wave.

### Screen sleep

Playing hands-free means going minutes without a keypress or a mouse move,
which is exactly what the OS reads as idle — so the display sleeps mid-game.
`requestWakeLock()` in `main.js` takes a `navigator.wakeLock` screen lock.

Two things about it are easy to get wrong. The lock is **released
automatically whenever the tab is hidden**, so taking it once at startup isn't
enough — there's a `visibilitychange` handler that takes it again on the way
back. And the request is refused (`NotAllowedError`) unless the document is
visible, which is also why it can't be verified from the sandboxed browser
here: that tab reports itself hidden permanently. The failure is swallowed on
purpose — the game plays fine either way, the screen just dims eventually, and
there is nothing useful to tell the player about it.

### Vendored MediaPipe assets

`vendor/` holds the whole runtime: `tasks-vision/vision_bundle.mjs`,
the four files in `tasks-vision/wasm/`, and both `.task` models. Nothing in
here touches a third-party host, which is the point — the other
four games still use the CDN.

Three reasons, in descending order of weight. The start screen promises nothing
is sent anywhere, and requests to jsdelivr and Google hand every visitor's IP to
someone else, so the claim was not quite true. A blocked or down CDN was the
likeliest remaining way this fails for a stranger. And the folder is meant to
drop onto a site standalone.

Paths resolve against `import.meta.url` in `tracker.js` and `hands.js`, and
against `location.href` in `hands-worker.js` — a classic worker has no
`import.meta`, but its `location` *is* its own script URL in the same
directory, so the two come out identical. That's what keeps the folder
relocatable.

**Sizes, measured rather than guessed.** On disk it is 29MB; over the wire a
first load is about 6.2MB, and the gap is almost all compression:

| asset | on disk | over the wire |
|---|---|---|
| `vision_bundle.mjs` | 0.84MB | 113KB |
| `vision_wasm_internal.wasm` | 8.3MB | 2.37MB |
| `face_landmarker.task` | 3.58MB | 3.58MB (already compressed) |
| `hand_landmarker.task` | 7.46MB | 7.46MB, and only in hands mode |

Two things follow. **The host must compress `.wasm`**, or that 2.37MB becomes
8.3MB and self-hosting is a downgrade on first load; Netlify and Cloudflare
Pages both do by default. And both wasm variants are kept — `FilesetResolver`
picks the nosimd build by feature detection, so dropping it 404s on any browser
without SIMD rather than falling back.

### Link identity

`favicon.svg`, `og.jpg`, and the meta block in `index.html`. **`og:image` and
`og:url` are absolute (`https://djbinder.com/blink/...`) and have to be** — link
scrapers are not browsers and mostly will not resolve a relative path. They are
the only two things on the page that break if the game moves; everything else
is relative and travels with the folder.

The favicon is the in-game reticle. Four strokes with a centre gap is the one
mark from this game that stays legible at 16px — an eye or a corridor doesn't.

**`og.jpg` is generated from the engine**, by `tools/og.html`: it builds a real
scene, renders the game's own view, and composites the type over it. Open that
page on the dev server and save the canvas over `og.jpg` to regenerate.

The composition is deliberately type-first, with the render at 52% opacity
behind a gradient veil, and that is a correction rather than a first instinct.
Three attempts at making the render *the image* all failed, for reasons worth
recording: the game is a flat-shaded raycaster with flat-colour blob enemies,
so a still doesn't flatter it; a still cannot show the mechanic, since the
mechanic is blinking; and a link unfurl renders around 300px wide, where fine
detail is gone and only the type reads. Two practical traps in there too — the
bottom corridor is one tile wide, so enemies placed at wide angles land inside
walls and silently vanish from the shot, and the saber viewmodel sits dead
centre and will cover whatever you put behind it.

JPEG, not PNG: 36KB against 503KB for the same image, because the veiled
backdrop is mostly smooth gradient.

### Start-up progress and failure

**These are one feature, not two.** Between the click and the blink prompt sit
a module import, a ~6MB download, and a permission prompt, and until this
existed all of it looked exactly like a page that had died — a slow connection
and a hard failure were visually identical, and neither said anything. The flow
that reports progress is the flow that reports failure.

`tracker.init()` **throws with `phase` set to `"model"` or `"camera"`**, and
calls `onPhase` as it enters each. That split is the whole basis of the error
copy: a blocked CDN and a denied permission are not the same problem, and
sending someone to their browser's camera settings over a failed download is
worse than saying nothing. `startErrorMessage` checks the phase *first* for
that reason, then the DOMException name:

| cause | message says |
|---|---|
| `phase === "model"` | couldn't load the model, check your connection |
| `InsecureContextError` | needs https — this is **your** bug, not the player's, and it is what a plain-http deploy produces |
| `NotAllowedError` / `SecurityError` | allow it from the address-bar camera icon |
| `NotFoundError` | no camera found, this one can't be played without one |
| `NotReadableError` | another app has your camera |
| `StartTimeoutError` | taking too long, check your connection |

`InsecureContextError` is raised by hand, because `navigator.mediaDevices` is
simply *undefined* on an insecure origin rather than throwing anything useful.

**None of that table can fire if the click handler throws first**, which is
exactly what Safari's Lockdown Mode caused. Lockdown Mode switches off
WebAssembly, WebGL, Web Audio, and `getUserMedia` in one go — every dependency
this game has. `chooseScheme` opens the AudioContext as its *first* statement
(the autoplay policy needs it synchronously inside the gesture), so
`new (window.AudioContext || window.webkitAudioContext)()` threw a TypeError
before anything was hidden or reported, and both mode buttons read as simply
dead. Two rules come out of it:

- **`sound.resume()` must never throw.** It returns early when neither
  constructor exists, and the game plays silently. Every method that touches a
  node already returns early on a null `ctx`, so that guard is the whole fix.
  Anything else called synchronously from a gesture handler owes the same care.
- **The unsupported-browser gate runs before the pointer gate**, on
  `typeof WebAssembly === "undefined"`. It hides the mode buttons and says
  WebAssembly is switched off, without naming a cause. WebAssembly is the
  cheapest of the
  four to test and the least likely to be absent for any other reason; testing
  `getUserMedia` instead would be wrong, since that is also missing on an
  insecure origin and has its own message.

Four things are load-bearing:

- **A hung download throws nothing at all**, so `withTimeout` (20s) is what
  stops the one remaining path to a permanently dead screen.
- **`startAttempt` guards against a superseded attempt.** A timed-out init keeps
  running, and Try again starts another; without the generation check a late
  resolve would take over the page behind a newer one.
- **A failed attempt calls `stop()` on its tracker.** If the failure came after
  `getUserMedia` resolved, the stream is live, and leaving it open means the
  camera indicator stays lit after an error — on a webcam game, of all things.
- **There is deliberately no mouse fallback for players.** Aiming and firing
  *are* the camera; a mouse version is a different and much worse game, and it
  is the version that would get judged. `?debug=1` keeps its substitute for
  testing and that is the only place it is offered.

Tested end to end by pointing `CDN_BASE` at an invalid host (model path) and by
stubbing `navigator.mediaDevices` to reject with each name in turn.


## Architecture

- **Fixed-timestep physics.** `game.js` exposes `advance(dtMs)`, which
  accumulates into fixed `STEP_MS` (16ms) sub-steps for deterministic logic.
  The `main.js` render loop clamps `dt` to 100ms before calling it, so a
  backgrounded tab can't fast-forward through many steps at once (and through
  walls).
- **Both models run in workers.** `face-worker.js` and `hands-worker.js`, each
  a classic worker doing nothing but inference. The main thread pays for a
  `createImageBitmap` and nothing else. Both keep an inline fallback.
- **Two trackers, deliberately separate.** `tracker.js` wraps
  `FaceLandmarker` and pulls all three signals this game needs — head
  yaw/pitch to aim, `eyeBlinkLeft`/`Right` to fire, `jawOpen` to switch weapon
  — off a *single* `detectForVideo()` call, because it needs aim and fire from
  the same face at once. `hands.js` is a separate optional `HandLandmarker`
  wrapper that shares the face tracker's video stream and nothing else. The
  four games in the private repo each carry their own third copy of this
  wrapper; they diverged on purpose, so don't unify them.
- **MediaPipe 0.10.3**, vendored (see below). CPU delegate first for the face
  model, GPU for the hand model — the opposite of the usual advice, and
  measured; see the hand steering section.
- **All sound is synthesized.** `sound.js` builds every effect from
  oscillators and filtered noise bursts with the Web Audio API — there are no
  audio files anywhere. The `AudioContext` can only start from a real user
  gesture, so `sound.resume()` is called synchronously inside the Start
  button's click handler, before anything `await`s. Walking onto an ammo crate
  plays `playAmmoPickup()`, a rising two-note blip deliberately opposite in
  contour to `playEmptyClick()`'s falling chirp — those are the two short cues
  tied to the ammo count, and picking a crate up must never be mistakeable for
  a dry trigger.
- **There is no no-camera fallback, by design.** Aiming and firing *are* the
  camera, so there is nothing to fall back to; camera denial leaves you at the
  start screen, where the start-up failure flow explains why and offers a
  retry. `?debug=1` wires up a keyboard/mouse substitute for testing only —
  mouse moves the reticle, space/click fires, `C` holds the eyes shut, `K`
  equips the saber without cycling to it, `N` skips a wave to reach wave-gated
  content. That path also skips the blink-to-start beat, since there's no
  blink to wait for. **Don't offer it to players**: a mouse version is a
  different and much worse game, and it is the one that would get judged.

## The `?debug=1` convention

The calibration UI (HUD stats like "Track"/"Blinks", the camera preview, and
the sensitivity sliders) hides behind a `.debug-only` CSS class
(`display: none !important`). On load, `main.js` checks
`new URLSearchParams(location.search).has("debug")` and strips `.debug-only`
from matching elements if present. This convention is shared with the four
games still in the private repo. It is the only way to the *tuning* panel and
the camera preview — always test both with and without it. It is no longer the
only way to any settings at all: this game's gear opens a player-facing panel
with volume and blink sensitivity, which is not debug-gated.

## Testing without a real camera

The sandboxed browser tool used in this session cannot grant real camera
access, so camera-dependent behavior has to be tested indirectly:
- Add a temporary `window.__debug = { ... }` hook in `main.js` exposing the
  game instance and any internal state you need to poke, script the scenario
  with `javascript_tool`, then **remove the hook before finishing** — grep for
  `__debug\b` and `TEMP TEST HOOK` to confirm nothing was left behind.
- The automatic no-camera fallback path is exactly what runs when the
  sandboxed browser's camera permission is denied, so it gets exercised on
  every test pass for free.
- This environment's browser cache is unusually sticky per-origin; if edits
  don't seem to show up, it's very likely stale CSS/JS, not a real bug.
- **Audio you start in a test tab keeps playing, and the user can hear it.**
  the proximity drone is a sustained sound driven by
  `sound.setThreats()` from the render loop. Calling `setThreats([...])` by
  hand to measure levels leaves it pinned at whatever danger you passed, and
  because `requestAnimationFrame` is throttled in a backgrounded tab nothing
  ever winds it back down — it just drones on indefinitely. This happened and
  cost a long, confusing detour where the noise was mistaken for a bug in the
  game. Before ending a turn in which you drove audio, call
  `setThreats([])`, `ctx.close()`, and navigate the tab off the page.
  **Clicking the no-camera fallback button is enough to arm this**, since it
  calls `sound.resume()`, and so is driving `loop()` by hand — the loop calls
  `setThreats()` and `setSaberActive()` every iteration, so a hand-driven loop
  pins them exactly as a direct call does. This has now happened twice. The
  reliable teardown is to navigate the tab to `about:blank`, which destroys
  the page and its `AudioContext` outright and doesn't depend on remembering
  which handles a given test left behind.
- The `computer` tool's `key` action (even with `repeat`) fires each
  keydown+keyup pair too fast for a real animation frame to ever observe the
  key as "held" — a held-movement test done that way will read as "nothing
  happened" even when the code is correct. To test held-key behavior for
  real, dispatch `KeyboardEvent`s directly via `javascript_tool`
  (`window.dispatchEvent(new KeyboardEvent("keydown", {key: "d"}))`, wait with
  a real `setTimeout` promise, then dispatch `"keyup"`) so the hold duration
  is under your control.
- **`requestAnimationFrame` never fires in that tab.** It reports
  `document.visibilityState === "hidden"` while you drive it, so the entire
  render loop in `main.js` — `renderHud`, `updateDanger`, `updateSaberHum`,
  `updateSmgAutoFire` — simply never runs. Anything driven from the loop
  therefore reads as "not happening" no matter how correct the code is, and
  it fails *silently*: no error, just a value that stays at its initial
  state. This cost a real detour, with a working saber hum measured as dead
  three times over. Test loop-driven behavior by calling the underlying
  method directly (`sound.setSaberActive(true)`, `game.advance(250)`,
  `game.draw()`) and confirm the one-line call site by reading the served
  source, e.g. `await (await fetch("main.js")).text()`. The corollary is that
  every `advance()`/`draw()`-based test in this file is sound — those step
  the game by hand and never depended on the loop.
