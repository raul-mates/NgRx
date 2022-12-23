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
import {CartEffects} from "./cart/store/cart.effects";
import {userCartReducer} from "./cart/store/cart.reducers";
import { ProductFormComponent } from './product/product-form/product-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    TheNavComponent,
    CartComponent,
    ProductComponent,
    ProductFormComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    StoreModule.forRoot({
      [FeatureKeys.productList]: productReducer,
      [FeatureKeys.userCart]: userCartReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([ProductEffects, CartEffects]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
