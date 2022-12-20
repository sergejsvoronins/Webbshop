import { Product } from "../models/product";

export function sortByPriceUp (firstProduct:Product,secondProduct:Product){
    const firstItem = firstProduct.price;
    const secondItem = secondProduct.price;
  
    let comparison : number = 0;
    if (firstItem > secondItem) {
      comparison = 1;
    } else if (firstItem < secondItem) {
      comparison = -1;
    }
    return comparison;
}