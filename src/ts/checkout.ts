import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { Product } from "./models/product";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";



let checkOutContainer = document.getElementById("checkOutContainer") as HTMLDivElement;
let checkOutProductsPrice = document.getElementById("checkOutProductsPrice") as HTMLSpanElement;
let checkOutFreightPrice = document.getElementById("checkOutFreightPrice") as HTMLSpanElement;
let checkOutTotalPrice = document.getElementById("checkOutTotalPrice") as HTMLSpanElement;
let checkOutOrderPrice = document.getElementById("checkOutOrderPrice") as HTMLSpanElement;
let postOfficeOption = document.getElementById("postOffice") as HTMLInputElement;
let postBoxOption = document.getElementById("postBox") as HTMLInputElement;
let klarnaPayOption = document.getElementById("klarna") as HTMLInputElement;
let checkOutPrice : number = 0;

klarnaPayOption.checked = true;
postOfficeOption.checked = true;

let productList : Product [] = loadFromlocalStorage();
createCheckOutHtml(productList);

function createCheckOutHtml (products: Product []) {
    checkOutContainer.innerHTML = "";
    checkOutPrice = 0;
    for (let i=0; i<products.length; i++){
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
        let increaseBtn : HTMLButtonElement = document.createElement("button");
        increaseBtn.innerHTML = "+";
        let productAmountNumber : HTMLDivElement = document.createElement ("div");
        productAmountNumber.innerHTML = (products[i].buyAmount).toString();
        let decreaseBtn : HTMLButtonElement = document.createElement("button");
        decreaseBtn.innerHTML = "-";
        productAmountDiv.appendChild(increaseBtn);
        productAmountDiv.appendChild(productAmountNumber);
        productAmountDiv.appendChild(decreaseBtn);
        checkOutPrice += (+products[i].price*products[i].buyAmount);
        checkOutProductsPrice.innerHTML = checkOutPrice.toString()+":-";
        checkOutTotalPrice.innerHTML = (checkOutPrice+freightPrice).toString()+":-";
        checkOutOrderPrice.innerHTML = checkOutTotalPrice.innerHTML;
        deleteIconDiv.addEventListener("click", ()=> {
            products[i].buyAmount = 0;
            createCheckOutHtml(products);
            loadToLocalStorage(products);
        })
        increaseBtn.addEventListener("click", ()=>{
            products[i].buyAmount ++;
            createCheckOutHtml(products);
            loadToLocalStorage(products);
            
            
        })
        decreaseBtn.addEventListener("click", ()=>{
            products[i].buyAmount --;
            createCheckOutHtml(products);
            loadToLocalStorage(products);
        })
    }
}

// Show freight price depend on freightOption
let freightPrice : number = 0;
postBoxOption.addEventListener("change", ()=> {
    if (postBoxOption.checked){
        freightPrice = 49;
    }
    checkOutFreightPrice.innerHTML = freightPrice.toString()+":-"
    createCheckOutHtml(productList);
})
postOfficeOption.addEventListener("change", ()=> {
    if (postOfficeOption.checked){
        freightPrice = 0;
    }
    checkOutFreightPrice.innerHTML = freightPrice.toString()+":-"
    createCheckOutHtml(productList);
})
// 