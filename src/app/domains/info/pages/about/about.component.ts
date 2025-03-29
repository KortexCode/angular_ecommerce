import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';

@Component({
  selector: 'app-about',
  imports: [CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  //Se crean dos propiedades tipo signal para manejar reactividad
  duration = signal(1000);
  message = signal('mensaje');
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
