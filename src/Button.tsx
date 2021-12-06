import React, { FC, MouseEventHandler } from 'react';
export interface ButtonProps {
    className?: string,
    loading?: boolean,
    disabled?: boolean,
    icon?: any,
    color: string,
    label: string,
    block?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = (props) => {
    const Icon = props.icon;
    return (
        <>
            <button
                disabled={props.disabled || false}
                onClick={props.onClick}
                className={`${props.block ? 'w-full' : ''} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''} flex justify-center py-2 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-${props.color}-600 hover:bg-${props.color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${props.color}-500 ${props.className || ''}`}
            >
                {props.loading && <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>}
                {props.icon && <Icon className="w-5 h-5 mr-1" />}
                {props.label}
                {props.children}
            </button>
        </>
    );
}

Button.propTypes = {

}

export default Button;
