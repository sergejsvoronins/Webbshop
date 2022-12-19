import { Product } from "../models/product";

export function loadToLocalStorage (products: Product [], keyName: string){
    localStorage.setItem (keyName, JSON.stringify(products));
}