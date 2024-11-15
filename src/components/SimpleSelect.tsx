import { classNames } from '@/utils';
import { ChangeEventHandler } from 'react';
import ErrorMessage from './ErrorMessage';

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
  required?: boolean;
  disabled?: boolean;
}

const SimpleSelect = (props: SimpleSelectProps) => {
  function slugify(sluggable: string) {
    sluggable = sluggable.replace(/^\s+|\s+$/g, ''); // trim
    sluggable = sluggable.toLowerCase();

    // remove accents, swap ñ for n, etc
    const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaeeeeiiiioooouuuunc------';
    for (let i = 0, l = from.length; i < l; i++) {
      sluggable = sluggable.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    sluggable = sluggable
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

    return sluggable;
  }

  const hasErrors = Boolean(props.errors && props.errors.length > 0);

  return (
    <>
      <label
        htmlFor={`${slugify(props.label)}-simple-select`}
        className="cursor-pointer text-sm font-medium leading-[21px] text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 inline-block"
      >
        {props.label}
        {props.required && <span className={'ms-0.5 text-danger-500'}>*</span>}
      </label>
      <select
        value={(props.value as string) || ''}
        required={props.required}
        onChange={props.onChange}
        id={`${slugify(props.label)}-simple-select`}
        name={`${slugify(props.label)}-simple-select`}
        className={classNames(
          'h-10 w-full rounded border-0 text-sm ring-1 ring-[#E9E9E9] ps-3 focus:outline-none focus:ring-primary-500',
          hasErrors && 'ring-red-500 focus:ring-red-500 hasErrors'
        )}
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
                    value={typeof props.value == 'object' ? props?.value?.toString() : optgroup.value}
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
      <ErrorMessage value={props.errors ?? []} />
      {props.helpText && <p className="mt-1.5 text-xs text-gray-500">{props.helpText}</p>}
    </>
  );
};

export default SimpleSelect;
