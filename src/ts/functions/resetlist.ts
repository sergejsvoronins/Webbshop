import { Product } from "../models/product";
import { loadToLocalStorage } from "./loadtolocalstorage";

export function resetlist (someList:Product[]){
    for (let i = 0; i < someList.length; i++) {
        someList[i].showItem = false
    }
    loadToLocalStorage(someList)
}