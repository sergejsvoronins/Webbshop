import { Product } from "../models/product";

export function countProductsPrice (products: Product []){
    let sum : number = 0;
    for (let i=0; i<products.length; i++){
        sum +=(products[i].buyAmount * +products[i].price);
    }
    return sum;
}