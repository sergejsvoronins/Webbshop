import { Product } from "./models/product";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { createProduct } from "./functions/createproduct";

let productList : Product [] = [];

//=====mobile===
createProduct(
    "Thin Case",
    "/assets/img/iphone-green.png",
    "apple","grön",
    "349",
    0, false,
    "mobile", 
    "Förstärk din telefons originalkänsla med Thin Case, framtaget ner till minsta detalj. Det ultimata skalet för att lyfta fram och skydda din telefon med en stilren och tunn design.", 
    productList);
createProduct(
    "Thin Case",
    "/assets/img/iphone-red.png",
    "apple",
    "röd",
    "349",
    0, 
    false, 
    "mobile",
    "Förstärk din telefons originalkänsla med Thin Case, framtaget ner till minsta detalj. Det ultimata skalet för att lyfta fram och skydda din telefon med en stilren och tunn design.",
    productList);
createProduct(
    "Thin Case",
    "/assets/img/iphone-blue.png",
    "apple",
    "blå",
    "349",
    0, 
    false, 
    "mobile",
    "Förstärk din telefons originalkänsla med Thin Case, framtaget ner till minsta detalj. Det ultimata skalet för att lyfta fram och skydda din telefon med en stilren och tunn design.",
    productList);
createProduct(
    "Thin Case",
    "/assets/img/galaxy-green.png",
    "samsung",
    "grön",
    "349",
    0, 
    false, 
    "mobile",
    "Förstärk din telefons originalkänsla med Thin Case, framtaget ner till minsta detalj. Det ultimata skalet för att lyfta fram och skydda din telefon med en stilren och tunn design.",
    productList);
createProduct(
    "Thin Case",
    "/assets/img/galaxy-red.png",
    "samsung",
    "röd",
    "349",
    0, 
    false, 
    "mobile",
    "Förstärk din telefons originalkänsla med Thin Case, framtaget ner till minsta detalj. Det ultimata skalet för att lyfta fram och skydda din telefon med en stilren och tunn design.",
    productList);
createProduct(
    "Thin Case",
    "/assets/img/galaxy-blue.png",
    "samsung",
    "blå",
    "349",
    0, 
    false, 
    "mobile",
    "Förstärk din telefons originalkänsla med Thin Case, framtaget ner till minsta detalj. Det ultimata skalet för att lyfta fram och skydda din telefon med en stilren och tunn design.",
    productList);

//=====tablets===
createProduct(
    "Smart Cover",
    "/assets/img/ipad-green.png",
    "apple",
    "grön",
    "549",
    0, 
    false, 
    "tablet",
    "Med Smart Cover Sevilla ger du din iPad både ett praktiskt och trendigt skydd. Baksidan är av hårdplast vilket ger maximalt skydd och framsidan är vikbar för att ställa upp paddan på önskat sätt.",
    productList);
createProduct(
    "Smart Cover",
    "/assets/img/ipad-blue.png",
    "apple",
    "blå",
    "549",
    0, 
    false, 
    "tablet",
    "Med Smart Cover Sevilla ger du din iPad både ett praktiskt och trendigt skydd. Baksidan är av hårdplast vilket ger maximalt skydd och framsidan är vikbar för att ställa upp paddan på önskat sätt.",
    productList);
createProduct(
    "Smart Cover",
    "/assets/img/ipad-red.png",
    "apple",
    "röd",
    "549",
    0, 
    false, 
    "tablet",
    "Med Smart Cover Sevilla ger du din iPad både ett praktiskt och trendigt skydd. Baksidan är av hårdplast vilket ger maximalt skydd och framsidan är vikbar för att ställa upp paddan på önskat sätt.",
    productList);
createProduct(
    "Smart Cover",
    "/assets/img/tab-green.png",
    "samsung",
    "grön",
    "549",
    0, 
    false,
    "tablet",
    "Med Smart Cover Alicante ger du din Samsung Tablet både ett praktiskt och trendigt skydd. Baksidan är av hårdplast vilket ger maximalt skydd och framsidan är vikbar för att ställa upp paddan på önskat sätt.",
    productList);
createProduct(
    "Smart Cover",
    "/assets/img/tab-blue.png",
    "samsung",
    "blå",
    "549",
    0, 
    false, 
    "tablet",
    "Med Smart Cover Alicante ger du din Samsung Tablet både ett praktiskt och trendigt skydd. Baksidan är av hårdplast vilket ger maximalt skydd och framsidan är vikbar för att ställa upp paddan på önskat sätt.",
    productList);
createProduct(
    "Smart Cover",
    "/assets/img/tab-rose.png",
    "samsung",
    "röd",
    "549",
    0, 
    false,
    "tablet",
    "Med Smart Cover Alicante ger du din Samsung Tablet både ett praktiskt och trendigt skydd. Baksidan är av hårdplast vilket ger maximalt skydd och framsidan är vikbar för att ställa upp paddan på önskat sätt.",
    productList);

//=====laptop===
createProduct(
    "Laptop Case",
    "/assets/img/macbook-case.png",
    "apple",
    "svart",
    "849",
    0, 
    false, 
    "laptop",
    "Detta laptopfodral är skapat för att ge din dator ett perfekt skydd med en stilsäker vibe.",
    productList);
createProduct(
    "Laptop Case",
    "/assets/img/macbook-case.png",
    "samsung",
    "svart",
    "849",
    0, 
    false, 
    "laptop",
    "Detta laptopfodral är skapat för att ge din dator ett perfekt skydd med en stilsäker vibe.",
    productList);


loadToLocalStorage(productList);




