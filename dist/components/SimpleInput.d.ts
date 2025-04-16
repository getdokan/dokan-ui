import React, { ChangeEventHandler, FocusEventHandler, InputHTMLAttributes, KeyboardEventHandler } from 'react';
export interface SimpleInputProps {
    children?: React.ReactNode;
    addOnLeft?: React.ReactNode;
    addOnRight?: React.ReactNode;
    value?: string | number;
    defaultValue?: string | number;
    className?: string;
    icon?: any;
    label?: React.ReactNode;
    required?: boolean;
    disabled?: boolean;
    helpText?: React.ReactNode;
    errors?: string[];
    counter?: boolean;
    input?: InputHTMLAttributes<HTMLInputElement> & {
        maxLength?: number;
    };
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
    onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
}
declare const SimpleInput: React.FC<SimpleInputProps>;
export default SimpleInput;
