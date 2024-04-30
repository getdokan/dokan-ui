import TaggableSelect from '@/components/TaggableSelect';
import { Meta, StoryObj } from '@storybook/react';
import { SearchableSelect, SimpleInput } from '..';

const meta: Meta<typeof TaggableSelect> = {
  title: 'TaggableSelect',
  component: TaggableSelect,
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
    placeholder: 'Search...',
    isMulti: true,
    onChange: (items) => {
      console.log(items);
    },
    helpText: '',
    errors: [],
  },
  render: (args) => <TaggableSelect {...args} />,
};
