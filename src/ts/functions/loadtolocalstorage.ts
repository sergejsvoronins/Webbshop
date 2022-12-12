import { Product } from "../models/product";

export function loadToLocalStorage (someList: Product []){
    localStorage.setItem ("productList", JSON.stringify(someList));
}