import { loadFromlocalStorage } from "./main";
import { Product } from "./models/product";
import { productList } from "./main";

let cartList : Product [] = [];
loadFromlocalStorage();
console.log(productList);


// createCartHtml(productList);
let cartProductsCont = document.getElementById("cartProductsCont") as HTMLDivElement;
// function createCartHtml (someList:Product []) {
//     for (let i=0; i<someList.length;i++){
//         let productImgDiv : HTMLDivElement = document.createElement("div");
//         let productInfoDiv : HTMLDivElement = document.createElement("div");
//         cartProductsCont.appendChild(productImgDiv);
//         cartProductsCont.appendChild(productInfoDiv);
//         let productImg : HTMLImageElement = document.createElement("img");
//         productImgDiv.appendChild(productImg);
//         productImg.src = someList[i].url;
//         let productTitle : HTMLParagraphElement = document.createElement("p");
//         let productPrice : HTMLParagraphElement = document.createElement("p");
//         let productAmountDiv : HTMLDivElement = document.createElement("div");
//         productInfoDiv.appendChild(productTitle);
//         productInfoDiv.appendChild(productPrice);
//         productInfoDiv.appendChild(productAmountDiv);
//         let increaseBtn : HTMLButtonElement = document.createElement("button");
//         increaseBtn.innerHTML = "+";
//         let productAmountNumber : HTMLDivElement = document.createElement ("div");
//         productAmountNumber.innerHTML = (someList[i].buyAmount).toString();
//         let decreaseBtn : HTMLButtonElement = document.createElement("button");
//         decreaseBtn.innerHTML = "-";
//     }
// }