
import { ReduxLifecycleAction } from "@helpers/frameworks";
import { CartItem } from "@models/cart-item";

const ADD_ORDER = 'ADD_ORDER';

export interface AddOrderAction {
  type: typeof ADD_ORDER;
  items: readonly CartItem[];
  totalPrice: number;
}

export type OrdersAction = AddOrderAction | ReduxLifecycleAction;

export namespace OrdersAction {

  export const addOrder = (items: readonly CartItem[], totalPrice: number): AddOrderAction => (
    { type: ADD_ORDER, items, totalPrice }
  );

};

