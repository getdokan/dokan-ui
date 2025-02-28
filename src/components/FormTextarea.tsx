import { classNames } from '@/utils';
import React from 'react';

export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isError?: boolean;
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, isError, ...props }, ref) => {
    return (
      <textarea
        className={classNames(
          'w-full rounded border-0 px-4 py-2.5 text-sm leading-5 text-gray-800 ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-primary-600 disabled:cursor-not-allowed disabled:opacity-50',
          isError && 'hasErrors ring-red-500 focus:ring-red-500',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

FormTextarea.displayName = 'FormTextarea';

export default FormTextarea;
