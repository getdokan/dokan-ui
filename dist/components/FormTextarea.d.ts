import React from 'react';
export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    isError?: boolean;
}
declare const FormTextarea: React.ForwardRefExoticComponent<FormTextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default FormTextarea;
