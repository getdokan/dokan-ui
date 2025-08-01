import SimpleCheckbox, { SimpleCheckboxProps } from '@/components/SimpleCheckbox';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SimpleCheckbox> = {
  title: 'SimpleCheckbox',
  component: SimpleCheckbox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Remember Me',
    input: {
      id: 'remember',
      name: 'remember-me',
      type: 'checkbox',
    },
  },
  render: () => {
    const [args] = useArgs<SimpleCheckboxProps>();
    return <SimpleCheckbox {...args} />;
  },
};

export const Disabled: Story = {
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
  render: () => {
    const [args] = useArgs<SimpleCheckboxProps>();
    return <SimpleCheckbox {...args} />;
  },
};
