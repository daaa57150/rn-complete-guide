import { combineReducers, createStore, Store } from "redux";
import { ProductActionType } from "./products/actions";
import productsReducer, { ProductsState } from "./products/reducer";

// export interface RootStore {
//   products: ProductsState
// };

// export type RootState = ProductsState;

export interface RootState {
  products: ProductsState
}

const rootReducer = combineReducers({
  products: productsReducer
});

export const rootStore: Store<RootState, ProductActionType> = createStore(rootReducer);



