import { CheckCircleIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { Circle } from 'react-feather';

interface Option {
  icon?: React.ReactElement;
  label: string;
  description?: string;
  value: string;
}

export interface RadioGroupProps {
  errors?: string[];
  value?: string;
  options: Option[];
  allowDeselect?: boolean;
  className?: string;
  onChange?: (selected: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const [selected, setSelected] = useState(props.value);
  const isSelected = (value: string) => value === selected;

  useEffect(() => {
    setSelected(props.value);
  }, [props.value]);

  useEffect(() => {
    props.onChange && props.onChange(selected ?? '');
  }, [selected]);

  return (
    <div className="flex flex-col">
      <section className="flex">
        {props.options.map((item, index) => (
          <section
            key={index}
            role="radio"
            aria-checked={isSelected(item.value)}
            aria-labelledby={item.label}
            className={`${
              isSelected(item.value) ? 'border border-primary-400' : 'border'
            } mr-1 inline-flex cursor-pointer space-y-1 rounded-md px-3 py-2 ${
              props.className
            }`}
            onClick={() => {
              if (isSelected(item.value)) {
                if (props.allowDeselect) {
                  setSelected(undefined);
                }
              } else {
                setSelected(item.value);
              }
            }}
          >
            <div className="flex w-full">
              <section
                className={`pr-2 ${
                  isSelected(item.value) ? 'text-primary-500' : 'text-gray-500'
                }`}
              >
                {item.icon && (
                  <div
                    className={`p-2 ${
                      isSelected(item.value) ? 'bg-primary-100' : 'bg-gray-100'
                    } rounded-md`}
                  >
                    {item.icon}
                  </div>
                )}
              </section>
              <section className="flex flex-col justify-center">
                <div className="flex">
                  <section className="flex-1">
                    <label className="text-md my-2 cursor-pointer">
                      {item.label}
                    </label>
                  </section>
                </div>
                {item.description && (
                  <div className="mt-1 mb-1">
                    <p className="text-xs leading-4 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                )}
              </section>
            </div>
            <section className="flex-none">
              {!isSelected(item.value) && (
                <Circle className="h-5 w-5 text-gray-400"></Circle>
              )}
              {isSelected(item.value) && (
                <CheckCircleIcon className="h-5 w-5 text-primary-500" />
              )}
            </section>
          </section>
        ))}
      </section>
      {props.errors && (
        <p className="text-xs text-red-600">{props.errors.join(' | ')}</p>
      )}
    </div>
  );
};
export default RadioGroup;
