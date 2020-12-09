import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/domain/customer';
import { User } from 'src/app/domain/user';
import { AuthCartService } from 'src/app/service/auth-cart.service';
import { AuthService } from 'src/app/service/auth.service';
import { CustomerService } from 'src/app/service/customer.service';


@Component({
  selector: 'app-fire-login',
  templateUrl: './fire-login.component.html',
  styleUrls: ['./fire-login.component.css']
})
export class FireLoginComponent implements OnInit {

  public email:string;
  public password:string;
  public msg:string="";
  public user:User;
  public customer:Customer;

  constructor(public authCartService:AuthCartService,
              public authService:AuthService,
              public router:Router,
              public costumerService:CustomerService) { }

  ngOnInit():void{
    this.user=new User("admin", "password");
  }

  public login():void{
    this.authCartService.login(this.email,this.password)
    .then(()=>{
      this.authService.loginUser(this.user).subscribe(data=>{
        localStorage.setItem("usuario",JSON.stringify(this.user));
        localStorage.setItem("token",data.token);
        this.costumerService.findById(this.email).subscribe(data=>{
          localStorage.setItem("customer",data.rol);
          localStorage.setItem("email",data.email);
          this.router.navigate(['/home']);
        },
          
        err=>{

        });
      },err=>{
  
      });
  
    })
    .catch(e=>{
      this.msg=e.message;
    });

    
  }

}
