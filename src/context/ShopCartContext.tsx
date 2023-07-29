import { createContext, useState } from "react";
import { TShopCartContext } from "../interfaces/@types";
import { ICartItem } from "../interfaces/cart/Cart";
import { Item } from "../interfaces/item/Item";

export const ShopCartContext = createContext<TShopCartContext | null>(null)

type Props = {
  children?: React.ReactNode,
}

function ShopppingCartProvider({ children }: Props) {

  const [cartItems, setCartItems] = useState<ICartItem[]>([])
  const [isCartVisible, setIsCartVisible] = useState(false)

  const getTotal = (): number => {
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
  }

  const addItem = (item: Item, quantity: number): void => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem: ICartItem = {
        id: item.id,
        image: item.image,
        name: item.name,
        price: item.price,
        quantity: quantity,
      };
      setCartItems([...cartItems, newItem])
      setTotal(getTotal())
    }
  }

  const removeItem = (itemId: number): void => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === itemId);
    if (index !== -1) {
      setCartItems(item => item.filter((img, i) => i !== index));
    }
    setTotal(getTotal())
  }
  
  const updateQuantity = (itemId: number, quantity: number): void => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      item.quantity = quantity;
    }
    setTotal(getTotal())
  }

  const toogleMenu = () => {
    setIsCartVisible(!isCartVisible)
  }

  const [total, setTotal] = useState(getTotal())
  console.log("Toggle menu esta:", isCartVisible)
  
  return (
    <ShopCartContext.Provider value = {{ cartItems, addItem,  removeItem, 
    updateQuantity, total, getTotal, toogleMenu, isCartVisible}}>
      {children}
    </ShopCartContext.Provider>
  )
};

export default ShopppingCartProvider