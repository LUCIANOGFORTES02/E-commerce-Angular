import { ProductWithTotalPrice } from "../helpers/product";

export interface CartProduct extends ProductWithTotalPrice{
    quantity: number;
  }