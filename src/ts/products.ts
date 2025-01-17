import { updateCartItemAmount } from "./functions/updatecartitemamount";
import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { Product } from "./models/product";
import { sortByPriceDown } from "./functions/sortbypricedown";
import { sortByPriceUp } from "./functions/sortbypriceup";

import { resetlist } from "./functions/resetlist";
import { showNavFilteredItems } from "./functions/shownavfiltereditems";
import { removeActivefilter } from "./functions/resetactivefilter";
import { countProductsPrice } from "./functions/countproductsprice";

//products page declarations
let productList : Product [] = loadFromlocalStorage();
let productsCenter: HTMLDivElement = document.querySelector(".products__center") as HTMLDivElement;

//====productInfo====declaration=

let productinfo: HTMLDivElement = document.getElementById("productInfo") as HTMLDivElement

//navigation menu elements declarations

let filterMobile = document.getElementById("menuMobile") as HTMLUListElement;
let filterTablet = document.getElementById("menuTablet") as HTMLUListElement;
let filterLaptop = document.getElementById("menuLaptop") as HTMLUListElement;
let linkUrlMobile : string = "http://localhost:1234/pages/products.html#mobil";
let linkUrlTablet : string = "http://localhost:1234/pages/products.html#tablet";
let linkUrlLaptop : string = "http://localhost:1234/pages/products.html#Laptop";
let cartN : HTMLSpanElement = document.getElementById("cartCount") as HTMLSpanElement;
let cartItemAmount : string = "";

//cartPopUp declarations

let cartContainer = document.getElementById("cart") as HTMLDivElement;
let cartProductsCont = document.getElementById("cartProductsCont") as HTMLDivElement;
let cartProductPrice = document.getElementById("cartProductsPrice") as HTMLSpanElement;
let cartTotalPrice = document.getElementById("cartTotalPrice") as HTMLSpanElement;
let cartCloseBtn = document.getElementById("cartCloseBtn") as HTMLDivElement;
let cartIcon = document.getElementById("cartIcon") as HTMLDivElement;
let submitBtn = document.getElementById("submitBtn") as HTMLAnchorElement;

//filterbar elements declarations


let filterBarIcon = document.getElementById("filterBarIcon") as HTMLDivElement;
let filterPopUp = document.getElementById("filterContainer") as HTMLDivElement;
let filterContainerBg = document.getElementById("lockedBg") as HTMLDivElement;
let sortBarAlt = document.getElementsByClassName("filterContainer__sortOptions__sortAlt") as HTMLCollectionOf<Element>;
let sortBarType = document.getElementById("sortBarType") as HTMLDivElement;
let sortBarBrand = document.getElementById("sortBarBrand") as HTMLDivElement;
let sortBarColor = document.getElementById("sortBarColor") as HTMLDivElement;
let sortBarPrice = document.getElementById("sortBarPrice") as HTMLDivElement;
let resetFilterBtn = document.getElementById("resetFilter") as HTMLButtonElement;
let submitFilter = document.getElementById("submitFilter") as HTMLButtonElement;
let filterCloseBtn = document.getElementById("filterCloseBtn") as HTMLDivElement;
let sortList = [sortBarType,sortBarBrand,sortBarColor,sortBarPrice];
let activeFilterList: string [] = ["","","",""];

//========================= Navigation section

if (linkUrlMobile === location.href){
    showNavFilteredItems(productList,"mobile");
}
else if  (linkUrlTablet === location.href){
    showNavFilteredItems(productList,"tablet");
}
else if (linkUrlLaptop === location.href){
    showNavFilteredItems(productList,"laptop");
}
else {
    displayProducts(productList);
}
cartItemAmount = updateCartItemAmount(productList);
cartN.innerHTML = cartItemAmount;
createCartHtml(productList);
//=====EVENTS SECTION
//Event for navmenu

filterMobile.addEventListener("click", ()=>{
    resetlist(productList)
    showNavFilteredItems(productList,"mobile");
})
filterTablet.addEventListener("click", ()=>{
    resetlist(productList)
    showNavFilteredItems(productList,"tablet");
})
filterLaptop.addEventListener("click", ()=>{
    resetlist(productList)
    showNavFilteredItems(productList,"laptop");
})

//Events for cartPop 
let showCartPopUpClass : string = "showCartPopUp";
cartIcon.addEventListener("click", ()=>{
    showPopUp(cartContainer, showCartPopUpClass);     
})
cartCloseBtn.addEventListener("click", ()=>{
    hidePopUp(cartContainer, showCartPopUpClass);
})
//Events for filterPopUp
let showFilterPopUpClass : string = "showFilterPopUp";
    //Event that show/hide filterTitles content
