import { createContext, useEffect, useState} from "react";
import { TItemsContext, TApiResponse } from "../interfaces/@types";
import useAPIGet from "../hooks/api";
import { Item } from "../interfaces/item/Item";
import { API } from "../config";


export const ItemsContext = createContext<TItemsContext | null>(null)

type Props = {
  children?: React.ReactNode,
}

function searchText(item: Item){
  return (item.name+item.description+item.product).toLowerCase()
}

const ItemsProvider = ({children}: Props) =>
{
  const url = API.URL + API.TABLES.ITEMS
  const [items, setItems] = useState<Item[]>([])
  const [filteredItems, setFilteredItems] = useState<Item[]>(items)
  const apiData: TApiResponse = useAPIGet(url) //{ status, statusText, data, error, loading }

  useEffect(() => {
    if (apiData.status === 200 && !apiData.loading) {
      setItems(apiData.data)
    }
  }, [apiData]);

  const addItem = (item: Item): boolean => {
    const existingItem = items.find((i: any) => i.id === item.id);

    if (!existingItem) {
      const newItem: Item = {
        id: item.id,
        name: item.name,
        description: item.description,
        product: item.product,
        price: item.price,
        image: item.image,
        categories: item.categories,
        sold_qty: 0,
        createdAt: item.createdAt,
        buyUrl: item.buyUrl,
      }
      setItems([...items, newItem])
      return true
    }
    return false
  }

  const updateItem = (item: Item): boolean => {
    const existingItem = items.find((i: any) => i.id === item.id);
    
    if (existingItem) {
      existingItem.name = item.name;
      existingItem.description = item.description;
      existingItem.price = item.price;
      existingItem.image = item.image;
      existingItem.categories = item.categories;
      setItems([...items])
      return true
    }
    return false
  }

  const removeItem = (itemId: number): boolean => {
    const existingItemId = items.findIndex((i: any) => i.id === itemId);

    if (existingItemId !== -1) {
      items.splice(existingItemId, 1);
      setItems([...items])
      return true
    }
    return false
  }

  const searchItems = (text: string) => {
    if (items) {
        setFilteredItems(items.filter(item => 
            searchText(item).includes(text.toLowerCase())
            )
        )
    }
}

  return (
    <ItemsContext.Provider value = {{items, filteredItems, addItem, updateItem, removeItem, searchItems}}>
      {children}
    </ItemsContext.Provider>)
    
}

export default ItemsProvider;