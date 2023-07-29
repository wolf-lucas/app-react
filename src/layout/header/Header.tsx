import { useContext } from 'react';
import NavBar from '../../components/navbar/NavBar';
import { ShopCartContext } from '../../context/ShopCartContext';

import './Header.scss';
import Button from '../../components/buttons/Buttons';

const Header = () => {
  
  const shopCartCtx = useContext(ShopCartContext)
  
  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    shopCartCtx?.toogleMenu()
  };

  const isVisible = shopCartCtx?.isCartVisible ? 'active' : ""

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="logo">
            <i className="fa-solid fa-dice-d20"></i>
            <span className="logo__name"> Juguetería Cósmica</span>
          </div>
          <NavBar />
          <Button id="btn-nav-menu" className="btn btn--novisible">
            <i className="fa-solid fa-bars"></i>
          </Button>
          <Button id="btn-shop-cart" className={`btn ${isVisible}`} onClick={toggleMenu}>
            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
          </Button>
        </div>
      </header>
    </>
  )
    
}

export default Header;