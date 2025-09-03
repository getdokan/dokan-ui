import Select, { GroupBase, MenuPosition, Props, components } from 'react-select';
import ErrorMessage from './ErrorMessage';
import { classNames } from '@/utils';
import { FiChevronDown } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';

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
  menuPortalTarget?: HTMLElement | null;
  menuPosition?: MenuPosition;
  components?: typeof components;
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
          IndicatorSeparator,
          DropdownIndicator,
          ...(props?.components ? props.components : {}),
        }}
        classNames={{
          ...(props?.classNames ? props.classNames : {}),
          control: (currentProps) => {
            const userControl = props.classNames?.control as any;
            const userControlStyles = typeof userControl === 'function' ? userControl({ ...currentProps, hasError }) : '';

            if (hasError && currentProps.isFocused) {
              return twMerge( '!border !ring-danger-500 !ring-1', userControlStyles );
            }

            if (currentProps.isFocused) {
              return twMerge( '!border !ring-primary-500 !ring-1', userControlStyles );
            }

            if (hasError) {
              return twMerge( '!border !ring-danger-500 !ring-1', userControlStyles );
            }

            return twMerge( '!border-gray-200', userControlStyles );
          },
        }}
        styles={{
          // Pass through any container-level custom styles if provided
          ...(props?.styles ? (props.styles as any) : {}),
          control: (base, state) => {
            const userControl = props.styles?.control as any;
            const userControlStyles = typeof userControl === 'function' ? userControl(base, state) : {};
            return {
              ...base,
              minHeight: '40px',
              boxShadow: 'none',
              borderRadius: '5px',
              fontSize: '14px',
              ...userControlStyles,
            };
          },
          option: (base, state) => {
            const userOption = props.styles?.option as any;
            const userOptionStyles = typeof userOption === 'function' ? userOption(base, state) : {};
            return {
              ...base,
              fontSize: '0.875rem',
              ...userOptionStyles,
            };
          },
          multiValue: (base, state) => {
            const userMultiValue = props.styles?.multiValue as any;
            const userMultiValueStyles = typeof userMultiValue === 'function' ? userMultiValue(base, state) : {};
            return {
              ...base,
              background: 'var(--colors-primary-50)',
              borderRadius: '0.25rem',
              ...userMultiValueStyles,
            };
          },
          multiValueLabel: (base, state) => {
            const userMultiValueLabel = props.styles?.multiValueLabel as any;
            const userMultiValueLabelStyles = typeof userMultiValueLabel === 'function' ? userMultiValueLabel(base, state) : {};
            return {
              ...base,
              color: 'var(--colors-primary-600)',
              ...userMultiValueLabelStyles,
            };
          },
          multiValueRemove: (base, state) => {
            const userMultiValueRemove = props.styles?.multiValueRemove as any;
            const userMultiValueRemoveStyles = typeof userMultiValueRemove === 'function' ? userMultiValueRemove(base, state) : {};
            return {
              ...base,
              color: 'var(--colors-primary-600)',
              ':hover': {
                background: 'var(--colors-primary-100)',
              },
              ...userMultiValueRemoveStyles,
            };
          },
          menuPortal: (base, state) => {
            const userMenuPortal = props.styles?.menuPortal as any;
            const userMenuPortalStyles = typeof userMenuPortal === 'function' ? userMenuPortal(base, state) : {};
            return {
              ...base,
              zIndex: 9999,
              ...userMenuPortalStyles,
            };
          }
        }}
      />
      <ErrorMessage value={props.errors ?? []} />
      {props.helpText && <p className="mt-1.5 text-xs text-gray-500">{props.helpText}</p>}
    </div>
  );
};

export default SearchableSelect;
