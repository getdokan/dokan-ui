import React, { FC } from 'react';
import { SimpleInputProps } from './SimpleInput';

export interface SimpleCheckboxProps extends SimpleInputProps {
    checked?: boolean;
}

const SimpleCheckbox: FC<SimpleCheckboxProps> = (props) => {
    return (
        <>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={props.checked}
                    {...props.input}
                    id={props.input.id}
                    className={"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" + ` ${props.className}`}
                    onChange={props.onChange}
                />
                <label htmlFor={props.input.id} className={"ml-2 block text-sm font-medium text-gray-700"}>{props.label}</label>
            </div>
        </>
    );
}

export default SimpleCheckbox;
