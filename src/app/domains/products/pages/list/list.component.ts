import { Component, computed, inject, Input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { CartListService } from '@shared/services/cart-list.service';
import { Product } from '@shared/models/product.model';
import { ProductsService } from '@services/products.service';
import { Subscription } from 'rxjs';
import { CategoriesService } from '@services/categories.service';
import { Category } from '@shared/models/category.model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-list',
  imports: [ProductComponent, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export default class ListComponent implements OnInit, OnChanges {
  private _productService = inject(ProductsService);
  private _categoriesService = inject(CategoriesService);
  private _productsSubscription?: Subscription; // Para manejar la desuscripción (opcional)
  private _cart = inject(CartListService);
  productList = signal<Product[]>([]); //lista de productos en el home
  categoryList = signal<Category[]>([]); //lista de categorias en el home
  noProducts = computed(()=> {
    return this.productList().length ? false : true;
  })
  isLoading = signal<boolean>(true);
  @Input() category_id?: string;
  
  constructor() {
      
  }

  ngOnInit(): void {
    this._getCategories(); 
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoading.set(true);
    this._getProducts();
  }

  ngOnDestroy(): void {
    // Desuscribirse para evitar fugas de memoria (opcional pero recomendado)
    if (this._productsSubscription) {
      this._productsSubscription.unsubscribe();
    }
  }

  private _getProducts() {
    this._productsSubscription = this._productService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.productList.set(products);
        this.isLoading.set(false);
        // Aquí puedes realizar otras acciones con los datos recibidos
      },
      error: (error) => {
        console.error('Error al obtener los productos:', error);
        // Aquí puedes mostrar un mensaje de error al usuario,
        // registrar el error, o intentar una recuperación.
      },
      // complete: () => {
      //   console.log('La petición de productos se ha completado.');
      //   // Esto rara vez se usa en peticiones HTTP simples.
      // }
    });
  }

  private _getCategories() {
    this._categoriesService.getCategories().subscribe({
      next: (categories) => {
        const newList = categories.slice(0, 5);
        this.categoryList.set(newList);
      },
      error: (error) => console.log("error", error)
    })
  }

  
  addToCardHandler(product: Product) {
    this._cart.addProduct(product);
  }
}
