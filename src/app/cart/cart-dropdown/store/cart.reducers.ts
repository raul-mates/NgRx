import {createReducer, Action, on} from "@ngrx/store";
import * as UserCartActions from './cart.actions';
import {CartModel} from "../../../shared/models/cart.model";

export interface State {
  userCart: CartModel;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  userCart: {
    numberOfItems: '',
    items: []
  },
  error: null,
  status: 'pending'
}

export const userCartReducer = createReducer(
  initialState,

  on(UserCartActions.loadCart, (state) => ({...state, status: 'loading'})),

  on(UserCartActions.loadCartSuccessful, (state, {userCart}) => ({
    ...state,
    userCart: userCart,
    error: null,
    status: 'success'
  })),

  on(UserCartActions.loadCartFailed, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error'
  }))
)
