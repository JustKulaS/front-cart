import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/domain/product';
import { ShoppingCart } from 'src/app/domain/shopping-cart';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { ShoppingCartServiceService } from 'src/app/service/shopping-cart-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo:string='Lista de productos';
  public products:product[];
  public name:string;
  public shoppingCarts:ShoppingCart;

  constructor(public productService:ProductService,
               public router:Router,
               public cartService:CartService,
               public shoppingCartService:ShoppingCartServiceService
    ) { }

  rol:string;

  isvalid():any{
    this.rol=localStorage.getItem("customer")
    console.log(this.rol);
    if(this.rol==="C"){
      return true;
    }else{
      return false;
    }
  }



  ngOnInit(): void {
    
    this.isvalid();
    if(this.rol === "C"){
    this.findAll();
    this.cartEnable()
    }
  }


  addProduct():void{
    this.router.navigate(["/addProduct"]);  
  }

  findAll():void{
    this.productService.findAll().subscribe(data=>{
      this.products=data;
    },error=>{
      console.error(error);
    });
  }

  findProduct():void{
    this.productService.findAll().subscribe(data=>{
      this.products=data.filter(t=>t.name === this.name);
      localStorage.setItem('proId',this.products[0].proId.toString());
    },error=>{
      console.error(error);
    });
  }

  cartEnable():void{
    this.shoppingCartService.findAll().subscribe(data=>{
      this.shoppingCarts = data.filter(t=>t.email === localStorage.getItem("email") && t.enable === "Y")
      localStorage.setItem('carId',this.shoppingCarts[0].carId);
    })

  }


  refresh():void{
    this.productService.findAll().subscribe(data=>{
      this.products=data;
    },error=>{
      console.error(error);
    });
  }
}
