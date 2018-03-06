import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductListComponent } from './routed-modules/inventory/components/product-list.component';
import { CartListComponent } from './routed-modules/checkout/components/cart-list.component';
import { InventoryModule } from './routed-modules/inventory/inventory.module';
import { CheckoutModule } from './routed-modules/checkout/checkout.module';

export const routes: Route[] =  [
  { path: '', component: ProductListComponent, pathMatch: 'full' },
  { path: 'cart', component: CartListComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    InventoryModule,
    CheckoutModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
