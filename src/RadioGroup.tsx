import { CheckCircleIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { Circle } from 'react-feather';

interface Option {
  icon?: React.ReactElement;
  label: string;
  description?: string;
  value: string;
}
interface CustomOption extends Option {
  selected: boolean;
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
  const [items, setItems] = useState<CustomOption[]>([]);

  useEffect(() => {
    if (items.length == 0 || props.value != undefined) {
      setItems((items) => {
        return props.options.map((i) => ({
          ...i,
          selected: props.value == i.value ? true : false,
        }));
      });
    }
  }, [props.options, props.value]);

  useEffect(() => {
    props.onChange &&
      props.onChange(items.filter((item) => item.selected)[0]?.value);
  }, [items]);

  return (
    <div className="flex flex-col">
      <section className="flex">
        {items.map((item, index) => (
          <section
            key={index}
            role="radio"
            aria-checked={item.selected}
            aria-labelledby={item.label}
            className={`${
              item.selected ? 'border border-primary-400' : 'border'
            } mr-1 inline-flex cursor-pointer space-y-1 rounded-md px-3 py-2 ${
              props.className
            }`}
            onClick={() => {
              setItems((prevItems) => {
                return prevItems.map((current, itemIndex) => {
                  if (index == itemIndex) {
                    if (props.allowDeselect) {
                      current.selected = !current.selected;
                      // Don't do this:
                      // props.onChange && props.onChange(current.selected ? current.value : '');
                      // Instead watch/trigger the onChange from useEffect
                    } else {
                      current.selected = true;
                      // Don't do this:
                      // props.onChange && props.onChange(current.value);
                      // Instead watch/trigger the onChange from useEffect
                    }
                  } else {
                    current.selected = false;
                  }
                  return current;
                });
              });
            }}
          >
            <div className="flex w-full">
              <section
                className={`pr-2 ${
                  item.selected ? 'text-primary-500' : 'text-gray-500'
                }`}
              >
                {item.icon && (
                  <div
                    className={`p-2 ${
                      item.selected ? 'bg-primary-100' : 'bg-gray-100'
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
              {!item.selected && (
                <Circle className="h-5 w-5 text-gray-400"></Circle>
              )}
              {item.selected && (
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
