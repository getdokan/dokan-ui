import React, { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, useEffect, useId, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import ErrorIcon from './ErrorIcon';

export interface SimpleInputProps {
  children?: React.ReactNode;
  addOnLeft?: React.ReactNode;
  addOnRight?: React.ReactNode;
  value?: string | number;
  defaultValue?: string | number;
  className?: string;
  icon?: any;
  label?: React.ReactNode;
  disabled?: boolean;
  helpText?: React.ReactNode;
  errors?: string[];
  counter?: boolean;
  input?: {
    [key: string]: any;
  };
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

const SimpleInput: React.FC<SimpleInputProps> = (props) => {
  const [length, setLength] = useState(0);
  const Icon = props.icon;

  const generatedId = useId();

  useEffect(() => {
    if (props.counter) {
      setLength((props.value ?? props.defaultValue)?.toString().length ?? 0);
    }
  }, [props.defaultValue, props.value]);

  const hasErrors = props.errors && props.errors.length > 0;

  return (
    <>
      {typeof props.label === 'string' ? (
        <label
          htmlFor={props.input?.id ?? generatedId}
          className={
            'cursor-pointer text-sm font-medium leading-[21px] text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 inline-block'
          }
        >
          {props.label}
        </label>
      ) : (
        props.label
      )}
      <div className="relative">
        {props.addOnLeft && (
          <span className="inline-flex items-center bg-gray-50 px-3 text-gray-500 sm:text-sm rouned-bl absolute left-0 top-0 h-full rounded-bl rounded-tl">
            {props.addOnLeft}
          </span>
        )}
        {props.icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className={`h-5 w-5 text-gray-400 ${hasErrors && 'text-red-400'}`} aria-hidden="true" />
          </div>
        )}
        <input
          type="text"
          {...props.input}
          disabled={props.disabled}
          value={props.value}
          id={props.input?.id ?? generatedId}
          defaultValue={props.defaultValue}
          className={twMerge(
            'w-full h-10 rounded border-0 px-4 py-2.5 text-sm leading-5 text-[#575757] ring-1 ring-[#E9E9E9] placeholder:text-[#828282] focus:ring-2 focus:ring-primary-600 disabled:cursor-not-allowed disabled:text-[#A5A5AA] disabled:placeholder:text-[#A5A5AA]',
            hasErrors && 'ring-red-500 focus:ring-red-500',
            props.disabled && 'disabled',
            props.icon && 'pl-11',
            props.addOnLeft && 'pl-11',
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
          onFocus={props.onFocus}
          aria-invalid={hasErrors ? 'true' : 'false'}
          aria-describedby={`${props.input?.id ?? generatedId}-error`}
        />
        {props.counter && (
          <div className={`absolute inset-y-0 right-0 flex items-center pr-3`}>
            <span className="border-l-2 pl-2 text-gray-400 sm:text-sm">
              {length}/{props.input?.maxLength ?? '∞'}
            </span>
          </div>
        )}
        {props.addOnRight && (
          <span className="bg-gray-50 px-3 text-gray-500 absolute right-0 top-0 inline-flex h-full items-center rounded-br rounded-tr sm:text-sm">
            {props.addOnRight}
          </span>
        )}
        {props.children}
      </div>
      {hasErrors && (
        <p className={'mt-1.5 flex items-center space-x-1.5'}>
          <ErrorIcon /> <span className={'text-xs text-[#393939]'}>{props?.errors?.join(', ')}</span>
        </p>
      )}
      {props.helpText && <p className="mt-1.5 text-xs text-gray-500">{props.helpText}</p>}
    </>
  );
};

export default SimpleInput;
