import { Product } from "../models/product";
export function loadFromlocalStorage (someList: Product []) {
    let products : [] = JSON.parse(localStorage.getItem("productList") || "[]");
    someList = products.map (( products:Product )=>{
        return new Product (products.title,products.url, products.brand, products.color, products.price, products.buyAmount)
    })
}