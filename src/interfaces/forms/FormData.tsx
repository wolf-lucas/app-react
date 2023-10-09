export interface DataForm {
    [key: string]: any;
    data: {};
    set: React.Dispatch<React.SetStateAction<{}>>;
    get: (key: keyof DataForm) => {};
    errors: {};
    setErrors: React.Dispatch<React.SetStateAction<{}>>;
    reqFields: {};
    setReqFields:React.Dispatch<React.SetStateAction<{}>>;
    isSubmitted: boolean;
    setisSubmitted: React.Dispatch<React.SetStateAction<boolean>>
};