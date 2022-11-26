import React, { ChangeEventHandler, FC } from 'react';

export interface FancyCheckboxProps {
  checked?: boolean;
  label: string;
  inputs: Array<{
    label: string;
    description: string;
    [key: string]: any;
  }>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const FancyCheckbox: FC<FancyCheckboxProps> = (props) => {
  return (
    <>
      <fieldset className="space-y-5">
        <legend className="sr-only">List</legend>
        {props.inputs.map((input) => (
          <div className="relative flex items-start" key={input.id}>
            <div className="flex items-center h-5">
              <input
                {...(({ label, description, ...o }) => o)(input)}
                onChange={props.onChange}
                id={input.id}
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor={input.id} className="font-medium text-gray-700">
                {input.label}
              </label>
              <p id={`${input.id}-description`} className="text-gray-500">
                {input.description}
              </p>
            </div>
          </div>
        ))}
      </fieldset>
    </>
  );
};

export default FancyCheckbox;
