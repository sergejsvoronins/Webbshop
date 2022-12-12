import { Product } from "./models/product";

let productList : Product [] = [];
let cartList : Product [] = [];
createProduct("Thin Case","","Apple","röd","349",0);
createProduct("Thin Case","","Apple","grön","349",0);
createProduct("Thin Case","","Apple","blå","349",0);
createProduct("Thin Case","","Samsung","röd","349",0);
createProduct("Thin Case","","Samsung","grön","349",0);
createProduct("Thin Case","","Samsung","blå","349",0);
console.log(productList);


function createProduct (
    title:string,url:string,brand:string,color:string, price:string,amount:number
) {
    let product : Product = new Product (title,url,brand,color,price,amount);
    productList.push(product);
}
createCartHtml(productList);
let cartProductsCont = document.getElementById("cartProductsCont") as HTMLDivElement;
function createCartHtml (someList:Product []) {
    for (let i=0; i<someList.length;i++){
        let productImgDiv : HTMLDivElement = document.createElement("div");
        let productInfoDiv : HTMLDivElement = document.createElement("div");
        cartProductsCont.appendChild(productImgDiv);
        cartProductsCont.appendChild(productInfoDiv);
        let productImg : HTMLImageElement = document.createElement("img");
        productImgDiv.appendChild(productImg);
        productImg.src = someList[i].url;
        let productTitle : HTMLParagraphElement = document.createElement("p");
        let productPrice : HTMLParagraphElement = document.createElement("p");
        let productAmountDiv : HTMLDivElement = document.createElement("div");
        productInfoDiv.appendChild(productTitle);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productAmountDiv);
        let increaseBtn : HTMLButtonElement = document.createElement("button");
        increaseBtn.innerHTML = "+";
        let productAmountNumber : HTMLDivElement = document.createElement ("div");
        productAmountNumber.innerHTML = (someList[i].buyAmount).toString();
        let decreaseBtn : HTMLButtonElement = document.createElement("button");
        decreaseBtn.innerHTML = "-";
    }
}