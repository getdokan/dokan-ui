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
  options: Option[];
  allowDeselect?: boolean;
  className?: string;
  onChange?: (selected: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const [items, setItems] = useState(
    props.options.map((o) => ({ ...o, selected: false }))
  );

  useEffect(() => {
    setItems((items) => {
      return items.map((i) => ({ ...i, selected: false }));
    });
  }, [props.options]);

  return (
    <>
      {items.map((item, index) => (
        <>
          <section
            key={index}
            role="radio"
            aria-checked={item.selected}
            aria-labelledby={item.label}
            className={`${
              item.selected ? 'border border-primary-400' : 'border'
            } rounded-md px-3 py-2 space-y-1 inline-flex mr-1 cursor-pointer ${
              props.className
            }`}
            onClick={() => {
              setItems((prevItems) => {
                return prevItems.map((current, itemIndex) => {
                  if (index == itemIndex) {
                    if (props.allowDeselect) {
                      current.selected = !current.selected;
                      props.onChange &&
                        props.onChange(current.selected ? current.value : '');
                    } else {
                      current.selected = true;
                      props.onChange && props.onChange(current.value);
                    }
                  } else {
                    current.selected = false;
                  }
                  return current;
                });
              });
            }}
          >
            <div className="flex justify-center">
              <section
                className={`pr-2 mt-1 ${
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
                <div className="flex justify-between mb-1">
                  <section>
                    <label className="text-md my-2 cursor-pointer">
                      {item.label}
                    </label>
                  </section>
                  {/* <input
                  name="foo"
                  type={item.selected ? 'hidden' : 'radio'}
                  value={item.value}
                  className={item.selected ? 'visibility-hidden' : 'visible'}
                /> */}
                  <section className="mt-1">
                    {!item.selected && (
                      <Circle className="w-5 h-5 text-gray-400"></Circle>
                    )}
                    {item.selected && (
                      <CheckCircleIcon className="w-5 h-5 text-primary-500" />
                    )}
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
          </section>
        </>
      ))}
    </>
  );
};
export default RadioGroup;
