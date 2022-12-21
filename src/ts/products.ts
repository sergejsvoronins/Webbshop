import { updateCartAmount } from "./functions/cartItemAmount";
import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { Product } from "./models/product";
import { sortByPriceDown } from "./functions/sortbypricedown";
import { sortByPriceUp } from "./functions/sortbypriceup";
import { countOrderPrice } from "./functions/countorderprice";

let productList : Product [] = loadFromlocalStorage("productList");
let cartItemAmount : number | undefined = 0;
let productsCenter: HTMLDivElement = document.querySelector(".products__center") as HTMLDivElement;
let cartN : HTMLSpanElement = document.getElementById("cartCount") as HTMLSpanElement;
cartItemAmount = updateCartAmount(productList);

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
//=========================Cart Section
cartIcon.addEventListener("click", ()=>{
    cartContainer.classList.add("show");
    document.body.style.overflow ="hidden";
})
cartCloseBtn.addEventListener("click", ()=>{
    cartContainer.classList.remove("show");
    document.body.style.overflow ="auto"
})
createCartHtml(productList);
//=========================Filter section
for (let i=0; i<sortBarAlt.length; i++){
    sortBarAlt[i].addEventListener("click", ()=> {
        sortList[i].classList.toggle("show");
    })
    sortBarAlt[i].addEventListener("mouseleave", ()=> {
        sortList[i].classList.remove("show");
    })
}
let newList : Product [] = productList;
for (let i=0; i<sortList.length; i++){
    for(let j=0; j<sortList[i].children.length; j++){
        sortList[i].children[j].addEventListener("click", ()=>{
            if(i===0){
                newList =  newList.filter(product => product.brand == sortList[i].children[j].innerHTML);
                displayProducts(newList,"filtred");
            }
            else if (i===1){
                newList =  newList.filter(product => product.color == sortList[i].children[j].innerHTML);
                displayProducts(newList,"filtred");
            }
            else if (i===2){
                if (j===0) {
                    newList.sort(sortByPriceUp);
                    displayProducts(newList,"filtred");
                }
                else {
                    newList.sort(sortByPriceDown);
                    displayProducts(newList,"filtred");
                }
            }
        }) 
    }
}
//=========================Functions
function displayProducts(someList: Product [], lsName: string) {
    productsCenter.innerHTML = "";
    for(let i = 0; i < someList.length; i++){
    let productContainer : HTMLDivElement = document.createElement("div") as HTMLDivElement;
    productContainer.className = "product";

    let productInfoLink : HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement ;
    productInfoLink.className = "product__infoLink";
    /* productInfoLink.href="./productinfo.html"; */

    productInfoLink.addEventListener('click', () => {
        someList[i]["showItem"] = true
        loadToLocalStorage(productList,lsName);
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
        loadToLocalStorage(someList, lsName);
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
function createCartHtml (products:Product []) {
    cartProductsCont.innerHTML = "";
    let cartPrice : number = 0;
    if (cartItemAmount!==0){
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
            let productAmountNumber : HTMLDivElement = document.createElement ("div");
            productAmountNumber.innerHTML = (products[i].buyAmount).toString();
            let increaseBtn : HTMLButtonElement = document.createElement("button");
            increaseBtn.innerHTML = "+";
            productAmountDiv.appendChild(decreaseBtn);
            productAmountDiv.appendChild(productAmountNumber);
            productAmountDiv.appendChild(increaseBtn);
            increaseBtn.addEventListener("click", ()=>{
                products[i].buyAmount ++;
                cartItemAmount = updateCartAmount(products);
                if (cartItemAmount === 0){
                    cartN.innerHTML = "";
                }
                else {
                    cartN.innerHTML = cartItemAmount.toString();
                }
                // cartN.innerHTML = (cartItemAmount || 0).toString();
                loadToLocalStorage(products, "productList");
                createCartHtml(products);     
            })
            decreaseBtn.addEventListener("click", ()=>{
                products[i].buyAmount --;
                cartItemAmount = updateCartAmount(products);
                if (cartItemAmount === 0){
                    cartN.innerHTML = "";
                }
                else {
                    cartN.innerHTML = cartItemAmount.toString();
                }
                loadToLocalStorage(products, "productList");
                createCartHtml(products);
            })
        }
    }
}

//============productInfoFunction=====

    let productInfoContainer: HTMLDivElement = document.querySelector("productInfo") as HTMLDivElement


    function displayProductInfo(someList:Product []){
        for (let i = 0; i < someList.length; i++) {

        if (someList[i].showItem === true){
        
        let productDetail:HTMLDivElement = document.getElementById ("productInfo") as HTMLDivElement
        /* let productDetail: HTMLDivElement = document.createElement ("div"); */
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

        
        let btnContainer: HTMLDivElement = document.createElement ("div")
        btnContainer.className = ("buyButton")
        let buyButton: HTMLAnchorElement = document.createElement ("a")
        buyButton.className = ("blk--btn")
        buyButton.innerText = ("KÖP")
        buyButton.addEventListener( 'click', () => {
            someList[i].buyAmount++;
            
        })
        productInfoContainer.appendChild(productDetail)
        productInfoContainer.appendChild(buttonContainer)
        
        
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
        
        
            for (let i = 0; i < someList.length; i++) {
                    backButton.addEventListener("click",()=>{
                    someList[i]["showItem"]=false
                    
                    localStorage.setItem ("productList", JSON.stringify(someList))
                })

                
            }
        }
    }
}