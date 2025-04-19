import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from '@shared/models/product.model';
import { UpperCasePipe } from '@angular/common';
import { TimesAgoPipe } from '@shared/pipes/times-ago.pipe';
import { HighlightDirective } from '@shared/directives/highlight.directive';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-product',
  imports: [RouterLinkWithHref,UpperCasePipe, TimesAgoPipe, HighlightDirective],
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
    this.addToCard.emit(product)
  }

}
