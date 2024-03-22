import Divider from '@/components/Divider';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Divider> = {
  title: 'Divider',
  component: Divider,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Or continue with',
  },
  render: (args) => <Divider {...args} />,
};
