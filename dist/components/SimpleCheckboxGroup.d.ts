import React from 'react';
export interface SimpleCheckboxGroupProps {
    name?: string;
    label?: string;
    helpText?: string;
    className?: string;
    options: Array<{
        value: string | number;
        label: string;
        indeterminate?: boolean;
    }>;
    defaultValue?: Array<string | number>;
    errors?: string[];
    onChange?: (checkedList: Array<string | number>) => void;
}
declare const SimpleCheckboxGroup: React.FC<SimpleCheckboxGroupProps>;
export default SimpleCheckboxGroup;
