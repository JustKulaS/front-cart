import { Component, OnInit } from '@angular/core';
import { Enable } from 'src/app/domain/enable';
import { PaymentMethod } from 'src/app/domain/paymentMethod';
import { EnableService } from 'src/app/service/enable.service';
import { PaymentMethodService } from 'src/app/service/paymentMethod.service';


@Component({
  selector: 'app-payment-method-save',
  templateUrl: './payment-method-save.component.html',
  styleUrls: ['./payment-method-save.component.css']
})
export class PaymentMethodSaveComponent implements OnInit {

  public paymentMethod:PaymentMethod;
  public enables:Enable[];

  public showMsg:boolean=false;
  public messages:string[];

  constructor(public paymentMethodService:PaymentMethodService, 
              public enableService:EnableService) { }

  ngOnInit(): void {
    this.paymentMethod= new PaymentMethod(null,"Y","");
    this.findAllEnable();    
  }

  public findAllEnable():void{
    this.enables=this.enableService.findall();
  }

  public save():void{
    this.messages=[""];
    this.paymentMethodService.save(this.paymentMethod).subscribe(ok=>{
      this.showMsg=true;
      this.messages[0]="El paymentMethod se grabo correctamente";
    },err=>{
      this.showMsg=true;
      this.messages=err.error.error;
    });
  }

}
