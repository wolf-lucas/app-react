import './SlickSlider.scss';
import { useContext, useState } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import Card from '../cards/Card';
import CardPreLoader from '../cards/CardPreLoader';

function SlickSlider() {

  const ctx = useContext(ItemsContext)
  const items = ctx?.items ? ctx?.items : []
  const sortedItems = [...items].sort((a, b) => a.sold_qty - b.sold_qty)
  const itemsPerSlide = 5
  const [currentSlide, setCurrentSlide] = useState(0)

  const maxSlides = Math.ceil(sortedItems.length / itemsPerSlide)
 
  const prevSlide = () => {
    setCurrentSlide(( prevSlide ) => Math.max(prevSlide - 1, 0))
  }

  const nextSlide = () => {
    setCurrentSlide(( prevSlide ) => Math.min(prevSlide + 1, maxSlides - 1))
  }

  const startIndex = currentSlide * itemsPerSlide;
  const endIndex = startIndex + itemsPerSlide;
  const currentSlideItems = sortedItems.slice(startIndex, endIndex);

  const topItems = currentSlideItems.map((item, idx) =>
    (
      <Card key={idx} item={item} />
    )
  )
  
  const sliderOrPreloader = items.length === 0 ? < CardPreLoader /> : (
    <>
      <div className="carousel">
        <button className="btn-next rotate-180" onClick={prevSlide}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
        <div className="carousel__items">
          {topItems}
        </div>
        <button className="btn-next" onClick={nextSlide}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </>
  )

  return (
    <>
      {sliderOrPreloader}
    </>
  )
};

export default SlickSlider;

