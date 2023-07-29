import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

import Card from "./Card";
import CardPreLoader from "./CardPreLoader";
import CardsContainer from "../../layout/cards-section/CardsContainer";

export default function CardList()
{
  const ctx = useContext(ItemsContext)
  const items = ctx?.items ? ctx?.items : []
  const filteredItems = ctx?.filteredItems ? ctx?.filteredItems : []
  
  const cardsOrPreloader = (items.length === 0 ? < CardPreLoader /> : 
    items.map((item, idx) => 
      (
        <Card key={idx} item={item} />
      )
    )
  )

  const filteredOrCards = (filteredItems.length === 0 ? cardsOrPreloader :
    filteredItems.map((item, idx) => 
      (
        <Card key={idx} item={item} />
      )
    )
  )

  return (
    <CardsContainer>
      {filteredOrCards}
    </ CardsContainer>
  );
}