import { Product } from "../models/product";
import { loadToLocalStorage } from "./loadtolocalstorage";
//Function that reset all object property "showItem" to false. 
export function resetlist (someList:Product[]){
    for (let i = 0; i < someList.length; i++) {
        someList[i].showItem = false
    }
    loadToLocalStorage(someList)
}