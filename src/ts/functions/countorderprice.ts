import { Product } from "../models/product";
//Function that count full orer price
export function countOrderPrice (sum: number, products : Product [], index : number){
    sum += (+products[index].price*products[index].buyAmount);
    return sum
}