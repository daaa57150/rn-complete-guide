import { combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { CartAction } from "./cart/actions";
import cartReducer from "./cart/reducer";
import productsReducer, { ProductsState } from "./products/reducer";

// export interface RootStore {
//   products: ProductsState
// };

// export type RootState = ProductsState;

export interface RootState {
  products: ProductsState
}

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

// TODO: in prod, remove composeWithDevTools!
export const rootStore: Store<RootState, CartAction> = createStore(rootReducer, composeWithDevTools());



