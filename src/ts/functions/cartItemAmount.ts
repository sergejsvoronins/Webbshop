import { Product } from "../models/product";

export function updateCartAmount (products : Product []) {
    let amount : number = 0;
    for (let i = 0; i<products.length; i++){
        amount += products[i].buyAmount;
    }
    return amount;

}