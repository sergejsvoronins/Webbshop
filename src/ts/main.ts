import { Product } from "./models/product";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { createProduct } from "./functions/createproduct";

let productList : Product [] = [];
let cartList : Product [] = [];
createProduct("Thin Case","/assets/img/iphone-green.png","apple","grön","349",0);
createProduct("Thin Case","/assets/img/iphone-red.png","apple","röd","349",0);
createProduct("Thin Case","/assets/img/iphone-blue.png","apple","blå","349",0);
createProduct("Thin Case","/assets/img/galaxy-green.png","apple","grön","349",0);
createProduct("Thin Case","/assets/img/galaxy-red.png","apple","röd","349",0);
createProduct("Thin Case","/assets/img/galaxy-blue.png","apple","blå","349",0);



loadToLocalStorage(productList);
loadFromlocalStorage(productList);
export {productList};
export {cartList};









