import React, { MouseEventHandler } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { SimpleInputProps } from './SimpleInput';

export interface TrailingInputProps extends SimpleInputProps {
    icon?: any;
    btnIcon?: any;
    btnLabel?: any;
    onBtnClick?: MouseEventHandler<HTMLButtonElement>;
}

const TrailingInput: React.FC<TrailingInputProps> = (props) => {
    const Icon = props.icon;
    const BtnIcon = props.btnIcon;
    let validClasses = `focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l ${props.icon && 'pl-10'} sm:text-sm border-gray-300 placeholder-gray-400`;
    let errorClasses = `${props.icon && 'pl-10'} block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-none rounded-l`;
    return (
        <>
            <label htmlFor={props.input.id} className="block text-sm font-medium text-gray-700">
                {props.label}
            </label>
            <div className="mt-1 flex rounded shadow-sm">
                <div className="relative flex items-stretch flex-grow focus-within:z-10">
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
                </div>
                <button
                    onClick={props.onBtnClick && props.onBtnClick}
                    type="button"
                    className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                    <BtnIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />{props.btnLabel && <span>{props.btnLabel}</span>}
                </button>
            </div>
            {props.error && <p className="text-xs text-red-600" id={`${props.input.id}-error`}>
                {props.error}
            </p>}
        </>
    );
}

export default TrailingInput;
