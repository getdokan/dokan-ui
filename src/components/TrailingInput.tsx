import { classNames } from '@/utils';
import React, { MouseEventHandler, useId } from 'react';
import ErrorMessage from './ErrorMessage';
import { SimpleInputProps } from './SimpleInput';

export interface TrailingInputProps extends SimpleInputProps {
  btnIcon?: any;
  btnLabel?: any;
  onBtnClick?: MouseEventHandler<HTMLButtonElement>;
  helpText?: string;
}

const TrailingInput: React.FC<TrailingInputProps> = (props) => {
  const Icon = props.icon;

  const BtnIcon = props.btnIcon;

  const hasErrors = Boolean(props.errors && props.errors.length > 0);
  const generatedId = useId();

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
          {props.required && <span className={'ms-0.5 text-danger-500'}>*</span>}
        </label>
      ) : (
        props.label
      )}
      <div className="relative flex items-stretch flex-grow focus-within:z-10">
        {props.icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className={`h-5 w-5 text-gray-400`} aria-hidden="true" />
          </div>
        )}
        <input
          required={props.required}
          disabled={props.disabled}
          id={props.input?.id ?? generatedId}
          className={classNames(
            'w-full h-10 rounded border-0 px-4 py-2.5 text-sm leading-5 text-[#575757] ring-1 focus:ring-2 ring-[#E9E9E9] placeholder:text-[#828282] focus:ring-primary-600 disabled:cursor-not-allowed disabled:text-[#A5A5AA] disabled:placeholder:text-[#A5A5AA]',
            hasErrors && 'ring-red-500 focus:ring-red-500 hasErrors',
            props.icon && 'pl-10',
            props.className
          )}
          value={props.value}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          onKeyPress={props.onKeyPress}
          onKeyUp={props.onKeyUp}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          aria-invalid={hasErrors ? 'true' : 'false'}
          aria-describedby={`${props.input?.id ?? generatedId}-error`}
          {...props.input}
        />
        <button
          onClick={props.onBtnClick && props.onBtnClick}
          type="button"
          className={`absolute right-2.5 top-1/2 -translate-y-1/2 inline-flex items-center gap-1`}
        >
          <BtnIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          {props.btnLabel && <span>{props.btnLabel}</span>}
        </button>
      </div>
      <ErrorMessage value={props.errors ?? []} />

      {props.helpText && <p className="mt-1.5 text-xs text-gray-500">{props.helpText}</p>}
    </>
  );
};

export default TrailingInput;
