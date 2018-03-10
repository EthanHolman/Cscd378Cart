import { Injectable } from "@angular/core";
import { CartLineItem } from "../models/cart-line-item";
import { Product } from "../models/product";

@Injectable()
export class CartService {
    
    cartItems: CartLineItem[] = [];

    constructor() {
        const savedCart = this.getSavedCart();
        if (savedCart !== null) this.cartItems = savedCart;
    }

    getItems(): CartLineItem[] {
        return this.cartItems;
    }

    getNumItems(): number {
        return this.cartItems.length;
    }

    addToCart(item: Product, quantity: number): void {
        const newCartItem = new CartLineItem(item, quantity);
        this.cartItems.push(newCartItem);
        this.updateSavedCart();
    }

    removeFromCart(toRemove: CartLineItem): void {
        this.cartItems = this.cartItems.filter(item => {
            item.item !== toRemove.item;
        });

        this.updateSavedCart();
    }

    updateQuantity(item: CartLineItem, newQuantity: number): void {
        this.cartItems.find(cartItem => cartItem === item).quantity = newQuantity;

        this.updateSavedCart();
    }

    private updateSavedCart(): void {
        localStorage.setItem("savedCart", JSON.stringify(this.cartItems));
    }

    private getSavedCart(): CartLineItem[] {
        const savedCart = localStorage.getItem("savedCart");
        if (savedCart !== null) {
            const cart: CartLineItem[] = JSON.parse(savedCart);
            return cart;
        }

        return null;
    }

}
