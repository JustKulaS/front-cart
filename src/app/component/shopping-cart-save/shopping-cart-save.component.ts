import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/domain/customer';
import { Enable } from 'src/app/domain/enable';
import { PaymentMethod } from 'src/app/domain/paymentMethod';
import { ShoppingCart } from 'src/app/domain/shopping-cart';
import { CartService } from 'src/app/service/cart.service';
import { CustomerService } from 'src/app/service/customer.service';
import { EnableService } from 'src/app/service/enable.service';
import { PaymentMethodService } from 'src/app/service/paymentMethod.service';
import { ShoppingCartServiceService } from 'src/app/service/shopping-cart-service.service';

@Component({
  selector: 'app-shopping-cart-save',
  templateUrl: './shopping-cart-save.component.html',
  styleUrls: ['./shopping-cart-save.component.css']
})
export class ShoppingCartSaveComponent implements OnInit {

  public showMsg:boolean=false;
  public messages:string[];

  public shoppingCart:ShoppingCart;
  public customer:Customer;
  public paymentMethods:PaymentMethod[];
  public enables:Enable[];
  

  constructor(public shoppingCartService:ShoppingCartServiceService,
              public cartService:CartService,
              public customerService:CustomerService,
              public paymethodService:PaymentMethodService,
              public enableService:EnableService) { }

  ngOnInit(): void {
    this.shoppingCart = new ShoppingCart(0,'',0,0,0,'','','','');
    this.customer = new Customer("","","","","","","");
    this.getShoppingCart();
    this.paymentMethod();
    this.findAllEnable();
    this.getCustomer();
  }


  paymentMethod():void{
    this.paymethodService.findAll().subscribe(data=>{
      this.paymentMethods = data;
    })
  }

  getShoppingCart(){
    this.shoppingCartService.findById(localStorage.getItem("carId")).subscribe(data=>{
      this.shoppingCart = data;
      console.log(this.shoppingCart);
    }, err=>{

    })
  }

  getCustomer(){
    this.customerService.findById(localStorage.getItem("email")).subscribe(data=>{
      this.customer=data;
    })
  }

  createCart(){
    this.cartService.createCart(this.customer).subscribe(data=>{
      this.shoppingCart = data;
      localStorage.setItem("carId",this.shoppingCart.carId.toString());
    },err=>{
    })
  }

  
  public findAllEnable():void{
    this.enables=this.enableService.findall();
  }

  update(){
    this.messages=[""];
    this.shoppingCartService.update(this.shoppingCart).subscribe(ok=>{
      this.showMsg=true;
      this.messages[0]="El pago ha sido exitoso puede volver";
      this.createCart();
    },
      err=>{
        this.showMsg=true;
        this.messages=err.error.error;
      })
  }

}
