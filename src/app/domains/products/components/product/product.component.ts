import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  /* img:any = "https://picsum.photos/200/300?r=" + Math.random(); */
  @Input({required: true}) img: string = '';
  @Input({required: true}) title: string = '';
  @Input({required: true}) price: number = 0;

  @Output() addToCard = new EventEmitter();
  constructor() {

  }
  ngOnInit(): void {
   
  }

  addToCardHandler() {
    console.log("tocando")
    this.addToCard.emit(`Producto ${this.title} enviado`)
  }

}
