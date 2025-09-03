import { CgSpinner } from 'react-icons/cg';
import { FiChevronDown } from 'react-icons/fi';
import { GroupBase, MenuPosition, components } from 'react-select';
import AsyncSelect, { AsyncProps } from 'react-select/async';
import { twMerge } from 'tailwind-merge';
import ErrorMessage from './ErrorMessage';
import { classNames } from '@/utils';

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
  menuPortalTarget?: HTMLElement | null;
  menuPosition?: MenuPosition;
  components?: typeof components;
};

const AsyncSearchableSelect = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: AsyncSearchableSelectProps<Option, IsMulti, Group>
) => {
  const id = props.id || Math.random().toString();

  const DropdownIndicator = () => (
    <div className="px-2">
      <FiChevronDown className="h-5 text-gray-400" />
    </div>
  );

  const LoadingIndicator = () => {
    return <CgSpinner className="h-5 w-5 animate-spin text-gray-400" />;
  };

  const IndicatorSeparator = () => null;

  const hasError = Boolean(props.errors && props.errors.length > 0);

  return (
    <div className={'react-select'}>
      {props.label && (
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
      )}
      <AsyncSelect
        inputId={id}
        isDisabled={props.disabled}
        className={twMerge('shadow-sm', props.className, props.disabled && 'rounded border', hasError && 'hasErrors')}
        placeholder={<div className="text-sm text-gray-400">{props.placeholder || 'Search...'}</div>}
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
            neutral30: 'var(--colors-gray-300)',
            neutral40: 'var(--colors-gray-400)',
            neutral50: 'var(--colors-gray-500)',
            neutral60: 'var(--colors-gray-600)',
            neutral70: 'var(--colors-gray-700)',
            neutral80: 'var(--colors-gray-800)',
            neutral90: 'var(--colors-gray-900)',
          },
        })}
        classNames={{
          ...( props?.classNames ? props.classNames : {} ),
          control: (currentProps) => {
            const userControl = props.classNames?.control;
            // @ts-ignore
            const userControlStyles = typeof userControl === 'function' ? userControl({ ...currentProps, hasError: hasError }) : '';
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
        menuPortalTarget={props.menuPortalTarget}
        menuPosition={props.menuPosition}
        {...props}
        styles={{
          control: (base, state) => {
            const userControl = props.styles?.control;
            const userControlStyles = typeof userControl === 'function' ? userControl(base, state) : {};
            return {
              ...base,
              minHeight: '40px',
              boxShadow: 'none',
              borderRadius: '5px',
              fontSize: '14px',
              // Merge user-provided control styles (object or function result)
              ...userControlStyles,
            };
          },
          option: (base, state) => {
            const userControl = props.styles?.option;
            const userControlStyles = typeof userControl === 'function' ? userControl(base, state) : {};
            return {
              ...base,
              fontSize: '0.875rem',
              // Merge user-provided control styles (object or function result)
              ...userControlStyles,
            }
          },
          multiValue: (base, state) => {
            const userControl = props.styles?.multiValue;
            const userControlStyles = typeof userControl === 'function' ? userControl(base, state) : {};
            return {
              ...base,
              background: 'var(--colors-primary-50)',
              borderRadius: '0.25rem',
              // Custom styles for the multi-value
              ...userControlStyles
            }
          },
          multiValueLabel: (base, state) => {
            const userControl = props.styles?.multiValueLabel;
            const userControlStyles = typeof userControl === 'function' ? userControl(base, state) : {};
            return {
              ...base,
              color: 'var(--colors-primary-600)',
              // Custom styles for the multi-value label
              ...userControlStyles
            }
          },
          multiValueRemove: (base, state) => {
            const userControl = props.styles?.multiValueRemove;
            const userControlStyles = typeof userControl === 'function' ? userControl(base, state) : {};

            return {
              ...base,
              color: 'var(--colors-primary-600)',
              ':hover': {
                background: 'var(--colors-primary-100)',
              },
              // Custom styles for the multi-value remove button
              ...userControlStyles
            }
          },
          loadingMessage: (base, state) => {
            const userControl = props.styles?.loadingMessage;
            const userControlStyles = typeof userControl === 'function' ? userControl(base, state) : {};

            return {
              ...base,
              fontSize: '0.875rem',
              color: 'var(--colors-gray-800)',
              // Custom styles for the loading message
              ...userControlStyles
            }
          },
          menuPortal: (base, state) => {
            const userControl = props.styles?.menuPortal;
            const userControlStyles = typeof userControl === 'function' ? userControl(base, state) : {};

            return {
            ...base,
            zIndex: 9999,
            // Custom styles for the menu portal
            ...userControlStyles
          }
          },
          noOptionsMessage: (base, state) => {
            const userControl = props.styles?.noOptionsMessage;
            const userControlStyles = typeof userControl === 'function' ? userControl(base, state) : {};

            return {
              ...base,
              fontSize: '0.875rem',
              color: 'var(--colors-gray-800)',
              ...userControlStyles
            }
          },
          input: (base, state) => {
            const userControl = props.styles?.input;
            const userControlStyles = typeof userControl === 'function' ? userControl(base, state) : {};

            return {
              ...base,
              ...userControlStyles
            }
          },
          placeholder: (base, state) => {
            const userControl = props.styles?.placeholder;
            const userControlStyles = typeof userControl === 'function' ? userControl(base, state) : {};

            return {
              ...base,
              ...userControlStyles
            }
          },
          singleValue: (base, state) => {
            const userControl = props.styles?.singleValue;
            const userControlStyles = typeof userControl === 'function' ? userControl(base, state) : {};

            return {
              ...base,
              ...userControlStyles
            }
          },
          valueContainer: (base, state) => {
            const userControl = props.styles?.valueContainer;
            const userControlStyles = typeof userControl === 'function' ? userControl(base, state) : {};

            return {
              ...base,
              ...userControlStyles
            }
          },
          menuList: (base, state) => {
            const userControl = props.styles?.menuList;
            const userControlStyles = typeof userControl === 'function' ? userControl(base, state) : {};

            return {
              ...base,
              ...userControlStyles
            }
          },

          // Custom styles for the container
          ...( props?.styles?.container ? props.styles.container : {} )
        }}
        components={{
          DropdownIndicator,
          IndicatorSeparator,
          LoadingIndicator,
          // Custom components
          ...( props?.components ? props.components : {} ),
        }}
      />
      {props.errors && props.errors.length > 0 && <ErrorMessage value={props.errors} />}

      {props.helpText && <span className="text-xs text-gray-600">{props.helpText}</span>}
    </div>
  );
};

export default AsyncSearchableSelect;
