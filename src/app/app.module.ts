import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { HttpClientModule} from "@angular/common/http";
import { ProductComponent } from './product/product.component';
// import {SharedModule} from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerHomeComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // HttpClientModule,
    // SharedModule
  ],
  providers: [CustomerListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
