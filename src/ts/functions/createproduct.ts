import { Product } from "../models/product";


export function createProduct (
    title:string,url:string,brand:string,color:string, price:string,amount:number,showItem:boolean, productItem:string, products: Product []
) {
    let product : Product = new Product (title,url,brand,color,price,amount,showItem, productItem);
    products.push(product);
}