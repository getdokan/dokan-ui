import React, { ChangeEventHandler, FunctionComponent } from 'react';
export interface SimpleSelectProps {
    label: string,
    valueKey: string,
    labelKey: string,
    options: Array<{
        [key: string]: any
    }>,
    defaultOption?: string,
    onChange?: ChangeEventHandler<HTMLSelectElement>
}

const SimpleSelect: FunctionComponent<SimpleSelectProps> = (props) => {
    return (
        <>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                {props.label}
            </label>
            <select
                defaultValue=''
                onChange={props.onChange}
                id="location"
                name="location"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded"
            >
                <option disabled value=''>{`${props.defaultOption ? props.defaultOption : 'Select an option'}`}</option>
                {props.options.map((option) => <option key={option[props.valueKey]} value={option[props.valueKey]}>{option[props.labelKey]}</option>)}
            </select>
        </>
    );
}

export default SimpleSelect;