for (let i=0; i<sortBarAlt.length; i++){
    sortBarAlt[i].children[0].addEventListener("click", ()=> {
        sortList[i].classList.toggle("showContent");
    })
}
    //Event that steer the ActiveFilterList(this list helps to create filterList of productList by comparing AFL values with PL) and steer adding/remove class activefitler
for (let i=0; i<sortList.length; i++){
    for(let j=0; j<sortList[i].children.length; j++){
        sortList[i].children[j].addEventListener("click", ()=>{
            if (i===0){
                activeFilterList[0]=sortList[i].children[j].innerHTML;
                if (sortList[i].children[j].className === "activeFilter"){
                    sortList[i].children[j].classList.remove("activeFilter");
                    activeFilterList[i] = "";
                }
                else {
                    removeActivefilter(0, sortList);
                    sortList[i].children[j].classList.add("activeFilter");
                }
            }  
            else if (i===1){
                activeFilterList[1]=sortList[i].children[j].innerHTML; 
                if (sortList[i].children[j].className === "activeFilter"){
                    sortList[i].children[j].classList.remove("activeFilter");
                    activeFilterList[i] = "";            
                }
                else {
                    removeActivefilter(1, sortList);
                    sortList[i].children[j].classList.add("activeFilter");
                }
            } 
            else if (i===2){
                activeFilterList[2]=sortList[i].children[j].innerHTML;
                if (sortList[i].children[j].className === "activeFilter"){
                    sortList[i].children[j].classList.remove("activeFilter");
                    activeFilterList[i] = "";  
                }
                else {
                    removeActivefilter(2, sortList);
                    sortList[i].children[j].classList.add("activeFilter");
                }
            } 
            else if (i===3){
                activeFilterList[3]=sortList[i].children[j].innerHTML;
                if (sortList[i].children[j].className === "activeFilter"){
                    sortList[i].children[j].classList.remove("activeFilter");
                    activeFilterList[i] = "";  
                }
                else {
                    removeActivefilter(3, sortList);
                    sortList[i].children[j].classList.add("activeFilter");
                }
            } 
        }) 
    }
}
filterBarIcon.addEventListener("click", ()=>{
    showPopUp(filterPopUp, showFilterPopUpClass);
})
submitFilter.addEventListener("click", ()=>{
    displayFilteredItems(productList);
})
filterCloseBtn.addEventListener("click", ()=>{
    for (let i=0; i<sortBarAlt.length; i++){
        sortList[i].classList.remove("showContent");
    }
    hidePopUp(filterPopUp, showFilterPopUpClass);
})
resetFilterBtn.addEventListener("click", ()=>{
    resetFilter();
})
filterContainerBg.addEventListener("click", ()=>{
    for (let i=0; i<sortBarAlt.length; i++){
        sortList[i].classList.remove("showContent");
    }
    hidePopUp(cartContainer, showCartPopUpClass);
    hidePopUp(filterPopUp, showFilterPopUpClass);
    productinfo.classList.remove("showPopupProductInfo")
    resetlist(productList)
})
//=====FUNCTIONS SECTION
    // Function that create html for all products in main section
