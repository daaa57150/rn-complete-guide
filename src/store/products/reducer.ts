import PRODUCTS from "@data/dummy-products";
import { Product } from "@models/product";
import _ from 'lodash-es';
// import { ProductActionType } from "./actions";

export interface ProductsState {
  readonly availableProducts: readonly Product[];
  readonly userProducts: readonly Product[];
}

const initialState: ProductsState = {
  availableProducts: PRODUCTS,
  userProducts: _.filter(PRODUCTS, { ownerId: 'u1' })
};

function productsReducer(state = initialState, action: any /*ProductActionType*/ ): ProductsState {
  return state;
};

export default productsReducer;
