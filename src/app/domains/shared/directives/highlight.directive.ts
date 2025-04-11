import { Directive, ElementRef, HostListener, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  element = inject(ElementRef);
  renderer = inject(Renderer2);
  ref: any;
  /* ref = inject(RendererFactory2); */ /* investigar */

  constructor() {
    this.ref = this.element.nativeElement;
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.ref, 'cursor', 'pointer');
    this.renderer.setStyle(this.ref, 'transition', 'all 0.4s ease');
  } 

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.ref, 'backgroundColor', 'rgb(63, 212, 63)')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.ref, 'backgroundColor', 'rgb(220, 223, 220)')
  }

}
