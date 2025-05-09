import { Component, inject, Input, OnInit, signal } from '@angular/core';
import {CurrencyPipe, UpperCasePipe} from '@angular/common';
import { ProductsService } from '@services/products.service';
import { Product } from '@shared/models/product.model';
import { CartListService } from '@shared/services/cart-list.service';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export default class ProductDetailComponent implements OnInit{
  //Servicio para carrito(estado global)
  private _cart = inject(CartListService);
  //Servicio para productos
  private _productService = inject(ProductsService);
  //Parámetro de ruta
  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal<string>('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=');
  alt = signal<string>('');
  ngOnInit(): void {
    this._productService.getProduct(this.id).subscribe(
      {
        next: (data) => {
          this.product.set(data);
          this.alt.set(data.title);
          if(data.images.length){
            this.cover.set(data.images[0]);
            
          }
        },
        error: (error) => console.log(error)
      }
    );
  }
  //Agregar al carrito
  addToCardHandler(product: Product | null) {
    if(product) return this._cart.addProduct(product);
  }
  changeCover(image:string) {
    this.cover.set(image);
  }
}
