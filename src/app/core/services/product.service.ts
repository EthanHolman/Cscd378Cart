import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx';
import { Category } from "../models/category";
import { Product } from "../models/product";


@Injectable()
export class ProductService {
    constructor(private _http: HttpClient) {}

    getAllProducts(): Observable<Product[]> {
        return this._http.get<Product[]>("http://ethanholman.com/cscd378/cart-api/product.php?action=list");
    }

    getProductsByCategory(categoryId: number): Observable<Product[]> {
        return this._http.get<Product[]>(`http://ethanholman.com/cscd378/cart-api/product.php?action=list&id=${categoryId}`);
    }

    getProductById(productId: number): Observable<Product> {
        return this._http.get<Product>(`http://ethanholman.com/cscd378/cart-api/product.php?action=product&id=${productId}`);
    }

    getCategories(): Observable<Category[]> {
        return this._http.get<Category[]>("http://ethanholman.com/cscd378/cart-api/category.php");
    }

    getPrimaryImageName(product: Product): string {
        const image = product.images.find(img => img.id == product.primaryImageId);
        if (image === undefined) return null;
        return image.imgName;
    }
}
