import './SlickSlider.scss';
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import Card from '../cards/Card';

function SlickSlider() {

  const ctx = useContext(ItemsContext)
  const items = ctx?.items ? ctx?.items : []
  const sortedItems = [...items].sort((a, b) => a.sold_qty - b.sold_qty)
  const topItems = sortedItems.slice(0, 5).map((item, idx) =>
    (
      <Card key={idx} item={item} />
    )
  )
  
  return (
    <>
      <div className="carousel">
        <button className="btn-next rotate-180">
          <i className="fa-solid fa-angle-right"></i>
        </button>
        <div className="carousel__items">
          {topItems}
        </div>
        <button className="btn-next">
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </>
  )
};

export default SlickSlider;

