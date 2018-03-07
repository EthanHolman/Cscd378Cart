import { Component, OnInit } from "@angular/core";
import { CartService } from "../../../core/services/cart.service";
import { ProductService } from "../../../core/services/product.service";
import { CartLineItem } from "../../../core/models/cart-line-item";

@Component({
    templateUrl: 'cart-list.component.html'
})
export class CartListComponent implements OnInit {

    cartItems: CartLineItem[] = [];

    constructor(private _cartService: CartService, private _productService: ProductService) {}

    ngOnInit(): void {
        this.cartItems = this._cartService.getItems();
    }
}
