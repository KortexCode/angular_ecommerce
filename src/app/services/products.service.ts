import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../domains/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _http = inject(HttpClient);
  private _url = 'https://api.escuelajs.co/api/v1';

  getProducts(category_id?: string) {
    const url = new URL('https://api.escuelajs.co/api/v1/products/');
    if(category_id){
      url.searchParams.set('categoryId', category_id)
    }
    return this._http.get<Product[]>(url.toString());
  }
  getProduct(id: string | undefined){
    return this._http.get<Product>(`${this._url}/products/${id}`)
  }
 
}
