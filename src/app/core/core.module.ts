import { NgModule } from "@angular/core";
import { ProductService } from "./services/product.service";
import { CartService } from "./services/cart.service";

@NgModule({
    providers: [
        ProductService,
        CartService
    ]
})
export class CoreModule {

}
