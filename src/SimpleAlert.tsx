import React, { FC, MouseEventHandler } from 'react';
import {
  HiCheckCircle,
  HiExclamation,
  HiInformationCircle,
  HiX,
  HiXCircle,
} from 'react-icons/hi';
export interface SimpleAlertProps {
  children?: React.ReactNode;
  className?: string;
  type: 'success' | 'danger' | 'warning' | 'info';
  color:
    | 'primary'
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
    | 'yellow';
  label: string;
  dismissable?: boolean;
  centered?: boolean;
  onDismiss?: MouseEventHandler<HTMLButtonElement>;
}

const textColors400 = {
  primary: `text-primary-400`,
  amber: `text-amber-400`,
  blue: `text-blue-400`,
  cyan: `text-cyan-400`,
  emerald: `text-emerald-400`,
  fuchsia: `text-fuchsia-400`,
  green: `text-green-400`,
  gray: `text-gray-400`,
  indigo: `text-indigo-400`,
  lime: `text-lime-400`,
  orange: `text-orange-400`,
  pink: `text-pink-400`,
  purple: `text-purple-400`,
  red: `text-red-400`,
  rose: `text-rose-400`,
  sky: `text-sky-400`,
  teal: `text-teal-400`,
  violet: `text-violet-400`,
  yellow: `text-yellow-400`,
};

const textColors800 = {
  primary: `text-primary-800`,
  amber: `text-amber-800`,
  blue: `text-blue-800`,
  cyan: `text-cyan-800`,
  emerald: `text-emerald-800`,
  fuchsia: `text-fuchsia-800`,
  green: `text-green-800`,
  gray: `text-gray-800`,
  indigo: `text-indigo-800`,
  lime: `text-lime-800`,
  orange: `text-orange-800`,
  pink: `text-pink-800`,
  purple: `text-purple-800`,
  red: `text-red-800`,
  rose: `text-rose-800`,
  sky: `text-sky-800`,
  teal: `text-teal-800`,
  violet: `text-violet-800`,
  yellow: `text-yellow-800`,
};

const bgColors = {
  primary: `bg-primary-50`,
  amber: `bg-amber-50`,
  blue: `bg-blue-50`,
  cyan: `bg-cyan-50`,
  emerald: `bg-emerald-50`,
  fuchsia: `bg-fuchsia-50`,
  green: `bg-green-50`,
  gray: `bg-gray-50`,
  indigo: `bg-indigo-50`,
  lime: `bg-lime-50`,
  orange: `bg-orange-50`,
  pink: `bg-pink-50`,
  purple: `bg-purple-50`,
  red: `bg-red-50`,
  rose: `bg-rose-50`,
  sky: `bg-sky-50`,
  teal: `bg-teal-50`,
  violet: `bg-violet-50`,
  yellow: `bg-yellow-50`,
};

const dismissClasses = {
  primary: `bg-primary-50 text-primary-500 hover:bg-primary-100 focus:ring-offset-primary-50 focus-ring-primary-600`,
  amber: `bg-amber-50 text-amber-500 hover:bg-amber-100 focus:ring-offset-amber-50 focus-ring-amber-600`,
  blue: `bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-offset-blue-50 focus-ring-blue-600`,
  cyan: `bg-cyan-50 text-cyan-500 hover:bg-cyan-100 focus:ring-offset-cyan-50 focus-ring-cyan-600`,
  emerald: `bg-emerald-50 text-emerald-500 hover:bg-emerald-100 focus:ring-offset-emerald-50 focus-ring-emerald-600`,
  fuchsia: `bg-fuchsia-50 text-fuchsia-500 hover:bg-fuchsia-100 focus:ring-offset-fuchsia-50 focus-ring-fuchsia-600`,
  green: `bg-green-50 text-green-500 hover:bg-green-100 focus:ring-offset-green-50 focus-ring-green-600`,
  gray: `bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-offset-gray-50 focus-ring-gray-600`,
  indigo: `bg-indigo-50 text-indigo-500 hover:bg-indigo-100 focus:ring-offset-indigo-50 focus-ring-indigo-600`,
  lime: `bg-lime-50 text-lime-500 hover:bg-lime-100 focus:ring-offset-lime-50 focus-ring-lime-600`,
  orange: `bg-orange-50 text-orange-500 hover:bg-orange-100 focus:ring-offset-orange-50 focus-ring-orange-600`,
  pink: `bg-pink-50 text-pink-500 hover:bg-pink-100 focus:ring-offset-pink-50 focus-ring-pink-600`,
  purple: `bg-purple-50 text-purple-500 hover:bg-purple-100 focus:ring-offset-purple-50 focus-ring-purple-600`,
  red: `bg-red-50 text-red-500 hover:bg-red-100 focus:ring-offset-red-50 focus-ring-red-600`,
  rose: `bg-rose-50 text-rose-500 hover:bg-rose-100 focus:ring-offset-rose-50 focus-ring-rose-600`,
  sky: `bg-sky-50 text-sky-500 hover:bg-sky-100 focus:ring-offset-sky-50 focus-ring-sky-600`,
  teal: `bg-teal-50 text-teal-500 hover:bg-teal-100 focus:ring-offset-teal-50 focus-ring-teal-600`,
  violet: `bg-violet-50 text-violet-500 hover:bg-violet-100 focus:ring-offset-violet-50 focus-ring-violet-600`,
  yellow: `bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-offset-yellow-50 focus-ring-yellow-600`,
};

const SimpleAlert: FC<SimpleAlertProps> = (props) => {
  return (
    <>
      <div className={`rounded-md ${bgColors[props.color]} p-4`}>
        <div className={`flex ${props.centered ? 'justify-center' : ''}`}>
          <div className="flex-shrink-0">
            {props.type == 'success' && (
              <HiCheckCircle
                className={`h-5 w-5 ${textColors400[props.color]}`}
                aria-hidden="true"
              />
            )}
            {props.type == 'warning' && (
              <HiExclamation
                className={`h-5 w-5 ${textColors400[props.color]}`}
                aria-hidden="true"
              />
            )}
            {props.type == 'danger' && (
              <HiXCircle
                className={`h-5 w-5 ${textColors400[props.color]}`}
                aria-hidden="true"
              />
            )}
            {props.type == 'info' && (
              <HiInformationCircle
                className={`h-5 w-5 ${textColors400[props.color]}`}
                aria-hidden="true"
              />
            )}
          </div>
          <div className="ml-3">
            <p className={`text-sm font-medium ${textColors800[props.color]}`}>
              {props.label}
            </p>
            {props.children}
          </div>
          {props.dismissable && (
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  onClick={props.onDismiss}
                  type="button"
                  className={`
                                inline-flex
                                rounded-md p-1.5
                                focus:outline-none focus:ring-2 focus:ring-offset-2
                                ${dismissClasses[props.color]}
                            `}
                >
                  <span className="sr-only">Dismiss</span>
                  <HiX className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SimpleAlert;
