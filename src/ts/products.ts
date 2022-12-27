import { updateCartItemAmount } from "./functions/updatecartitemamount";
import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { Product } from "./models/product";
import { sortByPriceDown } from "./functions/sortbypricedown";
import { sortByPriceUp } from "./functions/sortbypriceup";
import { countOrderPrice } from "./functions/countorderprice";
import { resetlist } from "./functions/resetlist";
import { showNavFilteredItems } from "./functions/shownavfiltereditems";
import { removeActivefilter } from "./functions/resetactivefilter";

//products page declarations
let productList : Product [] = loadFromlocalStorage();
let productsCenter: HTMLDivElement = document.querySelector(".products__center") as HTMLDivElement;
let productsBody: HTMLDivElement = document.getElementById ("products") as HTMLDivElement

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
cartItemAmount = updateCartItemAmount(productList);

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
let sortBarAlt = document.getElementsByClassName("filterContainer__sortAlt") as HTMLCollectionOf<Element>;
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
//=====EVENTS SECTION
//Event for navmenu

filterMobile.addEventListener("click", ()=>{
    resetlist(productList)
    productsBody.style.display = "block"
    productinfo.style.display = "none"
    showNavFilteredItems(productList,"mobile");
})
filterTablet.addEventListener("click", ()=>{
    resetlist(productList)
    productsBody.style.display = "block"
    productinfo.style.display = "none"
    showNavFilteredItems(productList,"tablet");
})
filterLaptop.addEventListener("click", ()=>{
    resetlist(productList)
    productsBody.style.display = "block"
    productinfo.style.display = "none"
    showNavFilteredItems(productList,"laptop");
})

//Events for cartPop 
cartIcon.addEventListener("click", ()=>{
    cartContainer.classList.add("show");
    filterContainerBg.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "18px";       
})
cartCloseBtn.addEventListener("click", ()=>{
    cartContainer.classList.remove("show");
    filterContainerBg.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
})
//Events for filterPopUp
    //Event that show/hide filterTitles content
for (let i=0; i<sortBarAlt.length; i++){
    sortBarAlt[i].children[0].addEventListener("click", ()=> {
        sortList[i].classList.toggle("show");

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
    filterPopUp.style.opacity = "1";
    filterPopUp.style.left = "0";
    filterContainerBg.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "18px";
})
submitFilter.addEventListener("click", ()=>{
    displayFilteredItems(productList);
})
filterCloseBtn.addEventListener("click", ()=>{
    filterPopUp.style.opacity = "0";
    filterPopUp.style.left = "-300%";
    filterContainerBg.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
})
resetFilterBtn.addEventListener("click", ()=>{
    resetFilter();
})
filterContainerBg.addEventListener("click", ()=>{
    filterPopUp.style.opacity = "0";
    filterPopUp.style.left = "-300%";
    filterContainerBg.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
    cartContainer.classList.remove("show");
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

        // Adds selected product to cart and activates product image animation 
        addToCart.addEventListener('click', () => {
        someList[i].buyAmount++;
        cartItemAmount = updateCartItemAmount(someList);
        cartN.innerHTML = (cartItemAmount || 0).toString();
        loadToLocalStorage(someList);
        createCartHtml(someList);
        
        let imgCopy: HTMLImageElement = document.createElement("img") as HTMLImageElement;
	    imgCopy.src = someList[i].url;
        imgCopy.className = "imgCopy";
        imgCopy.style.animation = "slide linear 1s 1 normal forwards";
        imgContainer.appendChild(imgCopy);
        });   

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
            cartPrice = countOrderPrice(cartPrice,products,i);
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
                    loadToLocalStorage(products);
                    createCartHtml(products);
                }     
            })
            productAmountNumber.addEventListener("input", ()=>{
                if (+productAmountNumber.value <= 50 && +productAmountNumber.value >= 0){
                    products[i].buyAmount = +productAmountNumber.value;
                    cartItemAmount = updateCartItemAmount(productList);
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
                    cartItemAmount = updateCartItemAmount(products);
                    loadToLocalStorage(products);
                    createCartHtml(products);
                }  
            })
        }
    }
}
    //Function that create html for productInfo PopUp
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
                for (let j = 0; j < someList.length; j++) {
                    if(someList[j].color==="blå" && (someList[i].productType===someList[j].productType) && (someList[i].brand===someList[j].brand)){
                    someList[j].showItem = true;
                    displayProductInfo(someList, container)
                    }
                }
            })

            colorRed.addEventListener ("click", ()=>{
                someList[i].showItem = false;
                for (let j = 0; j < someList.length; j++) {
                    if(someList[j].color==="röd" && (someList[i].productType===someList[j].productType) && (someList[i].brand===someList[j].brand)){
                    someList[j].showItem = true;
                    displayProductInfo(someList, container)
                    }
                }
            })
            colorGreen.addEventListener ("click", ()=>{
                someList[i].showItem = false;
                for (let j = 0; j < someList.length; j++) {
                    if(someList[j].color==="grön" && (someList[i].productType===someList[j].productType) && (someList[i].brand===someList[j].brand)){
                    someList[j].showItem = true;
                    displayProductInfo(someList, container)
                    }
                }
            })
        }

        let descriptionContainer: HTMLDivElement = document.createElement ("div") as HTMLDivElement;
        descriptionContainer.className = ("descriptionContainer")
        descriptionContainer.innerHTML = productList[i].description

        
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
            productsBody.style.display = "block"
            productinfo.style.display = "none"
            displayProductInfo(someList, container)
            loadToLocalStorage(someList);
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
    if (activeFilterList[3]!=="" && activeFilterList[2]==="sortera stigande") {
        filteredList.sort(sortByPriceUp);
    }
    else if (activeFilterList[3]!=="" && activeFilterList[2]==="sortera fallande"){
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