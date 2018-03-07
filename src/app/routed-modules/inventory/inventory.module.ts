import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list.component';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './components/product-detail.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent
    ]
})
export class InventoryModule {

}
