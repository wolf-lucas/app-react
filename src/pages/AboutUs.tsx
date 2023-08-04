import CartItem from "../components/cart-item/CartItem";
import Layout from "../layout/Layout";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import MainContent from "../layout/main-content/MainContent";

import './AboutUs.scss';

export default function About() {

    const items = [
      {
        id: 99999999999,
        name: 'Lucas Wolf',
        description: '',
        product: 'Special Product',
        image: 'https://avatars.githubusercontent.com/u/81832646?v=4',
        price: Infinity,
        sold_qty: 0,
        buyUrl: '',
        createdAt: '17/06/1989',
        quantity: 1,
      }
    ]

    const cartItems = items.map((item, idx) => 
      (
        < CartItem key={idx} item={item} />
      )
    )

    return (
        < Layout >
          < Header />
            < MainContent >
                <div className="aboutus">
                  <h1>Sobre Nosotros</h1>
                  <p>
                    ¡Bienvenido a nuestra página web!
                  </p>
                  <h2>Nuestro Equipo</h2>
                  <div>
                    <div>
                    </div>
                    <div className="ourteam">
                      {cartItems}
                    </div>
                  </div>
                </div>
            </ MainContent >
          < Footer />
        </ Layout >
    )
}