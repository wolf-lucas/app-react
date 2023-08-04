import Layout from "../layout/Layout";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import MainContent from "../layout/main-content/MainContent";
import FormProvider from "../context/FormContext";
import BaseForm from "../components/forms/BaseForm";

export default function Contact() {

    const title = '¡Contactate con Nosotros! Dejanos un mensaje'

    return (
        < Layout >
          < Header />
            < MainContent >
              < FormProvider >
                <BaseForm formTitle={title} formView='CONTACTO' />
              </ FormProvider >
            </ MainContent >
          < Footer />
        </ Layout >
    )
}