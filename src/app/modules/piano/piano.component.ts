import { Component } from '@angular/core';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html'
})
export class PianoComponent {
  playPianoKey(key: number) {
    const audio = new Audio();
    audio.src = `../../../assets/sounds/piano-keys/note${key}.wav`;
    audio.load();
    audio.play();
  }
}
