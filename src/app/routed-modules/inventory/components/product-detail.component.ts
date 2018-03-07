import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../../../core/models/product";
import { ProductService } from "../../../core/services/product.service";

@Component({
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

    loadedProduct = false;
    product: Product;

    constructor(private _router: ActivatedRoute, private _productService: ProductService) {}

    ngOnInit(): void {
        this._router.params.subscribe(params => {
            const id = params['id'];
            this._productService.getProductById(id).subscribe(data => {
                this.product = data;
                this.loadedProduct = true;
            });
        });
    }

}
