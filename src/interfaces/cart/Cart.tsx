import { Item } from "../item/Item";

export interface Cart {
  items: ICartItem[];
  addItem(item: Item, quantity: number): void;
  removeItem(itemId: number): void;
  updateQuantity(itemId: number, quantity: number): void;
  total: number;
}

export interface ICartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}