import { updateCartAmount } from "./functions/cartItemAmount";
import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { Product } from "./models/product";
import { sortByPriceDown } from "./functions/sortbypricedown";
import { sortByPriceUp } from "./functions/sortbypriceup";
import { countOrderPrice } from "./functions/countorderprice";
import { resetlist } from "./functions/resetlist";
/* import { displayProductInfo } from "./productinfo"; */

let productList : Product [] = loadFromlocalStorage();
let cartItemAmount : string;
let productsCenter: HTMLDivElement = document.querySelector(".products__center") as HTMLDivElement;
let cartN : HTMLSpanElement = document.getElementById("cartCount") as HTMLSpanElement;
cartItemAmount = updateCartAmount(productList);
let productsBody: HTMLDivElement = document.getElementById ("products") as HTMLDivElement

//====productInfo====declaration=
let productinfo: HTMLDivElement = document.getElementById("productInfo") as HTMLDivElement

//navigation filter elements
let filterMobile = document.getElementById("menuMobile") as HTMLUListElement;
let filterTablet = document.getElementById("menuTablet") as HTMLUListElement;
let filterLaptop = document.getElementById("menuLaptop") as HTMLUListElement;
let linkUrlMobile : string = "http://localhost:1234/pages/products.html#mobil";
let linkUrlTablet : string = "http://localhost:1234/pages/products.html#tablet";
let linkUrlLaptop : string = "http://localhost:1234/pages/products.html#Laptop";
//cartPopUp
let cartContainer = document.getElementById("cart") as HTMLDivElement;
let cartProductsCont = document.getElementById("cartProductsCont") as HTMLDivElement;
let cartProductPrice = document.getElementById("cartProductsPrice") as HTMLSpanElement;
let cartTotalPrice = document.getElementById("cartTotalPrice") as HTMLSpanElement;
let cartCloseBtn = document.getElementById("cartCloseBtn") as HTMLDivElement;
let cartIcon = document.getElementById("cartIcon") as HTMLDivElement;
let submitBtn = document.getElementById("submitBtn") as HTMLAnchorElement;
//filterbar elements
let sortBarAlt = document.getElementsByClassName("filter__sortAlt");
let sortBarBrand = document.getElementById("sortBarBrand") as HTMLDivElement;
let sortBarColor = document.getElementById("sortBarColor") as HTMLDivElement;
let sortBarPrice = document.getElementById("sortBarPrice") as HTMLDivElement;
let sortList = [sortBarBrand,sortBarColor,sortBarPrice];
//========================= Navigation section
if (linkUrlMobile === location.href){
    displayFilteredProducts(productList, "mobile");
}
else if  (linkUrlTablet === location.href){
    displayFilteredProducts(productList, "tablet");
}
else if (linkUrlLaptop === location.href){
    displayFilteredProducts(productList, "laptop");
}
else {
    displayProducts(productList);
}
filterMobile.addEventListener("click", ()=>{
    resetlist(productList)
    productsBody.style.display = "block"
    productinfo.style.display = "none"
    displayFilteredProducts(productList, "mobile");
})
filterTablet.addEventListener("click", ()=>{
    resetlist(productList)
    productsBody.style.display = "block"
    productinfo.style.display = "none"
    displayFilteredProducts(productList, "tablet");
})
filterLaptop.addEventListener("click", ()=>{
    resetlist(productList)
    productsBody.style.display = "block"
    productinfo.style.display = "none"
    displayFilteredProducts(productList, "laptop");
})
//=========================Cart Section
cartIcon.addEventListener("click", ()=>{
    cartContainer.classList.add("show");
    document.body.style.overflow ="hidden";
    
})
cartCloseBtn.addEventListener("click", ()=>{
    cartContainer.classList.remove("show");
    document.body.style.overflow ="auto";
})

