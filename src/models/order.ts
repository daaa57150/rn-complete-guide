import { CartItem } from "./cart-item";

export interface Order {
  id: string,
  items: CartItem[],
  totalPrice: number,
  date: Date
}

export class Order {
  public date: Date;

  public constructor(
    public id: string,
    public items: CartItem[],
    public totalPrice: number,
    date?: Date
  ) {
    this.date = date ?? new Date();
  }
}

