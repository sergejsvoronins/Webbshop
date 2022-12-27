import { Product } from "../models/product";
export function loadFromlocalStorage () {
    let products : Product [] = (JSON.parse(localStorage.getItem("productList") || "[]"))
        .map (( products:Product )=>{
        return new Product (products.id, products.title,products.url, products.brand, products.color, products.price, products.buyAmount, products.showItem, products.productType, products.description)
    })
    return products;
}