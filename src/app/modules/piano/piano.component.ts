import { Component } from '@angular/core';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent {
  playPianoKey(key: number) {
    const audio = new Audio();
    audio.src = `../../../assets/sounds/piano-keys/note${key}.wav`;
    audio.load();
    audio.play();
  }
}
