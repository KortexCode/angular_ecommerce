import { computed, Injectable, signal } from '@angular/core';
import { Product, ProductCart } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartListService {  
  cart = signal<ProductCart[]>([]);
  total = computed(() => (this.cart().reduce((total, price) => total + price.quantityPrice, 0).toFixed(2)));
  cartCount = computed(() => this.cart().length);
  constructor() { }

  addProduct(product: Product) {
    const existingProductIndex = this.cart().findIndex(item => item.id === product.id);
    //Si no existe el producto en el carrito, se agrega
    if (existingProductIndex === -1) {
      const newList = [...this.cart(), { ...product, quantity: 1, quantityPrice: product.price }];
      this.cart.set(newList);
    } else {//Si existe el producto en el carrito, se actualiza la cantidad
      alert("El producto ya existe en el carrito");
      return;
    }
  }
  //aumentar la cantidad del producto
  increaseQuantity(id: number) {
    console.log("incrementando cantidad del producto", id);
    const updatedList = this.cart().map(product => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
          quantityPrice: +(product.price * (product.quantity + 1)).toFixed(2)
        };
      }   
      return product;
    });
    this.cart.set(updatedList);
  }
    
  //disminuir la cantidad del producto
  decreaseQuantity(id: number) {
    const updatedList = this.cart().map(product => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity - 1,
          quantityPrice: +(product.price * (product.quantity - 1)).toFixed(2)
        };
      } 
      return product;
    });
    this.cart.set(updatedList);
   
  }
  //eliminar el producto del carrito
  removeProductHandler(id: number) { 
    const updatedList = this.cart().filter((product: Product) => product.id !== id);
    this.cart.set(updatedList);
  }
}
