import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  constructor() { }

  observerHandler(url:string, node:HTMLElement){
    const observer = new IntersectionObserver((entries) => {
      entries.filter( entry => entry.isIntersecting).forEach(productImg => {
        productImg.target.setAttribute('src', url);
      })
    })
    observer.observe(node);
  }
}
