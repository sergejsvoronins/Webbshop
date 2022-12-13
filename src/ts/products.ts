import { cartList, productList } from "./main";
import { Product } from "./models/product";


let productsCenter: HTMLDivElement = document.querySelector(".products_center") as HTMLDivElement;
displayProducts(productList);

function displayProducts(someList: Product []) {
    for(let i = 0; i < someList.length; i++){
    let productContainer : HTMLDivElement = document.createElement("div");
    productContainer.className = "product";

	let imgContainer : HTMLDivElement = document.createElement("div");
    imgContainer.className = "img-container";

	let infoContainer : HTMLDivElement = document.createElement("div");
    infoContainer.className = "info-container";
    
    productsCenter.appendChild(productContainer)
	productContainer.appendChild(imgContainer);
    productContainer.appendChild(infoContainer);
	
	let imgProduct: HTMLImageElement = document.createElement("img") as HTMLImageElement;
    imgContainer.appendChild(imgProduct);
	imgProduct.src = someList[i].url;
    imgProduct.addEventListener('click', () => {
        console.log("clicked")
    });
	
	let productTitle: HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
	productTitle.innerHTML = someList[i].title;

    let productColor : HTMLParagraphElement = document.createElement("h4");
    productColor.innerHTML = someList[i].color;

    let productPrice: HTMLHeadingElement = document.createElement("h4") as HTMLHeadingElement;
	productPrice.innerHTML = someList[i].price;
    productPrice.innerHTML += " SEK"
    
    let addToCart: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    addToCart.className = "button"
    addToCart.innerHTML = `<i class="fa-solid fa-bag-shopping"></i>`
    
    addToCart.addEventListener('click', () => {
        for(let i = 0; i < 1; i++){
            cartList.push(productList[i])
        }
        
      console.log(cartList)
    });
    
    infoContainer.appendChild(productTitle);
    infoContainer.appendChild(productColor);
    infoContainer.appendChild(productPrice);
    infoContainer.appendChild(addToCart);
	
    }
}