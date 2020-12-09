import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';

import {HttpClientModule} from '@angular/common/http';
import { ProductListComponent } from './component/product-list/product-list.component';
import { PaymentMethodListComponent } from './component/payment-method-list/payment-method-list.component';
import { CustomerSaveComponent } from './component/customer-save/customer-save.component';
import { ProductSaveComponent } from './component/product-save/product-save.component';
import { PaymentMethodSaveComponent } from './component/payment-method-save/payment-method-save.component';


import { FormsModule } from '@angular/forms';
import { CustomerEditComponent } from './component/customer-edit/customer-edit.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { PaymentMethodEditComponent } from './component/payment-method-edit/payment-method-edit.component';


import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './component/register/register.component';
import { LogOutComponent } from './component/logout/logout.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { FireLoginComponent } from './component/fire-login/fire-login.component';
import { HomeComponent } from './component/home/home.component';
import { ShoppingCartListComponent } from './component/shopping-cart-list/shopping-cart-list.component';
import { ShoppingCartSaveComponent } from './component/shopping-cart-save/shopping-cart-save.component';
import { ShoppingProductSaveComponent } from './component/shopping-product-save/shopping-product-save.component';
import { ShoppingProductEditComponent } from './component/shopping-product-edit/shopping-product-edit.component';
import { ShoppingProductListComponent } from './component/shopping-product-list/shopping-product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    ProductListComponent,
    PaymentMethodListComponent,
    CustomerSaveComponent,
    CustomerEditComponent,
    ProductSaveComponent,
    PaymentMethodSaveComponent,
    ProductEditComponent,
    PaymentMethodEditComponent,
    RegisterComponent,
    LogOutComponent,
    ResetPasswordComponent,
    FireLoginComponent,
    HomeComponent,
    ShoppingCartListComponent,
    ShoppingCartSaveComponent,
    ShoppingProductSaveComponent,
    ShoppingProductEditComponent,
    ShoppingProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
