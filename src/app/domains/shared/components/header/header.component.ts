import { Component, signal, computed, inject } from '@angular/core';
import { NgIf, CurrencyPipe, DecimalPipe } from '@angular/common';
import { CartListService } from '../../services/cart-list.service';

@Component({
  selector: 'app-header',
  imports: [ NgIf, CurrencyPipe, DecimalPipe ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private _cart = inject(CartListService);
  
  toggleSidebar = signal(false);
  
  // Usar computed para reaccionar a los cambios
  cartList = computed(() => this._cart.cart());
  cartCount = computed(() => this._cart.cartCount());
  total = computed(() => this._cart.total());

  //abrir o cerrar el sidebar
  toggleSidebarHandler() {
    this.toggleSidebar.update(value => !value);
  }

  //aumentar la cantidad del producto
  increaseQuantityHandler(id: number) {
    this._cart.increaseQuantity(id);
  }
    
  //disminuir la cantidad del producto
  decreaseQuantityHandler(id: number) {
    this._cart.decreaseQuantity(id);
  }

  //eliminar el producto del carrito
  removeProductHandler(id: number) { 
    this._cart.removeProductHandler(id);
  }
}
