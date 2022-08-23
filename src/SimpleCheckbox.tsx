import React, { FC, useEffect, useRef } from 'react';
import { SimpleInputProps } from './SimpleInput';

export interface SimpleCheckboxProps extends SimpleInputProps {
  checked?: boolean;
  indeterminate?: boolean;
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
          className={
            'h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded' +
            ` ${props.className}`
          }
          onChange={props.onChange}
        />
        <label
          htmlFor={props.input.id}
          className={'ml-2 block text-sm font-medium text-gray-700'}
        >
          {props.label}
        </label>
      </div>
    </>
  );
};

export default SimpleCheckbox;
