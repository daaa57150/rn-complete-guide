import * as u from '@helpers/utils';
import { CartItem } from "@models/cart-item";
import { Order } from "@models/order";
import { OrdersAction } from "./actions";


export interface OrdersState {
  readonly orders: readonly Order[];
}

const initialState: OrdersState = {
  orders: []
};

const addOrder = (state: OrdersState, items: readonly CartItem[], totalPrice: number): OrdersState => {
  const newOrder = new Order(u.newGuid(), items, totalPrice);
  const orders = [...state.orders, newOrder];
  return { ...initialState, orders };
}

function ordersReducer(state = initialState, action: OrdersAction ): OrdersState {
  // console.log('ACTION:', action);
  switch(action.type) {
    case 'ADD_ORDER': {
      return addOrder(state, action.items, action.totalPrice);
    }
  }
  return state;
};

export default ordersReducer;
