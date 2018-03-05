import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { InventoryModule } from './inventory/inventory.module';
import { ProductListComponent } from './inventory/components/product-list.component';
import { CartListComponent } from './checkout/components/cart-list.component';
import { CheckoutModule } from './checkout/checkout.module';

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
    CheckoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
