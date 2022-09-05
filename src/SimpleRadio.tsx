import React, { ChangeEventHandler, FocusEventHandler, useState } from 'react';

export interface SimpleRadioProps {
  name: string;
  label?: string;
  helpText?: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  defaultValue?: string;
  errors?: string[];
  input?: {
    [key: string]: any;
  };
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const SimpleRadio: React.FC<SimpleRadioProps> = (props) => {
  const [selected, setSelected] = useState(props.defaultValue);

  return (
    <>
      {props.label && (
        <label htmlFor={props.name} className={`block w-full text-sm font-medium text-gray-700 ${!props.helpText ? 'mb-2' : ''}`}>
          {props.label}
        </label>
      )}
      {props.helpText && <p className="text-xs mb-2 leading-5 text-gray-600">{props.helpText}</p>}
      <div className="space-y-0">
        {props.options.map((option, optionIndex) => (
          <label
            key={optionIndex}
            htmlFor={`sr-${option.value}-${optionIndex}`}
            className={`flex items-center py-2 px-4 rounded-md block w-full text-sm font-medium text-gray-700 ${option.value === selected ? 'bg-blue-100' : ''}`}
          >
            <input
              id={`sr-${option.value}-${optionIndex}`}
              type="radio"
              name={props.name}
              value={option.value}
              defaultChecked={option.value === selected}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              onChange={(e) => {
                setSelected(e.target.value);
                props.onChange && props.onChange(e);
              }}
            />
            <span className="ml-3">{option.label}</span>
          </label>
        ))}
      </div>
      {props.errors && (
        <p className="mt-1.5 text-xs text-red-600" id={`${props.input?.id}-error`}>
          {props.errors.join(', ')}
        </p>
      )}
    </>
  );
};

export default SimpleRadio;
