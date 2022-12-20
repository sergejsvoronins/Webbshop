import { updateCartAmount } from "./functions/cartItemAmount";
import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { Product } from "./models/product";
import { sortByPriceDown } from "./functions/sortbypricedown";
import { sortByPriceUp } from "./functions/sortbypriceup";

let productList : Product [] = loadFromlocalStorage("productList");

let cartItemAmount : number | undefined = 0;

let productsCenter: HTMLDivElement = document.querySelector(".products_center") as HTMLDivElement;
let cartN : HTMLSpanElement = document.getElementById("cartCount") as HTMLSpanElement;
cartItemAmount = updateCartAmount(productList);
if (cartItemAmount === 0){
    cartN.innerHTML = "";
}
else {
    cartN.innerHTML = cartItemAmount.toString();
}


let filterMobile = document.getElementById("menuMobile") as HTMLUListElement;
let filterTablet = document.getElementById("menuTablet") as HTMLUListElement;
let filterLaptop = document.getElementById("menuLaptop") as HTMLUListElement;
let linkUrlMobile : string = "http://localhost:1234/pages/products.html#mobil";
let linkUrlTablet : string = "http://localhost:1234/pages/products.html#tablet";
let linkUrlLaptop : string = "http://localhost:1234/pages/products.html#Laptop";

let sortBarAlt = document.getElementsByClassName("filter__sortAlt");
let sortBarBrand = document.getElementById("sortBarBrand") as HTMLDivElement;
let sortBarColor = document.getElementById("sortBarColor") as HTMLDivElement;
let sortBarPrice = document.getElementById("sortBarPrice") as HTMLDivElement;
let sortList = [sortBarBrand,sortBarColor,sortBarPrice];

for (let i=0; i<sortBarAlt.length; i++){
    sortBarAlt[i].addEventListener("click", ()=> {
        sortList[i].classList.add("show");
    })
    sortBarAlt[i].addEventListener("mouseleave", ()=> {
        sortList[i].classList.remove("show");
    })
}
let newList : Product [] = productList;
for (let i=0; i<sortList.length; i++){
    for(let j=0; j<sortList[i].children.length; j++){
        sortList[i].children[j].addEventListener("click", ()=>{
            if(i===0){
                newList =  newList.filter(product => product.brand == sortList[i].children[j].innerHTML);
                displayProducts(newList,"filtred");
            }
            else if (i===1){
                newList =  newList.filter(product => product.color == sortList[i].children[j].innerHTML);
                displayProducts(newList,"filtred");
            }
            else if (i===2){
                if (j===0) {
                    newList.sort(sortByPriceUp);
                    displayProducts(newList,"filtred");
                }
                else {
                    newList.sort(sortByPriceDown);
                    displayProducts(newList,"filtred");
                }
            }
        }) 
    }
}


if (linkUrlMobile === location.href){
    let mobile =  productList.filter(product => product.productType == "mobile");
    displayProducts(mobile, "filtredListByType");
}
else if  (linkUrlTablet === location.href){
    let tablet =  productList.filter(product => product.productType == "tablet");
    displayProducts(tablet, "filtredListByType");
}
else if (linkUrlLaptop === location.href){
    let laptop =  productList.filter(product => product.productType == "laptop");
    displayProducts(laptop, "filtredListByType");
}
else {
    displayProducts(productList, "productList");
}
filterMobile.addEventListener("click", ()=>{
    let mobile =  productList.filter(product => product.productType == "mobile");
    displayProducts(mobile, "filtredListByType");
})

filterTablet.addEventListener("click", ()=>{
    let tablet =  productList.filter(product => product.productType == "tablet");
    displayProducts(tablet, "filtredListByType");
})
filterLaptop.addEventListener("click", ()=>{
    let laptop =  productList.filter(product => product.productType == "laptop");
    displayProducts(laptop, "filtredListByType");
})

function displayProducts(someList: Product [], lsName: string) {
    productsCenter.innerHTML = "";

    for(let i = 0; i < someList.length; i++){
    let productContainer : HTMLDivElement = document.createElement("div") as HTMLDivElement;
    productContainer.className = "product";

    let productInfoLink : HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement ;
    productInfoLink.className = "product__infoLink";
    productInfoLink.href="./productinfo.html";

    productInfoLink.addEventListener('click', () => {
        someList[i]["showItem"] = true
        loadToLocalStorage(productList,lsName);
    });

    let imgContainer : HTMLDivElement = document.createElement("div") as HTMLDivElement;
    imgContainer.className = "product__picture";

    let imgProduct: HTMLImageElement = document.createElement("img") as HTMLImageElement;
	imgProduct.src = someList[i].url;

	let infoContainer : HTMLDivElement = document.createElement("div") as HTMLDivElement;
    infoContainer.className = "product__info";
	
	let productTitle: HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
	productTitle.innerHTML = someList[i].title;
  
    let productColor : HTMLParagraphElement = document.createElement("h4");
    productColor.innerHTML = someList[i].color;
    
    let productPrice: HTMLHeadingElement = document.createElement("h4") as HTMLHeadingElement;
	productPrice.innerHTML = someList[i].price;
    productPrice.innerHTML += " SEK";

    let buttonDiv: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    buttonDiv.className = "buttonDiv";
    let addToCart: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
    addToCart.className = "icon-button"
    addToCart.innerHTML += "LÄGG TILL ";
    addToCart.innerHTML += `<i class="bi bi-bag"></i>`;

    addToCart.addEventListener('click', () => {
        someList[i].buyAmount++;
        loadToLocalStorage(someList, lsName);

        cartItemAmount = updateCartAmount(someList);
        cartN.innerHTML = (cartItemAmount || 0).toString();
        loadToLocalStorage(someList, lsName);

    });   
    productsCenter.appendChild(productContainer)
    productContainer.appendChild(productInfoLink);
    productInfoLink.appendChild(imgContainer);
    imgContainer.appendChild(imgProduct);
    productInfoLink.appendChild(infoContainer);
    infoContainer.appendChild(productTitle);
    infoContainer.appendChild(productColor);
    infoContainer.appendChild(productPrice);
    productContainer.appendChild(buttonDiv);
    buttonDiv.appendChild(addToCart);
    
    }
}