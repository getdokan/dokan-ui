import React, { FC, MouseEventHandler } from 'react';
export interface ButtonProps {
    className?: string;
    loading?: boolean;
    disabled?: boolean;
    icon?: any;
    color: 'amber' | 'blue' | 'cyan' | 'emerald' | 'fuchsia' | 'green' | 'gray' | 'indigo' | 'lime' | 'orange' | 'pink' | 'purple' | 'red' | 'rose' | 'sky' | 'teal' | 'violet' | 'yellow';
    label?: string;
    block?: boolean;
    iconOnMobile?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = (props) => {
    const Icon = props.icon;

    const colors = {
        amber: `bg-amber-600 hover:bg-amber-700 focus:ring-amber-500`,
        blue: `bg-blue-600 hover:bg-blue-700 focus:ring-blue-500`,
        cyan: `bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500`,
        emerald: `bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500`,
        fuchsia: `bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-fuchsia-500`,
        green: `bg-green-600 hover:bg-green-700 focus:ring-green-500`,
        gray: `bg-gray-600 hover:bg-gray-700 focus:ring-gray-500`,
        indigo: `bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`,
        lime: `bg-lime-600 hover:bg-lime-700 focus:ring-lime-500`,
        orange: `bg-orange-600 hover:bg-orange-700 focus:ring-orange-500`,
        pink: `bg-pink-600 hover:bg-pink-700 focus:ring-pink-500`,
        purple: `bg-purple-600 hover:bg-purple-700 focus:ring-purple-500`,
        red: `bg-red-600 hover:bg-red-700 focus:ring-red-500`,
        rose: `bg-rose-600 hover:bg-rose-700 focus:ring-rose-500`,
        sky: `bg-sky-600 hover:bg-sky-700 focus:ring-sky-500`,
        teal: `bg-teal-600 hover:bg-teal-700 focus:ring-teal-500`,
        violet: `bg-violet-600 hover:bg-violet-700 focus:ring-violet-500`,
        yellow: `bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500`,
    }

    return (
        <>
            <button
                disabled={props.disabled || false}
                onClick={props.onClick}
                className={`${props.block ? 'w-full' : ''} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''} flex justify-center py-2 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white ${colors[props.color]} focus:outline-none focus:ring-2 focus:ring-offset-2 ${props.className || ''}`}
            >
                {props.loading && <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>}
                {props.icon && <Icon className="w-5 h-5 mr-2" />}
                {props.label && <span className={`${props.iconOnMobile ? "hidden sm:inline-block" : ""}`}>{props.label}</span>}
                {props.children}
            </button>
        </>
    );
}

Button.propTypes = {

}

export default Button;
