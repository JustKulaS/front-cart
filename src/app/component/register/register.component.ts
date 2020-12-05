import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCartService } from 'src/app/service/auth-cart.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email:string;
  public password:string;
  public msg:string="";

  constructor(public authCartService:AuthCartService,
              public router:Router) { }

  public register():void{
    this.authCartService.createUser(this.email,this.password)
    .then(()=>{
      this.authCartService.sendEmailVerification();
      this.router.navigate(['/login']);
    })
    .catch(e=>{
      this.msg=e.message;
    });
  }  

  ngOnInit(): void {
  }

}
