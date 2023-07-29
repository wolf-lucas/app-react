import { ICartItem } from "./cart/Cart";
import { Item } from "./item/Item";


export type TItemsContext = {
    items: Item[];
    filteredItems: Item[];
    addItem: (item: Item) => void;
    updateItem: (item: Item) => void;
    removeItem: (id: number) => void;
    searchItems: (text: string) => void;
}

export type TApiResponse = {
    status: number;
    statusText: string;
    data: any;
    error: any;
    loading: boolean;
};

export type TShopCartContext = {
    cartItems: ICartItem[];
    addItem: (item: Item, quantity: number) => void;
    removeItem: (itemId: number) => void;
    updateQuantity: (itemId: number, quantity: number) => void;
    total: number;
    getTotal(): number;
    toogleMenu: () => void;
    isCartVisible: boolean;
}