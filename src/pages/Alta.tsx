import FormProvider from "../context/FormContext";
import Layout from "../layout/Layout";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import MainContent from "../layout/main-content/MainContent";
import BaseForm from "../components/forms/BaseForm";

import './Alta.scss'

export default function Alta() {

  const title = 'Formulario de Alta de Productos'

  return (
  < Layout >
    < Header />
      < MainContent >
          < FormProvider >
            <BaseForm formTitle={title} formView='ALTA' />
          </ FormProvider >
      </ MainContent >
    < Footer />
  </ Layout >
  )
}