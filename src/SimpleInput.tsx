import React, { ChangeEventHandler } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid'
// import { Info } from 'react-feather';

export interface SimpleInputProps {
    className?: string,
    icon?: any,
    label: string,
    error?: string,
    input: {
        [key: string]: any,
    },
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const SimpleInput: React.FC<SimpleInputProps> = (props) => {
    const Icon = props.icon;
    let validClasses = `${props.icon && 'pl-10'} appearance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`;
    let errorClasses = `${props.icon && 'pl-10'} block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded`;
    return (
        <>
            <label htmlFor={props.input.id} className={"block text-sm font-medium text-gray-700"}>
                {props.label}
            </label>
            <div className="relative">
                {props.icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon className={`h-5 w-5 text-gray-400 ${props.error && 'text-red-400'}`} aria-hidden="true" />
                </div>}
                <input
                    {...props.input}
                    id={props.input.id}
                    className={`${props.error ? errorClasses : validClasses} ${props.className}`}
                    onChange={props.onChange}
                    aria-invalid={props.error ? 'true' : 'false'}
                    aria-describedby={`${props.input.id}-error`}
                />
                {props.error && <div className="absolute top-3 right-0 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon className="h-5 w-5 sm:h-4 sm:w-4 text-red-400" aria-hidden="true" />
                </div>}
                {props.children}
            </div>
            {props.error && <p className="text-xs text-red-600" id={`${props.input.id}-error`}>
                {props.error}
            </p>}
        </>
    );
}

export default SimpleInput;
