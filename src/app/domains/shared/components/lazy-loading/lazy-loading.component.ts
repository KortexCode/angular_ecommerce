import { AfterViewInit, Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { ObserverService } from '@shared/services/observer.service';

@Component({
  selector: 'app-lazy-loading',
  imports: [],
  templateUrl: './lazy-loading.component.html',
  styleUrl: './lazy-loading.component.scss'
})
export class LazyLoadingComponent implements AfterViewInit{
  private _observerService = inject(ObserverService);
  imgRef = inject(ElementRef); //Usando inject()
 /*  @ViewChild('imgRef') imgProduct!: ElementRef; Usando viewChild*/ 
  @Input({required: true}) url: string = '';
  @Input({required: true}) alt: string = '';
  bgImg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";

  constructor() {

  }

  ngAfterViewInit(): void {
    const imgElement =  this.imgRef.nativeElement.childNodes[0];
   /*  this._observerService.observerHandler(this.url, this.imgProduct.nativeElement); */
    this._observerService.observerHandler(this.url, imgElement);
  }
}
