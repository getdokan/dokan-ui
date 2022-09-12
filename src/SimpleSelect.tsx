import React, { ChangeEventHandler } from 'react';

interface Option {
  label: string;
  value: unknown;
}

export interface SimpleSelectProps {
  className?: string;
  errors?: string[];
  label: string;
  value?: unknown;
  options: Option[];
  placeholder?: string;
  defaultValue?: string | number;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  helpText?: string;
  disabled?: boolean;
}

const SimpleSelect = (props: SimpleSelectProps) => {
  function slugify(sluggable: string) {
    sluggable = sluggable.replace(/^\s+|\s+$/g, ''); // trim
    sluggable = sluggable.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    var to = 'aaaaeeeeiiiioooouuuunc------';
    for (var i = 0, l = from.length; i < l; i++) {
      sluggable = sluggable.replace(
        new RegExp(from.charAt(i), 'g'),
        to.charAt(i)
      );
    }

    sluggable = sluggable
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

    return sluggable;
  }

  const validClasses = `mt-1 block w-full ps-3 border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 rounded`;
  const errorClasses = `mt-1 block w-full ps-3 border border-red-300 focus:outline-none focus:ring-danger-500 focus:border-danger-500 text-red-300 rounded`;
  return (
    <>
      <label
        htmlFor={`${slugify(props.label)}-simple-select`}
        className="block text-sm font-medium text-gray-700 hover:cursor-pointer"
      >
        {props.label}
      </label>
      <select
        defaultValue={(props.value as string) || ''}
        onChange={props.onChange}
        id={`${slugify(props.label)}-simple-select`}
        name={`${slugify(props.label)}-simple-select`}
        className={`${props.errors ? errorClasses : validClasses} ${
          props.className
        }`}
        style={{ fontSize: '14px' }}
        disabled={props.disabled}
      >
        {props.placeholder && (
          <option disabled value="">
            {props.placeholder}
          </option>
        )}
        {props.options.map((option: Option, index) => {
          if (Array.isArray(option.value)) {
            return (
              <optgroup label={option.label} key={index}>
                {option.value.map((optgroup: any, optIndex: any) => (
                  <option
                    key={optIndex}
                    value={
                      typeof props.value == 'object'
                        ? props?.value?.toString()
                        : optgroup.value
                    }
                  >
                    {optgroup.label}
                  </option>
                ))}
              </optgroup>
            );
          }
          if (typeof option.value === 'string') {
            return (
              <option key={index} value={option.value as string}>
                {option.label}
              </option>
            );
          }
          if (typeof option.value === 'number') {
            return (
              <option key={index} value={option.value as number}>
                {option.label}
              </option>
            );
          }
          return null;
        })}
      </select>
      {props.errors && (
        <p
          className="text-xs text-red-600"
          id={`${slugify(props.label)}-simple-select-error`}
        >
          {props.errors.join(', ')}
        </p>
      )}
      {props.helpText && (
        <span className="text-xs text-gray-600">{props.helpText}</span>
      )}
    </>
  );
};

export default SimpleSelect;
