import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingProduct } from 'src/app/domain/shopping-product';
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

  constructor(public shoppingProductService:ShoppingProductServiceService,
              public router:Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    this.shoppingProductService.findAll().subscribe(data=>{
      this.shoppingProducts = data.filter(t=>t.carId === Number(localStorage.getItem("carId")));
      for(let x of this.shoppingProducts){
        this.total += x.total;
      }
    })
  }

  back():void{
    this.router.navigate(["/home"]);
  }

  buy():void{
    this.router.navigate(["/buy"]);
  }

}
