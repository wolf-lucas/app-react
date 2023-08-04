import { createContext, useState } from "react";
import { TFormContext } from "../interfaces/@types";
import { DataForm } from "../interfaces/forms/FormData";

export const FormContext = createContext<TFormContext<DataForm>>({
  data: {} as DataForm,
  set: () => {},
  get: <K extends keyof DataForm>(_key: K) => 
    {
      return {} as DataForm[K];
    },
  errors: {} as DataForm,
  setErrors: () => {},
  reqFields: {} as DataForm,
  setReqFields: () => {},
});

type Props = {
  children?: React.ReactNode,
}

const FormProvider = ({ children }: Props) => {

  const [data, set] = useState<DataForm>({} as DataForm)
  const [ errors, setErrors ] = useState<DataForm>({} as DataForm)
  const [ reqFields, setReqFields ] = useState({} as DataForm)

  const get = <K extends keyof DataForm>(key: K) => data[key];
  
  return (
    <FormContext.Provider value={{data, set, get, errors, setErrors, reqFields, setReqFields}}>
      {children}
    </FormContext.Provider>
  )
};

export default FormProvider;