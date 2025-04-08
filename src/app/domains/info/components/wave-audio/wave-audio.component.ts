import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js'

@Component({
  selector: 'app-wave-audio',
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.scss'
})
export class WaveAudioComponent {

  @Input({required: true}) audioUrl!: string;
  //Referencia al div
  @ViewChild('waveform') wave!: ElementRef<HTMLDivElement>;
  //Tiene que se una priedad de la clase y no un parametro de entrada
  private _ws!: WaveSurfer;//Debe ser declarado como privado para que no se pueda acceder desde fuera de la clase
  btnPlayText = signal('Play');//Cambia el texto del boton de play y pause
  
  constructor() {
   
  }

  ngAfterViewInit(): void {
    this._ws = WaveSurfer.create({
      container: this.wave.nativeElement,
      waveColor: '#4F4A85',
      progressColor: '#383351',
      url: this.audioUrl,
    });
  }

  onPlayPauseWave() {
    this._ws.playPause();
    this._ws.on('play', () => {
      this.btnPlayText.set('Pause');
    });
    this._ws.on('pause', () => {
      this.btnPlayText.set('Play');
    });
  }
}
