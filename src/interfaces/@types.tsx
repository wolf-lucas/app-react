import { ICartItem } from "./cart/Cart";
import { Item } from "./item/Item";

export type TItemsContext = {
    items: Item[];
    filteredItems: Item[];
    addItem: (item: Item) => void;
    updateItem: (item: Item) => void;
    removeItem: (id: number) => void;
    searchItems: (text: string) => void;
};

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
};

export type TFormContext<T> = {
    data: T;
    set: React.Dispatch<React.SetStateAction<T>>;
    get: <K extends keyof T>(key: K) => T[K];
    errors: T;
    setErrors: React.Dispatch<React.SetStateAction<T>>;
    reqFields: T;
    setReqFields: React.Dispatch<React.SetStateAction<T>>;
    isSubmitted: boolean;
    setIsSubmitted:  React.Dispatch<React.SetStateAction<boolean>>;
};

export type TFormsViews<T> = {
    [key: string]: ({}: T) => JSX.Element;
  };