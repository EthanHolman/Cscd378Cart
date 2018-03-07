import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../core/services/product.service";
import { Category } from "../../../core/models/category";
import { Product } from "../../../core/models/product";

@Component({
    templateUrl: "product-list.component.html",
    styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    categoriesLoaded = false;
    categories: Category[] = [];

    productsLoaded = false;
    products: Product[] = [];

    constructor(private _productService: ProductService) {

    }

    ngOnInit(): void {
        this._productService.getCategories().subscribe(data => {
            this.categories = data;
            this.categoriesLoaded = true;
        });
        this._productService.getAllProducts().subscribe(data => {
            this.products = data;
            this.productsLoaded = true;
        });
    }

}
