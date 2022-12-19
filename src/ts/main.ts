import { Product } from "./models/product";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { createProduct } from "./functions/createproduct";

let productList : Product [] = [];
createProduct("Thin Case","/assets/img/iphone-green.png","apple","grön","349",0, false, "mobile", productList);
createProduct("Thin Case","/assets/img/iphone-red.png","apple","röd","349",0, false, "mobile",productList);
createProduct("Thin Case","/assets/img/iphone-blue.png","apple","blå","349",0, false, "mobile",productList);
createProduct("Thin Case","/assets/img/galaxy-green.png","samsung","grön","349",0, false, "mobile",productList);
createProduct("Thin Case","/assets/img/galaxy-red.png","samsung","röd","349",0, false, "mobile",productList);
createProduct("Thin Case","/assets/img/galaxy-blue.png","samsung","blå","349",0, false, "mobile",productList);

createProduct("Thin Case","/assets/img/tab-green","apple","grön","549",0, false, "tablet",productList);
createProduct("Thin Case","/assets/img/tab-blue.png","apple","blå","549",0, false, "tablet",productList);
createProduct("Thin Case","/assets/img/tab-rose.png","apple","röd","549",0, false, "tablet",productList);
createProduct("Thin Case","/assets/img/tab-green.png","samsung","grön","549",0, false, "tablet",productList);
createProduct("Thin Case","/assets/img/tab-blue.png","samsung","blå","549",0, false, "tablet",productList);
createProduct("Thin Case","/assets/img/tab-red.png","samsung","röd","549",0, false, "tablet",productList);

createProduct("Thin Case","/assets/img/mackbook-case.png","apple","grön","849",0, false, "desktop",productList);
createProduct("Thin Case","/assets/img/mackbook-case.png","apple","blå","849",0, false, "desktop",productList);
createProduct("Thin Case","/assets/img/mackbook-case.png","apple","röd","849",0, false, "desktop",productList);
createProduct("Thin Case","/assets/img/samsung-case.png","samsung","grön","849",0, false, "desktop",productList);
createProduct("Thin Case","/assets/img/samsung-case.png","samsung","blå","849",0, false, "desktop",productList);
createProduct("Thin Case","/assets/img/samsung-case.png","samsung","röd","849",0, false, "desktop",productList);


loadToLocalStorage(productList);




