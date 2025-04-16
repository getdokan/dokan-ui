import { ChangeEventHandler, FC } from 'react';
export interface FancyCheckboxProps {
    inputs: Array<{
        label: string;
        description: string;
        [key: string]: any;
    }>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const FancyCheckbox: FC<FancyCheckboxProps>;
export default FancyCheckbox;
