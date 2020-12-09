import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/user';
import { AuthCartService } from 'src/app/service/auth-cart.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email:string;
  public password:string;
  public msg:string="";
  public user:User;

  constructor(public authCartService:AuthCartService,
              public router:Router,
              public authService:AuthService
              ) { }

  public register():void{
    this.authCartService.createUser(this.email,this.password)
    .then(()=>{
      this.authCartService.sendEmailVerification();
      localStorage.setItem("email", this.email);
      this.authService.loginUser(this.user).subscribe(data=>{
        localStorage.setItem("usuario",JSON.stringify(this.user));
        localStorage.setItem("token",data.token);
        this.router.navigate(['/customer-save']);
      },err=>{
  
      });
      
    })
    .catch(e=>{
      this.msg=e.message;
    });
  }  

  ngOnInit(): void {
    this.user=new User("admin", "password");
  }

}
