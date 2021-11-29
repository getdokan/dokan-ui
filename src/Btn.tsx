import React, { FC, MouseEventHandler } from 'react';
export interface BtnProps {
    className?: string,
    color: string,
    label: string,
    block?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const Btn: FC<BtnProps> = (props) => {
    return (
        <>
            <button
                onClick={props.onClick}
                className={`${props.block && 'w-full'} flex justify-center py-2 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-${props.color}-600 hover:bg-${props.color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${props.color}-500 ${props.className || ''}`}
            >
                {props.label}
                {props.children}
            </button>
        </>
    );
}

export default Btn;
