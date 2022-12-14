import { Product } from "../models/product";

export function countOrderPrice (sum: number, products : Product [], index : number){
    sum += (+products[index].price*products[index].buyAmount);
    return sum
}