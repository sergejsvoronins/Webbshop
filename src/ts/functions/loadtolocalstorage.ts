import { Product } from "../models/product";

export function loadToLocalStorage (products: Product []){
    localStorage.setItem ("productList", JSON.stringify(products));
}