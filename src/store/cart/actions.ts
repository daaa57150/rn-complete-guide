
import { ReduxLifecycleAction } from "@helpers/frameworks";
import { Product } from "@models/product";

const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'

export interface AddProductToCartAction {
  type: typeof ADD_PRODUCT_TO_CART;
  product: Product;
}

export interface RemoveProductFromCartAction {
  type: typeof REMOVE_PRODUCT_FROM_CART;
  product: Product;
}

export type CartAction = AddProductToCartAction | RemoveProductFromCartAction | ReduxLifecycleAction;

export namespace CartAction {

  export const addProductToCart = (product: Product): AddProductToCartAction => (
    { type: ADD_PRODUCT_TO_CART, product }
  );

  export const removeProductFromCart = (product: Product): RemoveProductFromCartAction => (
    { type: REMOVE_PRODUCT_FROM_CART, product }
  );

};

