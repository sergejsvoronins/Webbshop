import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { Product } from "./models/product";


let productList : Product [] = loadFromlocalStorage();

console.log(productList);

let productsCenter: HTMLDivElement = document.querySelector(".products_center") as HTMLDivElement;
let filterMobile = document.getElementById("menuMobile") as HTMLUListElement;
let filterTablet = document.getElementById("menuTablet") as HTMLUListElement;
let filterLaptop = document.getElementById("menuLaptop") as HTMLUListElement;

let linkUrlMobile : string = "http://localhost:1234/pages/products.html#mobil";
let linkUrlTablet : string = "http://localhost:1234/pages/products.html#tablet";
let linkUrlLaptop : string = "http://localhost:1234/pages/products.html#Laptop";

if (linkUrlMobile === location.href){
    let mobileList : Product [] = productList.filter(showMobile);
    displayProducts(mobileList);
}
else if  (linkUrlTablet === location.href){
    let tabletList : Product [] = productList.filter(showTablet);
    displayProducts(tabletList);
}
else if (linkUrlLaptop === location.href){
    let laptopList : Product [] = productList.filter(showLaptop);
    displayProducts(laptopList);
}
else {
    displayProducts(productList)
}

filterMobile.addEventListener("click", ()=>{
    let mobileList : Product [] = productList.filter(showMobile);
    displayProducts(mobileList); 
})
filterTablet.addEventListener("click", ()=>{
    let tabletList : Product [] = productList.filter(showTablet);
    displayProducts(tabletList); 
})
filterLaptop.addEventListener("click", ()=>{
    let laptopList : Product [] = productList.filter(showLaptop);
    displayProducts(laptopList); 
})

function showMobile(product: Product){
    if (product.productType==="mobile"){
        return product;  
    }
    
}
function showTablet(product: Product){
    if (product.productType==="tablet"){
        return product;  
    }
    
}
function showLaptop(product: Product){
    if (product.productType==="laptop"){
        return product;  
    }
    
}

function displayProducts(someList: Product []) {
    productsCenter.innerHTML = "";
    for(let i = 0; i < someList.length; i++){
    let productContainer : HTMLDivElement = document.createElement("div");
    productContainer.className = "product";

    productContainer.addEventListener('mousedown', (e) => {
       console.log(e);
    }, false);

	let imgContainer : HTMLDivElement = document.createElement("div");
    imgContainer.className = "img-container";

	let infoContainer : HTMLDivElement = document.createElement("div");
    infoContainer.className = "info-container";
    
    productsCenter.appendChild(productContainer)
	productContainer.appendChild(imgContainer);
    productContainer.appendChild(infoContainer);

    let productColor : HTMLParagraphElement = document.createElement("h4");
    productColor.innerHTML = someList[i].color;
	
	let productBrand : HTMLParagraphElement = document.createElement("h4");
    productBrand.innerHTML = someList[i].brand;
    productBrand.className = "prductBrand";
    
    let imgProduct: HTMLImageElement = document.createElement("img") as HTMLImageElement;
    imgContainer.appendChild(imgProduct);
	imgProduct.src = someList[i].url;

	let productTitle: HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
	productTitle.innerHTML = someList[i].title;

    
    let productPrice: HTMLHeadingElement = document.createElement("h4") as HTMLHeadingElement;
	productPrice.innerHTML = someList[i].price;
    productPrice.innerHTML += " SEK"
    
    let addToCart: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    addToCart.className = "button"
    addToCart.innerHTML = `<i class="fa-solid fa-bag-shopping domBag"></i>`;

    
    addToCart.addEventListener('click', () => {

        someList[i].buyAmount++;
        loadToLocalStorage(someList);

        let cartN : HTMLSpanElement = document.getElementById("cartCount") as HTMLSpanElement;
        cartN.innerHTML = (someList[i].buyAmount).toString();
    });

    
    
    infoContainer.appendChild(productTitle);
    infoContainer.appendChild(productColor);
    infoContainer.appendChild(productPrice);
    infoContainer.appendChild(addToCart);
	
    }
}

