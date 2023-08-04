import Layout from "../layout/Layout";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import MainContent from "../layout/main-content/MainContent";

export default function CheckOut() {
    return (
        < Layout >
          < Header />
            < MainContent >
                <h1>Excelente! En breve te enviamos un link de compra.</h1>
            </ MainContent >
          < Footer />
        </ Layout >
    )
}