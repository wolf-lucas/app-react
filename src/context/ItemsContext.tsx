import { createContext, useEffect, useState} from "react";
import { TItemsContext, TApiResponse } from "../interfaces/@types";
import { useAPIGet } from "../hooks/hooks";
import { Item } from "../interfaces/item/Item";
import { API } from "../config";


export const ItemsContext = createContext<TItemsContext | null>(null)

type Props = {
  children?: React.ReactNode,
}

function searchText(item: Item){
  return (item.name+item.shortDesc+item.longDesc+item.brand).toLowerCase()
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

  const searchItems = (text: string) => {
    if (items) {
        setFilteredItems(items.filter(item => 
            searchText(item).includes(text.toLowerCase())
            )
        )
    }
}

  return (
    <ItemsContext.Provider value = {{items, filteredItems, searchItems}}>
      {children}
    </ItemsContext.Provider>)
    
}

export default ItemsProvider;