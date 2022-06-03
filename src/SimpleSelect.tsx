import React, { ChangeEventHandler, FunctionComponent } from 'react';
export interface SimpleSelectProps {
  className?: string;
  errors?: string[];
  label: string;
  valueKey: string;
  labelKey: string;
  options: Array<{
    [key: string]: any;
  }>;
  placeholder?: string;
  defaultValue?: string | number;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  helpText?: string;
}

const SimpleSelect: FunctionComponent<SimpleSelectProps> = ({
  label,
  errors,
  className,
  placeholder,
  onChange,
  options,
  valueKey,
  labelKey,
  defaultValue = '',
  helpText,
}) => {
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
        htmlFor={`${slugify(label)}-simple-select`}
        className="block text-sm font-medium text-gray-700 hover:cursor-pointer"
      >
        {label}
      </label>
      <select
        onChange={onChange}
        id={`${slugify(label)}-simple-select`}
        name={`${slugify(label)}-simple-select`}
        value={defaultValue}
        className={`${errors ? errorClasses : validClasses} ${className}`}
        style={{ fontSize: '14px' }}
      >
        {placeholder && (
          <option disabled value="">
            {placeholder}
          </option>
        )}
        {options.map((option, index) =>
          typeof option[valueKey] == 'object' ? (
            <optgroup label={option[labelKey]} key={index}>
              {option[valueKey].map((optgroup: any, optIndex: any) => (
                <option key={optIndex} value={optgroup[valueKey]}>
                  {optgroup[labelKey]}
                </option>
              ))}
            </optgroup>
          ) : (
            <option key={index} value={option[valueKey]}>
              {option[labelKey]}
            </option>
          )
        )}
      </select>
      {errors && (
        <p
          className="text-xs text-red-600"
          id={`${slugify(label)}-simple-select-error`}
        >
          {errors.join(', ')}
        </p>
      )}
      {helpText && <span className="text-xs text-gray-600">{helpText}</span>}
    </>
  );
};

export default SimpleSelect;
