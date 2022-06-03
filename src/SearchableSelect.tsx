import React from 'react';
import Select, {
  GroupBase,
  Props,
  components,
  ValueContainerProps,
  OptionProps,
  InputProps,
} from 'react-select';

export type SearchableSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Props<Option, IsMulti, Group> & {
  label?: string;
  id?: string;
  className?: string;
  error?: string[];
  helpText?: string;
};

const SearchableSelect = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: SearchableSelectProps<Option, IsMulti, Group>
) => {
  const id = props.id || Math.random().toString();

  const ValueContainer = ({
    children,
    ...props
  }: ValueContainerProps<Option, IsMulti, Group>) => (
    <components.ValueContainer {...props} className="text-sm">
      {children}
    </components.ValueContainer>
  );

  const Option = (props: OptionProps<Option, IsMulti, Group>) => {
    return (
      <components.Option {...props} className="text-sm hover:bg-primary-50" />
    );
  };

  const Input = (props: InputProps<Option, IsMulti, Group>) => {
    return <components.Input {...props} inputClassName="focus:ring-0" />;
  };

  return (
    <div className="react-select">
      {props.label && (
        <label htmlFor={id} className="block text-sm font-medium">
          {props.label}
        </label>
      )}
      <Select
        {...props}
        className={props.className}
        placeholder={
          <div className="text-sm">{props.placeholder || 'Search...'}</div>
        }
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary:
              props.error && props.error.length > 0
                ? 'var(--danger-500)'
                : 'var(--primary-500)',
          },
        })}
        components={{ ValueContainer, Option, Input }}
        styles={{
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
      />
      {props.error && props.error.length > 0 && (
        <p className="text-xs text-red-600" id={`${id}-error`}>
          {props.error.join(', ')}
        </p>
      )}
      {props.helpText && (
        <span className="text-xs text-gray-600">{props.helpText}</span>
      )}
    </div>
  );
};

export default SearchableSelect;
