import { Category } from "../item/ItemCategory";

export default interface IItemForm {
  id: number;
  name: string;
  description: string;
  product: string;
  image: string;
  price: number;
  createdAt: string;
  categories: Category[];
};