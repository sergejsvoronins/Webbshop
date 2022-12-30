import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { Product } from "./models/product";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { countProductsPrice } from "./functions/countproductsprice";
import { updateCartItemAmount } from "./functions/updatecartitemamount";


let checkOutContainer = document.getElementById("checkOutContainer") as HTMLDivElement;
let checkOutProductsPrice = document.getElementById("checkOutProductsPrice") as HTMLSpanElement;
let checkOutFreightPrice = document.getElementById("checkOutFreightPrice") as HTMLSpanElement;
let checkOutTotalPrice = document.getElementById("checkOutTotalPrice") as HTMLSpanElement;
let checkOutOrderPrice = document.getElementById("checkOutOrderPrice") as HTMLSpanElement;
let postOfficeOption = document.getElementById("postOffice") as HTMLInputElement;
let postBoxOption = document.getElementById("postBox") as HTMLInputElement;
let klarnaPayOption = document.getElementById("klarna") as HTMLInputElement;
let submitCheckOutBtn = document.getElementById("submitCheckOutBtn") as HTMLAnchorElement;
let checkOutPrice : number = 0;
let freightPrice : number = 0;
let cartItemAmount : string = "";
klarnaPayOption.checked = true;
postOfficeOption.checked = true;

let productList : Product [] = loadFromlocalStorage();
createCheckOutHtml(productList);

