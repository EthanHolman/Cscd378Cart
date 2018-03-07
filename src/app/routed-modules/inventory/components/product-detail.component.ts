import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../../../core/models/product";
import { ProductService } from "../../../core/services/product.service";
import { CartService } from "../../../core/services/cart.service";

@Component({
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

    loadedProduct = false;
    product: Product;
    quantityToCart: number;

    constructor(
        private _route: ActivatedRoute,
        private _productService: ProductService,
        private _cartService: CartService,
        private _router: Router) {}

    ngOnInit(): void {
        this._route.params.subscribe(params => {
            const id = params['id'];
            this._productService.getProductById(id).subscribe(data => {
                this.product = data;
                this.loadedProduct = true;
            });
        });
    }

    addToCart(): void {
        this._cartService.addToCart(this.product, this.quantityToCart);
        this._router.navigateByUrl("/checkout");
    }

}
