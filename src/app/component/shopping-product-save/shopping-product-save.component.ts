import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/domain/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-shopping-product-save',
  templateUrl: './shopping-product-save.component.html',
  styleUrls: ['./shopping-product-save.component.css']
})
export class ShoppingProductSaveComponent implements OnInit {

  public cart:Cart;
  public showMsg:boolean= false;
  public messages:string[];

  constructor(public cartService:CartService,
              public router:Router) { }



  ngOnInit(): void {
    this.cart = new Cart(Number(localStorage.getItem("carId")),localStorage.getItem("proId"),0)
  }

  addProduct():void{
    this.cartService.addProduct(this.cart).subscribe(data=>{
      this.messages=[""];
      this.showMsg =true;
      this.messages[0]="se agrego al carrito de compras";     
    });
  }

}
