import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { Product } from "./models/product";
import { countOrderPrice } from "./functions/countorderprice";

let productList : Product [] = loadFromlocalStorage("productlist");
let cartProductsCont = document.getElementById("cartProductsCont") as HTMLDivElement;
let cartProductPrice = document.getElementById("cartProductsPrice") as HTMLSpanElement;
let cartTotalPrice = document.getElementById("cartTotalPrice") as HTMLSpanElement;

createCartHtml(productList);

function createCartHtml (products:Product []) {
    cartProductsCont.innerHTML = "";
    let cartPrice : number = 0;
    for (let i=0; i<products.length;i++){
        cartProductPrice.innerHTML = cartPrice.toString()+":-";
        cartTotalPrice.innerHTML = cartPrice.toString()+":-";
        if (products[i].buyAmount > 0){
            let productDiv : HTMLDivElement = document.createElement("div");
            cartProductsCont.appendChild(productDiv);
            let productImgDiv : HTMLDivElement = document.createElement("div");
            let productInfoDiv : HTMLDivElement = document.createElement("div");
            productDiv.appendChild(productImgDiv);
            productDiv.appendChild(productInfoDiv);
            let productImg : HTMLImageElement = document.createElement("img");
            productImgDiv.appendChild(productImg);
            let productTitle : HTMLParagraphElement = document.createElement("p");
            let productColor : HTMLParagraphElement = document.createElement("p");
            let productPrice : HTMLParagraphElement = document.createElement("p");
            let productAmountDiv : HTMLDivElement = document.createElement("div");
            productInfoDiv.appendChild(productTitle);
            productInfoDiv.appendChild(productColor);
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productAmountDiv);
            productDiv.classList.add("cartContainer__products__itemContainer")
            productImg.src = products[i].url;
            productTitle.innerHTML = products[i].title;
            productColor.innerHTML = products[i].color;
            productPrice.innerHTML = products[i].price+":-";
            cartPrice = countOrderPrice(cartPrice,products,i);
            cartProductPrice.innerHTML = cartPrice.toString()+":-";
            cartTotalPrice.innerHTML = cartPrice.toString()+":-";
            let decreaseBtn : HTMLButtonElement = document.createElement("button");
            decreaseBtn.innerHTML = "-";
            let productAmountNumber : HTMLDivElement = document.createElement ("div");
            productAmountNumber.innerHTML = (products[i].buyAmount).toString();
            let increaseBtn : HTMLButtonElement = document.createElement("button");
            increaseBtn.innerHTML = "+";
            productAmountDiv.appendChild(decreaseBtn);
            productAmountDiv.appendChild(productAmountNumber);
            productAmountDiv.appendChild(increaseBtn);
            increaseBtn.addEventListener("click", ()=>{
                products[i].buyAmount ++;
                loadToLocalStorage(products, "productList");
                createCartHtml(products);
                console.log(products);
                
            })
            decreaseBtn.addEventListener("click", ()=>{
                products[i].buyAmount --;
                loadToLocalStorage(products, "productList");
                createCartHtml(products);
                console.log(products);
            })
        }
    }
}