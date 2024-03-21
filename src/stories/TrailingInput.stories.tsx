import TrailingInput from '@/components/TrailingInput';
import { Meta, StoryObj } from '@storybook/react';
import { HiEye, HiLockClosed } from 'react-icons/hi';

const meta: Meta<typeof TrailingInput> = {
  title: 'Input',
  component: TrailingInput,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TrailingInputDefault: Story = {
  args: {
    btnIcon: HiEye,
    label: 'Password',
    input: {
      placeholder: '••••••••',
      id: 'login-password',
      name: 'password',
      type: 'password',
      autoComplete: 'off',
      required: true,
    },
    helpText: '',
  },
  render: (args) => <TrailingInput {...args} />,
};

export const TrailingInputIcon: Story = {
  args: {
    icon: HiLockClosed,
    ...TrailingInputDefault.args,
  },
  render: (args) => <TrailingInput {...args} />,
};

export const TrailingInputText: Story = {
  args: {
    btnLabel: 'See',
    ...TrailingInputIcon.args,
  },
  render: (args) => <TrailingInput {...args} />,
};

export const TrailingInputError: Story = {
  args: {
    ...TrailingInputIcon.args,
    errors: ['Password must be at least 8 characters.'],
  },
  render: (args) => <TrailingInput {...args} />,
};
