import { Component, OnInit, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CartListService } from '../../../shared/services/cart-list.service';
import { Product, ProductCart } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  productList = signal<Product[]>([]); //lista de productos en el home
  cartList: ProductCart[] = []; //lista de productos en el carrito
  productData: Product[] = [
    {
      img: `https://picsum.photos/200/300?r=${Math.random()}`,
      title: 'Producto A',
      description: 'Descripción del producto A',
      price: 30.4,
      id: 1,
    },
    {
      img: `https://picsum.photos/200/300?r=${Math.random()}`,
      title: 'Producto B',
      description: 'Descripción del producto B',
      price: 49.50,
      id: 2,
    },
    {
      img: `https://picsum.photos/200/300?r=${Math.random()}`,
      title: 'Producto C',
      description: 'Descripción del producto C',
      price: 12.75,
      id: 3,
    },
    {
      img: `https://picsum.photos/200/300?r=${Math.random()}`,
      title: 'Producto D',
      description: 'Descripción del producto D',
      price: 99.00,
      id: 4,
    },
    {
      img: `https://picsum.photos/200/300?r=${Math.random()}`,
      title: 'Producto E',
      description: 'Descripción del producto E',
      price: 19.99,
      id: 5,
    },
    {
      img: `https://picsum.photos/200/300?r=${Math.random()}`,
      title: 'Producto F',
      description: 'Descripción del producto F',
      price: 29.99,
      id: 6,
    },
    {
      img: `https://picsum.photos/200/300?r=${Math.random()}`,
      title: 'Producto G',
      description: 'Descripción del producto G',
      price: 39.99,
      id: 7,
    },
  ];

  constructor(private _cart: CartListService) {
    
  }

  ngOnInit(): void {
    this.productList.set(this.productData);
  }

  addToCardHandler(product: Product) {
    console.log('agregando producto', product);
    this._cart.addProduct(product);
  }
}
