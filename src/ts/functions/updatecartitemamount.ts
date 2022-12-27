import { Product } from "../models/product";
//Function that update cartItemAmount by checking property "buyAmount" and sum them
export function updateCartItemAmount (products : Product []) {
    let amount : number = 0;
    for (let i = 0; i<products.length; i++){
        amount += products[i].buyAmount;
    }
    if (amount===0){
        return "";
    }
    else {
        return amount.toString();
    }

}