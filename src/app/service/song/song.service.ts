/* eslint-disable no-undef */
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SongService {
  isMuted: boolean = true;
  Audio: HTMLAudioElement = new Audio();

  playTheme(theme?: string): void {
    if (this.isMuted) {
      this.Audio.pause();
      this.Audio.muted;
      this.Audio.currentTime = 0;
    } else {
      if (this.Audio.src === theme) return;
      this.Audio.src = theme;
      this.Audio.loop === true;
      this.Audio.play();
    }
  }
}
