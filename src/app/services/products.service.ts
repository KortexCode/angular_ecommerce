import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../domains/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _http = inject(HttpClient);
  private _url = 'https://fakestoreapi.com/products';

  getProducts() {
    return this._http.get<Product[]>(this._url);
  }
}
