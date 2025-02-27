import { classNames } from '@/utils';
import React, { useEffect, useState } from 'react';
import ErrorMessage from './ErrorMessage';
import SimpleCheckbox from './SimpleCheckbox';

export interface SimpleCheckboxGroupProps {
  name?: string;
  label?: string;
  helpText?: string;
  className?: string;
  options: Array<{
    value: string | number;
    label: string;
    indeterminate?: boolean;
  }>;
  defaultValue?: Array<string | number>;
  errors?: string[];
  onChange?: (checkedList: Array<string | number>) => void;
}

const SimpleCheckboxGroup: React.FC<SimpleCheckboxGroupProps> = (props) => {
  const [checkedList, setCheckedList] = useState<Array<string | number>>(props.defaultValue ?? []);

  useEffect(() => props.onChange && props.onChange(checkedList), [checkedList]);

  const hasErrors = Boolean(props.errors && props.errors.length > 0);

  return (
    <>
      {props.label && (
        <label className={`block w-full text-sm font-medium text-gray-700 ${!props.helpText ? 'mb-2' : ''}`}>
          {props.label}
        </label>
      )}

      {props.helpText && <p className="text-xs mb-2 leading-5 text-gray-600">{props.helpText}</p>}

      <div className="space-y-0">
        {props.options.map((option, optionIndex) => (
          <div key={optionIndex} className={`py-1 ${props.className}`}>
            <SimpleCheckbox
              label={option.label}
              input={{
                id: `simple-checkbox-group-${option.value}`,
                type: 'checkbox',
                name: props.name,
                value: option.value,
              }}
              checked={!!checkedList.find((val) => val === option.value)}
              indeterminate={option.indeterminate}
              onChange={(e) => {
                if (e.target.checked) {
                  setCheckedList((list) => [...list, option.value]);
                } else {
                  setCheckedList((list) => list.filter((val) => val !== option.value));
                }
              }}
            />
          </div>
        ))}
      </div>

      <ErrorMessage
        value={props.errors ?? []}
        className={classNames({
          hasErrors: hasErrors,
        })}
      />
    </>
  );
};

export default SimpleCheckboxGroup;
