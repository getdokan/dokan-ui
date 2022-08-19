import classNames from 'classnames';
import React, { FC, MouseEventHandler } from 'react';
export interface ButtonProps {
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
  onClick?:
    | MouseEventHandler<HTMLButtonElement>
    | MouseEventHandler<HTMLAnchorElement>;
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
        ? 'border border-amber-500 text-amber-500 hover:bg-amber-100'
        : 'text-white bg-amber-600 hover:bg-amber-700'
    } focus:ring-amber-500`,
    blue: `${
      props.outlined
        ? 'border border-blue-500 text-blue-500 hover:bg-blue-100'
        : 'text-white bg-blue-600  hover:bg-blue-700'
    } focus:ring-blue-500`,
    cyan: `${
      props.outlined
        ? 'border border-cyan-500 text-cyan-500 hover:bg-cyan-100'
        : 'text-white bg-cyan-600 hover:bg-cyan-700'
    } focus:ring-cyan-500`,
    emerald: `${
      props.outlined
        ? 'border border-emerald-500 text-emerald-500 hover:bg-emerald-100'
        : 'text-white bg-emerald-600 hover:bg-emerald-700'
    } focus:ring-emerald-500`,
    fuchsia: `${
      props.outlined
        ? 'border border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-100'
        : 'text-white bg-fuchsia-600 hover:bg-fuchsia-700'
    } focus:ring-fuchsia-500`,
    green: `${
      props.outlined
        ? 'border border-green-500 text-green-500 hover:bg-green-100'
        : 'text-white bg-green-600 hover:bg-green-700'
    } focus:ring-green-500`,
    gray: `${
      props.outlined
        ? 'border border-gray-500 text-gray-500 hover:bg-gray-100'
        : 'text-white bg-gray-600 hover:bg-gray-700'
    } focus:ring-gray-500`,
    indigo: `${
      props.outlined
        ? 'border border-indigo-500 text-indigo-500 hover:bg-indigo-100'
        : 'text-white bg-indigo-600 hover:bg-indigo-700'
    } focus:ring-indigo-500`,
    lime: `${
      props.outlined
        ? 'border border-lime-500 text-lime-500 hover:bg-lime-100'
        : 'text-white bg-lime-600 hover:bg-lime-700'
    } focus:ring-lime-500`,
    orange: `${
      props.outlined
        ? 'border border-orange-500 text-orange-500 hover:bg-orange-100'
        : 'text-white bg-orange-600 hover:bg-orange-700'
    } focus:ring-orange-500`,
    pink: `${
      props.outlined
        ? 'border border-pink-500 text-pink-500 hover:bg-pink-100'
        : 'text-white bg-pink-600 hover:bg-pink-700'
    } focus:ring-pink-500`,
    purple: `${
      props.outlined
        ? 'border border-purple-500 text-purple-500 hover:bg-purple-100'
        : 'text-white bg-purple-600 hover:bg-purple-700'
    } focus:ring-purple-500`,
    red: `${
      props.outlined
        ? 'border border-red-500 text-red-500 hover:bg-red-100'
        : 'text-white bg-red-600 hover:bg-red-700'
    } focus:ring-red-500`,
    rose: `${
      props.outlined
        ? 'border border-rose-500 text-rose-500 hover:bg-rose-100'
        : 'text-white bg-rose-600 hover:bg-rose-700'
    } focus:ring-rose-500`,
    sky: `${
      props.outlined
        ? 'border border-sky-500 text-sky-500 hover:bg-sky-100'
        : 'text-white bg-sky-600 hover:bg-sky-700'
    } focus:ring-sky-500`,
    teal: `${
      props.outlined
        ? 'border border-teal-500 text-teal-500 hover:bg-teal-100'
        : 'text-white bg-teal-600 hover:bg-teal-700'
    } focus:ring-teal-500`,
    violet: `${
      props.outlined
        ? 'border border-violet-500 text-violet-500 hover:bg-violet-100'
        : 'text-white bg-violet-600 hover:bg-violet-700'
    } focus:ring-violet-500`,
    yellow: `${
      props.outlined
        ? 'border border-yellow-500 text-yellow-500 hover:bg-yellow-100'
        : 'text-white bg-yellow-600 hover:bg-yellow-700'
    } focus:ring-yellow-500`,
    primary: `${
      props.outlined
        ? 'border border-primary-500 text-primary-500 hover:bg-primary-100'
        : 'text-white bg-primary-600 hover:bg-primary-700'
    } focus:ring-primary-500`,
    secondary: `${
      props.outlined
        ? 'border border-secondary-500 text-secondary-500 hover:bg-secondary-100'
        : 'text-white bg-secondary-600 hover:bg-secondary-700'
    } focus:ring-secondary-500`,
    danger: `${
      props.outlined
        ? 'border border-danger-500 text-danger-500 hover:bg-danger-100'
        : 'text-white bg-danger-600 hover:bg-danger-700'
    } focus:ring-danger-500`,
    white: `bg-transparent text-gray-600 hover:bg-gray-100`,
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
        className={classNames(
          props.block ? 'w-full' : '',
          props.disabled ? 'opacity-50 cursor-not-allowed' : '',
          'inline-flex gap-2 justify-center py-2 px-4 border rounded shadow-sm text-sm font-medium',
          colors[props.color],
          'focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300',
          props.className || ''
        )}
      >
        {props.loading && (
          <svg
            className="animate-spin h-5 w-5 text-white mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {props.icon && <Icon className="w-5 h-5" />}
        {props.label && (
          <span
            className={`${props.iconOnMobile ? 'hidden sm:inline-block' : ''}`}
          >
            {props.label}
          </span>
        )}
        {props.children}
      </button>
    </>
  );
};

Button.propTypes = {};

export default Button;
