import { ActionReducerMap } from "@ngrx/store";

import * as fromProductList from "../product/store/product.reducers";

export interface AppState {
  productList: fromProductList.ProductsState;
}

export const appReducer: ActionReducerMap<AppState> = {
  productList: fromProductList.productReducer,
}
