import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import {CustomerHomeComponent} from "./customer-home/customer-home.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";
import {CustomerCreateComponent} from "./customer-create/customer-create.component";
const routes:Routes=[
  {
    path: 'home',
    component: CustomerHomeComponent,
  },
  {
    path: 'list',
    component: CustomerListComponent,
  },
  {
    path: 'edit',
    component: CustomerEditComponent,
  },
  {
    path: 'create',
    component: CustomerCreateComponent,
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule,]
})
export class CustomerModule { }
