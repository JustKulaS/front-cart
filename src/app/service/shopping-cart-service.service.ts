import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShoppingCart } from '../domain/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {

  private url:string=environment.apiUrl+'api/shopping-cart/';


  constructor(public httpClient:HttpClient) { }

 
  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem('token');
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
  }

  public findAll():Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+'findAll',{headers:headers});
  }


  public findById(carId:string):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+'findById/'+carId, {headers:headers});
  }

  public save(shoppingCart:ShoppingCart):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.post(this.url+'save',shoppingCart, {headers:headers});
  }

  public update(shoppingCart:ShoppingCart):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.put(this.url+'update',shoppingCart, {headers:headers});
  }

  public delete(carId:string):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.delete(this.url+'delete/'+carId, {headers:headers});
  }

}
