import { CartItem } from "@models/cart-item";
import { Product } from "@models/product";
import { CartAction } from '@store/cart/actions';
import _ from 'lodash-es';


export interface CartState {
  readonly items: readonly CartItem[];
  readonly totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0
};

const findItemByProduct = (state: CartState, product: Product): CartItem|undefined =>
  _.find(state.items, (item: CartItem) => item.product.id === product.id);

const priceForProduct = (product: Product, quantity: number): number => quantity * product.price;
const priceForItems = (items: readonly CartItem[]): number =>
  _.reduce(items, (aggregate, item) => aggregate + priceForProduct(item.product, item.quantity), 0);


const addProductToCart = (state: CartState, product: Product): CartState => {
  const item = findItemByProduct(state, product);
  const quantity = (item?.quantity || 0) + 1;
  const price = priceForProduct(product, quantity);
  const newItem: CartItem = { product, quantity, price };
  const otherItems = _.isNil(item) ? state.items : _.without(state.items, item);
  const items = [...otherItems, newItem];
  const totalPrice = priceForItems(items);

  // ...state copy to prevent mistakes
  return { ...state, items, totalPrice };
};

const removeProductFromCart = (state: CartState, product: Product): CartState => {
  const item = findItemByProduct(state, product);
  const items = _.isNil(item) ? state.items : _.without(state.items, item);
  const totalPrice = priceForItems(items);

  // ...state copy to prevent mistakes
  return { ...state, items, totalPrice };
}

function cartReducer(state = initialState, action: CartAction ): CartState {
  // console.log('ACTION:', action);
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      return addProductToCart(state, action.product);
    }
    case 'REMOVE_PRODUCT_FROM_CART': {
      return removeProductFromCart(state, action.product);
    }
    case 'CLEAR_CART': {
      return initialState;
    }
  }
  return state;
};

export default cartReducer;
