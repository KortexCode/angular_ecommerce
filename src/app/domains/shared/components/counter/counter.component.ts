import { AfterViewInit, Component, ElementRef, 
  Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy{
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';
  counter = signal(0);
  counterRef: ReturnType<typeof setInterval> | null = null;

  constructor() {
    //before render, antes que el componente se muestre en la pantalla del usuario
    console.log('contructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges): void {
    //before and during render

    console.log('que cambió', changes);
    console.log('-'.repeat(10));

  }

  ngOnInit(): void {
    console.log('Init');

    this.counterRef = setInterval(() => {
      console.log("contando")
      this.counter.update(prevState => prevState + 1);
    }, this.duration);
    console.log('-'.repeat(10));

  }

  ngAfterViewInit(): void {
    console.log('Afterview');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(): void {
    if (this.counterRef) {
      clearInterval(this.counterRef); //finalizamos el intervalo
    }
    console.log("Finaliza render")
    console.log('-'.repeat(10));
  }
}
