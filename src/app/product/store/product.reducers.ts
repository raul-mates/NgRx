import {ProductModel} from "../../shared/models/product.model";
import {createReducer, on} from "@ngrx/store";
import {
  addProduct,
  deleteProduct,
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess
} from "./product.actions";

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

  on(loadProductsSuccess, (state, {products}) => {
    return {
      ...state,
      products: products,
      error: null,
      status: 'success'
    }
  }),

  on(loadProductsFailure, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(addProduct, (state, {productDetails}) => {
    let product = {...productDetails}
    product.id = state.products.length + 1;

    return {
      ...state,
      products: [...state.products, product],
      error: null,
      status: 'success'
    }
  }),

  on(deleteProduct, (state, { id }) => ({
    ...state,
    products: state.products.filter(product => product.id !== id),
    error: null,
    status: 'success'
  }))
)
