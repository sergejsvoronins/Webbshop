import { Product } from "../models/product";
import { displayProducts } from "../products";
//Function that make filterList of productList for navmenu and create HTML
export function showNavFilteredItems (someList : Product [], productType:string){
    let mobiles = someList.filter((mobile)=>mobile.productType===productType)
    displayProducts(mobiles);
}