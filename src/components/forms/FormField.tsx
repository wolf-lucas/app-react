import { useEffect, useState } from "react";
import { useFormContext } from "../../hooks/hooks";

import './FormField.scss'
import { convertImageToBase64 } from "../../services";

type FieldProps = {
  label: string,
  type: string,
  name?: string,
  idx?: number,
  placeholder?: string,
  maxLength?: number,
  minLength?: number,
  min?: number,
  max?: number,
  options?: string[],
  accept?: string,
  isRequired?: boolean,
  validate?: (...args: any[]) => ValidateMsg,
}

interface ValidateMsg {
  value: any,
  error: boolean; 
  msg: string
}

const FormField = (props: FieldProps) => 
{
  const lowerName = props.name ? props.name.split(" ").join("") : ""
  const lowerLabel = props.label.toLowerCase().split(" ").join("")

  const idName = props.name ? lowerName : lowerLabel
  const tabIndex = props.idx ? props.idx : 0
  const itemsSelection = props.options ? 
      props.options.map((opt, index) => (<option key={index} value={opt}>{opt}</option>)) 
      : undefined;
  const { data, set , errors, setErrors, reqFields, setReqFields, isSubmitted, setIsSubmitted} = useFormContext();
  const [ value, setValue ] = useState('')
  const [ isChecked, setIsChecked ] = useState(false);
  const [ errorMsg, setErrorMsg ] = useState('')
  const [ className, setClassName ] = useState('field__style');
  const [ file, setFile ] = useState<File>();

  useEffect(() => {
    if (props.isRequired) {
      setReqFields(Object.assign(reqFields, { [idName] : 'required' }));
    }
    if (isSubmitted) {
      setValue('')
      setClassName('field__style')
      setFile(undefined)
      setIsChecked(false)
      setIsSubmitted(false)
    }
  }, [data])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> ) => {
    const { name, value } = e.target;
    if (props.type === 'checkbox') {
      setIsChecked(!isChecked);
      set(({ ...data, [name]: !isChecked }));
    } else {
      setValue(value)
      validateInput(value, name)
      set(({ ...data, [name]: value }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    validateInput(value, name)
  }

   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target
    if (files && files.length > 0) {
      const img = await convertImageToBase64(files[0]);
      setFile(files[0])
      // setValue(value)
      setClassName("field__style valid")
      validateInput(value, name)
      set(({ ...data, [name]: img }));
    } else {
      setClassName("field__style invalid")
    }
  };

  const validateInput = (value: any, name: string) => {
    const validation = props.validate?.(value, props)
    if (value){
      if (validation) {
        const { error, msg } = validation
        if (error) {
          setClassName("field__style invalid")
          setErrorMsg(msg)
          setErrors({ ...errors, [name]: error})
        } else {
          setClassName("field__style valid")
          setErrorMsg('')
          setErrors(current => {
            const copy = {...current};
            delete copy[name];
            return copy;
          });
        };
      }
    } else {
      if (validation) {
        const { msg } = validation
        props.type === 'select' ? setErrorMsg(msg) : setErrorMsg('')
        props.type === 'select' ? setClassName("field__style invalid") : setClassName(`field__style`)
      }
    }
  }

  const jsxInput = (
    <input className={className}
      id={idName}
      value={props.type === 'file' ? data.idName : value}
      onChange={props.type === 'file' ? handleFileChange : handleChange}
      onBlur={handleBlur}
      placeholder={props.placeholder}
      name={idName}
      type={props.type} 
      maxLength={props.maxLength}
      minLength={props.minLength}
      max={props.max}
      min={props.min}
      accept={props.accept}
      required={props.isRequired}
      checked={isChecked}
    />
  )

  const jsxSelect = (
    <>
      <select 
        className={className}
        id={idName}
        name={idName}
        required={props.isRequired}
        onChange={handleChange}
        onBlur={handleBlur}
      >
         <option key={0} value={''}>{''}</option>
        {itemsSelection}
      </select>
    </>
  )

  return (
    <>
      <div className={`field`} tabIndex={tabIndex}>
        <div className="field__label">
          <label htmlFor={idName}>
            {`${props.label} ${props.isRequired ? '*' : ""}`}
          </label>
        </div>
        <div className="field__data">
          {itemsSelection ? jsxSelect : jsxInput}
        </div>
        {errorMsg && <div style={{ color: 'red' , fontSize: '.9rem'}}>{errorMsg}</div>}
      </div>
    </>
  )
};

export default FormField;