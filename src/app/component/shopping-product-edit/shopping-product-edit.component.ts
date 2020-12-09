import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/domain/shopping-cart';
import { ShoppingCartServiceService } from 'src/app/service/shopping-cart-service.service';

@Component({
  selector: 'app-shopping-product-edit',
  templateUrl: './shopping-product-edit.component.html',
  styleUrls: ['./shopping-product-edit.component.css']
})
export class ShoppingProductEditComponent implements OnInit {


  public shoppingCarts:ShoppingCart[];

  constructor(public shoppingCartService:ShoppingCartServiceService) { }

  ngOnInit(): void {
    this.findAllCart();
  }

  findAllCart(){
    this.shoppingCartService.findAll().subscribe(data=>{
      this.shoppingCarts=data.filter(t=>t.email === localStorage.getItem("email") && t.enable === "N");
      console.log(this.shoppingCarts);
    });
  }


}
