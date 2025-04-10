import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  @Input({required: true}) product!: Product;
 
  @Output() addToCard = new EventEmitter();
  constructor() {

  }
  
  ngOnInit(): void {
   
  }

  addToCardHandler(product: Product) {
    console.log("tocando")
    this.addToCard.emit(product)
  }

}
