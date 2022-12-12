import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { Product } from "./models/product";
import { productList } from "./main";
import { cartList } from "./main";


loadFromlocalStorage(productList);
console.log(productList);


let cartPrice : number = 0;
let cartProductsCont = document.getElementById("cartProductsCont") as HTMLDivElement;
let cartProductPrice = document.getElementById("cartProductsPrice") as HTMLSpanElement;
let cartTotalPrice = document.getElementById("cartTotalPrice") as HTMLSpanElement;

createCartHtml(productList);
function createCartHtml (someList:Product []) {
    cartProductsCont.innerHTML = "";
    cartPrice = 0;
    for (let i=0; i<someList.length;i++){
        // if (someList[i].buyAmount > 0){
            let productDiv : HTMLDivElement = document.createElement("div");
            productDiv.classList.add("cartContainer__products__itemContainer")
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
            let productColor : HTMLParagraphElement = document.createElement("p");
            productColor.innerHTML = someList[i].color;
            let productPrice : HTMLParagraphElement = document.createElement("p");
            productPrice.innerHTML = someList[i].price+":-";
            let productAmountDiv : HTMLDivElement = document.createElement("div");
            productInfoDiv.appendChild(productTitle);
            productInfoDiv.appendChild(productColor);
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
            cartPrice += (+someList[i].price*someList[i].buyAmount);
            cartProductPrice.innerHTML = cartPrice.toString()+":-";
            cartTotalPrice.innerHTML = cartPrice.toString()+":-";
            increaseBtn.addEventListener("click", ()=>{
                someList[i].buyAmount = someList[i].buyAmount+1;
                createCartHtml(someList);
                
            })
            decreaseBtn.addEventListener("click", ()=>{
                someList[i].buyAmount = someList[i].buyAmount-1;
                createCartHtml(someList);
                
            })
        // }
    }
}