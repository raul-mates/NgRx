import {ProductModel} from "../../shared/models/product.model";
import {createReducer, on} from "@ngrx/store";
import {loadProducts, loadProductsFailure, loadProductsSuccess} from "./product.actions";

export interface ProductsState {
  products: ProductModel[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ProductsState = {
  products: [],
  error: null,
  status: 'pending'
}

export const productReducer = createReducer(
  initialState,

  on(loadProducts, (state) => ({...state, status: 'loading'})),

  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products: products,
    error: null,
    status: 'success'
  })),

  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
)
