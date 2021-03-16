import { CartItem } from "@models/cartItem";
import { Product } from "@models/product";
import { ADD_PRODUCT_TO_CART, CartAction } from '@store/cart/actions';
import _ from 'lodash-es';


export interface CartState {
  readonly items: readonly CartItem[];
  readonly totalPrice: number
}

const initialState: CartState = {
  items: [],
  totalPrice: 0
};

const findItemByProduct = (state: CartState, product: Product): CartItem|undefined =>
  _.find(state.items, (item: CartItem) => item.product.id === product.id);

const calculatePrice = (items: CartItem[]): number =>
  _.reduce(items, (aggregate, item) => aggregate + item.quantity * item.product.price, 0);

const addProductToCart = (state: CartState, product: Product): CartState => {
  const item = findItemByProduct(state, product);
  const newItem: CartItem = {
    product, quantity: (item?.quantity || 0) + 1
  };
  const otherItems = _.isNil(item) ? state.items : _.without(state.items, item);
  const items = [...otherItems, newItem];
  const totalPrice = calculatePrice(items);

  // ...state copy to prevent mistakes
  return { ...state, items, totalPrice };
};

function productsReducer(state = initialState, action: CartAction ): CartState {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART: {
      return addProductToCart(state, action.product);
    }
  }
  return state;
};

export default productsReducer;
