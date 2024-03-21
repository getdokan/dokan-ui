import React, { FC, MouseEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';
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
  color:
    | 'amber'
    | 'blue'
    | 'cyan'
    | 'emerald'
    | 'fuchsia'
    | 'green'
    | 'gray'
    | 'indigo'
    | 'lime'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'red'
    | 'rose'
    | 'sky'
    | 'teal'
    | 'violet'
    | 'yellow'
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'white';
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  block?: boolean;
  iconOnMobile?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | MouseEventHandler<HTMLAnchorElement>;
}

const Button: FC<ButtonProps> = (props) => {
  const Icon = props.icon;

  const linkColors = {
    amber: `text-amber-600`,
    blue: `text-blue-600`,
    cyan: `text-cyan-600`,
    emerald: `text-emerald-600`,
    fuchsia: `text-fuchsia-600`,
    green: `text-green-600`,
    gray: `text-gray-600`,
    indigo: `text-indigo-600`,
    lime: `text-lime-600`,
    orange: `text-orange-600`,
    pink: `text-pink-600`,
    purple: `text-purple-600`,
    red: `text-red-600`,
    rose: `text-rose-600`,
    sky: `text-sky-600`,
    teal: `text-teal-600`,
    violet: `text-violet-600`,
    yellow: `text-yellow-600`,
    primary: `text-primary-600`,
    secondary: `text-secondary-600`,
    danger: `text-danger-600`,
    white: `text-white-600`,
  };
  const colors = {
    amber: `${
      props.outlined
        ? 'border border-amber-600 text-amber-600 hover:bg-amber-100'
        : 'text-white bg-amber-600 hover:bg-amber-700'
    } focus:ring-amber-600`,
    blue: `${
      props.outlined
        ? 'border border-blue-600 text-blue-600 hover:bg-blue-100'
        : 'text-white bg-blue-600  hover:bg-blue-700'
    } focus:ring-blue-600`,
    cyan: `${
      props.outlined
        ? 'border border-cyan-600 text-cyan-600 hover:bg-cyan-100'
        : 'text-white bg-cyan-600 hover:bg-cyan-700'
    } focus:ring-cyan-600`,
    emerald: `${
      props.outlined
        ? 'border border-emerald-600 text-emerald-600 hover:bg-emerald-100'
        : 'text-white bg-emerald-600 hover:bg-emerald-700'
    } focus:ring-emerald-600`,
    fuchsia: `${
      props.outlined
        ? 'border border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-100'
        : 'text-white bg-fuchsia-600 hover:bg-fuchsia-700'
    } focus:ring-fuchsia-600`,
    green: `${
      props.outlined
        ? 'border border-green-600 text-green-600 hover:bg-green-100'
        : 'text-white bg-green-600 hover:bg-green-700'
    } focus:ring-green-600`,
    gray: `${
      props.outlined
        ? 'border border-gray-600 text-gray-600 hover:bg-gray-100'
        : 'text-white bg-gray-600 hover:bg-gray-700'
    } focus:ring-gray-600`,
    indigo: `${
      props.outlined
        ? 'border border-indigo-600 text-indigo-600 hover:bg-indigo-100'
        : 'text-white bg-indigo-600 hover:bg-indigo-700'
    } focus:ring-indigo-600`,
    lime: `${
      props.outlined
        ? 'border border-lime-600 text-lime-600 hover:bg-lime-100'
        : 'text-white bg-lime-600 hover:bg-lime-700'
    } focus:ring-lime-600`,
    orange: `${
      props.outlined
        ? 'border border-orange-600 text-orange-600 hover:bg-orange-100'
        : 'text-white bg-orange-600 hover:bg-orange-700'
    } focus:ring-orange-600`,
    pink: `${
      props.outlined
        ? 'border border-pink-600 text-pink-600 hover:bg-pink-100'
        : 'text-white bg-pink-600 hover:bg-pink-700'
    } focus:ring-pink-600`,
    purple: `${
      props.outlined
        ? 'border border-purple-600 text-purple-600 hover:bg-purple-100'
        : 'text-white bg-purple-600 hover:bg-purple-700'
    } focus:ring-purple-600`,
    red: `${
      props.outlined ? 'border border-red-600 text-red-600 hover:bg-red-100' : 'text-white bg-red-600 hover:bg-red-700'
    } focus:ring-red-600`,
    rose: `${
      props.outlined
        ? 'border border-rose-600 text-rose-600 hover:bg-rose-100'
        : 'text-white bg-rose-600 hover:bg-rose-700'
    } focus:ring-rose-600`,
    sky: `${
      props.outlined ? 'border border-sky-600 text-sky-600 hover:bg-sky-100' : 'text-white bg-sky-600 hover:bg-sky-700'
    } focus:ring-sky-600`,
    teal: `${
      props.outlined
        ? 'border border-teal-600 text-teal-600 hover:bg-teal-100'
        : 'text-white bg-teal-600 hover:bg-teal-700'
    } focus:ring-teal-600`,
    violet: `${
      props.outlined
        ? 'border border-violet-600 text-violet-600 hover:bg-violet-100'
        : 'text-white bg-violet-600 hover:bg-violet-700'
    } focus:ring-violet-600`,
    yellow: `${
      props.outlined
        ? 'border border-yellow-600 text-yellow-600 hover:bg-yellow-100'
        : 'text-white bg-yellow-600 hover:bg-yellow-700'
    } focus:ring-yellow-600`,
    primary: `${
      props.outlined
        ? 'border border-primary-600 text-primary-600 hover:bg-primary-100'
        : 'text-white bg-primary-600 hover:bg-primary-700'
    } focus:ring-primary-600`,
    secondary: `${
      props.outlined
        ? 'border border-secondary-600 text-secondary-600 hover:bg-secondary-100'
        : 'text-gray-600 bg-secondary-600 hover:bg-secondary-700'
    } focus:ring-secondary-600`,
    danger: `${
      props.outlined
        ? 'border border-danger-600 text-danger-600 hover:bg-danger-100'
        : 'text-white bg-danger-600 hover:bg-danger-700'
    } focus:ring-danger-600`,
    white: `bg-transparent text-gray-600 hover:bg-gray-100`,
  };

  const sizes = {
    lg: 'px-6 py-2.5 text-sm',
    md: 'px-5 py-2 text-sm',
    sm: 'px-4 py-1.5 text-xs',
  };

  if (props.link) {
    return (
      <a
        target={props.target}
        href={props.href}
        type={props.type || 'submit'}
        onClick={props.onClick as MouseEventHandler<HTMLAnchorElement>}
        className={`${props.block ? 'w-full' : ''} ${
          props.disabled ? 'opacity-50 cursor-not-allowed' : ''
        } ${props.underline ? 'underline decoration-2' : ''} ${
          props.underlineOnHover ? 'hover:underline decoration-2' : ''
        } hover:cursor-pointer rounded my-2 mx-4 text-sm font-medium ${
          linkColors[props.color]
        } ${props.className || ''}`}
      >
        {props.label && <span>{props.label}</span>}
        {props.children}
      </a>
    );
  }

  return (
    <>
      <button
        type={props.type || 'button'}
        disabled={props.disabled || false}
        onClick={props.onClick as MouseEventHandler<HTMLButtonElement>}
        className={twMerge(
          props.block ? 'w-full' : '',
          props.disabled ? 'opacity-50 cursor-not-allowed' : '',
          'inline-flex gap-2 justify-center border rounded shadow-sm font-medium',
          colors[props.color],
          props.size ? sizes[props.size] : sizes['md'],
          'focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300',
          props.className || ''
        )}
      >
        {props.children || (
          <>
            {props.loading && (
              <svg
                className="animate-spin h-5 w-5 text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            {props.icon && <Icon className="w-5 h-5" />}
            {props.label && (
              <span className={`${props.iconOnMobile ? 'hidden sm:inline-block' : ''}`}>{props.label}</span>
            )}
          </>
        )}
      </button>
    </>
  );
};

Button.propTypes = {};

export default Button;
