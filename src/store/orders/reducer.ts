import { CartItem } from "@models/cart-item";
import { Order } from "@models/order";
import { OrdersAction } from "./actions";


export interface OrdersState {
  readonly orders: readonly Order[];
}

const initialState: OrdersState = {
  orders: []
};

const addOrder = (state: OrdersState, items: CartItem[], totalPrice: number): OrdersState => {
  const newOrder: Order = { items, totalPrice };
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
