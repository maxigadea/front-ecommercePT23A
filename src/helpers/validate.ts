import { ILoginErrors, ILoginProps, IRegisterErrors, IRegisterProps } from "@/types";

export function validateLoginForm(values: ILoginProps) {
    const errors: ILoginErrors = {};

    if(values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid"
    } 

    return errors;
}


export function validateRegisterForm(values: IRegisterProps) {
    const errors: IRegisterErrors = {};

    if(values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid"
    } 

    return errors;
}