import SimpleSelect from '@/components/SimpleSelect';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SimpleSelect> = {
  title: 'SimpleSelect',
  component: SimpleSelect,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Fruits',
    options: [
      { value: 1, label: 'Apple' },
      { value: 2, label: 'Orange' },
      { value: 3, label: 'Banana' },
    ],
  },
  render: (args) => <SimpleSelect {...args} />,
};

export const WithError: Story = {
  args: {
    errors: ['The fruits field is required'],
    label: 'Fruits',
    options: [
      { value: 1, label: 'Apple' },
      { value: 2, label: 'Orange' },
      { value: 3, label: 'Banana' },
    ],
  },
  render: (args) => <SimpleSelect {...args} />,
};
