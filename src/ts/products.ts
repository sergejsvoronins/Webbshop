import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { Product } from "./models/product";



let productList : Product [] = loadFromlocalStorage("productList");

let productsCenter: HTMLDivElement = document.querySelector(".products_center") as HTMLDivElement;
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
// let sortList = [sortBarBrand,sortBarColor,sortBarPrice];




// let filtredProperties : string [] = [];


// for (let i=0; i<sortBarAlt.length; i++){
//     sortBarAlt[i].addEventListener("click", ()=> {
//         sortList[i].classList.add("show");
//     })
//     sortBarAlt[i].addEventListener("mouseleave", ()=> {
//         sortList[i].classList.remove("show");
//     })
// }

// for (let i=0; i<sortList.length; i++){
//     for(let j=0; j<sortList[i].children.length; j++){
//         sortList[i].children[j].addEventListener("click", ()=>{
//             if(filtredProperties.indexOf(sortList[i].children[j].innerHTML)===-1){
//                 filtredProperties.push(sortList[i].children[j].innerHTML);
//             } 

//         })
//     }
// }

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
    let productContainer : HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;
    productContainer.className = "product";

    productContainer.addEventListener('click', () => {
        someList[i]["showItem"] = true
        loadToLocalStorage(productList,lsName);
    });

	let infoContainer : HTMLDivElement = document.createElement("div") as HTMLDivElement;
    infoContainer.className = "info-container";
    
    productsCenter.appendChild(productContainer)
    productContainer.appendChild(infoContainer);
	
	let productBrand : HTMLParagraphElement = document.createElement("h4") as HTMLParagraphElement;
    productBrand.innerHTML = someList[i].brand;
    productBrand.className = "prductBrand";
    
    let imgProduct: HTMLImageElement = document.createElement("img") as HTMLImageElement;
    infoContainer.appendChild(imgProduct);
	imgProduct.src = someList[i].url;
	
	let productTitle: HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
	productTitle.innerHTML = someList[i].title;
    let productLink: HTMLAnchorElement = document.createElement ("a")
    productLink.href="./productinfo.html"
    
    let productColor : HTMLParagraphElement = document.createElement("h4");
    productColor.innerHTML = someList[i].color;
    
    let productPrice: HTMLHeadingElement = document.createElement("h4") as HTMLHeadingElement;
	productPrice.innerHTML = someList[i].price;
    productPrice.innerHTML += " SEK"
    
    let addToCart: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    addToCart.className = "icon-container"
    addToCart.innerHTML = `<i class="bi bi-bag"></i>`;
    addToCart.addEventListener('click', () => {
        someList[i].buyAmount++;
        loadToLocalStorage(someList, lsName);
        let cartN : HTMLSpanElement = document.getElementById("cartCount") as HTMLSpanElement;
        cartN.innerHTML = (someList[i].buyAmount).toString();
        loadToLocalStorage(someList, lsName);
    });
    infoContainer.appendChild(productLink);
    infoContainer.appendChild(productColor);
    infoContainer.appendChild(productPrice);
    infoContainer.appendChild(addToCart);
    productLink.appendChild(productTitle)

    }
}


