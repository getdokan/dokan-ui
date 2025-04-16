import React from 'react';
interface Option {
    icon?: React.ReactElement;
    label: string;
    description?: string;
    value: string;
}
export interface RadioGroupProps {
    errors?: string[];
    value?: string;
    options: Option[];
    allowDeselect?: boolean;
    className?: string;
    onChange?: (selected: string) => void;
}
declare const RadioGroup: React.FC<RadioGroupProps>;
export default RadioGroup;
