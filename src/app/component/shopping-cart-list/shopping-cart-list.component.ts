import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/domain/shopping-cart';
import { ShoppingCartServiceService } from 'src/app/service/shopping-cart-service.service';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {
  
  public titulo:string='Tu carro de compra';
  public shoppingCarts:ShoppingCart;
  constructor(public shoppingCartService:ShoppingCartServiceService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    this.shoppingCartService.findAll().subscribe(data=>{
      this.shoppingCarts=data.filter(t=>t.email === localStorage.getItem("email") && t.enable === "Y");
      console.info(data);
    },error=>{
      console.error(error);
    });
  }

}
