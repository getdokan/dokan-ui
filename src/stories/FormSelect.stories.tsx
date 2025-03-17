import FormSelect, { FormSelectProps } from '@/components/FormSelect';
import { Meta } from '@storybook/react';

const meta: Meta<typeof FormSelect> = {
  title: 'FormSelect',
  component: FormSelect,
  tags: ['autodocs'],
};

export default meta;

export const Default = (args: FormSelectProps) => <FormSelect {...args} />;
export const Error = (args: FormSelectProps) => <FormSelect {...args} />;
export const Disabled = (args: FormSelectProps) => <FormSelect {...args} />;

Default.args = {
  id: 'select-country',
  name: 'select-country',
  placeholder: 'Select a country',
  options: [
    { label: 'Afghanistan', value: 'AF' },
    { label: 'Bangladesh', value: 'BD' },
    { label: 'Canada', value: 'CA' },
    { label: 'Denmark', value: 'DK' },
    { label: 'Egypt', value: 'EG' },
    { label: 'France', value: 'FR' },
    { label: 'Germany', value: 'DE' },
  ],
};

Error.args = {
  id: 'select-country',
  name: 'select-country',
  placeholder: 'Select a country',
  options: [
    { label: 'Afghanistan', value: 'AF' },
    { label: 'Bangladesh', value: 'BD' },
    { label: 'Canada', value: 'CA' },
    { label: 'Denmark', value: 'DK' },
    { label: 'Egypt', value: 'EG' },
    { label: 'France', value: 'FR' },
    { label: 'Germany', value: 'DE' },
  ],
  isError: true,
};

Disabled.args = {
  id: 'select-country',
  name: 'select-country',
  placeholder: 'Select a country',
  options: [
    { label: 'Afghanistan', value: 'AF' },
    { label: 'Bangladesh', value: 'BD' },
    { label: 'Canada', value: 'CA' },
    { label: 'Denmark', value: 'DK' },
    { label: 'Egypt', value: 'EG' },
    { label: 'France', value: 'FR' },
    { label: 'Germany', value: 'DE' },
  ],
  disabled: true,
};
