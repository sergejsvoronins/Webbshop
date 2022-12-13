import { productList } from "./main";
import { Product } from "./models/product";


let productsCenter: HTMLDivElement = document.querySelector(".products_center") as HTMLDivElement;
displayProducts(productList);

function displayProducts(someList: Product []) {
    for(let i = 0; i < someList.length; i++){
	let imgContainer : HTMLDivElement = document.createElement("div");
    imgContainer.className = "product";

	let infoContainer : HTMLDivElement = document.createElement("div");
    infoContainer.className = "product";

	productsCenter.appendChild(imgContainer);
    productsCenter.appendChild(infoContainer);
	
	let imgProduct: HTMLImageElement = document.createElement("img") as HTMLImageElement;
    infoContainer.appendChild(imgProduct);
	imgProduct.src = someList[i].url;
	
	let productTitle: HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
	productTitle.innerHTML = someList[i].title;

    let productPrice: HTMLHeadingElement = document.createElement("h4") as HTMLHeadingElement;
	productPrice.innerHTML = someList[i].price;
    productPrice.innerHTML += " SEK"
    
    let addToCart: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
    addToCart.innerHTML = `<i class="fa-solid fa-bag-shopping"></i>`
    addToCart.addEventListener('click', () => {
        console.log("clicked")
    });
    
    infoContainer.appendChild(productTitle);
    infoContainer.appendChild(productPrice);
    infoContainer.appendChild(addToCart);
	
    }
}