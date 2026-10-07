/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Web Audio synthesizer para ambiente lúdico suave e calmo
// Pentatônica: Sol (392Hz), Lá (440Hz), Si (493.88Hz), Ré (587.33Hz), Mi (659.25Hz), Sol (783.99Hz)
const PENTATONIC_SCALE = [392.0, 440.0, 493.88, 587.33, 659.25, 783.99];

export class AmbientSoundGenerator {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private lowpassFilter: BiquadFilterNode | null = null;
  private isPlaying = false;
  private timerId: number | null = null;

  public async start(): Promise<void> {
    if (this.isPlaying) return;

    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

    if (!AudioContextClass) return;

    this.ctx = new AudioContextClass();
    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    const now = this.ctx.currentTime;

    // Master gain com fade in de 1 segundo até 0.03
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.0001, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.03, now + 1.0);

    // Filtro passa-baixa em 1200 Hz
    this.lowpassFilter = this.ctx.createBiquadFilter();
    this.lowpassFilter.type = 'lowpass';
    this.lowpassFilter.frequency.setValueAtTime(1200, now);
    this.lowpassFilter.Q.setValueAtTime(1.0, now);

    this.lowpassFilter.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);

    this.isPlaying = true;
    this.scheduleNextNote();
  }

  private scheduleNextNote = (): void => {
    if (!this.isPlaying || !this.ctx || !this.lowpassFilter) return;

    this.playSoftNote();

    // Intervalo aleatório de 2 a 4 segundos
    const nextIntervalMs = 2000 + Math.random() * 2000;
    this.timerId = window.setTimeout(this.scheduleNextNote, nextIntervalMs);
  };

  private playSoftNote = (): void => {
    if (!this.ctx || !this.lowpassFilter || this.ctx.state !== 'running') return;

    const freq =
      PENTATONIC_SCALE[Math.floor(Math.random() * PENTATONIC_SCALE.length)];

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Ataque suave (60ms) e decaimento exponencial de 1.2s
    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.linearRampToValueAtTime(0.8, now + 0.06);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    osc.connect(noteGain);
    noteGain.connect(this.lowpassFilter);

    osc.start(now);
    osc.stop(now + 1.25);
  };

  public stop(): void {
    if (!this.isPlaying || !this.ctx || !this.masterGain) {
      this.isPlaying = false;
      return;
    }

    if (this.timerId !== null) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }

    const now = this.ctx.currentTime;
    // Fade out de 1 segundo
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.0);

    const ctxToClose = this.ctx;
    window.setTimeout(() => {
      try {
        if (ctxToClose.state !== 'closed') {
          ctxToClose.close();
        }
      } catch {
        // Ignora erros ao fechar
      }
    }, 1050);

    this.ctx = null;
    this.masterGain = null;
    this.lowpassFilter = null;
    this.isPlaying = false;
  }

  public getActive(): boolean {
    return this.isPlaying;
  }
}
