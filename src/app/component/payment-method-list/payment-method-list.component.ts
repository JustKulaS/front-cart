import { Component, OnInit } from '@angular/core';
import { PaymentMethod } from 'src/app/domain/paymentMethod';
import { PaymentMethodService } from 'src/app/service/paymentMethod.service'


@Component({
  selector: 'app-payment-method-list',
  templateUrl: './payment-method-list.component.html',
  styleUrls: ['./payment-method-list.component.css']
})
export class PaymentMethodListComponent implements OnInit {

  public titulo:String='metodos de pago';
  public paymentMethods:PaymentMethod[];

  public showMsg:boolean=false;
  public messages:string[];

  constructor(public paymentMethodService:PaymentMethodService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    this.paymentMethodService.findAll().subscribe(data=>{
      this.paymentMethods=data;
    },error=>{
      console.error(error);
    });
  }

  public delete(payId:number):void{
    this.messages=[""];
    this.paymentMethodService.delete(payId).subscribe(ok=>{
      this.showMsg=true;
      this.messages[0]="El customer se borro correctamente";
      this.findAll();
    },err=>{
      this.showMsg=true;
      this.messages=err.error.error;
    });
  }


}
