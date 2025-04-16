import React, { ChangeEventHandler, TextareaHTMLAttributes } from 'react';
export type TextAreaProps = {
    className?: string;
    label?: React.ReactNode;
    errors?: string[];
    defaultValue?: string;
    value?: string;
    input: TextareaHTMLAttributes<HTMLTextAreaElement>;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    helpText?: string;
    required?: boolean;
    disabled?: boolean;
};
declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
