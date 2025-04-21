import { Routes } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';
export const routes: Routes = [
  {path:'', component: LayoutComponent, children: [
    {path:'home', title: 'Home', loadComponent: () => import('@products/pages/list/list.component')},
    {path:'about', title: 'About', loadComponent: () => import('@info/pages/about/about.component')},
    {path:'product/:id', title: 'Product Detail', loadComponent: () => import('@products/pages/product-detail/product-detail.component')},
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'**', title: 'Not Found', loadComponent: () => import('@info/pages/not-found/not-found.component')},
  ]},
];
