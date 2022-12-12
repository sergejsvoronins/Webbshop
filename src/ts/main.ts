import { Product } from "./models/product";

let productList : Product [] = [];
let cartList : Product [] = [];
createProduct("Thin Case","/assets/img/iphone-green.png","Apple","röd","349",0);
createProduct("Thin Case","","Apple","grön","349",0);
createProduct("Thin Case","","Apple","blå","349",0);
createProduct("Thin Case","","Samsung","röd","349",0);
createProduct("Thin Case","","Samsung","grön","349",0);
createProduct("Thin Case","","Samsung","blå","349",0);


loadToLocalStorage(productList);
loadFromlocalStorage();
export {productList};



export function loadToLocalStorage (someList: Product []){
    localStorage.setItem ("productList", JSON.stringify(someList));
}

export function loadFromlocalStorage () {
    let products : [] = JSON.parse(localStorage.getItem("productList") || "[]");
    productList = products.map (( products:Product )=>{
        return new Product (products.title,products.url, products.brand, products.color, products.price, products.buyAmount)
    })
}


function createProduct (
    title:string,url:string,brand:string,color:string, price:string,amount:number
) {
    let product : Product = new Product (title,url,brand,color,price,amount);
    productList.push(product);
}
