import { Product } from "./models/product";
import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";



let productsList : Product [] = loadFromlocalStorage("productList");

let productCenter: HTMLDivElement = document.querySelector(".hero-container") as HTMLDivElement;
displayProduct(productsList);

export function displayProduct(someList:Product []){
    for (let i = 0; i < someList.length; i++) {

        if (someList[i].showItem === true){
        
        let productDetail: HTMLDivElement = document.createElement ("div");
        productDetail.className = "hero-product";

        let buttonContainer: HTMLDivElement = document.createElement ("div")
        buttonContainer.className = "buttonContainer back-arrow"
        let backButton: HTMLAnchorElement = document.createElement ("a")
        backButton.className = "backButton"
        backButton.href = "./products.html"
        let backAarrow: HTMLLIElement = document.createElement ("li")
        backAarrow.className = "fa-solid fa-arrow-left"
        
        let productInfo: HTMLDivElement = document.createElement ("div")
        productInfo.className = "hero-detail-container";
        
        let containerImg: HTMLDivElement = document.createElement ("div");
        containerImg.className ="containerImg";
        
        let productImg: HTMLImageElement = document.createElement ("img");
        productImg.className = ("product-img")
        productDetail.appendChild(productImg)
        productImg.src = someList[i].url
        
        let productName: HTMLSpanElement = document.createElement ("span")
        productName.className = ("hero-detail-name")
        productName.innerHTML = someList[i].title
        
        
        let productSub: HTMLSpanElement = document.createElement ("span")
        productSub.className = ("hero-detail-sub")
        productSub.innerHTML = someList[i].price
        productSub.innerHTML += " " + " SEK"
        
        let productColor: HTMLDivElement = document.createElement ("div")
        productColor.className = ("productColor")
        
        let color1: HTMLAnchorElement = document.createElement ("a")
        color1.className = ("color1")
        let color2: HTMLAnchorElement = document.createElement ("a")
        color2.className = ("color2")
        let color3: HTMLAnchorElement = document.createElement ("a")
        color3.className = ("color3")

        /* let textContainer: HTMLDivElement = document.createElement ("div")
        textContainer.className = ("textContainer")
        let bar1:HTMLDivElement = document.createElement ("div")
        bar1.className = ("bar1")
        let bar2:HTMLDivElement = document.createElement ("div")
        bar2.className = ("bar2")
        let bar3:HTMLDivElement = document.createElement ("div")
        bar3.className = ("bar3") */
        

        let productText: HTMLSpanElement = document.createElement ("span")
        productText.className =("productText")
        productText.innerText = ("lorem ipsum")

        
        let btnContainer: HTMLDivElement = document.createElement ("div")
        btnContainer.className = ("buyButton")
        let buyButton: HTMLAnchorElement = document.createElement ("a")
        buyButton.className = ("blk--btn")
        buyButton.innerText = ("KÖP")
        buyButton.addEventListener( 'click', () => {
            someList[i].buyAmount++;
            
        })
        productCenter.appendChild(productDetail)
        productCenter.appendChild(buttonContainer)
        
        
        productDetail.appendChild(containerImg)
        containerImg.appendChild(productImg)
        productDetail.appendChild(productInfo)
        productInfo.appendChild(productName)
        productInfo.appendChild(productSub)
        productInfo.appendChild(productColor)
        productInfo.appendChild(btnContainer)
        btnContainer.appendChild(buyButton)
        productColor.appendChild(color1)
        productColor.appendChild(color2)
        productColor.appendChild(color3)
        productInfo.appendChild (btnContainer)
        buttonContainer.appendChild(backButton)
        backButton.appendChild(backAarrow)
        
        /* productInfo.appendChild(textContainer)
        productText.appendChild(productText) */
        
            for (let i = 0; i < someList.length; i++) {
                    backButton.addEventListener("click",()=>{
                    someList[i]["showItem"]=false
                    localStorage.setItem ("productList", JSON.stringify(productsList))
                })

                
            }
        }
    }
}

console.log(productsList);





/* let productContainer: HTMLDivElement =document.createElement("div")
let productImage: HTMLImageElement = document.createElement ("img") 
let productName: HTMLHeadingElement = document.createElement ("h3") 
let productSub: HTMLHeadingElement = document.createElement("h4") 
let productColor: HTMLAnchorElement = document.createElement("a")
let productInfo: HTMLSpanElement = document.createElement ("span") */
