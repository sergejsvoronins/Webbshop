import { loadFromlocalStorage } from "./main";
import { Product } from "./models/product";
import { productList } from "./main";

let cartList : Product [] = [];
loadFromlocalStorage();
console.log(productList);



let cartProductsCont = document.getElementById("cartProductsCont") as HTMLDivElement;
createCartHtml(productList);
function createCartHtml (someList:Product []) {
    for (let i=0; i<someList.length;i++){

        let productDiv : HTMLDivElement = document.createElement("div");
        cartProductsCont.appendChild(productDiv);
        let productImgDiv : HTMLDivElement = document.createElement("div");
        let productInfoDiv : HTMLDivElement = document.createElement("div");
        productDiv.appendChild(productImgDiv);
        productDiv.appendChild(productInfoDiv);
        let productImg : HTMLImageElement = document.createElement("img");
        productImgDiv.appendChild(productImg);
        productImg.src = someList[i].url;
        let productTitle : HTMLParagraphElement = document.createElement("p");
        productTitle.innerHTML = someList[i].title;
        let productPrice : HTMLParagraphElement = document.createElement("p");
        productPrice.innerHTML = someList[i].price;
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
        productAmountDiv.appendChild(increaseBtn);
        productAmountDiv.appendChild(productAmountNumber);
        productAmountDiv.appendChild(decreaseBtn);
    }
}