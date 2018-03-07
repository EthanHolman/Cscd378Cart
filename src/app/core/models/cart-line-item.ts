import { Product } from "./product";

export class CartLineItem {
    item: Product;
    quantity: number;

    constructor(item: Product, quantity: number) {
        this.item = item;
        this.quantity = quantity;
    }
}
