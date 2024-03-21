import SimpleCheckbox from '@/components/SimpleCheckbox';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SimpleCheckbox> = {
  title: 'Checkbox',
  component: SimpleCheckbox,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    label: 'Remember Me',
    input: {
      id: 'remember',
      name: 'remember-me',
      type: 'checkbox',
    },
  },
  render: (args) => <SimpleCheckbox {...args} />,
};

export const SimpleDisabled: Story = {
  args: {
    label: 'Disabled',
    input: {
      id: 'remember-disabled',
      name: 'remember-me-disabled',
      type: 'checkbox',
    },
    disabled: true,
    checked: true,
  },
  render: (args) => <SimpleCheckbox {...args} />,
};
