import { Injectable } from '@angular/core';
import { Product, ProductCart } from '../domains/shared/models/product.model';
import { BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedCardListService {
  private sharedCardList = new BehaviorSubject<ProductCart[]>([]);
  sharedCardList$ = this.sharedCardList.asObservable();

  constructor() { }
  //actualizar el carrito compartido
  updateAddToCart(products: ProductCart[]) {
    this.sharedCardList.next(products);
  }
}
