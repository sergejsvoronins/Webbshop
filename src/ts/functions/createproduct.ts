import { Product } from "../models/product";


export function createProduct (
    title:string,url:string,brand:string,color:string, price:string,amount:number,showItem:boolean, productItem:string, description:string, products: Product []
) {
    let product : Product = new Product (title,url,brand,color,price,amount,showItem, productItem,description);
    products.push(product);
}