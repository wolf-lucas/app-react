import NavShoppingCart from "../components/nav-shop-cart/NavShoppingCart";
import Layout from "../layout/Layout";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import MainContent from "../layout/main-content/MainContent";
import SideBar from "../layout/sidebar/SideBar";

export default function Contact() {
    return (
        < Layout >
          < Header />
            < MainContent >
                <h1>Contacto</h1>
            </ MainContent >
            < SideBar >
              < NavShoppingCart />
            </ SideBar >
          < Footer />
        </ Layout >
    )
}