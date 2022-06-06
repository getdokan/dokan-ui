import { ExclamationCircleIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import React, { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';

export interface MultipleTextInputProps {
  id?: string;
  className?: string;
  label?: string;
  errors?: string[];
  placeholder?: string;
  value: string[];
  setValue: (values: string[]) => void;
  helpText?: string;
};

const MultipleTextInput = ({ id, className, label, errors, placeholder, value, setValue, helpText }: MultipleTextInputProps) => {
  const [inputValue, setInputValue] = useState('');

  // Set only uniquer value
  const setNewValue = (newValue: string) => {
    const uniqueValues = [...value, newValue].filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });
    setValue(uniqueValues);
  };

  // Set inputValue on change
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  // Add text on enter/tab
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key == 'Backspace' && inputValue == '') {
      const values = [...value];
      setValue(values.filter((item, i) => {
        item;
        i !== values.length - 1;
      }));
      event.preventDefault();
      return;
    }
    if (!inputValue) return;
    if (event.key == 'Enter' || event.key == 'Tab') {
      setNewValue(inputValue);
      setInputValue('');
      event.preventDefault();
      return;
    }
  };

  // Remove text
  const remove = (index: number) => {
    const values = [...value];
    setValue(values.filter((item, i) => {
      item;
      i !== index;
    }));
  };

  const componentId = id || Math.random().toString();
  let validClasses =
    'border border-gray-300 placeholder-gray-400 focus-within:ring-1 focus-within:ring-primary-500 focus-within:border-primary-500';
  let errorClasses =
    'border border-red-300 text-red-900 placeholder-red-300 focus-within:ring-1 focus-within:ring-danger-500 focus-within:border-danger-500';

  return (
    <>
      {label && (
        <label htmlFor={componentId} className={'block text-sm font-medium text-gray-700'}>
          {label}
        </label>
      )}
      <div
        className={classNames(
          'flex items-center flex-wrap gap-1 w-full px-3 py-2 rounded shadow-sm relative',
          errors ? errorClasses : validClasses,
          className
        )}
      >
        {value.map((item, index) => {
          return (
            <div className="text-gray-600 bg-gray-200 rounded-md px-2 py-1 text-xs" key={index}>
              <span className="mr-1">{item}</span>
              <button type="button" onClick={() => remove(index)} className="text-gray-400 hover:text-gray-600">
                &#10005;
              </button>
            </div>
          );
        })}
        <input
          id={componentId}
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          className="flex-grow outline-none text-sm"
          placeholder={placeholder}
        />
        {errors && (
          <div className="absolute right-0 pe-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 sm:h-4 sm:w-4 text-danger-400" aria-hidden="true" />
          </div>
        )}
      </div>
      {errors && (
        <p className="text-xs text-red-600" id={`${componentId}-errors`}>
          {errors.join(', ')}
        </p>
      )}
      {helpText && (
        <span className="text-xs text-gray-600">{helpText}</span>
      )}
    </>
  );
};

export default MultipleTextInput;
