// Shepard–Risset glissando ("barber pole") used for the enemy proximity cue:
// a stack of sine partials one octave apart, all gliding upward together,
// each fading in at the bottom of the range and out at the top. Because the
// partial that wraps is silent at the moment it wraps, the ear never hears a
// reset and the tone seems to climb without ever arriving — which is the
// point, since a threat closing on you should feel like it never resolves.
// BP_PARTIALS and BP_OCTAVES must stay equal. Spacing between neighbouring
// partials is 2^(BP_OCTAVES/BP_PARTIALS), so only when they match is that
// exactly an octave — and only octave-spaced partials fuse into one perceived
// pitch. At 7 partials over 6 octaves the spacing is 1.81, which the ear hears
// as a cluster chord sliding around rather than a single endless tone.
const BP_PARTIALS = 6;
const BP_OCTAVES = 6;
const BP_MIN_HZ = 55; // 55Hz up to 3520Hz
// Full sweeps per second. Halved from 0.09/0.13 — the faster climb read as
// busy rather than ominous. At these values the tone rises 0.27 octaves/sec
// when a threat is distant and 0.66 when one is on top of you.
const BP_BASE_RATE = 0.045;
const BP_RATE_GAIN = 0.065; // extra sweep rate at full danger — climbs faster as they close
// Peak level of a single voice at contact. This, not BP_CURVE, is what
// governs how loud things get up close — at contact the curve input is
// already ~0.93, so it is nearly saturated and only the ceiling moves.
// A Shepard stack is quieter than its ceiling suggests: the Hann window
// keeps most partials well below full, so the rendered peak is about 0.44x
// this figure per voice.
// Measured RMS at contact, one voice, after the limiter: 0.24 -> 0.021,
// 0.6 -> 0.053, 0.7 -> 0.065, 1.2 -> 0.143 (a gunshot is 0.118).
const BP_MAX_GAIN = 1.2;
const BP_CURVE = 2.8; // >1 keeps it quiet at range and ramps late; steep so the last few units do the work

// One voice per nearby enemy, each a minor third below the one above, each
// scaled by *its own* enemy's distance. Four is not an arbitrary cap: stacked
// minor thirds close after four (the fifth is 12 semitones, i.e. the octave,
// doubling the root), so four voices is the complete diminished seventh and a
// fifth enemy would add nothing but level.
const BP_MAX_VOICES = 4;
// A minor third is 3 semitones = a quarter octave. Phase here spans
// BP_OCTAVES octaves, so a quarter octave is this fraction of a full sweep.
const BP_VOICE_PHASE_STEP = 0.25 / BP_OCTAVES;
// Slight trim down the stack so four simultaneous voices thicken rather than
// smear. Distance still does the real work on each voice's level.
const BP_VOICE_TRIM = [1, 0.85, 0.72, 0.6];

// Idle hum for the saber viewmodel, and the base pitch its swing bends from.
// Two saws a few cents apart beat against each other, which is what gives a
// saber hum its restless quality — a single oscillator just sounds like a
// test tone. Deliberately well above the tension drone's 58Hz so the two
// occupy different registers instead of muddying each other, and quiet
// enough to sit under everything.
const SABER_HUM_HZ = 132;
const SABER_HUM_GAIN = 0.055;

