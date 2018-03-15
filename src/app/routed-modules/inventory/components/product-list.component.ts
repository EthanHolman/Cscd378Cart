import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../core/services/product.service";
import { Category } from "../../../core/models/category";
import { Product } from "../../../core/models/product";
import { Router } from "@angular/router";

@Component({
    templateUrl: "product-list.component.html",
    styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    categoriesLoaded = false;
    categories: Category[] = [];

    productsLoaded = false;
    products: Product[] = [];

    constructor(private _productService: ProductService, private _router: Router) {

    }

    ngOnInit(): void {
        this._productService.getCategories().subscribe(data => {
            this.categories = data;
            this.categoriesLoaded = true;
        });
        
        this.showAllCategories();
    }

    navigateToDetails(product: Product) {
        this._router.navigateByUrl(`/inventory/${product.id}`);
    }

    getImgName(product: Product): string {
        return this._productService.getPrimaryImageName(product);
    }

    showAllCategories(): void {
        this.productsLoaded = false;
        this._productService.getAllProducts().subscribe(data => {
            this.products = data;
            this.productsLoaded = true;
        });
    }

    showCategory(category: Category): void {
        console.log(category);
        this.productsLoaded = false;
        this._productService.getProductsByCategory(category.id).subscribe(data => {
            this.products = data;
            this.productsLoaded = true;
        });
    }
}
