import { Product } from "./models/product";
import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";



let productsList : Product [] = loadFromlocalStorage();

let productCenter: HTMLDivElement = document.querySelector("productInfo") as HTMLDivElement;

export function displayProductInfo(someList:Product[], container:HTMLDivElement){

    container.innerHTML=""

    for (let i = 0; i < someList.length; i++) {

        if (someList[i].showItem === true){

        let productDetail: HTMLDivElement = document.createElement ("div")
        productDetail.className = "productInfo__Container";

        let buttonContainer: HTMLDivElement = document.createElement ("div")
        buttonContainer.className = "productInfo__arrow"
        let backButton: HTMLAnchorElement = document.createElement ("a")
        backButton.className = "backButton"
        backButton.removeAttribute("href");
        /* backButton.href = "./products.html" */
        let backAarrow: HTMLLIElement = document.createElement ("li")
        backAarrow.className = "fa-solid fa-arrow-left"
        
        let productInfo: HTMLDivElement = document.createElement ("div")
        productInfo.className = "detailContainer";
        
        let containerImg: HTMLDivElement = document.createElement ("div");
        containerImg.className ="imgContainer";
        
        let productImg: HTMLImageElement = document.createElement ("img");
        productDetail.appendChild(productImg)
        productImg.src = someList[i].url
        
        let productName: HTMLSpanElement = document.createElement ("span")
        productName.className = ("detailContainer__name")
        productName.innerHTML = someList[i].title
        
        
        let productSub: HTMLSpanElement = document.createElement ("span")
        productSub.className = ("detailContainer__price")
        productSub.innerHTML = someList[i].price
        productSub.innerHTML += " " + " SEK"
        
        let productColor: HTMLDivElement = document.createElement ("div")
        productColor.className = ("productColor")
        
        let color1: HTMLAnchorElement = document.createElement ("a")
        color1.className = ("productColor__blue")
        let color2: HTMLAnchorElement = document.createElement ("a")
        color2.className = ("productColor__red")
        let color3: HTMLAnchorElement = document.createElement ("a")
        color3.className = ("productColor__green")

        
        let btnContainer: HTMLDivElement = document.createElement ("div")
        btnContainer.className = ("buyButton")
        let buyButton: HTMLAnchorElement = document.createElement ("a")
        buyButton.className = ("blk--btn")
        buyButton.innerText = ("KÖP")
        buyButton.addEventListener( 'click', () => {
            someList[i].buyAmount++;
            
        })
        container.appendChild(productDetail)
        container.appendChild(buttonContainer)
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

        backButton.addEventListener("click",()=>{
            someList[i].showItem=false;
            displayProductInfo(someList, container)
            loadToLocalStorage(someList);
            
        })
        }
    }
}

console.log(productsList);

