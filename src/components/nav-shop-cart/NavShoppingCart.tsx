import { Link } from 'react-router-dom';
import './NavShoppingCart.scss';
import { useContext } from 'react';
import { ShopCartContext } from '../../context/ShopCartContext';
import CartItem from '../cart-item/CartItem';
import { ICartItem } from '../../interfaces/cart/Cart';
import { Currency } from '../../config';

const NavShoppingCart = () => {
  
  const shopCart = useContext(ShopCartContext)
  const items: ICartItem[] = shopCart?.cartItems ? shopCart?.cartItems : []

  const cartItems = items.map((item, idx) => 
      (
        < CartItem key={idx} item={item} />
      )
  )
  // 
  const total = shopCart?.getTotal() ? shopCart?.getTotal() : 0
  const divTotal = total === 0 ? <h2><i>Seleccione algún artículo</i></h2> : 
  (
    <>
      <div className='shopping-cart__total'>
        <div className="shopping-cart__total-label">
          <h2>Total</h2>
        </div>
        <div className="shopping-cart__amount">
          <h2>{`: ${ Currency.USD.format(total)}`}</h2>
        </div>
      </div>
      <Link to="/checkout" className="shopping-cart__checkout btn">
        Finalizar Compra
      </Link>
    </>
  )

  return (
    <>
      <div id="nav-shop-cart" className="shopping-cart__container">
        <div className="shopping-cart">
          <div className="shopping-cart__items">
            { cartItems }
          </div>
          {divTotal}
        </div>
      </div>
    </>
  )
};

export default NavShoppingCart;