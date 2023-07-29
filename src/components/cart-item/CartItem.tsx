import { useContext, useState } from 'react';
import { ICartItem } from '../../interfaces/cart/Cart';
import { ShopCartContext } from '../../context/ShopCartContext';
import { Currency } from '../../config';

import './CartItem.scss';

type Props = {
  item: ICartItem;
}

const CartItem = ({ item }: Props) => {

  const shopCart = useContext(ShopCartContext)
  const [itemQty, setItemQty] = useState(item.quantity)

  const removeItem = () => {
    if (item) {
      shopCart?.removeItem(item.id)
      setItemQty(0)
    }
  }

  const addOneItem = () => {
    shopCart?.updateQuantity(item.id, item.quantity + 1)
    setItemQty(item.quantity)
  }

  const removeOneItem = () => {
    shopCart?.updateQuantity(item.id, item.quantity - 1)
    setItemQty(item.quantity)
    if (item.quantity === 0) {
      removeItem()
    }
  }

  return (
    <>
      <div className="shop-cart__card">
        <article className="shop-cart__article">
          <div className="shop-cart__image-container">
            <img
              className="card__image"
              src={item.image}
              alt={item.name}
            />
          </div>
          <div className="shop-cart__article-content">
            <h3 className="shop-cart__heading">{item.name}</h3>
            <p className="shop-cart__description">{item.name}</p>
            <h5 className="shop-cart__item-price">Precio: {Currency.USD.format(item.price)}</h5>
            <h5 className="shop-cart__item-qty">Cantidad: {itemQty}</h5>
            <h3 className="shop-cart__item-total">Total: {Currency.USD.format(item.price * item.quantity)}</h3>
          </div>
          <div className="shop-cart__article-buttons">
            <div className="btn shop-cart__article-cancel" onClick={removeItem}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="btn shop-cart__article-minus" onClick={removeOneItem}>
              <i className="fa-solid fa-minus"></i>
            </div>
            <div className="btn shop-cart__articule-plus" onClick={addOneItem}>
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </article>
      </div>
    </>

  )

};

export default CartItem;