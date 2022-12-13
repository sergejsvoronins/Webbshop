import { Product } from "./models/product";
import { productList } from "./main";



let productCenter: HTMLDivElement = document.querySelector("product-container") as HTMLDivElement;
displayProduct(productList);

function displayProduct(someList:Product []){
    for (let i = 0; i < someList.length; i++) {
        
        let productContainer: HTMLDivElement = document.createElement("div");
        productContainer.className = "productContainer";

        let productDetail: HTMLDivElement = document.createElement ("div");
        productDetail.className = "productDetail";

        productCenter.appendChild(productContainer)
        productCenter.appendChild(productDetail)

        let productImg: HTMLImageElement = document.createElement ("img");
        productContainer.appendChild(productImg)
        productImg.src = someList[i].url;

        
    }
}
console.log(productList);


/* let productContainer: HTMLDivElement =document.createElement("div")
let productImage: HTMLImageElement = document.createElement ("img") 
let productName: HTMLHeadingElement = document.createElement ("h3") 
let productSub: HTMLHeadingElement = document.createElement("h4") 
let productColor: HTMLAnchorElement = document.createElement("a")
let productInfo: HTMLSpanElement = document.createElement ("span") */
