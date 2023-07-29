import { useContext, useEffect, useState } from 'react';
import './SideBar.scss';
import { ShopCartContext } from '../../context/ShopCartContext';

type Props = {
  children: React.ReactNode;
}

function SideBar({children}: Props) {

  const ctx = useContext(ShopCartContext)
  const [isOpen, setIsOpen] = useState(ctx?.isCartVisible)

  useEffect (() => {
    setIsOpen(ctx?.isCartVisible)
  }, [ctx?.isCartVisible])

  return (
    <>
      <div className={`sidebar${isOpen ? " active" : ""}`}>
        <div className="sidebar__header">
          <h3>Carrito de Compras</h3>
          <p>Artículos</p>
        </div>
        <div className="sidebar__content">
          {children}
        </div>
      </div>
    </>
  )
}

export default SideBar;