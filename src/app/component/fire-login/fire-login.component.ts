import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/user';
import { AuthCartService } from 'src/app/service/auth-cart.service';
import { AuthService } from 'src/app/service/auth.service';


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

  constructor(public authCartService:AuthCartService,
              public authService:AuthService,
              public router:Router) { }

  ngOnInit():void{
    this.user=new User("admin", "password");
  }

  public login():void{
    this.authCartService.login(this.email,this.password)
    .then(()=>{
      this.authService.loginUser(this.user).subscribe(data=>{
        localStorage.setItem("usuario",JSON.stringify(this.user));
        localStorage.setItem("token",data.token);
        this.router.navigate(['/customer-list']);
      },err=>{
  
      });
  
    })
    .catch(e=>{
      this.msg=e.message;
    });

    
  }

}
