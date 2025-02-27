import DokanIcon from '@/components/icons/DokanIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Icon',
  component: DokanIcon,
  tags: ['autodocs'],
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
