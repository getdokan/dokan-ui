import { classNames } from '@/utils';
import { ChangeEventHandler, KeyboardEventHandler, useMemo, useState } from 'react';
import { HiExclamationCircle } from 'react-icons/hi';

export interface MultipleTextInputProps {
  id?: string;
  className?: string;
  label?: string;
  errors?: string[] | undefined;
  placeholder?: string;
  value: string[];
  setValue: (values: string[]) => void;
  helpText?: string;
}

const MultipleTextInput = ({
  id,
  className,
  label,
  errors,
  placeholder,
  value,
  setValue,
  helpText,
}: MultipleTextInputProps) => {
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
      setValue(
        values.filter((item, i) => {
          item;
          i !== values.length - 1;
        })
      );
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
    const newValues = values.filter((_, i) => i !== index);
    setValue(newValues);
  };

  const hasErrors: boolean = Boolean(errors && errors.length > 0);

  const componentId = id || Math.random().toString();
  const validClasses =
    'border border-gray-300 placeholder-gray-400 focus-within:ring-1 focus-within:ring-primary-500 focus-within:border-primary-500';
  const errorClasses =
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
          hasErrors ? errorClasses : validClasses,
          className
        )}
      >
        {value.map((item, index) => {
          return (
            <div
              className="flex items-center bg-primary-50 text-xs rounded overflow-hidden text-primary-500"
              key={index}
            >
              <span className="inline-block px-1.5">{item}</span>
              <button
                type="button"
                className="hover:bg-primary-100 font-semibold inline-block h-full p-1 transition-colors duration-200 focus:outline-none"
                onClick={() => remove(index)}
              >
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
        {hasErrors && (
          <div className="absolute right-0 pe-3 flex items-center pointer-events-none">
            <HiExclamationCircle className="h-5 w-5 sm:h-4 sm:w-4 text-danger-400" aria-hidden="true" />
          </div>
        )}
      </div>
      {hasErrors && (
        <p className="text-xs text-red-600 hasErrors" id={`${componentId}-errors`}>
          {errors?.join(', ')}
        </p>
      )}
      {helpText && <span className="text-xs text-gray-600">{helpText}</span>}
    </>
  );
};

export default MultipleTextInput;
