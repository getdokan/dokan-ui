import Select, { GroupBase, MenuPosition, Props } from 'react-select';
import ErrorMessage from './ErrorMessage';
import { classNames } from '@/utils';
import { FiChevronDown } from 'react-icons/fi';

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
  menuPortalTarget?: HTMLElement | null;
  menuPosition?: MenuPosition;
};

const SearchableSelect = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
  props: SearchableSelectProps<Option, IsMulti, Group>
) => {
  const id = props.id || Math.random().toString();

  const hasError = props.errors && props.errors.length > 0;

  const IndicatorSeparator = () => null;

  const DropdownIndicator = () => (
    <div className="px-2">
      <FiChevronDown className="h-5 text-gray-400" />
    </div>
  );

  const hasErrors = Boolean(props.errors && props.errors.length > 0);

  return (
    <div className={'react-select'}>
      {typeof props.label === 'string' ? (
        <label
          htmlFor={id}
          className={classNames(
            'mb-2 inline-block cursor-pointer text-sm font-medium leading-[21px] text-gray-900',
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
        {...props}
        id={undefined}
        inputId={id}
        menuPortalTarget={props.menuPortalTarget}
        menuPosition={props.menuPosition}
        isDisabled={props.disabled}
        className={classNames(
          {
            hasErrors: hasErrors,
            'rounded border': props.disabled,
          },
          props.className
        )}
        placeholder={<div className="text-sm text-gray-400">{props.placeholder || 'Search'}</div>}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: 'var(--color-primary-500)',
            primary75: 'var(--color-primary-200)',
            primary50: 'var(--color-primary-100)',
            primary25: 'var(--color-primary-50)',
            neutral5: 'var(--color-gray-100)',
            neutral10: 'var(--color-gray-100)',
            neutral20: 'var(--color-gray-200)',
            neutral30: 'var(--color-gray-200)',
            neutral40: 'var(--color-gray-400)',
            neutral50: 'var(--color-gray-500)',
            neutral60: 'var(--color-gray-600)',
            neutral70: 'var(--color-gray-700)',
            neutral80: 'var(--color-gray-800)',
            neutral90: 'var(--color-gray-900)',
          },
        })}
        components={{
          IndicatorSeparator,
          DropdownIndicator,
        }}
        classNames={{
          control: ({ isFocused }) => {
            if (hasError && isFocused) {
              return 'border-2! border-danger-500!';
            }

            if (isFocused) {
              return 'border-2! border-primary-500!';
            }

            if (hasError) {
              return 'border! border-danger-500!';
            }

            return 'border-gray-200!';
          },
        }}
        styles={{
          control: (base) => {
            return {
              ...base,
              minHeight: '40px',
              boxShadow: 'none',
              borderRadius: '5px',
              fontSize: '14px',
            };
          },
          option: (base) => ({
            ...base,
            fontSize: '0.875rem',
          }),
          multiValue: (base) => ({
            ...base,
            background: 'var(--color-primary-50)',
            borderRadius: '0.25rem',
          }),
          multiValueLabel: (base) => ({
            ...base,
            color: 'var(--color-primary-600)',
          }),
          multiValueRemove: (base) => ({
            ...base,
            color: 'var(--color-primary-600)',
            ':hover': {
              background: 'var(--color-primary-100)',
            },
          }),
          menuPortal: (base) => ({
            ...base,
            zIndex: 9999,
          }),
        }}
      />
      <ErrorMessage value={props.errors ?? []} />
      {props.helpText && <p className="mt-1.5 text-xs text-gray-500">{props.helpText}</p>}
    </div>
  );
};

export default SearchableSelect;
