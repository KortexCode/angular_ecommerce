import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';

@Component({
  selector: 'app-about',
  imports: [CounterComponent, NgIf, WaveAudioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export default class AboutComponent {
  //Se crean dos propiedades tipo signal para manejar reactividad
  duration = signal(1000);
  message = signal('mensaje');

  audioUrl = signal('/assets/luna_wakuwaku.mp3');
  //Se crean dos métodos para manejar los cambios de esas propiedades
  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }
  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
