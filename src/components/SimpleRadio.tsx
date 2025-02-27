import { classNames } from '@/utils';
import React, { ChangeEventHandler, FocusEventHandler, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import ErrorMessage from './ErrorMessage';

export interface SimpleRadioProps {
  name: string;
  label?: string;
  helpText?: string;
  options: Array<{
    value: string | number;
    label: string;
  }>;
  defaultValue?: string | number;
  value?: string | number;
  errors?: string[];
  input?: {
    [key: string]: any;
  };
  optionClass?: string;
  selectedOptionClass?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const SimpleRadio: React.FC<SimpleRadioProps> = (props) => {
  const [selected, setSelected] = useState<string | number | undefined>(undefined);

  const hasErrors = Boolean(props.errors && props.errors.length > 0);

  useEffect(() => {
    setSelected(props.value ?? props.defaultValue);
  }, [props.value, props.defaultValue]);

  return (
    <>
      {props.label && (
        <label
          htmlFor={props.name}
          className={`block w-full text-sm font-medium text-gray-700 ${!props.helpText ? 'mb-2' : ''}`}
        >
          {props.label}
        </label>
      )}
      {props.helpText && <p className="text-xs mb-2 leading-5 text-gray-600">{props.helpText}</p>}
      <div className="space-y-0">
        {props.options.map((option, optionIndex) => (
          <label
            key={optionIndex}
            htmlFor={`${props.name}-${option.value}-${optionIndex}`}
            className={twMerge(
              `flex items-center py-2 px-4 rounded-md w-full text-sm font-medium text-gray-700`,
              props.optionClass,
              option.value === selected && props.selectedOptionClass
            )}
          >
            <input
              id={`${props.name}-${option.value}-${optionIndex}`}
              type="radio"
              name={props.name}
              value={option.value}
              checked={option.value === selected}
              className={classNames(
                `h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500`,
                hasErrors && 'hasErrors'
              )}
              onChange={(e) => {
                setSelected(e.target.value);
                props.onChange && props.onChange(e);
              }}
            />
            {option.label && <span className="ml-3">{option.label}</span>}
          </label>
        ))}
      </div>
      <ErrorMessage value={props.errors ?? []} />
    </>
  );
};

export default SimpleRadio;
