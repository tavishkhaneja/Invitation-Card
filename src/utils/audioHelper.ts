/**
 * Gentle ambient ceremonial drone generator using Web Audio API.
 * Ethereal, gentle harmonic resonance (warm tanpura chords: C#3, G#3, C#4)
 * Completely self-contained, no external asset dependencies.
 */

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let oscillators: OscillatorNode[] = [];
let isPlaying = false;

export const toggleAmbientMusic = (enable?: boolean): boolean => {
  if (typeof window === 'undefined') return false;

  const targetState = enable !== undefined ? enable : !isPlaying;

  if (targetState) {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtx) {
        audioCtx = new AudioContextClass();
      }

      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      // Stop existing if any
      oscillators.forEach(osc => {
        try { osc.stop(); } catch {}
      });
      oscillators = [];

      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0, audioCtx.currentTime);
      // Gentle fade in
      masterGain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 2.5);
      masterGain.connect(audioCtx.destination);

      // Traditional warm meditative drone frequencies (C# base: 138.59Hz, 207.65Hz, 277.18Hz)
      const frequencies = [138.59, 207.65, 277.18, 415.30];

      frequencies.forEach((freq, idx) => {
        if (!audioCtx || !masterGain) return;
        const osc = audioCtx.createOscillator();
        const oscGain = audioCtx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        // Subtle slow chorus detune
        const detuneLfo = audioCtx.createOscillator();
        const detuneGain = audioCtx.createGain();
        detuneLfo.frequency.setValueAtTime(0.2 + idx * 0.1, audioCtx.currentTime);
        detuneGain.gain.setValueAtTime(3.5, audioCtx.currentTime);
        detuneLfo.connect(detuneGain);
        detuneGain.connect(osc.frequency);
        detuneLfo.start();

        const volume = 0.25 / (idx + 1);
        oscGain.gain.setValueAtTime(volume, audioCtx.currentTime);

        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        oscillators.push(osc);
      });

      isPlaying = true;
      return true;
    } catch {
      isPlaying = false;
      return false;
    }
  } else {
    // Fade out smoothly
    if (audioCtx && masterGain) {
      try {
        masterGain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
        setTimeout(() => {
          oscillators.forEach(osc => {
            try { osc.stop(); } catch {}
          });
          oscillators = [];
        }, 900);
      } catch {}
    }
    isPlaying = false;
    return false;
  }
};

export const getMusicPlayingState = () => isPlaying;
