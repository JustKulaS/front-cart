import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCartService } from 'src/app/service/auth-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(public authCartService:AuthCartService,
              public router:Router) { }

  public signOut():void{
    this.authCartService.singOut()
    .then(()=>{
      localStorage.clear();
      this.router.navigate(['/firelogin']);
    })
    .catch(e=>{
      this.router.navigate(['/firelogin']);
    });
    
  }            

  ngOnInit(): void {
  }

}
