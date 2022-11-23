import {createSelector} from "@ngrx/store";
import {ProductsState} from "./product.reducers";
import {AppState} from "../../store/app.state";
import {FeatureKeys} from "../../store/feature.keys";

export const selectProducts = (state: AppState) => state[FeatureKeys.productList];
export const selectAllProducts = createSelector(
  selectProducts,
  (state: ProductsState) => state.products
)
