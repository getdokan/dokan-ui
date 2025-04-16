import React, { FC, MouseEventHandler } from 'react';
export interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    loading?: boolean;
    disabled?: boolean;
    outlined?: boolean;
    link?: boolean;
    underline?: boolean;
    underlineOnHover?: boolean;
    href?: string;
    target?: string;
    icon?: any;
    size?: 'lg' | 'md' | 'sm';
    color: 'amber' | 'blue' | 'cyan' | 'emerald' | 'fuchsia' | 'green' | 'gray' | 'indigo' | 'lime' | 'orange' | 'pink' | 'purple' | 'red' | 'rose' | 'sky' | 'teal' | 'violet' | 'yellow' | 'primary' | 'secondary' | 'danger' | 'white';
    label?: string;
    type?: 'button' | 'submit' | 'reset';
    block?: boolean;
    iconOnMobile?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement> | MouseEventHandler<HTMLAnchorElement>;
}
declare const Button: FC<ButtonProps>;
export default Button;
