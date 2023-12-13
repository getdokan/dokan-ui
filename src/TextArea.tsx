import React, { ChangeEventHandler } from 'react';
import classNames from 'classnames';
import { HiExclamationCircle } from 'react-icons/hi';

export interface TextAreaProps {
  className?: string;
  label?: string;
  errors?: string[];
  value?: string;
  input: {
    [key: string]: any;
  };
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
  const validClasses =
    'appearance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm';
  const errorClasses =
    'block w-full pe-10 border border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-danger-500 focus:border-danger-500 sm:text-sm rounded';
  return (
    <>
      {label && (
        <label
          htmlFor={input.id}
          className={'block text-sm font-medium text-gray-700'}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          {...input}
          id={input.id}
          className={classNames(
            errors?.length ? errorClasses : validClasses,
            className,
            disabled && 'disabled'
          )}
          onChange={onChange}
          aria-invalid={errors ? 'true' : 'false'}
          aria-describedby={`${input.id}-error`}
          defaultValue={value}
          disabled={disabled}
        ></textarea>
        {errors && (
          <div className="absolute bottom-1 right-1 pe-3 flex items-center pointer-events-none">
            <HiExclamationCircle
              className="h-5 w-5 sm:h-4 sm:w-4 text-danger-400"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {errors && (
        <p className="text-xs text-red-600" id={`${input.id}-error`}>
          {errors.join(', ')}
        </p>
      )}
      {helpText && <span className="text-xs text-gray-600">{helpText}</span>}
    </>
  );
};

export default TextArea;