// All effects are synthesized with the Web Audio API — no audio files. The
// AudioContext can only start from a real user gesture (browser autoplay
// policy), so callers must invoke resume() synchronously inside a click
// handler, before any await.
export class SoundFX {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.tensionGain = null;
    this.tensionOsc = null;
    this.tensionLfo = null;
    this.tensionLfoGain = null;
  }

  resume() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.5;
      // Limiter on the bus. The proximity drone is sustained and now runs
      // loud up close, so a gunshot or a hit landing on top of four voices
      // could otherwise sum past full scale and hard-clip at the destination.
      // It also ducks the drone under gunfire, which is what you want anyway.
      this.limiter = this.ctx.createDynamicsCompressor();
      this.limiter.threshold.value = -6;
      this.limiter.knee.value = 6;
      this.limiter.ratio.value = 12;
      this.limiter.attack.value = 0.003;
      this.limiter.release.value = 0.15;
      this.masterGain.connect(this.limiter);
      this.limiter.connect(this.ctx.destination);
      this._startTension();
      this._startBarberPole();
      this._startSaberHum();
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
  }

  _startTension() {
    const ctx = this.ctx;
    this.tensionGain = ctx.createGain();
    this.tensionGain.gain.value = 0;
    this.tensionGain.connect(this.masterGain);

    this.tensionOsc = ctx.createOscillator();
    this.tensionOsc.type = "sine";
    this.tensionOsc.frequency.value = 58;
    this.tensionOsc.connect(this.tensionGain);
    this.tensionOsc.start();

    // A slow tremolo (LFO modulating gain) reads as a "pulse"/heartbeat; its
    // rate speeds up as danger increases, alongside the base volume.
    this.tensionLfo = ctx.createOscillator();
    this.tensionLfo.type = "sine";
    this.tensionLfo.frequency.value = 1.1;
    this.tensionLfoGain = ctx.createGain();
    this.tensionLfoGain.gain.value = 0;
    this.tensionLfo.connect(this.tensionLfoGain);
    this.tensionLfoGain.connect(this.tensionGain.gain);
    this.tensionLfo.start();
  }

  _startBarberPole() {
    const ctx = this.ctx;
    this.bpGain = ctx.createGain();
    this.bpGain.gain.value = 1;
    this.bpGain.connect(this.masterGain);

    this.bpVoices = [];
    for (let v = 0; v < BP_MAX_VOICES; v++) {
      const voiceGain = ctx.createGain();
      voiceGain.gain.value = 0;
      voiceGain.connect(this.bpGain);
      const partials = [];
      for (let i = 0; i < BP_PARTIALS; i++) {
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.value = BP_MIN_HZ;
        const gain = ctx.createGain();
        gain.gain.value = 0;
        osc.connect(gain);
        gain.connect(voiceGain);
        osc.start();
        partials.push({ osc, gain, pos: -1 });
      }
      this.bpVoices.push({ gain: voiceGain, partials });
    }
    this.bpPhase = 0;
    this.bpLastTime = ctx.currentTime;
  }

  _startSaberHum() {
    const ctx = this.ctx;
    this.saberGain = ctx.createGain();
    this.saberGain.gain.value = 0;
    this.saberGain.connect(this.masterGain);

    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 1100;
    lp.connect(this.saberGain);

    this.saberOscs = [];
    for (const detune of [-9, 9]) {
      const osc = ctx.createOscillator();
      osc.type = "sawtooth";
      osc.frequency.value = SABER_HUM_HZ;
      osc.detune.value = detune;
      osc.connect(lp);
      osc.start();
      this.saberOscs.push(osc);
    }

    // Slow wobble on pitch — the same idea as the tremolo on the tension
    // drone, but modulating frequency rather than gain, which is what keeps
    // the hum from settling into a steady organ note.
    this.saberLfo = ctx.createOscillator();
    this.saberLfo.type = "sine";
    this.saberLfo.frequency.value = 5.5;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 3.5; // cents
    this.saberLfo.connect(lfoGain);
    for (const osc of this.saberOscs) lfoGain.connect(osc.detune);
    this.saberLfo.start();
  }

  // Declarative, and called every frame from the render loop like
  // setThreats() rather than switched on weapon-change events. A sustained
  // sound driven by events gets stranded on whichever path nobody remembered
  // — death, pause, running dry mid-swing — and then hums forever.
  setSaberActive(active) {
    if (!this.ctx) return;
    this.saberGain.gain.setTargetAtTime(active ? SABER_HUM_GAIN : 0, this.ctx.currentTime, 0.05);
  }

  // dangers: one value per nearby enemy, each in [0,1] where 1 is on top of
  // the player. Order doesn't matter; they're sorted here. The nearest enemy
  // gets the root voice, the next one a minor third below it, and so on, each
  // at a level set by its own distance — so a chord builds as a group closes
  // and thins out again as they're picked off.
  setThreats(dangers) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const list = (dangers || [])
      .map((d) => Math.max(0, Math.min(1, d)))
      .sort((a, b) => b - a);
    const lead = list[0] || 0;

    // Pulled down from 0.2 now that the barber pole carries most of the
    // proximity signal — at the old level the two muddied each other.
    const targetGain = lead * 0.12;
    this.tensionGain.gain.setTargetAtTime(targetGain, now, 0.15);
    this.tensionLfo.frequency.setTargetAtTime(1.1 + lead * 3.5, now, 0.2);
    this.tensionLfoGain.gain.setTargetAtTime(targetGain * 0.7, now, 0.15);

    const dt = Math.max(0, Math.min(0.1, now - this.bpLastTime)); // clamped so a stalled tab can't jump the glide
    this.bpLastTime = now;
    this.bpPhase = (this.bpPhase + (BP_BASE_RATE + lead * BP_RATE_GAIN) * dt) % 1;
    // Ramp targets land one expected frame ahead, so each update's ramp is
    // still in progress when the next replaces it and the pitch never rests.
    const rampAhead = Math.max(0.016, Math.min(0.05, dt));

    const n = BP_PARTIALS;
    for (let v = 0; v < this.bpVoices.length; v++) {
      const voice = this.bpVoices[v];
      // Transposing a Shepard stack down is just an offset in log-frequency,
      // so a minor third below is a phase offset — the whole stack shifts
      // together and stays octave-spaced. +1 keeps the modulo positive.
      const voicePhase = (this.bpPhase - v * BP_VOICE_PHASE_STEP + 1) % 1;
      for (let i = 0; i < n; i++) {
        const p = voice.partials[i];
        const pos = (voicePhase + i / n) % 1;
        const freq = BP_MIN_HZ * Math.pow(2, pos * BP_OCTAVES);
        // Ramp between updates rather than stepping. Setting the frequency
        // outright once per frame makes the glide a staircase — at 60fps and
        // this sweep rate that's a ~5 cent jump 60 times a second, which is
        // audible as roughness on a pure tone rather than a smooth slide.
        // Chained linear ramps interpolate across the gap instead, so the
        // pitch moves continuously however the frame timing lands.
        //
        // The exception is the wrap. A partial passing off the top of the
        // range reappears at the bottom, and ramping that would sweep it
        // audibly back down through every octave and undo the illusion, so
        // that one transition jumps. It's inaudible because the Hann window
        // below is ~0 for a long stretch either side of the wrap.
        if (pos < p.pos) p.osc.frequency.setValueAtTime(freq, now);
        else p.osc.frequency.linearRampToValueAtTime(freq, now + rampAhead);
        p.pos = pos;
        // Hann window over log-frequency — fades each partial in low and out high.
        const amp = 0.5 * (1 - Math.cos(2 * Math.PI * pos));
        p.gain.gain.setTargetAtTime(amp / n, now, 0.03);
      }
      const d = list[v] || 0;
      voice.gain.gain.setTargetAtTime(Math.pow(d, BP_CURVE) * BP_MAX_GAIN * BP_VOICE_TRIM[v], now, 0.12);
    }
  }

  playShoot() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;

    const noise = this._noiseBurst(0.15);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(3200, t);
    filter.frequency.exponentialRampToValueAtTime(280, t + 0.12);
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.6, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(t);
    noise.stop(t + 0.15);

    const osc = ctx.createOscillator();
    osc.type = "square";
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(40, t + 0.1);
    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.5, t);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    osc.connect(oscGain);
    oscGain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.12);
  }

  // A short, higher-pitched bark — deliberately shorter than playShoot()
  // since this fires every ~90ms while the SMG is held; called back to back
  // it reads as an automatic-weapon rattle rather than overlapping thumps.
  playSmgShoot() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;

    const noise = this._noiseBurst(0.06);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(4200, t);
    filter.frequency.exponentialRampToValueAtTime(600, t + 0.05);
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.45, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(t);
    noise.stop(t + 0.06);

    const osc = ctx.createOscillator();
    osc.type = "square";
    osc.frequency.setValueAtTime(220, t);
    osc.frequency.exponentialRampToValueAtTime(70, t + 0.045);
    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.35, t);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    osc.connect(oscGain);
    oscGain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.05);
  }

  // Distinct from playShoot() — a hiss/pop rather than a thump, so an enemy
  // firing at the player doesn't sound like the player's own gun.
  playEnemyShoot() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const noise = this._noiseBurst(0.12);
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.value = 0.8;
    filter.frequency.setValueAtTime(900, t);
    filter.frequency.exponentialRampToValueAtTime(220, t + 0.1);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.45, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.13);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    noise.start(t);
    noise.stop(t + 0.13);
  }

  // A bright rising two-note blip, deliberately the opposite contour to
  // playEmptyClick's falling chirp — those are the two short sounds tied to
  // the ammo count, and picking a crate up should never be mistakeable for a
  // dry trigger. Triangle rather than square keeps it soft enough to read as
  // a reward on top of the drone rather than as another weapon noise.
  playAmmoPickup() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    for (const [freq, offset] of [[660, 0], [988, 0.07]]) {
      const osc = ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, t + offset);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, t + offset);
      gain.gain.exponentialRampToValueAtTime(0.3, t + offset + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.13);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t + offset);
      osc.stop(t + offset + 0.14);
    }
  }

  playEmptyClick() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = "square";
    osc.frequency.setValueAtTime(900, t);
    osc.frequency.exponentialRampToValueAtTime(500, t + 0.04);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.22, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.045);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.05);
  }

  // The swing is a pitch bend, not a noise whoosh. What makes a swung energy
  // blade sound like one is Doppler on a sustained tone — the hum rushing up
  // and back down as it passes — so this is two detuned saws bent up and
  // released, with only a little air noise under them for the sweep.
  playSaberSwing() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;

    for (const detune of [0, 7]) {
      const osc = ctx.createOscillator();
      osc.type = "sawtooth";
      osc.detune.value = detune;
      osc.frequency.setValueAtTime(SABER_HUM_HZ, t);
      osc.frequency.exponentialRampToValueAtTime(SABER_HUM_HZ * 2.6, t + 0.09);
      osc.frequency.exponentialRampToValueAtTime(SABER_HUM_HZ * 0.9, t + 0.3);
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.setValueAtTime(900, t);
      lp.frequency.linearRampToValueAtTime(2400, t + 0.09);
      lp.frequency.linearRampToValueAtTime(700, t + 0.3);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.3, t + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      osc.connect(lp);
      lp.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.31);
    }

    const noise = this._noiseBurst(0.2);
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.Q.value = 1.4;
    bp.frequency.setValueAtTime(400, t);
    bp.frequency.linearRampToValueAtTime(1800, t + 0.08);
    bp.frequency.linearRampToValueAtTime(350, t + 0.19);
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.0001, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.16, t + 0.04);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.19);
    noise.connect(bp);
    bp.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(t);
    noise.stop(t + 0.2);
  }

  playHurt() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(320, t);
    osc.frequency.exponentialRampToValueAtTime(110, t + 0.22);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.25);
  }

  _noiseBurst(durationSec) {
    const ctx = this.ctx;
    const size = Math.max(1, Math.floor(ctx.sampleRate * durationSec));
    const buffer = ctx.createBuffer(1, size, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < size; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    return src;
  }
}
