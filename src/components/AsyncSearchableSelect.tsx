import React from 'react';
import { CgSpinner } from 'react-icons/cg';
import { FiChevronDown } from 'react-icons/fi';
import { GroupBase, MenuPosition } from 'react-select';
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
  action?: React.ReactNode;
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
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor={id}
            className={classNames(
              'cursor-pointer text-sm font-medium leading-[21px] text-gray-900',
              props.disabled && 'cursor-not-allowed opacity-50'
            )}
          >
            {props.label}
            {props.required && <span className={'ms-0.5 text-danger-500'}>*</span>}
          </label>
          {props.action && <div>{props.action}</div>}
        </div>
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
            primary: 'var(--color-primary-500)',
            primary75: 'var(--color-primary-200)',
            primary50: 'var(--color-primary-100)',
            primary25: 'var(--color-primary-50)',
            neutral5: 'var(--color-gray-100)',
            neutral10: 'var(--color-gray-100)',
            neutral20: 'var(--color-gray-200)',
            neutral30: 'var(--color-gray-300)',
            neutral40: 'var(--color-gray-400)',
            neutral50: 'var(--color-gray-500)',
            neutral60: 'var(--color-gray-600)',
            neutral70: 'var(--color-gray-700)',
            neutral80: 'var(--color-gray-800)',
            neutral90: 'var(--color-gray-900)',
          },
        })}
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
        components={{
          DropdownIndicator,
          IndicatorSeparator,
          LoadingIndicator,
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
          loadingMessage: (base) => ({
            ...base,
            fontSize: '0.875rem',
            color: 'var(--color-gray-800)',
          }),
          menuPortal: (base) => ({
            ...base,
            zIndex: 9999,
          }),
          noOptionsMessage: (base) => ({
            ...base,
            fontSize: '0.875rem',
            color: 'var(--color-gray-800)',
          }),
        }}
        menuPortalTarget={props.menuPortalTarget}
        menuPosition={props.menuPosition}
        {...props}
      />
      {props.errors && props.errors.length > 0 && <ErrorMessage value={props.errors} />}

      {props.helpText && <span className="text-xs text-gray-600">{props.helpText}</span>}
    </div>
  );
};

export default AsyncSearchableSelect;
