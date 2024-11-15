import { CgSpinner } from 'react-icons/cg';
import { FiChevronDown, FiX } from 'react-icons/fi';
import { ClearIndicatorProps, GroupBase, InputProps, ValueContainerProps, components } from 'react-select';
import AsyncSelect, { AsyncProps } from 'react-select/async';
import { twMerge } from 'tailwind-merge';

export type AsyncSearchableSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = AsyncProps<Option, IsMulti, Group> & {
  label?: string;
  id?: string;
  className?: string;
  errors?: string[];
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
};

const AsyncSearchableSelect = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: AsyncSearchableSelectProps<Option, IsMulti, Group>
) => {
  const id = props.id || Math.random().toString();

  const ValueContainer = ({ children, ...props }: ValueContainerProps<Option, IsMulti, Group>) => (
    <components.ValueContainer {...props} className="text-sm">
      {children}
    </components.ValueContainer>
  );

  const Input = (props: InputProps<Option, IsMulti, Group>) => {
    return <components.Input {...props} inputClassName="focus:ring-0" />;
  };

  const DropdownIndicator = () => (
    <div className="px-2">
      <FiChevronDown className="h-5 text-gray-400" />
    </div>
  );

  const LoadingIndicator = () => {
    return <CgSpinner className="h-5 w-5 animate-spin text-gray-400" />;
  };

  const IndicatorSeparator = () => null;

  const ClearIndicator = (props: ClearIndicatorProps<Option, IsMulti, Group>) => {
    return (
      <components.ClearIndicator
        {...props}
        getStyles={() => ({
          padding: '0',
        })}
      >
        <FiX className="text-gray-400" />
      </components.ClearIndicator>
    );
  };

  return (
    <div className={'react-select'}>
      {props.label && (
        <label htmlFor={id} className="block text-sm font-medium">
          {props.label}
          {props.required && <span className={'ms-0.5 text-danger-500'}>*</span>}
        </label>
      )}
      <AsyncSelect
        isDisabled={props.disabled}
        className={twMerge('shadow-sm', props.className, props.disabled && 'rounded border')}
        placeholder={<div className="text-sm text-gray-400">{props.placeholder || 'Search...'}</div>}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: props.errors && props.errors.length > 0 ? 'var(--danger-500)' : 'var(--primary-500)',
            primary75: 'var(--primary-200)',
            primary50: 'var(--primary-100)',
            primary25: 'var(--primary-50)',
            neutral5: 'var(--gray-100)',
            neutral10: 'var(--gray-100)',
            neutral20: 'var(--gray-200)',
            neutral30: 'var(--gray-300)',
            neutral40: 'var(--gray-400)',
            neutral50: 'var(--gray-500)',
            neutral60: 'var(--gray-600)',
            neutral70: 'var(--gray-700)',
            neutral80: 'var(--gray-800)',
            neutral90: 'var(--gray-900)',
          },
        })}
        components={{
          ValueContainer,
          Input,
          DropdownIndicator,
          IndicatorSeparator,
          LoadingIndicator,
          ClearIndicator,
        }}
        styles={{
          control: (base) => ({
            ...base,
            border: props.errors && props.errors.length > 0 ? '1px solid var(--danger-500)' : base.border,
            ':hover': {
              border: props.errors && props.errors.length > 0 ? '1px solid var(--danger-500)' : base.border,
            },
          }),
          option: (base) => ({
            ...base,
            fontSize: '0.875rem',
          }),
          multiValue: (base) => ({
            ...base,
            background: 'var(--primary-50)',
            borderRadius: '0.25rem',
          }),
          multiValueLabel: (base) => ({
            ...base,
            color: 'var(--primary-600)',
          }),
          multiValueRemove: (base) => ({
            ...base,
            color: 'var(--primary-600)',
            ':hover': {
              background: 'var(--primary-100)',
            },
          }),
        }}
        {...props}
      />
      {props.errors && props.errors.length > 0 && (
        <p className="text-xs text-red-600" id={`${id}-error`}>
          {props.errors.join(', ')}
        </p>
      )}
      {props.helpText && <span className="text-xs text-gray-600">{props.helpText}</span>}
    </div>
  );
};

export default AsyncSearchableSelect;
