import classNames from 'classnames';
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
    amber: `text-amber-500`,
    blue: `text-blue-500`,
    cyan: `text-cyan-500`,
    emerald: `text-emerald-500`,
    fuchsia: `text-fuchsia-500`,
    green: `text-green-500`,
    gray: `text-gray-500`,
    indigo: `text-indigo-500`,
    lime: `text-lime-500`,
    orange: `text-orange-500`,
    pink: `text-pink-500`,
    purple: `text-purple-500`,
    red: `text-red-500`,
    rose: `text-rose-500`,
    sky: `text-sky-500`,
    teal: `text-teal-500`,
    violet: `text-violet-500`,
    yellow: `text-yellow-500`,
    primary: `text-primary-500`,
    secondary: `text-secondary-500`,
    danger: `text-danger-500`,
    white: `text-white-500`,
  };
  const colors = {
    amber: `${
      props.outlined
        ? 'border border-amber-500 text-amber-500 hover:bg-amber-100'
        : 'text-white bg-amber-500 hover:bg-amber-700'
    } focus:ring-amber-500`,
    blue: `${
      props.outlined
        ? 'border border-blue-500 text-blue-500 hover:bg-blue-100'
        : 'text-white bg-blue-500  hover:bg-blue-700'
    } focus:ring-blue-500`,
    cyan: `${
      props.outlined
        ? 'border border-cyan-500 text-cyan-500 hover:bg-cyan-100'
        : 'text-white bg-cyan-500 hover:bg-cyan-700'
    } focus:ring-cyan-500`,
    emerald: `${
      props.outlined
        ? 'border border-emerald-500 text-emerald-500 hover:bg-emerald-100'
        : 'text-white bg-emerald-500 hover:bg-emerald-700'
    } focus:ring-emerald-500`,
    fuchsia: `${
      props.outlined
        ? 'border border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-100'
        : 'text-white bg-fuchsia-500 hover:bg-fuchsia-700'
    } focus:ring-fuchsia-500`,
    green: `${
      props.outlined
        ? 'border border-green-500 text-green-500 hover:bg-green-100'
        : 'text-white bg-green-500 hover:bg-green-700'
    } focus:ring-green-500`,
    gray: `${
      props.outlined
        ? 'border border-gray-500 text-gray-500 hover:bg-gray-100'
        : 'text-white bg-gray-500 hover:bg-gray-700'
    } focus:ring-gray-500`,
    indigo: `${
      props.outlined
        ? 'border border-indigo-500 text-indigo-500 hover:bg-indigo-100'
        : 'text-white bg-indigo-500 hover:bg-indigo-700'
    } focus:ring-indigo-500`,
    lime: `${
      props.outlined
        ? 'border border-lime-500 text-lime-500 hover:bg-lime-100'
        : 'text-white bg-lime-500 hover:bg-lime-700'
    } focus:ring-lime-500`,
    orange: `${
      props.outlined
        ? 'border border-orange-500 text-orange-500 hover:bg-orange-100'
        : 'text-white bg-orange-500 hover:bg-orange-700'
    } focus:ring-orange-500`,
    pink: `${
      props.outlined
        ? 'border border-pink-500 text-pink-500 hover:bg-pink-100'
        : 'text-white bg-pink-500 hover:bg-pink-700'
    } focus:ring-pink-500`,
    purple: `${
      props.outlined
        ? 'border border-purple-500 text-purple-500 hover:bg-purple-100'
        : 'text-white bg-purple-500 hover:bg-purple-700'
    } focus:ring-purple-500`,
    red: `${
      props.outlined
        ? 'border border-red-500 text-red-500 hover:bg-red-100'
        : 'text-white bg-red-500 hover:bg-red-700'
    } focus:ring-red-500`,
    rose: `${
      props.outlined
        ? 'border border-rose-500 text-rose-500 hover:bg-rose-100'
        : 'text-white bg-rose-500 hover:bg-rose-700'
    } focus:ring-rose-500`,
    sky: `${
      props.outlined
        ? 'border border-sky-500 text-sky-500 hover:bg-sky-100'
        : 'text-white bg-sky-500 hover:bg-sky-700'
    } focus:ring-sky-500`,
    teal: `${
      props.outlined
        ? 'border border-teal-500 text-teal-500 hover:bg-teal-100'
        : 'text-white bg-teal-500 hover:bg-teal-700'
    } focus:ring-teal-500`,
    violet: `${
      props.outlined
        ? 'border border-violet-500 text-violet-500 hover:bg-violet-100'
        : 'text-white bg-violet-500 hover:bg-violet-700'
    } focus:ring-violet-500`,
    yellow: `${
      props.outlined
        ? 'border border-yellow-500 text-yellow-500 hover:bg-yellow-100'
        : 'text-white bg-yellow-500 hover:bg-yellow-700'
    } focus:ring-yellow-500`,
    primary: `${
      props.outlined
        ? 'border border-primary-500 text-primary-500 hover:bg-primary-100'
        : 'text-white bg-primary-500 hover:bg-primary-700'
    } focus:ring-primary-500`,
    secondary: `${
      props.outlined
        ? 'border border-secondary-500 text-secondary-500 hover:bg-secondary-100'
        : 'text-gray-500 bg-secondary-500 hover:bg-secondary-700'
    } focus:ring-secondary-500`,
    danger: `${
      props.outlined
        ? 'border border-danger-500 text-danger-500 hover:bg-danger-100'
        : 'text-white bg-danger-500 hover:bg-danger-700'
    } focus:ring-danger-500`,
    white: `bg-transparent text-gray-500 hover:bg-gray-100`,
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
        className={classNames(
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
                className={`${
                  props.iconOnMobile ? 'hidden sm:inline-block' : ''
                }`}
              >
                {props.label}
              </span>
            )}
          </>
        )}
      </button>
    </>
  );
};

Button.propTypes = {};

export default Button;
