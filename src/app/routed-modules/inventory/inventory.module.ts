import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ProductListComponent }
        ])
    ],
    declarations: [
        ProductListComponent
    ]
})
export class InventoryModule {

}
