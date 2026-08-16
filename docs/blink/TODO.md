# Blink — TODO

Deployed, unlisted, at **djbinder.com/blink/**. The game is in `public/blink/`,
so editing it there is deploying it; these notes sit outside `public/` on
purpose, because everything in it is served.

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
- [x] ~~Get one other person to play it.~~ Damon's wife played it on
      2026-08-16 and it worked for her. That is the shipped blink threshold
      registering on a second face — the single thing most likely to have been
      overfitted to one person, and the reason this was blocking.
      **On her own machine**, so it is a second face, a second camera and a
      second room's lighting — the strong version of the result, and the one
      that licenses shipping. Everything the tracker reads varied at once and
      the defaults still held.
      Still worth asking: whether she touched the sensitivity slider, whether
      she worked out the controls unprompted, and how far she got. Two setups
      is not a distribution, but it is the difference between N=1 and N=2.

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
