import { Component, OnInit } from "@angular/core";
import { CartService } from "../../../core/services/cart.service";
import { ProductService } from "../../../core/services/product.service";
import { CartLineItem } from "../../../core/models/cart-line-item";
import { Product } from "../../../core/models/product";

@Component({
    templateUrl: 'cart-list.component.html',
    styleUrls: ['cart-list.component.scss']
})
export class CartListComponent implements OnInit {

    cartItems: CartLineItem[] = [];
    showUpdatQuantity = false;

    constructor(private _cartService: CartService, private _productService: ProductService) {}

    ngOnInit(): void {
        this.cartItems = this._cartService.getItems();
    }

    deleteItem(item: CartLineItem): void {
        this._cartService.removeFromCart(item);
    }

    toggleUpdateQuantity(): void {
        this.showUpdatQuantity = !this.showUpdatQuantity;
    }

    updateQuantity(item: CartLineItem, newQuantity: number): void {
        this._cartService.updateQuantity(item, newQuantity);
    }

    getImgName(product: Product): string {
        return this._productService.getPrimaryImageName(product);
    }
}
