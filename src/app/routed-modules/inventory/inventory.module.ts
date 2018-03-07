import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ProductListComponent
    ]
})
export class InventoryModule {

}
