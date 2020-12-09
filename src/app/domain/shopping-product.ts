import { product } from './product';
import { ShoppingCart } from './shopping-cart';

export class ShoppingProduct {

    constructor(
        public shprId:number,
        public proId:string,
        public carId:number,
        public quantity:number,
        public total:number
    ){}
}
