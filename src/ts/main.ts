import { Product } from "./models/product";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { createProduct } from "./functions/createproduct";

let productList : Product [] = [];
createProduct("Thin Case","/assets/img/iphone-green.png","apple","grön","349",0, false, "mobile", productList);
createProduct("Thin Case","/assets/img/iphone-red.png","apple","röd","349",0, false, "mobile",productList);
createProduct("Thin Case","/assets/img/iphone-blue.png","apple","blå","349",0, false, "mobile",productList);
createProduct("Thin Case","/assets/img/galaxy-green.png","apple","grön","349",0, false, "mobile",productList);
createProduct("Thin Case","/assets/img/galaxy-red.png","apple","röd","349",0, false, "mobile",productList);
createProduct("Thin Case","/assets/img/galaxy-blue.png","apple","blå","349",0, false, "mobile",productList);

loadToLocalStorage(productList);




