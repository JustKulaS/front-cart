import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/domain/customer';
import { Enable } from 'src/app/domain/enable';
import { User } from 'src/app/domain/user';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart.service';
import { CustomerService } from 'src/app/service/customer.service';
import { EnableService } from 'src/app/service/enable.service';

@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.css']
})
export class CustomerSaveComponent implements OnInit {

  public customer:Customer;
  public enables:Enable[];

  public showMsg:boolean=false;
  public messages:string[];
 

  constructor(public customerService:CustomerService, 
              public enableService:EnableService,
              public router:Router,
              public cartService:CartService
              ) { }

  ngOnInit(): void {
    this.customer=new Customer(localStorage.getItem("email"),"","Y","","","342342","C");
    this.findAllEnable();
  }

  public findAllEnable():void{
    this.enables=this.enableService.findall();
  }

  public save():void{
    this.messages=[""];
    this.customerService.save(this.customer).subscribe(ok=>{
      this.showMsg=true;
      this.messages[0]="El customer se grabo correctamente";
      this.cartService.createCart(this.customer).subscribe(ok=>{
        localStorage.setItem('cart',JSON.stringify(ok));
        this.router.navigate(['/firelogin']);
      },err=>{

      });
    },err=>{
      this.showMsg=true;
      this.messages=err.error.error;
    });
  }
}
