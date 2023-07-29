import './Card.scss';
import { Item } from "../../interfaces/item/Item";
import { useContext, useRef, useState } from 'react';
import { ShopCartContext } from '../../context/ShopCartContext';

type Props = {
    item: Item;
}

const Card = ({ item }: Props) => {

  const qtyInputRef = useRef(null)
  const shopCart = useContext(ShopCartContext)
  const [ formQty, setFormQty ] = useState(1)

  const addToCart = () => {
    if (qtyInputRef.current) {
      shopCart?.addItem(item, formQty)
    }
  }

  const addBtn = () => {
    setFormQty(formQty + 1)
  }

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormQty(parseInt(e.currentTarget.value))
  }

  return (
    <div className="card">
      <article className="card__article">
        <div className="card__image-container">
          <img 
            className="card__image"
            src={item.image}
            alt={item.name}
          />
        </div>
        <div className="card__content">
          <h3 className="card__heading">{item.name}</h3>
          <h5 className="card__brand">{item.product}</h5>
          <p className="card__description">
            {item.description}
          </p>
        <div className="card__price-container">
          <h5 className="card__price">$ {item.price}</h5>
          <div className="card-quantity__form">
            <input 
              type="text" 
              className="card-quantity__form-add-qty" 
              id="product_qty"  
              ref={qtyInputRef}
              value={formQty}
              onChange={changeValue}
            />
            <button onClick={addBtn} className="btn">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
          {/* <Link to={'/detalle/'+ item.id} className="btn btn-compra">
            Agregar
          </Link> */}
          <button onClick={addToCart} className="btn btn-compra">
            Agregar
          </button>
        </div>
      </article>
    </div>
  );
};

export default Card;