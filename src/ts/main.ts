import { Product } from "./models/product";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { createProduct } from "./functions/createproduct";

let productList : Product [] = [];
createProduct(1,"Thin Case","/assets/img/iphone-green.png","apple","grön","349",0, false, "mobile", productList);
createProduct(2,"Thin Case","/assets/img/iphone-red.png","apple","röd","349",0, false, "mobile",productList);
createProduct(3,"Thin Case","/assets/img/iphone-blue.png","apple","blå","349",0, false, "mobile",productList);
createProduct(4,"Thin Case","/assets/img/galaxy-green.png","samsung","grön","349",0, false, "mobile",productList);
createProduct(5,"Thin Case","/assets/img/galaxy-red.png","samsung","röd","349",0, false, "mobile",productList);
createProduct(6,"Thin Case","/assets/img/galaxy-blue.png","samsung","blå","349",0, false, "mobile",productList);

createProduct(7,"Thin Case","/assets/img/ipad-green.png","apple","grön","549",0, false, "tablet",productList);
createProduct(8,"Thin Case","/assets/img/ipad-blue.png","apple","blå","549",0, false, "tablet",productList);
createProduct(9,"Thin Case","/assets/img/ipad-red.png","apple","röd","549",0, false, "tablet",productList);
createProduct(10,"Thin Case","/assets/img/tab-green.png","samsung","grön","549",0, false, "tablet",productList);
createProduct(11,"Thin Case","/assets/img/tab-blue.png","samsung","blå","549",0, false, "tablet",productList);
createProduct(12,"Thin Case","/assets/img/tab-rose.png","samsung","röd","549",0, false, "tablet",productList);

createProduct(13,"Thin Case","/assets/img/macbook-case.png","apple","svart","849",0, false, "laptop",productList);
createProduct(14,"Thin Case","/assets/img/macbook-case.png","samsung","svart","849",0, false, "laptop",productList);


loadToLocalStorage(productList);




