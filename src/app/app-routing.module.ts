import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, PreloadingStrategy, RouterModule, Routes} from "@angular/router";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";
import {CustomerHomeComponent} from "./customer/customer-home/customer-home.component";
import {CustomerModule} from "./customer/customer.module";
import * as path from "path";


// const routes1: Routes = [
//   {
//     path: 'customer/home',
//     component: CustomerHomeComponent,
//   },
//   {
//     path: 'customer/list',
//     component: CustomerListComponent,
//   },
//   {
//     path: 'customer/edit',
//     component: CustomerEditComponent,
//   },
//   {
//     path: 'customer/create',
//     component: CustomerCreateComponent,
//   },
// ];
// const routes2: Routes = [{
//   path: 'customer',
//   children: [
//     {
//       path: '',
//       loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
//     }
//   ]
// }]
const routes3:Routes=[{
  path:'customer',
  loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
},
  {
    path:'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes3,{preloadingStrategy:PreloadAllModules}),
// RouterModule.forRoot(routes3),
  ],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
