import { Customer } from './customer';
import { PaymentMethod } from './paymentMethod';
import { ShoppingProduct } from './shopping-product';

export class ShoppingCart {

    constructor(
        public carId:number,
        public email:string,
        public payId:number,
        public items:number,
        public total:number,
        public enable:string,
        public address:string,
        public date:string,
        public cardNumber:string,
    ){}
}
