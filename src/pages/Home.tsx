import NavShoppingCart from "../components/nav-shop-cart/NavShoppingCart";
import ItemsProvider from "../context/ItemsContext";

import Layout from "../layout/Layout"
import CardsSection from "../layout/cards-section/CardsSection";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header"
import MainContent from "../layout/main-content/MainContent";
import SideBar from "../layout/sidebar/SideBar";
import TopProducts from "../layout/top-products/TopProducts";

import './Home.scss';

const Home = () => {
  return (
    < Layout >
      < Header />
      <div className="main-side-container">
        < MainContent >
          <div className="main-container">
            <div className="products-container">
              < ItemsProvider >
                < TopProducts />
                < CardsSection />
              </ ItemsProvider >
            </div>
          </div>
        </ MainContent >
        < SideBar >
          < NavShoppingCart />
        </ SideBar >
      </div>
      < Footer />
    </ Layout >
  )
};

export default Home;