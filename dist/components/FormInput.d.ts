import React from 'react';
export interface FormInputElementProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean;
}
declare const FormInput: React.ForwardRefExoticComponent<FormInputElementProps & React.RefAttributes<HTMLInputElement>>;
export default FormInput;