export function displayProducts(someList: Product []) {
    resetlist(someList)
    productsCenter.innerHTML = "";
    
    for(let i = 0; i < someList.length; i++){
        let productContainer : HTMLDivElement = document.createElement("div") as HTMLDivElement;
        productContainer.className = "product";
        let productInfoLink : HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement ;
        productInfoLink.className = "product__infoLink";
        

        productInfoLink.addEventListener('click', () => {
            someList[i]["showItem"] = true;
            displayProductInfo(someList, productinfo)
            filterContainerBg.style.display = "block"
            productinfo.classList.add ("showPopupProductInfo")
            document.body.style.overflow = "hidden";
        });

        let imgContainer : HTMLDivElement = document.createElement("div") as HTMLDivElement;
        imgContainer.className = "product__picture";

        let imgProduct: HTMLImageElement = parent.document.createElement("img") as HTMLImageElement;
	    imgProduct.src = someList[i].url;
        imgProduct.className = "originalImg";

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

        let imgDiv: HTMLDivElement = document.createElement("div") as HTMLDivElement;
        imgDiv.className = "imgDiv";
       
        
        // Adds selected product to cart and activates product image animation 
        addToCart.addEventListener('click', () => {
        someList[i].buyAmount++;
        for(let k=0; k<productList.length; k++){
            if(someList[i].id === productList[k].id){
                productList[k].buyAmount === someList[i].buyAmount;
            }
        }
        loadToLocalStorage(productList);
        cartItemAmount = updateCartItemAmount(productList);
        cartN.innerHTML = cartItemAmount;
        createCartHtml(productList);

        imgDiv.innerHTML = "";
        let imgCopy: HTMLImageElement = document.createElement("img") as HTMLImageElement;
        imgCopy.src = someList[i].url;
        imgCopy.className = "imgCopy";
        imgDiv.style.animation = "slide linear 1s 1 normal forwards";
        imgDiv.appendChild(imgCopy);

        });   
        
    buttonDiv.appendChild(imgDiv);
    productsCenter.appendChild(productContainer);
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
    //Function that create html for cartPopUp
function createCartHtml (products:Product []) {
    cartProductsCont.innerHTML = "";
    let cartPrice : number = 0;
    cartN.innerHTML = cartItemAmount;
    //Checking if cartItemAmount is "0" submitBtn is not active
    if (cartItemAmount!== ""){
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
            cartPrice = countProductsPrice(products);
            cartProductPrice.innerHTML = cartPrice.toString()+":-";
            cartTotalPrice.innerHTML = cartPrice.toString()+":-";
            let decreaseBtn : HTMLButtonElement = document.createElement("button");
            decreaseBtn.innerHTML = "-";
            let productAmountNumber : HTMLInputElement = document.createElement ("input");
            productAmountNumber.value = (products[i].buyAmount).toString();
            let increaseBtn : HTMLButtonElement = document.createElement("button");
            increaseBtn.innerHTML = "+";
            productAmountDiv.appendChild(decreaseBtn);
            productAmountDiv.appendChild(productAmountNumber);
            productAmountDiv.appendChild(increaseBtn);
            increaseBtn.addEventListener("click", ()=>{
                if (+productAmountNumber.value < 50 && +productAmountNumber.value > 0){
                    products[i].buyAmount ++;
                    cartItemAmount = updateCartItemAmount(products);
                    cartN.innerHTML = cartItemAmount;
                    loadToLocalStorage(products);
                    productAmountNumber.value = products[i].buyAmount.toString();
                    cartPrice = countProductsPrice(products);
                    cartProductPrice.innerHTML = cartPrice.toString()+":-";
                    cartTotalPrice.innerHTML = cartPrice.toString()+":-";
                }     
            })
            productAmountNumber.addEventListener("change", ()=>{
                if (+productAmountNumber.value <= 50 && +productAmountNumber.value >= 0){
                    products[i].buyAmount = +productAmountNumber.value;
                    cartItemAmount = updateCartItemAmount(products);
                    cartN.innerHTML = cartItemAmount;
                    loadToLocalStorage(products);
                    if (products[i].buyAmount === 0){
                        createCartHtml(products);
                    }
                    else {
                        cartPrice = countProductsPrice(products);
                        cartProductPrice.innerHTML = cartPrice.toString()+":-";
                        cartTotalPrice.innerHTML = cartPrice.toString()+":-";
                    }
                } 
                else {
                    productAmountNumber.value = products[i].buyAmount.toString();
                }
            })
            decreaseBtn.addEventListener("click", ()=>{
                if (+productAmountNumber.value <= 50 && +productAmountNumber.value > 0){
                    products[i].buyAmount --;
                    cartItemAmount = updateCartItemAmount(products);
                    cartN.innerHTML = cartItemAmount;
                    loadToLocalStorage(products);
                    if (products[i].buyAmount === 0){
                        createCartHtml(products);
                    }
                    else {
                        productAmountNumber.value = products[i].buyAmount.toString();
                        cartPrice = countProductsPrice(products);
                        cartProductPrice.innerHTML = cartPrice.toString()+":-";
                        cartTotalPrice.innerHTML = cartPrice.toString()+":-";
                    }
                }  
            })
        }
    }
}
    //Function that create html for productInfo PopUp
export function displayProductInfo(someList:Product[], container:HTMLDivElement){
    container.innerHTML="";

    for (let i = 0; i < someList.length; i++) {
        if (someList[i].showItem === true){

        let productDetail: HTMLDivElement = document.createElement ("div")
        productDetail.className = "productInfo__Container";

        let buttonContainer: HTMLDivElement = document.createElement ("div")
        buttonContainer.className = "productInfo__close"
        let backButton: HTMLAnchorElement = document.createElement ("a")
        backButton.className = "backButton"
        backButton.removeAttribute("href");
        let backAarrow: HTMLLIElement = document.createElement ("li")
        backAarrow.className = "fa-solid fa-x"
        
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

        let productBrand: HTMLSpanElement = document.createElement ("span")
        productBrand.className = ("detailContainer__brand")
        productBrand.innerHTML = someList[i].brand
        
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
                for (let j = 0; j < productList.length; j++) {
                    if(productList[j].color==="blå" && (someList[i].productType===productList[j].productType) && (someList[i].brand===productList[j].brand)){
                        productList[j].showItem = true;
                    displayProductInfo(productList, container)
                    }
                }
            })

            colorRed.addEventListener ("click", ()=>{
                someList[i].showItem = false;
                for (let j = 0; j < productList.length; j++) {
                    if(productList[j].color==="röd" && (someList[i].productType===productList[j].productType) && (someList[i].brand===productList[j].brand)){
                        productList[j].showItem = true;
                    displayProductInfo(productList, container)
                    }
                }
            })
            colorGreen.addEventListener ("click", ()=>{
                someList[i].showItem = false;
                for (let j = 0; j < productList.length; j++) {
                    if(productList[j].color==="grön" && (someList[i].productType===productList[j].productType) && (someList[i].brand===productList[j].brand)){
                        productList[j].showItem = true;
                    displayProductInfo(productList, container)
                    }
                }
            })
        }

        let descriptionContainer: HTMLDivElement = document.createElement ("div") as HTMLDivElement;
        descriptionContainer.className = ("descriptionContainer")
        descriptionContainer.innerHTML = someList[i].description

        
        let btnContainer: HTMLDivElement = document.createElement ("div")
        btnContainer.className = ("buyButton")
        let buyButton: HTMLAnchorElement = document.createElement ("a")
        buyButton.className = ("blk--btn")
        buyButton.innerText = ("KÖP")
        buyButton.addEventListener( 'click', () => {
        someList[i].buyAmount++;
        for (let j=0; j<productList.length; j++){
            if(someList[i].id===productList[j].id){
                productList[j].buyAmount = someList[i].buyAmount;
            }
        }
        cartItemAmount = updateCartItemAmount(productList);
        cartN.innerHTML = cartItemAmount;
        loadToLocalStorage(productList);
        createCartHtml(productList);
            
        })
        container.appendChild(productDetail)
        container.appendChild(buttonContainer)
        productDetail.appendChild(containerImg)
        containerImg.appendChild(productImg)
        productDetail.appendChild(productInfo)
        productInfo.appendChild(productName)
        productInfo.appendChild(productBrand)
        productInfo.appendChild(productSub)
        productInfo.appendChild(productColor)
        productInfo.appendChild(descriptionContainer)
        productInfo.appendChild(btnContainer)
        btnContainer.appendChild(buyButton)
        productInfo.appendChild (btnContainer)
        buttonContainer.appendChild(backButton)
        backButton.appendChild(backAarrow)

        backButton.addEventListener("click",()=>{
            someList[i].showItem=false;
            filterContainerBg.style.display = "none"
            productinfo.classList.remove("showPopupProductInfo")
            document.body.style.overflow = "auto";
        })
        }
    }
}
    //Function that make filter by clicking and display filtered items.
