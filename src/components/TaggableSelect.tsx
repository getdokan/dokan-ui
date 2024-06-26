import { classNames } from '@/utils';
import { CreatableAdditionalProps } from 'node_modules/react-select/dist/declarations/src/useCreatable';
import { StateManagerProps } from 'node_modules/react-select/dist/declarations/src/useStateManager';
import { HiChevronDown } from 'react-icons/hi';
import { components, DropdownIndicatorProps, GroupBase, InputProps, MultiValueRemoveProps } from 'react-select';
import CreatableSelect from 'react-select/creatable';

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

  const Input = (props: InputProps<Option, IsMulti, Group>) => {
    return <components.Input {...props} inputClassName="focus:ring-0" />;
  };

  const DropdownIndicator = () => {
    return (
      <div className="px-2">
        <HiChevronDown className="h-5 text-gray-400" />
      </div>
    );
  };

  const IndicatorSeparator = () => null;

  const hasErrors: boolean = Boolean(props.errors && props.errors.length > 0);

  return (
    <div className="react-select">
      {props.label && (
        <label htmlFor={id} className="block text-sm font-medium">
          {props.label}
        </label>
      )}
      <CreatableSelect
        {...props}
        isDisabled={props.disabled}
        className={classNames(
          'shadow-sm',
          props.className,
          props.disabled && 'border rounded',
          hasErrors && 'hasErrors'
        )}
        placeholder={<div className="text-sm text-gray-400">{props.placeholder || 'Search...'}</div>}
        components={{
          MultiValueRemove,
          Input,
          DropdownIndicator,
          IndicatorSeparator,
        }}
        styles={{
          control: (base) => ({
            ...base,
            border: hasErrors ? '1px solid var(--danger-500)' : base.border,
            ':hover': {
              border: hasErrors ? '1px solid var(--danger-500)' : base.border,
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
            primary: hasErrors ? 'var(--danger-500)' : 'var(--primary-500)',
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
      />

      {hasErrors && <p className="text-xs text-red-600">{props.errors?.join(', ')}</p>}
      {props.helpText && <span className="text-xs text-gray-600">{props.helpText}</span>}
    </div>
  );
};

export default TaggableSelect;
