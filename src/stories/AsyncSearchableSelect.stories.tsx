import AsyncSearchableSelect from '@/components/AsyncSearchableSelect';
import { debounceSearch } from '@/utils';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'AsyncSearchableSelect',
  component: AsyncSearchableSelect,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
    defaultOptions: [
      { label: 'Bangladesh', value: 'BD' },
      { label: 'India', value: 'IN' },
      { label: 'Pakistan', value: 'PK' },
      { label: 'Sri Lanka', value: 'SL' },
    ],
    label: 'Countries',
    helpText: 'This is a help text example',
    errors: [],
    onChange: (items: string[]) => {
      console.log(items);
    },
    required: true,
  },
  render: (args) => {
    return (
      <>
        <div>
          <AsyncSearchableSelect {...args} />
        </div>
      </>
    );
  },
};

export const Multiple: Story = {
  args: {
    className: '',
    defaultOptions: [
      { label: 'Bangladesh', value: 'BD' },
      { label: 'India', value: 'IN' },
      { label: 'Pakistan', value: 'PK' },
      { label: 'Sri Lanka', value: 'SL' },
    ],
    label: 'Countries',
    helpText: 'This is a help text example',
    errors: [],
    onChange: (items: string[]) => {
      console.log(items);
    },
    isMulti: true,
    required: true,
  },
  render: (args) => {
    return (
      <>
        <div>
          <AsyncSearchableSelect {...args} />
        </div>
      </>
    );
  },
};

export const MultipleAndSearch: Story = {
  args: {
    className: '',
    defaultOptions: [
      { label: 'Bangladesh', value: 'BD' },
      { label: 'India', value: 'IN' },
      { label: 'Pakistan', value: 'PK' },
      { label: 'Sri Lanka', value: 'SL' },
    ],
    label: 'Countries',
    helpText: 'This is a help text example',
    errors: [],
    onChange: (items: { label: string; value: string }[]) => {
      console.log(items);
    },
    isMulti: true,
    loadOptions: (inputValue: string, callback: (options: { label: string; value: string }[]) => void) => {
      debounceSearch(inputValue, (results: { label: string; value: string }[]) => {
        callback(results);
      });
    },
    required: true,
  },
  render: (args) => {
    return (
      <>
        <div>
          <AsyncSearchableSelect {...args} />
        </div>
      </>
    );
  },
};
