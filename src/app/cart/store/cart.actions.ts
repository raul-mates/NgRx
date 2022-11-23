import { createAction, props } from "@ngrx/store";
import { CartModel } from "../../shared/models/cart.model";

export const loadCart = createAction('[User Cart] User Cart Loaded')

export const loadCartSuccessful = createAction(
  '[User Cart] User Cart Loaded Successfully',
  props<{ userCart: CartModel }>()
)

export const loadCartFailed = createAction(
  '[User Cart] User Cart Loading Failed',
  props<{ error: string }>()
)
