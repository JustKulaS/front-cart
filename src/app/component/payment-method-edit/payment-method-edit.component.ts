import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enable } from 'src/app/domain/enable';
import { PaymentMethod } from 'src/app/domain/paymentMethod';
import { EnableService } from 'src/app/service/enable.service';
import { PaymentMethodService } from 'src/app/service/paymentMethod.service';

@Component({
  selector: 'app-payment-method-edit',
  templateUrl: './payment-method-edit.component.html',
  styleUrls: ['./payment-method-edit.component.css']
})
export class PaymentMethodEditComponent implements OnInit {

  //id del paymentMethod
  public payId:number;
  public paymentMethod:PaymentMethod;
  public enables:Enable[];

  public showMsg:boolean=false;
  public messages:string[];

  constructor(public router:Router,
              public activatedRoute:ActivatedRoute,
              public paymentMethodService:PaymentMethodService,
              public enableService:EnableService) { }

  ngOnInit(): void {
    let params=this.activatedRoute.params['_value'];
    this.payId=params.payId;
    this.findById();
    this.findAllEnable();
  }

  public findById():void{
    this.paymentMethodService.findById(this.payId).subscribe(data=>{
      this.paymentMethod=data;
      console.table(this.paymentMethod);
    });
  }

  public findAllEnable():void{
    this.enables=this.enableService.findall();
  }

  public update():void{
    this.messages=[""];
    this.paymentMethodService.update(this.paymentMethod).subscribe(ok=>{
      this.showMsg=true;
      this.messages[0]="El customer se modifico correctamente";
    },err=>{
      this.showMsg=true;
      this.messages=err.error.error;
    });


  }

  public delete():void{
    this.messages=[""];
    this.paymentMethodService.delete(this.paymentMethod.payId).subscribe(ok=>{
      this.showMsg=true;
      this.messages[0]="El customer se borro correctamente";
    },err=>{
      this.showMsg=true;
      this.messages=err.error.error;
    });
  }

}
