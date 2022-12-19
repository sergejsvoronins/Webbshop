import { updateCartAmount } from "./functions/cartItemAmount";
import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { Product } from "./models/product";

let productList : Product [] = loadFromlocalStorage("productList");

let cartItemAmount : number | undefined = 0;

let productsCenter: HTMLDivElement = document.querySelector(".products_center") as HTMLDivElement;
let cartN : HTMLSpanElement = document.getElementById("cartCount") as HTMLSpanElement;
cartItemAmount = updateCartAmount(productList);
cartN.innerHTML = cartItemAmount.toString();

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

let filtredProperties : string [] = [];

for (let i=0; i<sortBarAlt.length; i++){
    sortBarAlt[i].addEventListener("click", ()=> {
        sortList[i].classList.add("show");
    })
    sortBarAlt[i].addEventListener("mouseleave", ()=> {
        sortList[i].classList.remove("show");
    })
}

for (let i=0; i<sortList.length; i++){
    for(let j=0; j<sortList[i].children.length; j++){
        sortList[i].children[j].addEventListener("click", ()=>{
            if(filtredProperties.indexOf(sortList[i].children[j].innerHTML)===-1){
                filtredProperties.push(sortList[i].children[j].innerHTML);
            } 

        })
    }
}

if (linkUrlMobile === location.href){
    displayFiltredProducts(productList,"mobile")
}
else if  (linkUrlTablet === location.href){
    displayFiltredProducts(productList,"tablet")
}
else if (linkUrlLaptop === location.href){
    displayFiltredProducts(productList,"laptop")
}
else {
    displayProducts(productList);
}
filterMobile.addEventListener("click", ()=>{
    displayFiltredProducts(productList,"mobile")
})
filterTablet.addEventListener("click", ()=>{
    displayFiltredProducts(productList,"tablet")
})
filterLaptop.addEventListener("click", ()=>{
    displayFiltredProducts(productList,"laptop")
})



 function displayProducts(someList: Product []) {
    productsCenter.innerHTML = "";

    for(let i = 0; i < someList.length; i++){
    let productContainer : HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;
    productContainer.className = "product";

    let imgContainer : HTMLDivElement = document.createElement("div") as HTMLDivElement;
    imgContainer.className = "product__picture";

    productContainer.addEventListener('click', () => {
        someList[i]["showItem"] = true
        loadToLocalStorage(productList,"productList");
    });

	let infoContainer : HTMLDivElement = document.createElement("div") as HTMLDivElement;
    infoContainer.className = "product__info";
	
	//let productBrand : HTMLParagraphElement = document.createElement("h4") as HTMLParagraphElement;
    //productBrand.innerHTML = someList[i].brand;
    //productBrand.className = "prductBrand";
    
    let imgProduct: HTMLImageElement = document.createElement("img") as HTMLImageElement;
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
    
    let addToCart: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
    addToCart.className = "icon-button"
    addToCart.innerHTML += "LÄGG TILL ";
    addToCart.innerHTML += `<i class="bi bi-bag"></i>`;

    addToCart.addEventListener('click', () => {
        someList[i].buyAmount++;
        loadToLocalStorage(someList, "productList");

        cartItemAmount = updateCartAmount(someList);
        cartN.innerHTML = (cartItemAmount || 0).toString();
        loadToLocalStorage(someList, "productList");

    });
    
    productsCenter.appendChild(productContainer)
    productContainer.appendChild(imgContainer);
    productContainer.appendChild(infoContainer);
    //infoContainer.appendChild(productBrand);
    imgContainer.appendChild(imgProduct);
    infoContainer.appendChild(productTitle);
    infoContainer.appendChild(productLink);
    infoContainer.appendChild(productColor);
    infoContainer.appendChild(productPrice);
    infoContainer.appendChild(addToCart);
    

}

    }


function displayFiltredProducts(someList: Product [], filterType:string) {
    productsCenter.innerHTML = "";
    for(let i = 0; i < someList.length; i++){
        if (someList[i].productType === filterType){
            let productContainer : HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;
            productContainer.className = "product";

            let imgContainer : HTMLDivElement = document.createElement("div") as HTMLDivElement;
            imgContainer.className = "imgContainer";

              productContainer.addEventListener('click', () => {
        someList[i]["showItem"] = true
        loadToLocalStorage(productList, "productList");
    });

            let infoContainer : HTMLDivElement = document.createElement("div");
            infoContainer.className = "info-container";
            
            productsCenter.appendChild(productContainer);
            productContainer.appendChild(infoContainer);
            
            let imgProduct: HTMLImageElement = document.createElement("img") as HTMLImageElement;
            infoContainer.appendChild(imgProduct);
            imgProduct.src = someList[i].url;
          
            let productTitle: HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
            productTitle.innerHTML = someList[i].title;
        
            let productColor : HTMLParagraphElement = document.createElement("h4");
            productColor.innerHTML = someList[i].color;
        
            let productPrice: HTMLHeadingElement = document.createElement("h4") as HTMLHeadingElement;
            productPrice.innerHTML = someList[i].price;
            productPrice.innerHTML += " SEK"
            
            let addToCart: HTMLDivElement = document.createElement("div") as HTMLDivElement;
            addToCart.className = "icon-container"
            addToCart.innerHTML = `<i class="bi bi-bag"></i>`;
           
            
            infoContainer.appendChild(productTitle);
            infoContainer.appendChild(productColor);
            infoContainer.appendChild(productPrice);
            infoContainer.appendChild(addToCart);
            
        }

    }
}