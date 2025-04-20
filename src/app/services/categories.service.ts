import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private _http = inject(HttpClient);
  private _urlRoot = 'https://api.escuelajs.co/api/v1/categories'

  constructor() { }

  getCategories() {
    return this._http.get<Category[]>(`${this._urlRoot}`)
  }
}
