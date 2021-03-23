import { CombinedState, combineReducers, createStore, Reducer, Store } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { CartAction } from "./cart/actions";
import cartReducer, { CartState } from "./cart/reducer";
import { OrdersAction } from "./orders/actions";
import ordersReducer, { OrdersState } from "./orders/reducer";
import productsReducer, { ProductsState } from "./products/reducer";

// export interface RootStore {
//   products: ProductsState
// };

// export type RootState = ProductsState;

export interface RootState {
  products: ProductsState,
  cart: CartState,
  orders: OrdersState
}

export type RootAction = CartAction | OrdersAction;

const rootReducer: Reducer<CombinedState<RootState>, CartAction> = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
});

// TODO: in prod, remove composeWithDevTools!
// export const rootStore: Store<RootState, CartAction> = createStore(rootReducer, composeWithDevTools());
export const rootStore: Store<RootState, CartAction> = createStore(rootReducer);


