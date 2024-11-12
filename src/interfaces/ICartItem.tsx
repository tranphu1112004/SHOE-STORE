import { IProduct } from "./IProduct";

export interface ICartItem {
    product: IProduct;
    quantity: number;
    color: string;
    size: string;
    image: string;
    totalPrice: number; 
  }