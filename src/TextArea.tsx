import React, { ChangeEventHandler } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

export interface TextAreaProps {
  className?: string;
  label?: string;
  errors?: string[];
  value?: string;
  input: {
    [key: string]: any;
  };
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea: React.FC<TextAreaProps> = ({ input, label, className, errors, onChange }) => {
  let validClasses =
    'appearance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm';
  let errorClasses =
    'block w-full pe-10 border border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-danger-500 focus:border-danger-500 sm:text-sm rounded';
  return (
    <>
      {label && (
        <label htmlFor={input.id} className={'block text-sm font-medium text-gray-700'}>
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          {...input}
          id={input.id}
          className={`${errors ? errorClasses : validClasses} ${className}`}
          onChange={onChange}
          aria-invalid={errors ? 'true' : 'false'}
          aria-describedby={`${input.id}-error`}
        ></textarea>
        {errors && (
          <div className="absolute bottom-1 right-1 pe-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 sm:h-4 sm:w-4 text-danger-400" aria-hidden="true" />
          </div>
        )}
      </div>
      {errors && (
        <p className="text-xs text-red-600" id={`${input.id}-error`}>
          {errors.join(', ')}
        </p>
      )}
    </>
  );
};

export default TextArea;
