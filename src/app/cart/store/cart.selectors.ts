import { createSelector } from "@ngrx/store";
import { CartState } from './cart.reducers';
import { AppState } from "../../store/app.state";
import { FeatureKeys } from "../../store/feature.keys";

export const selectUserCart = (state: AppState) => state[FeatureKeys.userCart];
export const selectedUserCart = createSelector(
  selectUserCart,
  (state: CartState) => state.userCart
)
