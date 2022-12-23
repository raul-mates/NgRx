import { createAction, props } from "@ngrx/store";
import { ProductModel } from "../../shared/models/product.model";

export const loadProducts = createAction(
  '[Product Component] Load Products',
)

export const loadProductsSuccess = createAction(
  '[Product API] Load Products Successful',
  props<{ products: ProductModel[] }>()
)

export const loadProductsFailure = createAction(
  '[Product API] Load Products Failed',
  props<{ error: string }>()
)

export const addProduct = createAction(
  '[Product Component] Add Product',
  props<{ productDetails: ProductModel }>()
)

export const deleteProduct = createAction(
  '[Product Component] Delete Product',
  props<{ id: number }>()
)
