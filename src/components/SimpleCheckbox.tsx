import { classNames } from '@/utils';
import React, { FC, useEffect, useRef } from 'react';

export interface SimpleCheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  input: {
    [key: string]: any;
  };
  label?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const SimpleCheckbox: FC<SimpleCheckboxProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (props.indeterminate) {
      if (inputRef.current) {
        inputRef.current.indeterminate = true;
      }
    } else {
      if (inputRef.current) {
        inputRef.current.indeterminate = false;
      }
    }
  }, [props.indeterminate]);

  return (
    <>
      <div className="flex items-center">
        <input
          ref={inputRef}
          type="checkbox"
          checked={props.checked}
          {...props.input}
          id={props.input.id}
          className={classNames(
            'h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded',
            props.className && props.className,
            props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          )}
          onChange={props.onChange}
          disabled={props.disabled}
        />
        <label
          htmlFor={props.input.id}
          className={classNames(
            'ml-2 block text-sm font-medium text-gray-700',
            props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          )}
        >
          {props.label}
        </label>
      </div>
    </>
  );
};

export default SimpleCheckbox;
