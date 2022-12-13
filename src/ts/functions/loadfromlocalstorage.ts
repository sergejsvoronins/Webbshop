import { Product } from "../models/product";
export function loadFromlocalStorage (products: Product []) {
    products = (JSON.parse(localStorage.getItem("productList") || "[]"))
        .map (( products:Product )=>{
        return new Product (products.title,products.url, products.brand, products.color, products.price, products.buyAmount, products.showItem, products.productItem)
    })
}