import React, { ChangeEventHandler, TextareaHTMLAttributes } from 'react';
import classNames from 'classnames';
import ErrorIcon from './ErrorIcon';

export interface TextAreaProps {
  className?: string;
  label?: React.ReactNode;
  errors?: string[];
  value?: string;
  input: Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    | 'onChange'
    | 'value'
    | 'className'
    | 'disabled'
    | 'value'
    | 'aria-invalid'
    | 'aria-describedby'
  >;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  helpText?: string;
  disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  input,
  label,
  className,
  errors,
  value,
  onChange,
  helpText,
  disabled,
}) => {
  return (
    <>
      {typeof label === 'string' ? (
        <label
          htmlFor={input.id}
          className={
            'cursor-pointer text-sm font-medium leading-[21px] text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 inline-block'
          }
        >
          {label}
        </label>
      ) : (
        label
      )}
      <textarea
        {...input}
        className={classNames(
          'w-full rounded border-0 px-4 py-2.5 text-sm leading-5 text-[#575757] ring-1 ring-[#E9E9E9] placeholder:text-[#828282] focus:ring-primary-600 disabled:cursor-not-allowed disabled:text-[#A5A5AA] disabled:placeholder:text-[#A5A5AA]',
          errors && errors.length > 0 && 'ring-red-500 focus:ring-red-500',
          className,
          disabled && 'disabled'
        )}
        onChange={onChange}
        aria-invalid={errors ? 'true' : 'false'}
        aria-describedby={`${input.id}-error`}
        value={value}
        disabled={disabled}
      ></textarea>
      {errors && errors.length > 0 && (
        <p className={'mt-1.5 flex items-center space-x-1.5'}>
          <ErrorIcon />{' '}
          <span className={'text-xs text-[#393939]'}>{errors.join(', ')}</span>
        </p>
      )}
      {helpText && <p className="mt-1.5 text-xs text-gray-500">{helpText}</p>}
    </>
  );
};

export default TextArea;
