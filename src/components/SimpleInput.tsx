import { classNames } from '@/utils';
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  KeyboardEventHandler,
  useEffect,
  useId,
  useState,
} from 'react';
import ErrorMessage from './ErrorMessage';

export interface SimpleInputProps {
  children?: React.ReactNode;
  addOnLeft?: React.ReactNode;
  addOnRight?: React.ReactNode;
  value?: string | number;
  defaultValue?: string | number;
  className?: string;
  icon?: any;
  label?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  helpText?: React.ReactNode;
  errors?: string[];
  counter?: boolean;
  input?: InputHTMLAttributes<HTMLInputElement> & { maxLength?: number };
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

  const hasErrors = Boolean(props.errors && props.errors.length > 0);

  return (
    <>
      {typeof props.label === 'string' ? (
        <label
          htmlFor={props.input?.id ?? generatedId}
          className={classNames(
            'cursor-pointer text-sm font-medium leading-[21px] text-gray-900  mb-2 inline-block',
            props.disabled && 'cursor-not-allowed opacity-50'
          )}
        >
          {props.label}
          {props.required && <span className={'ms-0.5 text-danger-500'}>*</span>}
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
            <Icon className={classNames(`h-5 w-5 text-gray-400`, hasErrors && 'text-red-400')} aria-hidden="true" />
          </div>
        )}
        <input
          type="text"
          required={props.required}
          disabled={props.disabled}
          value={props.value}
          id={props.input?.id ?? generatedId}
          defaultValue={props.defaultValue}
          className={classNames(
            'w-full h-10 rounded border-0 px-4 py-2.5 text-sm leading-5 text-gray-800 ring-1 focus:ring-2 ring-gray-200 placeholder:text-gray-400 focus:ring-primary-600 disabled:cursor-not-allowed disabled:opacity-50',
            hasErrors && 'ring-red-500 focus:ring-red-500 hasErrors',
            props.disabled && 'disabled',
            (props.icon || props.addOnLeft) && 'pl-11',
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
          {...props.input}
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
      <ErrorMessage value={props.errors ?? []} />
      {props.helpText && <p className="mt-1.5 text-xs text-gray-500">{props.helpText}</p>}
    </>
  );
};

export default SimpleInput;
