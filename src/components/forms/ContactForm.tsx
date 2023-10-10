import FormField from "./FormField";
import Button from "../buttons/Buttons";
import { validateFormInput } from "../../services";

import './Forms.scss'

type Props = {
  isDataValid: boolean;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ContactForm = ({ isDataValid, handleSubmit }: Props) => 
(
  <>
    <div id="contact-form" className="form">
      < FormField label='Tu Nombre' 
                  name='name' 
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
  </>
);

export default ContactForm;