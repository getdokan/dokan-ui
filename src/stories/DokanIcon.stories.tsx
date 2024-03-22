import DokanIcon from '@/components/DokanIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Icon',
  component: DokanIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Dokan: Story = {
  args: {
    height: 100,
    width: 100,
  },
  render: (args) => <DokanIcon {...args} />,
};
