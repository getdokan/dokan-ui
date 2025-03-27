import { classNames } from '@/utils';
import { CreatableAdditionalProps } from 'node_modules/react-select/dist/declarations/src/useCreatable';
import { StateManagerProps } from 'node_modules/react-select/dist/declarations/src/useStateManager';
import { HiChevronDown } from 'react-icons/hi';
import { components, GroupBase, MultiValueRemoveProps } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { twMerge } from 'tailwind-merge';
import ErrorMessage from './ErrorMessage';

type CreatableProps<Option, IsMulti extends boolean, Group extends GroupBase<Option>> = StateManagerProps<
  Option,
  IsMulti,
  Group
> &
  CreatableAdditionalProps<Option, Group> & {
    label?: string;
    id?: string;
    className?: string;
    errors?: string[];
    helpText?: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
  };

const TaggableSelect = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
  props: CreatableProps<Option, IsMulti, Group>
) => {
  const id = props.id || Math.random().toString();

  const MultiValueRemove = (props: MultiValueRemoveProps<Option, IsMulti, Group>) => {
    return (
      <components.MultiValueRemove {...props}>
        <span className="text-primary-600">&times;</span>
      </components.MultiValueRemove>
    );
  };

  const DropdownIndicator = () => {
    return (
      <div className="px-2">
        <HiChevronDown className="h-5 text-gray-400" />
      </div>
    );
  };

  const IndicatorSeparator = () => null;

  const hasErrors = Boolean(props.errors && props.errors.length > 0);

  return (
    <div className="react-select">
      {props.label && (
        <label
          htmlFor={id}
          className={twMerge(
            'inline-block cursor-pointer text-sm font-medium leading-[21px] text-gray-900',
            props.disabled && 'cursor-not-allowed opacity-70'
          )}
        >
          {props.label}
          {props.required && <span className={'ms-0.5 text-danger-500'}>*</span>}
        </label>
      )}
      <CreatableSelect
        {...props}
        menuPortalTarget={document.body}
        menuPosition="absolute"
        isDisabled={props.disabled}
        className={classNames(
          {
            hasErrors: hasErrors,
            'border rounded': props.disabled,
          },
          props.className
        )}
        placeholder={<div className="text-sm text-gray-400">{props.placeholder || 'Search'}</div>}
        components={{
          MultiValueRemove,
          DropdownIndicator,
          IndicatorSeparator,
        }}
        classNames={{
          control: ({ isFocused }) => {
            if (hasErrors && isFocused) {
              return '!border-2 !border-danger-500';
            }

            if (isFocused) {
              return '!border-2 !border-primary-500';
            }

            if (hasErrors) {
              return '!border !border-danger-500';
            }

            return '!border-gray-200';
          },
        }}
        styles={{
          control: (base) => ({
            ...base,
            minHeight: '40px',
            boxShadow: 'none',
            borderRadius: '5px',
            fontSize: '14px',
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
          menuPortal: (base) => ({
            ...base,
            zIndex: 9999,
          }),
          noOptionsMessage: (base) => ({
            ...base,
            fontSize: '0.875rem',
            color: 'var(--colors-gray-800)',
          }),
        }}
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
      />

      <ErrorMessage value={props.errors ?? []} />
      {props.helpText && <span className="text-xs text-gray-600">{props.helpText}</span>}
    </div>
  );
};

export default TaggableSelect;
