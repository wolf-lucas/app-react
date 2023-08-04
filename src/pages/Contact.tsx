import ContactForm from "../components/forms/ContactForm";
import Layout from "../layout/Layout";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import MainContent from "../layout/main-content/MainContent";
import FormProvider from "../context/FormContext";

export default function Contact() {
    return (
        < Layout >
          < Header />
            < MainContent >
              < FormProvider >
                < ContactForm />
              </ FormProvider >
            </ MainContent >
          < Footer />
        </ Layout >
    )
}