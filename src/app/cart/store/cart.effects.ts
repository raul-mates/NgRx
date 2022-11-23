import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CartService } from "../cart.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import * as CartActions from "./cart.actions";
import { catchError, from, map, of, switchMap } from "rxjs";

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private store: Store<AppState>, private cartService: CartService){
  }
  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.loadCart),
      switchMap(() =>
        from(this.cartService.getCart()).pipe(
          map((userCart) => CartActions.loadCartSuccessful({userCart})),
          catchError((error) => of(CartActions.loadCartFailed({error})))
        )
      )
    )
  )
}
