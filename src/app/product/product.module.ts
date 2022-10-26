import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ProductListComponent } from './product-list/product-list.component';
import {ProductComponent} from "./product.component";
const routes:Routes=[{
  path:"",
  component:ProductListComponent
}]


@NgModule({
  declarations: [
    ProductListComponent,ProductComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ]
})
export class ProductModule { }
