# Blink — TODO

Deployed, unlisted, at **djbinder.com/blink/**. The game is in `public/blink/`,
so editing it there is deploying it; these notes sit outside `public/` on
purpose, because everything in it is served.

## Needed before it goes public

- [ ] **Remove `<meta name="robots" content="noindex, nofollow">` from
      `index.html`.** It is there so an unlisted test deploy can't be
      indexed if the URL leaks. Left in, the game is permanently unfindable —
      this is the one item that fails silently and only shows up months later.
- [x] ~~Deploy it.~~ Done, and all three conditions verified against the live
      site: GitHub Pages serves it over HTTPS, gzips the wasm (8.3MB down to
      2.6MB over the wire), and `og.jpg` resolves at the absolute URL baked
      into the OG tags.
- [ ] **Add a link to it from the site**, whenever it stops being unlisted.
      Right now nothing points here, which is the whole reason it is private.
- [ ] **Get one other person to play it.** The single biggest remaining unknown.
      Blink threshold, head-turn range and smoothing are all calibrated to one
      person, one camera, one room's lighting. The settings panel exists so a
      stranger can fix it, but nobody has ever tested whether they can.

## Worth doing, not blocking

- [x] ~~Move the face model into a worker.~~ Done — `face-worker.js`. Both
      paths tested; the frame-time readout under `?debug=1` is how to confirm
      it helped on a real machine, which the sandbox can't.
- [ ] **The other four games fail silently without a camera**, and none of them
      states the privacy position. The privacy copy is twist-safe and could be
      lifted across as-is; the failure UI would need porting.

## Decided against — don't re-litigate without new information

- **Lights-out / torch round.** Rejected as too gimmicky and annoying. The
  implementation was scoped (lighting is one line, plus per-column floor and
  ceiling, plus distance-shading enemies) if it ever comes back.
- **New maps.** Rejected: the transitions are more trouble than the variety is
  worth. A map that *changes* between waves is still open.
- **Mouse-and-space fallback for players.** Aiming and firing are the camera; a
  mouse version is a different and worse game, and that is the version that
  would get judged. `?debug=1` keeps it for testing only.
- **Raising `LATE_WAVE_MAX_ENEMIES` above 16.** A 16-enemy wave already draws
  spawn points out to 15.8 units, nearly the whole set. More enemies lengthen
  the straggler tail rather than the pressure.
- **HP scaling on late waves.** Makes sponges, and with ammo now a fixed
  per-wave budget it would press on the same constraint twice.
- **A photosensitivity warning.** Flashing is expected of the genre and obvious
  from the first wave; a notice would be noise.
