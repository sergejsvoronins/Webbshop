import { Product } from "../models/product";
import { productList } from "../main";

export function createProduct (
    title:string,url:string,brand:string,color:string, price:string,amount:number,showItem:boolean, productItem:string
) {
    let product : Product = new Product (title,url,brand,color,price,amount,showItem, productItem);
    productList.push(product);
}