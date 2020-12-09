import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingProduct } from 'src/app/domain/shopping-product';
import { CartService } from 'src/app/service/cart.service';
import { ShoppingProductServiceService } from 'src/app/service/shopping-product-service.service';

@Component({
  selector: 'app-shopping-product-list',
  templateUrl: './shopping-product-list.component.html',
  styleUrls: ['./shopping-product-list.component.css']
})
export class ShoppingProductListComponent implements OnInit {

  public titulo:string='Tus productos dentro del carrito';
  public shoppingProducts:ShoppingProduct[];
  public total:number;

  public showMsg:boolean= false;
  public messages:string[];


  constructor(public shoppingProductService:ShoppingProductServiceService,
              public cartService:CartService,
              public router:Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    this.shoppingProductService.findAll().subscribe(data=>{
      this.shoppingProducts = data.filter(t=>t.carId === Number(localStorage.getItem("carId")));
    })
  }

  back():void{
    this.router.navigate(["/home"]);
  }

  buy():void{
    this.router.navigate(["/buy"]);
  }

  clear():void{
    this.cartService.clearCart(Number(localStorage.getItem("carId"))).subscribe(data=>{
      this.messages=[""];
      this.showMsg =true;
      this.messages[0]="se vacio el carrito de compras actualiza para ver los cambios"; 
    },err=>{})
  }

}
