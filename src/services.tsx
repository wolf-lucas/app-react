export function validateEmail(email: string) {
    const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        return { error: true, value: email, msg: "Debe ingresar un correo electrónico válido." }
    } else {
        return { error: false, value: email, msg: "Email válido."}
    }
}

export function validateFormInput(value: string, ...args: any[]){
    const props = args.find(arg => arg.type);
    const type = props ? props.type : undefined;
    
    switch (type) {
        case 'text':
            const maxLen = props.maxLength ? props.maxLength : 9999;
            const minLen = props.minLength ? props.minLength : 1;
            if ((value.length < minLen) || (value.length > maxLen)) {
                return { error: true, value: value, msg: `Debe tener una longitud entre ${minLen}-${maxLen} caracteres.`}
            } else {
                return { error: false, value: value, msg: `Texto válido -> ${value}`}
            }
        case 'number':
            const num = Number(value)
            const max = props.max ? props.max : Infinity;
            const min = props.min ? props.min : 0.0001;
            if ((num < min) || (num > max)) {
                return { error: true, value: value, msg: `Debe ingresar un número válido entre min: ${min ? min : 0} y máx: ${max ? max : 'infinito'}.`}
            } else {
                return { error: false, value: value, msg: `Número válido -> ${num}`}
            }
        case 'file':
            if (value) {
                return { error: false, value: value, msg: "Imagen cargada"}
            } else  {
                return { error: true, value: value, msg: "Debe seleccionar una imagen"}
            }
        case 'select':
            if (value){
                return { error: false, value: value, msg: `Opción ${value} seleccionada`}
            } else {
                return { error: true, value: value, msg: `Debe seleccionar alguna de las opciones listadas`}
            }
        case 'email':
            const emailError = validateEmail(value)
            return emailError
        default:
            return { error: false, value: value, msg: ""}
            break;
    }
}