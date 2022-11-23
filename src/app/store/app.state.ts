import { ActionReducerMap } from "@ngrx/store";

import * as fromProductList from "../product/store/product.reducers";
import * as fromUserCart from "../cart/store/cart.reducers";

export interface AppState {
  productList: fromProductList.ProductsState;
  userCart: fromUserCart.CartState;
}

export const appReducer: ActionReducerMap<AppState> = {
  productList: fromProductList.productReducer,
  userCart: fromUserCart.userCartReducer
}
