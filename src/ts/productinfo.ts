import { Product } from "./models/product";
import { productList } from "./main";
import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";



let productCenter: HTMLDivElement = document.querySelector(".hero-container") as HTMLDivElement;
displayProduct(productList);

function displayProduct(someList:Product []){
    for (let i = 0; i < someList.length; i++) {
        
        
        let productDetail: HTMLDivElement = document.createElement ("div");
        productDetail.className = "hero-product";

        let productInfo: HTMLDivElement = document.createElement ("div")
        productInfo.className = ".hero-detail-container";

        let containerImg: HTMLDivElement = document.createElement ("div");
        containerImg.className ="containerImg";

        let productImg: HTMLImageElement = document.createElement ("img");
        productImg.className = (".product-img")
        productDetail.appendChild(productImg)
        productImg.src = someList[i].url

        let productName: HTMLSpanElement = document.createElement ("span")
        productName.className = (".hero-detail-name")
        productName.innerHTML = someList[i].title
        
        
        let productSub: HTMLSpanElement = document.createElement ("span")
        productSub.className = (".hero-detail-sub")
        productSub.innerHTML = someList[i].price
        productSub.innerHTML += " SEK"

        let productColor: HTMLDivElement = document.createElement ("div")
        productColor.className = ("productColor")
        
        let color1: HTMLAnchorElement = document.createElement ("a")
        color1.className = (".color1")
        color1.innerHTML = someList[i].color
        let color2: HTMLAnchorElement = document.createElement ("a")
        color2.className = (".color2")
        let color3: HTMLAnchorElement = document.createElement ("a")
        color3.className = (".color3")

        let buyButton: HTMLButtonElement = document.createElement ("button")
        buyButton.className = (".btn--black")



        
        productCenter.appendChild(productDetail)
        productDetail.appendChild(containerImg)
        containerImg.appendChild(productImg)
        productDetail.appendChild(productInfo)
        productInfo.appendChild(productName)
        productInfo.appendChild(productSub)
        productInfo.appendChild(productColor)
        productInfo.appendChild(buyButton)
        productColor.appendChild(color1)
        productColor.appendChild(color2)
        productColor.appendChild(color3)


    }
}
console.log(productList);


/* let productContainer: HTMLDivElement =document.createElement("div")
let productImage: HTMLImageElement = document.createElement ("img") 
let productName: HTMLHeadingElement = document.createElement ("h3") 
let productSub: HTMLHeadingElement = document.createElement("h4") 
let productColor: HTMLAnchorElement = document.createElement("a")
let productInfo: HTMLSpanElement = document.createElement ("span") */
