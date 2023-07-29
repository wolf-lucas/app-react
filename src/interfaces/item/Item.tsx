import { Category } from "./ItemCategory";

export interface Item {
  id: number;
  name: string;
  description: string;
  product: string;
  image: string;
  price: number;
  sold_qty: number;
  buyUrl: string;
  createdAt: string;
  categories: Category[];
}

/* ##    Catalog ??????? */


/* Servicio para crear Items */
class IItemService {
  private items: Item[];
  
  constructor() {
    this.items = []
  }
}