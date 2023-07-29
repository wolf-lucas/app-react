import Layout from "../layout/Layout";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import MainContent from "../layout/main-content/MainContent";

export default function About() {
    return (
        < Layout >
          < Header />
            < MainContent >
                <h1>Nosotros</h1>
            </ MainContent >
          < Footer />
        </ Layout >
    )
}