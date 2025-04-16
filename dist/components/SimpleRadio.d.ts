import React, { ChangeEventHandler, FocusEventHandler } from 'react';
export interface SimpleRadioProps {
    name: string;
    label?: string;
    helpText?: string;
    options: Array<{
        value: string | number;
        label: string;
    }>;
    defaultValue?: string | number;
    value?: string | number;
    errors?: string[];
    input?: {
        [key: string]: any;
    };
    optionClass?: string;
    selectedOptionClass?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
}
declare const SimpleRadio: React.FC<SimpleRadioProps>;
export default SimpleRadio;
