import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCartService } from 'src/app/service/auth-cart.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public email:string;
  public password:string;
  public msg:string="";

  constructor(public authCartService:AuthCartService,
              public router:Router) { }

  public reset():void{
    this.authCartService.sendPasswordResetEmail(this.email)
    .then(()=>{
      this.msg="Email Send";
      this.router.navigate(['/firelogin'])
    })
    .catch(e=>{
      this.msg=e.message;
    });
  }
  
  ngOnInit(): void {
  }

}
