import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { CartListService } from '@shared/services/cart-list.service';
import { Product } from '@shared/models/product.model';
import { ProductsService } from '@services/products.service';
import { Subscription } from 'rxjs';
import { CategoriesService } from '@services/categories.service';
import { Category } from '@shared/models/category.model';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-list',
  imports: [ProductComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  private _productService = inject(ProductsService);
  private _categoriesService = inject(CategoriesService);
  private _productsSubscription?: Subscription; // Para manejar la desuscripción (opcional)
  private _cart = inject(CartListService);
  productList = signal<Product[]>([]); //lista de productos en el home
  categoryList = signal<Category[]>([]); //lista de categorias en el home
  @Input() id?: number | null;
  
  constructor() {
      
  }

  ngOnInit(): void {
    this._getCategories();
    if(this.id){
      this._getProductsByCategory(this.id);
    }else {
      this._getProducts();
    }
  }

  ngOnDestroy(): void {
    // Desuscribirse para evitar fugas de memoria (opcional pero recomendado)
    if (this._productsSubscription) {
      this._productsSubscription.unsubscribe();
    }
  }

  private _getProducts() {
    this._productsSubscription = this._productService.getProducts().subscribe({
      next: (products) => {
        this.productList.set(products);
        console.log(products)
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
        this.categoryList.set(categories);
        console.log(categories)
      },
      error: (error) => console.log("error", error)
    })
  }

  private _getProductsByCategory(id:number) {

    this._productService.getProductsByCategory(id).subscribe(
      {
        next: (productsByCategory)=> {
          console.log("producto por", productsByCategory)
          this.productList.set(productsByCategory)
        },
        error: (error) => console.log(error)
      }
    )
  }

  addToCardHandler(product: Product) {
    this._cart.addProduct(product);
  }
}
