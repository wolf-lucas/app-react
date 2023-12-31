import { useContext, useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";
import { DataForm } from "../interfaces/forms/FormData";
import { TFormContext } from "../interfaces/@types";

export function useAPIGet(url: string)
{
  const [status, setStatus] = useState<number>(0);
  const [data, setData] = useState<any>(null);
  const [statusText, setStatusText] = useState<string>('');
  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);
  
  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);
      setData(await apiResponse.json());
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
    } 
    catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (data == null)
      getAPIData();
  })

  return { status, statusText, data, error, loading };
}

export const useFormContext = () => useContext(FormContext) as TFormContext<DataForm>;