export class Product {
    constructor (
        public title: string,
        public url: string,
        public brand: string,
        public color: string,
        public price: string,
        public buyAmount: number,
        public showItem: boolean,
        public productType: string
    ){}
}