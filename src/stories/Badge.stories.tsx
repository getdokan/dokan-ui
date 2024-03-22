import type { Meta, StoryObj } from '@storybook/react';
import Badge from '../components/Badge';

const meta: Meta = {
  title: 'Badge',
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Completed',
  },
};

export const Success: Story = {
  args: {
    color: 'green',
    label: 'Published',
  },
};

export const Info: Story = {
  args: {
    color: 'blue',
    label: 'Processing',
  },
};

export const Warning: Story = {
  args: {
    color: 'yellow',
    label: 'Draft',
  },
};

export const Danger: Story = {
  args: {
    color: 'red',
    label: 'Failed',
  },
};
