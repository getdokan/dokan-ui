import React, {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { CleaveOptions } from 'cleave.js/options';
import { twMerge } from 'tailwind-merge';

export interface SimpleInputProps {
  children?: React.ReactNode;
  addOnLeft?: string;
  addOnRight?: string;
  value?: string | number;
  defaultValue?: string | number;
  className?: string;
  icon?: any;
  label?: string;
  disabled?: boolean;
  helpText?: string;
  errors?: string[];
  counter?: boolean;
  input: {
    [key: string]: any;
  };
  maskRule?: CleaveOptions;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const SimpleInput: React.FC<SimpleInputProps> = (props) => {
  const [length, setLength] = useState(0);
  const Icon = props.icon;

  useEffect(() => {
    if (props.counter) {
      setLength((props.value ?? props.defaultValue)?.toString().length ?? 0);
    }
  }, [props.defaultValue, props.value]);

  const hasErrors = () => {
    return props.errors && props.errors.length > 0;
  };

  const validClasses = `${
    props.icon && 'pl-10'
  } appearance-none block w-full pl-3 ${
    props.counter ? 'pr-20' : 'pr-3'
  } py-2 border border-gray-300 rounded ${
    props.addOnLeft && `rounded-l-none`
  } ${
    props.addOnRight && `rounded-r-none`
  } shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm`;

  const errorClasses = `${props.icon && 'pl-10'} block w-full ${
    props.counter ? 'pr-24' : 'pr-10'
  }  ${props.addOnLeft && `rounded-l-none`} ${
    props.addOnRight && `rounded-r-none`
  } py-2 border border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded`;

  return (
    <>
      <label
        htmlFor={props.input.id}
        className={
          'block text-sm cursor-pointer font-medium text-gray-700 mb-1'
        }
      >
        {props.label}
      </label>
      <div className="relative flex">
        {props.addOnLeft && (
          <>
            <span className="inline-flex items-center rounded-l border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
              {props.addOnLeft}
            </span>
          </>
        )}
        {props.icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon
              className={`h-5 w-5 text-gray-400 ${
                hasErrors() && 'text-red-400'
              }`}
              aria-hidden="true"
            />
          </div>
        )}
        <input
          {...props.input}
          disabled={props.disabled}
          value={props.value}
          id={props.input.id}
          defaultValue={props.defaultValue}
          className={twMerge(
            hasErrors() ? errorClasses : validClasses,
            props.disabled && 'disabled',
            props.icon && 'pl-10',
            props.className
          )}
          onChange={(e) => {
            if (props.counter) {
              setLength(e.target.value.length);
            }
            props.onChange && props.onChange(e);
          }}
          onKeyDown={props.onKeyDown}
          onKeyPress={props.onKeyPress}
          onKeyUp={props.onKeyUp}
          onBlur={props.onBlur}
          aria-invalid={hasErrors() ? 'true' : 'false'}
          aria-describedby={`${props.input.id}-error`}
        />
        {props.counter && (
          <div
            className={`absolute inset-y-0 right-0 flex items-center ${
              hasErrors() ? 'pr-8' : 'pr-3'
            }`}
          >
            <span className="border-l-2 pl-2 text-gray-400 sm:text-sm">
              {length}/{props.input?.maxLength ?? '∞'}
            </span>
          </div>
        )}
        {props.addOnRight && (
          <>
            <span className="-ml-px relative inline-flex items-center rounded-r border border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
              {props.addOnRight}
            </span>
          </>
        )}
        {hasErrors() && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-400 sm:h-4 sm:w-4"
              aria-hidden="true"
            />
          </div>
        )}
        {props.children}
      </div>
      {hasErrors() && (
        <p className="text-xs text-red-600" id={`${props.input.id}-error`}>
          {props.errors?.join(', ')}
        </p>
      )}
      {props.helpText && (
        <span className="text-xs text-gray-600">{props.helpText}</span>
      )}
    </>
  );
};

export default SimpleInput;
