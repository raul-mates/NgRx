import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { TheNavComponent } from './the-nav/the-nav.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { IonicModule } from '@ionic/angular';
import {StoreModule} from "@ngrx/store";
import {productReducer} from "./product/store/product.reducers";
import {EffectsModule} from "@ngrx/effects";
import {ProductEffects} from "./product/store/product.effects";
import {HttpClientModule} from "@angular/common/http";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {FeatureKeys} from "./store/feature.keys";
import { CartDropdownComponent } from './cart/cart-dropdown/cart-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    TheNavComponent,
    CartComponent,
    ProductComponent,
    CartDropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    StoreModule.forRoot({ [FeatureKeys.productList]: productReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([ProductEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
