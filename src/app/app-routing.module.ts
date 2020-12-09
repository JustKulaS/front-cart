import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerEditComponent } from './component/customer-edit/customer-edit.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { CustomerSaveComponent } from './component/customer-save/customer-save.component';
import { FireLoginComponent } from './component/fire-login/fire-login.component';
import { LogOutComponent } from './component/logout/logout.component';
import { PaymentMethodEditComponent } from './component/payment-method-edit/payment-method-edit.component';
import { PaymentMethodListComponent } from './component/payment-method-list/payment-method-list.component';
import { PaymentMethodSaveComponent } from './component/payment-method-save/payment-method-save.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductSaveComponent } from './component/product-save/product-save.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { HomeComponent } from './component/home/home.component';
import { ShoppingCartListComponent } from './component/shopping-cart-list/shopping-cart-list.component';
import { ShoppingProductSaveComponent } from './component/shopping-product-save/shopping-product-save.component';
import { ShoppingProductListComponent } from './component/shopping-product-list/shopping-product-list.component';
import { ShoppingCartSaveComponent } from './component/shopping-cart-save/shopping-cart-save.component';
import { ShoppingProductEditComponent } from './component/shopping-product-edit/shopping-product-edit.component';


const redirectUnauthorizedToLogin=()=>redirectUnauthorizedTo(['firelogin']);

const routes: Routes = [
  {path:'customer-list',component:CustomerListComponent,canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'product-list',component:ProductListComponent,canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'paymentMethod-list',component:PaymentMethodListComponent,canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'customer-save',component:CustomerSaveComponent,canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'customer-edit/:email',component:CustomerEditComponent,canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'product-save',component:ProductSaveComponent,canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'product-edit/:proId',component:ProductEditComponent,canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'paymentMethod-save',component:PaymentMethodSaveComponent,canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'paymentMethod-edit/:payId',component:PaymentMethodEditComponent,canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'',component:FireLoginComponent},
  {path:'firelogin',component:FireLoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'home',component:HomeComponent,
              canActivate:[AngularFireAuthGuard],
              data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'logout',component:LogOutComponent,
              canActivate:[AngularFireAuthGuard],
              data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'shopping-cart-list',component:ShoppingCartListComponent,
              canActivate:[AngularFireAuthGuard],
              data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'addProduct',component:ShoppingProductSaveComponent,
              canActivate:[AngularFireAuthGuard],
              data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'shopping-product-list',component:ShoppingProductListComponent,
              canActivate:[AngularFireAuthGuard],
              data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'buy',component:ShoppingCartSaveComponent,
              canActivate:[AngularFireAuthGuard],
              data:{authGuardPipe:redirectUnauthorizedToLogin}},      
  {path:'history',component:ShoppingProductEditComponent,
              canActivate:[AngularFireAuthGuard],
              data:{authGuardPipe:redirectUnauthorizedToLogin}},             
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
