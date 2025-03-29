import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  productList = [
    {
      img: `https://picsum.photos/200/300?r=${Math.random()}`,
      title: 'Producto A',
      price: 30.4,
    },
    {
      img: `https://picsum.photos/200/300?r=${Math.random()}`,
      title: 'Producto B',
      price: 49.50,
    },
    {
      img: `https://picsum.photos/200/300?r=${Math.random()}`,
      title: 'Producto C',
      price: 12.75,
    },
    {
      img: `https://picsum.photos/200/300?r=${Math.random()}`,
      title: 'Producto D',
      price: 99.00,
    },
    {
      img: `https://picsum.photos/200/300?r=${Math.random()}`,
      title: 'Producto E',
      price: 19.99,
    },
  ];

  constructor() {

  }

  productsCreated(event: string) {
    console.log("evento", event);
  }
}
