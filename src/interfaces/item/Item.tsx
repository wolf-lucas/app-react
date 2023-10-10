import { Category } from "./ItemCategory";

// export interface Item {
//   id: number;
//   name: string;
//   description: string;
//   product: string;
//   image: string;
//   price: number;
//   sold_qty: number;
//   buyUrl: string;
//   createdAt: string;
//   categories: Category[];
// }

export interface Item {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  freeShipping: boolean;
  brand: string;
  shortDesc: string;
  longDesc: string;
  ageFrom: number;
  ageTo: number;
  soldQty: number;
  image: string;
  createdAt: Date;
};

/* ##    Catalog ??????? */


/* Servicio para crear Items */
class IItemService {
  private items: Item[];
  
  constructor() {
    this.items = []
  }
}