import { Product } from "../models/product";
import { displayProducts } from "../products";

export function showNavFilteredItems (someList : Product [], productType:string){
    let mobiles = someList.filter((mobile)=>mobile.productType===productType)
    displayProducts(mobiles);
}