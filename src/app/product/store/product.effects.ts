import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductService} from "../product.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {loadProducts, loadProductsFailure, loadProductsSuccess} from "./product.actions";
import {catchError, from, map, Observable, of, switchMap} from "rxjs";
import {ProductModel} from "../../shared/models/product.model";

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private store: Store<AppState>, private productService: ProductService) {
  }
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        from(this.productService.getProducts()).pipe(
        map((products) => loadProductsSuccess({ products: products as ProductModel[] })),
        catchError((error) => of(loadProductsFailure({ error })))
      ))
    )
  )
}
