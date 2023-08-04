import { useEffect, useState } from "react";
import FormField from "./FormField";
import Button from "../buttons/Buttons";
import { validateFormInput } from "../../services";

import './Forms.scss'
import { useFormContext } from "../../hooks/hooks";

type Props = {
  children?: React.ReactNode;
}

const ContactForm = ({ children }: Props) => 
{
  const [ isDataValid, setIsDataValid ] = useState(false)
  const { data, reqFields } = useFormContext();

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isDataValid) {
      alert('Datos enviados correctamente')
    } else {
      alert('Datos mal cargados, debe corregir la información');
    }
  }; 

  useEffect(() => {
    const allCompleted = Object.keys(reqFields).every(Object.prototype.hasOwnProperty.bind(data));
    const commonKeys = Object.keys(reqFields).filter(key => data.hasOwnProperty(key));
    const commonValues = commonKeys.map(key => data[key]);
    const emptyCommonValues = commonValues.filter(x => x === null || x === undefined || x === '');

    if (allCompleted && emptyCommonValues.length === 0 &&  commonValues.length === Object.keys(reqFields).length) {
      setIsDataValid(true)
    } else {
      setIsDataValid(false)
    }
  }, [data])
 
  return (
    <>
      <div className="form-container">
        <header className="form__header">
          <h1>¡Contactate con Nosotros! Dejanos un mensaje</h1>
        </header>
        <div id="contact-form" className="form">
          < FormField label='Tu Nombre' 
                  name='username' 
                  type='text'
                  maxLength={40}
                  validate={validateFormInput}
                  placeholder="Nombre Apellido"
              isRequired={true} idx={1}
          />
          < FormField label='Correo Electrónico' 
                name='email'
                type='email'
                min={0}
                placeholder="ej.: email@dominio.com"
                validate={validateFormInput}
            isRequired={true} idx={2}
          />
          < FormField label='Consulta / Mensaje' 
            name='message' 
            type='text'
            minLength={20}
            maxLength={300}
            placeholder="Máx. 300 caracteres"
            validate={validateFormInput}
            isRequired={true} idx={3}
          />
          <div className="form__misc">
            ( * ) Campos obligatorios
          </div>
          <div className="form__btn">
            <Button className="btn btn-submit" onClick={handleSubmit} 
              disabled={!isDataValid ? true : false}>
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </>
  )
};

export default ContactForm;