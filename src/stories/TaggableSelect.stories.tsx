import TaggableSelect from '@/components/TaggableSelect';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TaggableSelect> = {
  title: 'TaggableSelect',
  component: TaggableSelect,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'mt-2',
    options: [
      { label: 'Bangladesh', value: 'BD' },
      { label: 'India', value: 'IN' },
      { label: 'Pakistan', value: 'PK' },
      { label: 'Sri Lanka', value: 'SL' },
    ],
    label: 'Countries',
    required: true,
    placeholder: 'Search...',
    isMulti: true,
    helpText: '',
    errors: [],
  },
};
