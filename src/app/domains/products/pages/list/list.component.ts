import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { CartListService } from '@shared/services/cart-list.service';
import { Product } from '@shared/models/product.model';
import { ProductsService } from '@services/products.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  private _productService = inject(ProductsService);
  private _productsSubscription?: Subscription; // Para manejar la desuscripción (opcional)
  private _cart = inject(CartListService);
  productList = signal<Product[]>([]); //lista de productos en el home
  
  constructor() {
      
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    // Desuscribirse para evitar fugas de memoria (opcional pero recomendado)
    if (this._productsSubscription) {
      this._productsSubscription.unsubscribe();
    }
  }

  getProducts() {
    this._productsSubscription = this._productService.getProducts().subscribe({
      next: (products) => {
        this.productList.set(products);
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

  addToCardHandler(product: Product) {
    this._cart.addProduct(product);
  }
}
