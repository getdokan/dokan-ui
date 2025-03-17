import { classNames } from '@/utils';
import React from 'react';
import { HiChevronDown } from 'react-icons/hi';
import Select, {
  components,
  DropdownIndicatorProps,
  GroupBase,
  InputProps,
  OptionProps,
  Props,
  ValueContainerProps,
} from 'react-select';
import ErrorMessage from './ErrorMessage';

export type SearchableSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = Props<Option, IsMulti, Group> & {
  label?: React.ReactNode;
  id?: string;
  className?: string;
  errors?: string[];
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
  ref?: any;
};

const SearchableSelect = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
  props: SearchableSelectProps<Option, IsMulti, Group>
) => {
  const id = props.id || Math.random().toString();

  const hasError = props.errors && props.errors.length > 0;

  const ValueContainer = ({ children, ...props }: ValueContainerProps<Option, IsMulti, Group>) => (
    <components.ValueContainer {...props} className="text-sm">
      {children}
    </components.ValueContainer>
  );

  const Option = (props: OptionProps<Option, IsMulti, Group>) => {
    return <components.Option {...props} />;
  };

  const Input = (props: InputProps<Option, IsMulti, Group>) => {
    return <components.Input {...props} inputClassName="focus:ring-0" />;
  };

  // eslint-disable-next-line no-empty-pattern
  const DropdownIndicator = ({}: DropdownIndicatorProps<Option, IsMulti, Group>) => {
    return (
      <div className="px-2">
        <HiChevronDown className="h-5 text-gray-400" />
      </div>
    );
  };

  const IndicatorSeparator = () => null;

  const hasErrors = Boolean(props.errors && props.errors.length > 0);

  return (
    <div className={'react-select'}>
      {typeof props.label === 'string' ? (
        <label
          htmlFor={id}
          className={classNames(
            'inline-block mb-2 cursor-pointer text-sm font-medium leading-[21px] text-gray-900',
            props.disabled && 'cursor-not-allowed opacity-50'
          )}
        >
          {props.label}
          {props.required && <span className={'ms-0.5 text-danger-500'}>*</span>}
        </label>
      ) : (
        props.label
      )}
      <Select
        ref={props.ref}
        {...props}
        isDisabled={props.disabled}
        className={classNames(
          {
            hasErrors: hasErrors,
            'border rounded': props.disabled,
          },
          props.className
        )}
        placeholder={<div className="text-sm text-gray-400">{props.placeholder || 'Search'}</div>}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: 'var(--colors-primary-500)',
            primary75: 'var(--colors-primary-200)',
            primary50: 'var(--colors-primary-100)',
            primary25: 'var(--colors-primary-50)',
            neutral5: 'var(--colors-gray-100)',
            neutral10: 'var(--colors-gray-100)',
            neutral20: 'var(--colors-gray-200)',
            neutral30: 'var(--colors-gray-200)',
            neutral40: 'var(--colors-gray-400)',
            neutral50: 'var(--colors-gray-500)',
            neutral60: 'var(--colors-gray-600)',
            neutral70: 'var(--colors-gray-700)',
            neutral80: 'var(--colors-gray-800)',
            neutral90: 'var(--colors-gray-900)',
          },
        })}
        components={{
          ValueContainer,
          Option,
          Input,
          DropdownIndicator,
          IndicatorSeparator,
        }}
        classNames={{
          control: ({ isFocused }) => {
            return hasError && isFocused ? '!ring-1 !ring-danger-500' : '';
          },
        }}
        styles={{
          control: (base) => ({
            ...base,
            minHeight: '40px',
            border: props.errors && props.errors.length > 0 ? '1px solid var(--colors-danger-500)' : base.border,
            ':hover': {
              border: hasErrors ? '1px solid var(--colors-danger-500)' : base.border,
            },
            borderRadius: '5px',
          }),
          option: (base) => ({
            ...base,
            fontSize: '0.875rem',
          }),
          multiValue: (base) => ({
            ...base,
            background: 'var(--colors-primary-50)',
            borderRadius: '0.25rem',
          }),
          multiValueLabel: (base) => ({
            ...base,
            color: 'var(--colors-primary-600)',
          }),
          multiValueRemove: (base) => ({
            ...base,
            color: 'var(--colors-primary-600)',
            ':hover': {
              background: 'var(--colors-primary-100)',
            },
          }),
        }}
      />
      <ErrorMessage value={props.errors ?? []} />
      {props.helpText && <p className="mt-1.5 text-xs text-gray-500">{props.helpText}</p>}
    </div>
  );
};

export default SearchableSelect;
