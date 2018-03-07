import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductListComponent } from './routed-modules/inventory/components/product-list.component';
import { CartListComponent } from './routed-modules/checkout/components/cart-list.component';
import { InventoryModule } from './routed-modules/inventory/inventory.module';
import { CheckoutModule } from './routed-modules/checkout/checkout.module';
import { SettingsModule } from './routed-modules/settings/settings.module';
import { ProductDetailComponent } from './routed-modules/inventory/components/product-detail.component';
import { SettingsComponent } from './routed-modules/settings/components/settings.component';

export const routes: Route[] =  [
  { path: '', pathMatch: 'full', redirectTo: 'inventory' },
  { path: 'inventory', children: [
    { path: '', component: ProductListComponent },
    { path: ':id', component: ProductDetailComponent }
  ]},
  { path: 'checkout', component: CartListComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot(routes, { useHash: true }),
    
    InventoryModule,
    CheckoutModule,
    SettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
