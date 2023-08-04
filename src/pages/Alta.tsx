import FormProvider from "../context/FormContext";
import Layout from "../layout/Layout";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import MainContent from "../layout/main-content/MainContent";
import AltaForm from "../components/forms/AltaForm";

import './Alta.scss'

export default function Alta() {

  return (
  < Layout >
    < Header />
      < MainContent >
          < FormProvider >
            < AltaForm />
          </ FormProvider >
      </ MainContent >
    < Footer />
  </ Layout >
  )
}