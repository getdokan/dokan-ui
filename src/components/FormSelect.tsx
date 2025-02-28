import { classNames } from '@/utils';
import * as Select from '@radix-ui/react-select';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export type FormSelectProps = {
  value?: string | number;
  onChange?: (value: string | number) => void;
  id?: string;
  contentClass?: string;
  triggerClass?: string;
  name?: string;
  options: { label: string; value: string | number }[];
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
};

export default function FormSelect(props: FormSelectProps) {
  const { value, onChange, id, contentClass, triggerClass, name, options, placeholder, disabled, isError } = props;
  return (
    <Select.Root
      name={name}
      value={value?.toString()}
      onValueChange={(value) => {
        onChange?.(value);
      }}
    >
      <Select.Trigger
        id={id}
        disabled={disabled}
        className={classNames(
          'radix-select-trigger group/trigger flex w-full items-center justify-between rounded border-none bg-white px-4 py-2.5 text-sm text-gray-500 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary-600 data-[state=open]:ring-2 data-[state=open]:ring-primary-600',
          'disabled:cursor-not-allowed disabled:opacity-50',
          isError && 'hasErrors ring-red-500 focus:ring-red-500',
          triggerClass
        )}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon asChild>
          <FiChevronDown className="h-5 w-5 rotate-0 transform text-gray-500 transition-transform group-data-[state=open]/trigger:rotate-180 group-data-[state=open]/trigger:text-primary-600" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className={classNames(
            'z-50 max-h-60 w-[--radix-select-trigger-width] overflow-hidden rounded bg-white shadow-[0_6px_20px_0_rgba(0,0,0,0.08)] ring-1 ring-[#E9E9E9] focus:outline-none',
            contentClass
          )}
          position="popper"
          sideOffset={5}
        >
          <Select.ScrollUpButton className="flex cursor-default items-center justify-center py-1">
            <FiChevronUp className="h-5 w-5 text-gray-500" />
          </Select.ScrollUpButton>
          <Select.Viewport className="py-2.5">
            {options.map((option, index) => {
              return (
                <Select.Item
                  key={index}
                  value={option.value.toString()}
                  className="cursor-pointer select-none px-4 py-2 text-sm text-gray-500 outline-none focus:bg-primary-50 focus:text-primary-800"
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              );
            })}
          </Select.Viewport>
          <Select.ScrollDownButton className="flex cursor-default items-center justify-center py-1">
            <FiChevronDown className="h-5 w-5 text-gray-500" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
