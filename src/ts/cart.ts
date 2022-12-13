import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { Product } from "./models/product";


let productList : Product [] = loadFromlocalStorage();
let cartPrice : number = 0;
let cartProductsCont = document.getElementById("cartProductsCont") as HTMLDivElement;
let cartProductPrice = document.getElementById("cartProductsPrice") as HTMLSpanElement;
let cartTotalPrice = document.getElementById("cartTotalPrice") as HTMLSpanElement;

createCartHtml(productList);
function createCartHtml (products:Product []) {
    cartProductsCont.innerHTML = "";
    cartPrice = 0;
    for (let i=0; i<products.length;i++){
        if (products[i].buyAmount > 0){
            let productDiv : HTMLDivElement = document.createElement("div");
            productDiv.classList.add("cartContainer__products__itemContainer")
            cartProductsCont.appendChild(productDiv);
            let productImgDiv : HTMLDivElement = document.createElement("div");
            let productInfoDiv : HTMLDivElement = document.createElement("div");
            productDiv.appendChild(productImgDiv);
            productDiv.appendChild(productInfoDiv);
            let productImg : HTMLImageElement = document.createElement("img");
            productImgDiv.appendChild(productImg);
            productImg.src = products[i].url;
            let productTitle : HTMLParagraphElement = document.createElement("p");
            productTitle.innerHTML = products[i].title;
            let productColor : HTMLParagraphElement = document.createElement("p");
            productColor.innerHTML = products[i].color;
            let productPrice : HTMLParagraphElement = document.createElement("p");
            productPrice.innerHTML = products[i].price+":-";
            let productAmountDiv : HTMLDivElement = document.createElement("div");
            productInfoDiv.appendChild(productTitle);
            productInfoDiv.appendChild(productColor);
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productAmountDiv);
            let increaseBtn : HTMLButtonElement = document.createElement("button");
            increaseBtn.innerHTML = "+";
            let productAmountNumber : HTMLDivElement = document.createElement ("div");
            productAmountNumber.innerHTML = (products[i].buyAmount).toString();
            let decreaseBtn : HTMLButtonElement = document.createElement("button");
            decreaseBtn.innerHTML = "-";
            productAmountDiv.appendChild(increaseBtn);
            productAmountDiv.appendChild(productAmountNumber);
            productAmountDiv.appendChild(decreaseBtn);
            cartPrice += (+products[i].price*products[i].buyAmount);
            cartProductPrice.innerHTML = cartPrice.toString()+":-";
            cartTotalPrice.innerHTML = cartPrice.toString()+":-";
            increaseBtn.addEventListener("click", ()=>{
                products[i].buyAmount ++;
                createCartHtml(products);
                loadToLocalStorage(products);
                
                
            })
            decreaseBtn.addEventListener("click", ()=>{
                products[i].buyAmount --;
                createCartHtml(products);
                loadToLocalStorage(products);
            })
        }
    }
}