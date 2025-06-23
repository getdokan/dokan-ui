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
      <div
        className={classNames(
          'flex h-10 items-center rounded ring-1 ring-[#E9E9E9] focus-within:ring-2 focus-within:ring-primary-500',
          hasErrors && 'hasErrors ring-red-500 focus-within::ring-red-500'
        )}
      >
        {props.addOnLeft && (
          <span className="inline-flex h-full items-center rounded-bl rounded-tl bg-[#EAEAEA] px-3 text-sm text-[#4F4F4F]">
            {props.addOnLeft}
          </span>
        )}
        {props.icon && (
          <div className="inline-flex h-full items-center rounded-bl rounded-tl px-3 text-sm">
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
            'h-full w-full rounded border-transparent p-2 text-sm text-[#575757] placeholder:text-[#828282] focus:border-transparent focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
            props.disabled && 'disabled',
            props.icon && 'pl-0',
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
          <div className={`inline-flex h-full items-center rounded-br rounded-tr text-sm text-[#4F4F4F]`}>
            <span className="border-l-2 px-3">
              {length}/{props.input?.maxLength ?? '∞'}
            </span>
          </div>
        )}
        {props.addOnRight && (
          <span className="inline-flex h-full items-center rounded-br rounded-tr bg-[#EAEAEA] px-3 text-sm text-[#4F4F4F]">
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