//=========================Filter section
for (let i=0; i<sortBarAlt.length; i++){
    sortBarAlt[i].addEventListener("click", ()=> {
        sortList[i].classList.toggle("show");
    })
    sortBarAlt[i].addEventListener("mouseleave", ()=> {
        sortList[i].classList.remove("show");
    })
}
// let newList : Product [] = productList;
// for (let i=0; i<sortList.length; i++){
//     for(let j=0; j<sortList[i].children.length; j++){
//         sortList[i].children[j].addEventListener("click", ()=>{
//             if(i===0){
//                 newList =  newList.filter(product => product.brand == sortList[i].children[j].innerHTML);
//                 displayProducts(newList,"filtred");
//             }
//             else if (i===1){
//                 newList =  newList.filter(product => product.color == sortList[i].children[j].innerHTML);
//                 displayProducts(newList,"filtred");
//             }
//             else if (i===2){
//                 if (j===0) {
//                     newList.sort(sortByPriceUp);
//                     displayProducts(newList,"filtred");
//                 }
//                 else {
//                     newList.sort(sortByPriceDown);
//                     displayProducts(newList,"filtred");
//                 }
//             }
//         }) 
//     }
// }
//=========================Functions
function displayProducts(someList: Product []) {
    resetlist(someList)
    productsCenter.innerHTML = "";
    cartN.innerHTML = cartItemAmount;
    for(let i = 0; i < someList.length; i++){
        let productContainer : HTMLDivElement = document.createElement("div") as HTMLDivElement;
        productContainer.className = "product";
        let productInfoLink : HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement ;
        productInfoLink.className = "product__infoLink";
        /* productInfoLink.href="./productinfo.html"; */

        productInfoLink.addEventListener('click', () => {
            someList[i]["showItem"] = true;
            displayProductInfo(someList, productinfo)
            productsBody.style.display = "none"
            productinfo.style.display ="block"
            loadToLocalStorage(productList)
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
        addToCart.innerHTML += "LÄGG TILL " + `<i class="bi bi-bag"></i>`;
        addToCart.addEventListener('click', () => {
        someList[i].buyAmount++;
        cartItemAmount = updateCartAmount(someList);
        cartN.innerHTML = cartItemAmount.toString();
        loadToLocalStorage(someList);
        createCartHtml(someList);
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
function displayFilteredProducts(someList: Product [], filter: string) {
    resetlist(someList)
    productsCenter.innerHTML = "";
    for(let i = 0; i < someList.length; i++){
    if (someList[i].productType === filter){
        let productContainer : HTMLDivElement = document.createElement("div") as HTMLDivElement;
        productContainer.className = "product";
        let productInfoLink : HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement ;
        productInfoLink.className = "product__infoLink";

        productInfoLink.addEventListener('click', () => {
        someList[i]["showItem"] = true;
        displayProductInfo(someList, productinfo)
        productsBody.style.display = "none"
        productinfo.style.display = "block"
        loadToLocalStorage(productList);
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
        addToCart.innerHTML += "LÄGG TILL " + `<i class="bi bi-bag"></i>`;
        addToCart.addEventListener('click', () => {
        someList[i].buyAmount++;
        cartItemAmount = updateCartAmount(someList);
        cartN.innerHTML = (cartItemAmount || 0).toString();
        loadToLocalStorage(someList);
        createCartHtml(someList);
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
}
function createCartHtml (products:Product []) {
    cartProductsCont.innerHTML = "";
    cartN.innerHTML = cartItemAmount.toString();
    let cartPrice : number = 0;
    if (cartItemAmount!==""){
        submitBtn.getAttribute("href");
        submitBtn.href = "./checkout.html";
        submitBtn.style.opacity = "1";
    }
    else {
        submitBtn.removeAttribute("href");
        submitBtn.style.opacity = ".3";
    }
    for (let i=0; i<products.length;i++){
        cartProductPrice.innerHTML = cartPrice.toString()+":-";
        cartTotalPrice.innerHTML = cartPrice.toString()+":-";
        if (products[i].buyAmount > 0){
            let productDiv : HTMLDivElement = document.createElement("div");
            cartProductsCont.appendChild(productDiv);
            let productImgDiv : HTMLDivElement = document.createElement("div");
            let productInfoDiv : HTMLDivElement = document.createElement("div");
            productDiv.appendChild(productImgDiv);
            productDiv.appendChild(productInfoDiv);
            let productImg : HTMLImageElement = document.createElement("img");
            productImgDiv.appendChild(productImg);
            let productTitle : HTMLParagraphElement = document.createElement("p");
            let productColor : HTMLParagraphElement = document.createElement("p");
            let productPrice : HTMLParagraphElement = document.createElement("p");
            let productAmountDiv : HTMLDivElement = document.createElement("div");
            productInfoDiv.appendChild(productTitle);
            productInfoDiv.appendChild(productColor);
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productAmountDiv);
            productDiv.classList.add("cartContainer__products__itemContainer")
            productImg.src = products[i].url;
            productTitle.innerHTML = products[i].title;
            productColor.innerHTML = products[i].color;
            productPrice.innerHTML = products[i].price+":-";
            cartPrice = countOrderPrice(cartPrice,products,i);
            cartProductPrice.innerHTML = cartPrice.toString()+":-";
            cartTotalPrice.innerHTML = cartPrice.toString()+":-";
            let decreaseBtn : HTMLButtonElement = document.createElement("button");
            decreaseBtn.innerHTML = "-";
            let productAmountNumber : HTMLInputElement = document.createElement ("input");
            productAmountNumber.value = (products[i].buyAmount).toString();
            productAmountNumber.type = "number";
            let increaseBtn : HTMLButtonElement = document.createElement("button");
            increaseBtn.innerHTML = "+";
            productAmountDiv.appendChild(decreaseBtn);
            productAmountDiv.appendChild(productAmountNumber);
            productAmountDiv.appendChild(increaseBtn);
            increaseBtn.addEventListener("click", ()=>{
                if (+productAmountNumber.value < 50 && +productAmountNumber.value > 0){
                    products[i].buyAmount ++;
                    cartItemAmount = updateCartAmount(products);
                    loadToLocalStorage(products);
                    createCartHtml(products);
                }     
            })
            productAmountNumber.addEventListener("input", ()=>{
                if (+productAmountNumber.value <= 50 && +productAmountNumber.value >= 0){
                    products[i].buyAmount = +productAmountNumber.value;
                    cartItemAmount = updateCartAmount(productList);
                    loadToLocalStorage(products);
                    createCartHtml(products);
                } 
                else {
                    productAmountNumber.value = products[i].buyAmount.toString();
                }
            })
            decreaseBtn.addEventListener("click", ()=>{
                if (+productAmountNumber.value <= 50 && +productAmountNumber.value > 0){
                    products[i].buyAmount --;
                    cartItemAmount = updateCartAmount(products);
                    loadToLocalStorage(products);
                    createCartHtml(products);
                }  
            })
        }
    }
}

//=========show product info====

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

        if (someList[i].productType ==="laptop") {
            let colorBlack: HTMLDivElement = document.createElement ("div")
            colorBlack.className = ("productColor__black")
            productColor.appendChild(colorBlack)
        }
        else {
            let colorBlue: HTMLDivElement = document.createElement ("div")
            colorBlue.className = ("productColor__blue")
            productColor.appendChild(colorBlue)
            let colorRed: HTMLDivElement = document.createElement ("div")
            colorRed.className = ("productColor__red")
            productColor.appendChild(colorRed)
            let colorGreen: HTMLDivElement = document.createElement ("div")
            colorGreen.className = ("productColor__green")
            productColor.appendChild(colorGreen)

            colorBlue.addEventListener ("click", ()=>{
                someList[i].showItem = false;
                for (let j = 0; j < someList.length; j++) {
                    if(someList[j].color==="blå" && (someList[i].productType===someList[j].productType) && (someList[i].brand===someList[j].brand)){
                    someList[j].showItem = true;
                    displayProductInfo(someList, container)
                    loadToLocalStorage
                    loadFromlocalStorage
                    }
                }
            })

            colorRed.addEventListener ("click", ()=>{
                someList[i].showItem = false;
                for (let j = 0; j < someList.length; j++) {
                    if(someList[j].color==="röd" && (someList[i].productType===someList[j].productType) && (someList[i].brand===someList[j].brand)){
                    someList[j].showItem = true;
                    displayProductInfo(someList, container)
                    loadToLocalStorage
                    }
                }
            })
            colorGreen.addEventListener ("click", ()=>{
                someList[i].showItem = false;
                for (let j = 0; j < someList.length; j++) {
                    if(someList[j].color==="grön" && (someList[i].productType===someList[j].productType) && (someList[i].brand===someList[j].brand)){
                    someList[j].showItem = true;
                    displayProductInfo(someList, container)
                    loadToLocalStorage
                    }
                }
            })
        }
        
        let btnContainer: HTMLDivElement = document.createElement ("div")
        btnContainer.className = ("buyButton")
        let buyButton: HTMLAnchorElement = document.createElement ("a")
        buyButton.className = ("blk--btn")
        buyButton.innerText = ("KÖP")
        buyButton.addEventListener( 'click', () => {
        someList[i].buyAmount++;
        cartItemAmount = updateCartAmount(someList);
        cartN.innerHTML = (cartItemAmount || 0).toString();
        loadToLocalStorage(someList);
        createCartHtml(someList);
            
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
        productInfo.appendChild (btnContainer)
        buttonContainer.appendChild(backButton)
        backButton.appendChild(backAarrow)

        backButton.addEventListener("click",()=>{
            someList[i].showItem=false;
            productsBody.style.display = "block"
            productinfo.style.display = "none"
            displayProductInfo(someList, container)
            loadToLocalStorage(someList);
            
        })
        }
    }
}

