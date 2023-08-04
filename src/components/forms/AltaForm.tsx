import FormField from "./FormField";
import Button from "../buttons/Buttons";
import { validateFormInput } from "../../services";

import './Forms.scss'

type Props = {
  isDataValid: boolean;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AltaForm = ({ isDataValid, handleSubmit }: Props) => 
{ 
  return (
    <>
        <div id="upload-form" className="form">
          < FormField label='Nombre del Producto' 
            name='productName' 
            type='text'
            maxLength={40}
            minLength={3}
            validate={validateFormInput}
            placeholder="Máx. 40 caracteres"
            isRequired={true} idx={1}
          />
          <div className="field-container">
            < FormField label='Precio' 
              name='price'
              type='number'
              min={0}
              placeholder="Ingrese el precio de venta"
              validate={validateFormInput}
              isRequired={true} idx={2}
            />
            < FormField label='Unidades a cargar' 
              name='stock' 
              type='number'
              min={1}
              placeholder="Cantidad de unidades"
              validate={validateFormInput}
              isRequired={true} idx={3}
            />
          </div>
          <div className="field-container">
            < FormField label='Marca' 
              name='brand' 
              type='text'
              minLength={3}
              maxLength={30}
              validate={validateFormInput}
              placeholder="Ingrese la marca del producto"
              isRequired={true} idx={4}
            />
            <div className="field-container">
              < FormField label='Categoría' 
                options={['X', 'Y', 'G', 'K', 'O', 'P']}
                name='category'
                type='select'
                validate={validateFormInput}
                isRequired={true} idx={5}
              />
              < FormField label='¿Envío sin Cargo?' 
                name='freeShipping' 
                type='checkbox'
                isRequired={false} idx={6}
              />
            </div>
          </div>
          < FormField label='Descripción Corta' 
              name='shortDesc' 
              type='text'
              maxLength={80} 
              minLength={10}
              validate={validateFormInput}
              placeholder="Máx. 80 caracteres"
              isRequired={true} idx={7}
          />
          < FormField label='Descripción Larga' 
              name='longDesc' 
              type='text'
              maxLength={250} 
              validate={validateFormInput}
              placeholder="Máx. 250 caracteres"
              isRequired={false} idx={8}
          />
          <div className="field-container">
            < FormField label='Edad desde:' 
                name='ageStart' 
                type='number'
                min={1}
                max={99}
                validate={validateFormInput}
                placeholder="1-99"
                isRequired={false} idx={9}
            />
            < FormField label='Edad hasta:' 
                name='ageEnd' 
                type='number'
                min={12}
                max={99}
                validate={validateFormInput}
                placeholder="12-99"
                isRequired={false} idx={10}
            />
          </div>
          < FormField label='Imagen' 
              name='image' 
              type='file'
              accept="image/*"
              validate={validateFormInput}
              isRequired={true} idx={11}
            />
          <div className="form__misc">
            ( * ) Campos obligatorios
          </div>
          <div className="form__btn">
            <Button className="btn btn-submit" onClick={handleSubmit} 
              disabled={!isDataValid ? true : false}>
              Cargar Item
            </Button>
          </div>
        </div>
    </>
  )
};

export default AltaForm;