function createCheckOutHtml (products: Product []) {
    checkOutContainer.innerHTML = "";
    checkOutPrice = 0;
    cartItemAmount = updateCartItemAmount(products);
    if (cartItemAmount!== ""){
        submitCheckOutBtn.getAttribute("href");
        submitCheckOutBtn.href = "./greating.html";
        submitCheckOutBtn.style.opacity = "1";
    }
    else {
        submitCheckOutBtn.removeAttribute("href");
        submitCheckOutBtn.style.opacity = ".3";
    }
    for (let i=0; i<products.length; i++){
        checkOutProductsPrice. innerHTML = checkOutPrice.toString();
        checkOutTotalPrice.innerHTML = (checkOutPrice+freightPrice).toString()+":-";
        checkOutOrderPrice.innerHTML = checkOutTotalPrice.innerHTML;
        if (products[i].buyAmount > 0) {
            let productDiv : HTMLDivElement = document.createElement("div");
            productDiv.classList.add("checkOutContainer__products__itemContainer")
            checkOutContainer.appendChild(productDiv);
            let deleteIconDiv : HTMLDivElement = document.createElement("div");
            deleteIconDiv.innerHTML = "<i class='fa-solid fa-xmark'></i>";
            deleteIconDiv.classList.add("checkOutContainer__products__itemContainer__deleteIcon");
            let productImgDiv : HTMLDivElement = document.createElement("div");
            let productInfoDiv : HTMLDivElement = document.createElement("div");
            productDiv.appendChild(productImgDiv);
            productDiv.appendChild(productInfoDiv);
            productDiv.appendChild(deleteIconDiv);
            let productImg : HTMLImageElement = document.createElement("img");
            productImgDiv.appendChild(productImg);
            productImg.src = products[i].url;
            let productTitle : HTMLParagraphElement = document.createElement("p");
            productTitle.innerHTML = products[i].title;
            let productBrand : HTMLParagraphElement = document.createElement("p");
            productBrand.innerHTML = products[i].brand;
            let productColor : HTMLParagraphElement = document.createElement("p");
            productColor.innerHTML = products[i].color;
            let productPrice : HTMLParagraphElement = document.createElement("p");
            productPrice.innerHTML = products[i].price+":-";
            let productAmountDiv : HTMLDivElement = document.createElement("div");
            productInfoDiv.appendChild(productTitle);
            productInfoDiv.appendChild(productBrand);
            productInfoDiv.appendChild(productColor);
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productAmountDiv);
            let decreaseBtn : HTMLButtonElement = document.createElement("button");
            decreaseBtn.innerHTML = "-";
            let productAmountNumber : HTMLInputElement = document.createElement ("input");
            productAmountNumber.value = (products[i].buyAmount).toString();
            productAmountNumber.type = "number";
            productAmountNumber.min = "1";
            productAmountNumber.max = "50";
            let increaseBtn : HTMLButtonElement = document.createElement("button");
            increaseBtn.innerHTML = "+";
            productAmountDiv.appendChild(decreaseBtn);
            productAmountDiv.appendChild(productAmountNumber);
            productAmountDiv.appendChild(increaseBtn);
            checkOutPrice = +countProductsPrice(products);
            checkOutProductsPrice.innerHTML = checkOutPrice.toString()+":-";
            checkOutTotalPrice.innerHTML = (checkOutPrice+freightPrice).toString()+":-";
            checkOutOrderPrice.innerHTML = checkOutTotalPrice.innerHTML;
            deleteIconDiv.addEventListener("click", ()=> {
                products[i].buyAmount = 0;
                createCheckOutHtml(products);
                loadToLocalStorage(products);
            })
            increaseBtn.addEventListener("click", ()=>{
                if (+productAmountNumber.value < 50 && +productAmountNumber.value > 0){
                    products[i].buyAmount ++;
                    productAmountNumber.value = products[i].buyAmount.toString();
                    loadToLocalStorage(products);
                    checkOutPrice = countProductsPrice(products);
                    checkOutProductsPrice.innerHTML = checkOutPrice.toString();
                    checkOutTotalPrice.innerHTML = (checkOutPrice+freightPrice).toString()+":-";
                    checkOutOrderPrice.innerHTML = checkOutTotalPrice.innerHTML;
                }
            })
            productAmountNumber.addEventListener("change", ()=>{
                if (+productAmountNumber.value <= 50 && +productAmountNumber.value >= 0){
                    products[i].buyAmount = +productAmountNumber.value;
                    loadToLocalStorage(products);
                    if (products[i].buyAmount === 0){
                        createCheckOutHtml(products);
                    }
                    else {
                        productAmountNumber.value = products[i].buyAmount.toString();
                        checkOutPrice = countProductsPrice(products);
                        checkOutProductsPrice.innerHTML = checkOutPrice.toString();
                        checkOutTotalPrice.innerHTML = (checkOutPrice+freightPrice).toString()+":-";
                        checkOutOrderPrice.innerHTML = checkOutTotalPrice.innerHTML;
                    }
                } 
                else {
                    productAmountNumber.value = products[i].buyAmount.toString();
                }
            })
            decreaseBtn.addEventListener("click", ()=>{ 
                if (+productAmountNumber.value <= 50 && +productAmountNumber.value > 0){
                    products[i].buyAmount --;
                    loadToLocalStorage(products);
                    if (products[i].buyAmount === 0){
                        createCheckOutHtml(products);
                    }
                    else {
                        productAmountNumber.value = products[i].buyAmount.toString();
                        checkOutPrice = countProductsPrice(products);
                        checkOutProductsPrice.innerHTML = checkOutPrice.toString();
                        checkOutTotalPrice.innerHTML = (checkOutPrice+freightPrice).toString()+":-";
                        checkOutOrderPrice.innerHTML = checkOutTotalPrice.innerHTML;
                    }

                } 

            })
        }
    }
}

// Show freight price depend on freightOption

postBoxOption.addEventListener("change", ()=> {
    if (postBoxOption.checked){
        freightPrice = 49;
    }
    checkOutFreightPrice.innerHTML = freightPrice.toString()+":-"
    checkOutTotalPrice.innerHTML = (checkOutPrice+freightPrice).toString()+":-";
    checkOutOrderPrice.innerHTML = checkOutTotalPrice.innerHTML;
})
postOfficeOption.addEventListener("change", ()=> {
    if (postOfficeOption.checked){
        freightPrice = 0;
    }
    checkOutFreightPrice.innerHTML = freightPrice.toString()+":-"
    checkOutTotalPrice.innerHTML = (checkOutPrice+freightPrice).toString()+":-";
    checkOutOrderPrice.innerHTML = checkOutTotalPrice.innerHTML;
})
// 