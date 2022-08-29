import { ChevronDownIcon } from '@heroicons/react/solid';
import React from 'react';
import {
  GroupBase,
  components,
  MultiValueRemoveProps,
  InputProps,
  DropdownIndicatorProps,
} from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { CreatableAdditionalProps } from 'react-select/dist/declarations/src/useCreatable';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';

type CreatableProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> = StateManagerProps<Option, IsMulti, Group> &
  CreatableAdditionalProps<Option, Group> & {
    label?: string;
    id?: string;
    className?: string;
    errors?: string[];
    helpText?: string;
  };

const TaggableSelect = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: CreatableProps<Option, IsMulti, Group>
) => {
  const id = props.id || Math.random().toString();

  const MultiValueRemove = (
    props: MultiValueRemoveProps<Option, IsMulti, Group>
  ) => {
    return (
      <components.MultiValueRemove {...props}>
        <span className="text-primary-600">&times;</span>
      </components.MultiValueRemove>
    );
  };

  const Input = (props: InputProps<Option, IsMulti, Group>) => {
    return <components.Input {...props} inputClassName="focus:ring-0" />;
  };

  const DropdownIndicator = ({}: DropdownIndicatorProps<
    Option,
    IsMulti,
    Group
  >) => {
    return (
      <div className="px-2">
        <ChevronDownIcon className="h-5 text-gray-400" />
      </div>
    );
  };

  const IndicatorSeparator = () => null;

  return (
    <div className="react-select">
      {props.label && (
        <label htmlFor={id} className="block text-sm font-medium">
          {props.label}
        </label>
      )}
      <CreatableSelect
        {...props}
        className={`${props.className} shadow-sm`}
        placeholder={<div className="text-sm">{props.placeholder}</div>}
        components={{
          MultiValueRemove,
          Input,
          DropdownIndicator,
          IndicatorSeparator,
        }}
        styles={{
          control: (base) => ({
            ...base,
            border:
              props.errors && props.errors.length > 0
                ? '1px solid var(--danger-500)'
                : base.border,
            ':hover': {
              border:
                props.errors && props.errors.length > 0
                  ? '1px solid var(--danger-500)'
                  : base.border,
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
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary:
              props.errors && props.errors.length > 0
                ? 'var(--danger-500)'
                : 'var(--primary-500)',
            primary75: 'var(--primary-200)',
            primary50: 'var(--primary-100)',
            primary25: 'var(--primary-50)',
            neutral20: 'var(--gray-300)',
            neutral30: 'var(--gray-300)',
          },
        })}
      />

      {props.errors && props.errors.length > 0 && (
        <p className="text-xs text-red-600">{props.errors.join(', ')}</p>
      )}
      {props.helpText && (
        <span className="text-xs text-gray-600">{props.helpText}</span>
      )}
    </div>
  );
};

export default TaggableSelect;
