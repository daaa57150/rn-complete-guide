import { Product } from "@models/product";

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'

export interface AddProductToCartAction {
  type: typeof ADD_PRODUCT_TO_CART;
  product: Product;
}

export interface RemoveProductFromCartAction {
  type: typeof REMOVE_PRODUCT_FROM_CART;
  product: Product;
}

export type CartAction = AddProductToCartAction | RemoveProductFromCartAction;
export namespace CartAction {
  export const addProductToCart = (product: Product): AddProductToCartAction => ({
    type: ADD_PRODUCT_TO_CART, product
  });
};

