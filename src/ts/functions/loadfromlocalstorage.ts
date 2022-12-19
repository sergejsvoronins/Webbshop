import { Product } from "../models/product";
export function loadFromlocalStorage (keyName: string) {
    let products : Product [] = (JSON.parse(localStorage.getItem(keyName) || "[]"))
        .map (( products:Product )=>{
        return new Product (products.title,products.url, products.brand, products.color, products.price, products.buyAmount, products.showItem, products.productType)
    })
    return products;
}