import React, { FC } from 'react';
export interface SimpleCheckboxProps {
    checked?: boolean;
    indeterminate?: boolean;
    input: {
        [key: string]: any;
    };
    label?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
declare const SimpleCheckbox: FC<SimpleCheckboxProps>;
export default SimpleCheckbox;
