import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../domain/cart';
import { Customer } from '../domain/customer';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private url:string=environment.apiUrl+'api/cart/';


  constructor(public httpClient:HttpClient) { }

  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem('token');
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
  }

  public createCart(customer:Customer): Observable<any>{
    let headers =  this.createTokenHeader();
    return this.httpClient.post(this.url+'createCart', customer, {headers:headers});
  }

  public addProduct(cart:Cart): Observable<any>{
    let headers =  this.createTokenHeader();
    return this.httpClient.post(this.url+'addProduct',cart,{headers:headers});
  }

  public removeProduct(carId:bigint, proId: string, quantity:number =1):Observable<any>{
    let headers =  this.createTokenHeader();
    return this.httpClient.delete(this.url+'removeProduct/'+carId+'/'+proId+'/'+quantity, {headers:headers});
  }

  public clearCart(carId: number): Observable<any>{
    let headers =  this.createTokenHeader();
    return this.httpClient.delete(this.url+'clearCart/'+carId,{headers:headers});
  }

  public findShoppingProducts(cardId:number): Observable<any>{
    let headers =  this.createTokenHeader();
    return this.httpClient.get(this.url+'findShoppingProducts/'+cardId,{headers:headers});
  }

  public findByCustomerEnable(email: string): Observable<any> {
    let headers =  this.createTokenHeader();
    return this.httpClient.get(this.url + 'findByCustomerEnable/'+email,{headers:headers});
  }

  public findByCustomerShops(email:string): Observable<any> {
    let headers =  this.createTokenHeader();
    return this.httpClient.get(this.url + 'findByCustomerShops/' + email, {headers:headers})
  }

}
