import { Product } from "./product";

// TODO: maybe use a class that could calculate its own price like in DDD
export interface CartItem {
  product: Product,
  quantity: number,
  price: number
}

