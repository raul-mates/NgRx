import {createSelector} from "@ngrx/store";
import {ProductsState} from "./product.reducers";
import {state} from "@angular/animations";
import {AppState} from "../../store/app.state";

export const selectProducts = (state: AppState) => state.productList;
export const selectAllProducts = createSelector(
  selectProducts,
  (state: ProductsState) => state.products
)
