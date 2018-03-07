import { Injectable } from "@angular/core";
import { CartLineItem } from "../models/cart-line-item";
import { Product } from "../models/product";

@Injectable()
export class CartService {
    
    cartItems: CartLineItem[] = [];

    constructor() {}

    getItems(): CartLineItem[] {
        return this.cartItems;
    }

    addToCart(item: Product, quantity: number): void {
        this.cartItems.push(new CartLineItem(item, quantity));
    }

    removeFromCart(item: CartLineItem): void {
        
    }

    updateQuantity(item: CartLineItem, newQuantity: number): void {
        this.cartItems.find(cartItem => cartItem === item).quantity = newQuantity;
    }

}
