import { Component, OnInit } from '@angular/core';
import { CartService } from './core/services/cart.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private _cartService: CartService) {}

    ngOnInit(): void {

    }

    getNumCartItems(): number {
        return this._cartService.getNumItems();
    }
}