function displayFilteredItems (products: Product []) {
    let filteredList = products;
    if (activeFilterList[0]!==""){
        filteredList = filteredList.filter((product)=>product.productType === activeFilterList[0]);
    }
    if (activeFilterList[1]!==""){
        filteredList = filteredList.filter((product)=>product.brand === activeFilterList[1]);
    }
    if (activeFilterList[2]!==""){
        filteredList = filteredList.filter((product)=>product.color === activeFilterList[2]);
    }
    if (activeFilterList[3]!=="" && activeFilterList[3]==="sortera stigande") {
        filteredList.sort(sortByPriceUp);
    }
    else if (activeFilterList[3]!=="" && activeFilterList[3]==="sortera fallande"){
        filteredList.sort(sortByPriceDown);
    }
    displayProducts(filteredList);
}
    //Function that reset all filter by removing class "activeFilter"
function resetFilter() {
    for (let i=0; i<sortList.length; i++){
        activeFilterList[i]="";
        for(let j=0; j<sortList[i].children.length; j++){
                sortList[i].children[j].classList.remove("activeFilter");   
        }
    }
}
    //Function that hide cartPopUp and FilterPopUp
function hidePopUp (container:HTMLDivElement, className:string){
    container.classList.remove(className);
    filterContainerBg.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
}
    //Function that show cartPopUp and FilterPopUp
function showPopUp (container:HTMLDivElement, className:string) {
   container.classList.add(className);
    filterContainerBg.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "18px";
}