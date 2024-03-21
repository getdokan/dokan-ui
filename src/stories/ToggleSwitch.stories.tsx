import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ToggleSwitch from '@/components/ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'ToggleSwitch',
  component: ToggleSwitch,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
    label: ' Enable Shipping',
    color: 'primary',
  },
  render: (args) => <ToggleSwitch {...args} />,
};
