import { useEffect, useState } from "react";

import './Forms.scss'
import { useFormContext } from "../../hooks/hooks";
import ContactForm from "./ContactForm";
import AltaForm from "./AltaForm";

type Props = {
  formTitle: string;
  formView: keyof typeof FormsViews;
}

const FormsViews = {
  ALTA: AltaForm,
  CONTACTO: ContactForm,
};


const BaseForm = ({ formTitle, formView }: Props) => {
  const [ isDataValid, setIsDataValid ] = useState(false)
  const { data, reqFields, errors} = useFormContext();

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isDataValid) {
      alert('Datos enviados correctamente')
    } else {
      alert('Datos mal cargados, debe corregir la información');
    }
  };

  const SelectedForm = (form: keyof typeof FormsViews) => {
    const CurrentForm = FormsViews[form]
    return < CurrentForm isDataValid={isDataValid} handleSubmit={handleSubmit} />
  };

  useEffect(() => {
    const allCompleted = Object.keys(reqFields).every(Object.prototype.hasOwnProperty.bind(data));
    const commonKeys = Object.keys(reqFields).filter(key => data.hasOwnProperty(key));
    const commonValues = commonKeys.map(key => data[key]);
    const emptyCommonValues = commonValues.filter(x => x === null || x === undefined || x === '');
    const hasErrors = Object.keys(errors).length

    if (allCompleted && emptyCommonValues.length === 0 &&  commonValues.length === Object.keys(reqFields).length && !hasErrors) {
      setIsDataValid(true)
    } else {
      setIsDataValid(false)
    }
  }, [data])


  return (
    <>
      <div className="form-container">
        <header className="form__header">
          <h1>{formTitle}</h1>
        </header>
        {SelectedForm(formView)}
      </div>
    </>
  )

};

export default BaseForm;