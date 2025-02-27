import { classNames } from '@/utils';
import React, { ChangeEventHandler, TextareaHTMLAttributes } from 'react';
import ErrorMessage from './ErrorMessage';

export type TextAreaProps = {
  className?: string;
  label?: React.ReactNode;
  errors?: string[];
  defaultValue?: string;
  value?: string;
  input: TextareaHTMLAttributes<HTMLTextAreaElement>;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
};

const TextArea: React.FC<TextAreaProps> = ({
  input,
  label,
  className,
  errors,
  defaultValue,
  value,
  onChange,
  helpText,
  disabled,
  required,
}) => {
  const hasErrors = Boolean(errors && errors.length > 0);
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
          {required && <span className={'ms-0.5 text-danger-500'}>*</span>}
        </label>
      ) : (
        label
      )}
      <textarea
        required={required}
        className={classNames(
          'w-full rounded border-0 px-4 py-2.5 text-sm leading-5 text-[#575757] ring-1 ring-[#E9E9E9] placeholder:text-[#828282] focus:ring-2 focus:ring-primary-600 disabled:cursor-not-allowed disabled:text-[#A5A5AA] disabled:placeholder:text-[#A5A5AA]',
          hasErrors && 'ring-red-500 focus:ring-red-500 hasErrors',
          className,
          disabled && 'disabled'
        )}
        onChange={onChange}
        aria-invalid={errors ? 'true' : 'false'}
        aria-describedby={`${input.id}-error`}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        {...input}
      ></textarea>
      <ErrorMessage value={errors ?? []} />
      {helpText && <p className="mt-1.5 text-xs text-gray-500">{helpText}</p>}
    </>
  );
};

export default TextArea;
