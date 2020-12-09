import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enable } from 'src/app/domain/enable';
import { product } from 'src/app/domain/product';
import { EnableService } from 'src/app/service/enable.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  //id del product
  public proId:string;
  public product:product;
  
  public showMsg:boolean=false;
  public messages:string[];
  public enables:Enable[];


  constructor(public router:Router,
              public activatedRoute:ActivatedRoute,
              public productService:ProductService,
              public enableService:EnableService) { }

  ngOnInit(): void {
    let params=this.activatedRoute.params['_value'];
    this.proId=params.proId;
    this.findById();
    this.findAllEnable();
  }

  public findById():void{
    this.productService.findById(this.proId).subscribe(data=>{
      this.product=data;
      console.table(this.product);
    });
  }

  public findAllEnable():void{
    this.enables=this.enableService.findall();
  }

  public update():void{
    this.messages=[""];
    this.productService.update(this.product).subscribe(ok=>{
      this.showMsg=true;
      this.messages[0]="El customer se modifico correctamente";
    },err=>{
      this.showMsg=true;
      this.messages=err.error.error;
    });
  }

  
  public delete():void{
    this.messages=[""];
    this.productService.delete(this.product.proId.toString()).subscribe(ok=>{
      this.showMsg=true;
      this.messages[0]="El customer se borro correctamente";
    },err=>{
      this.showMsg=true;
      this.messages=err.error.error;
    });
  }
}
