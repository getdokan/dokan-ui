import GoogleIcon from '@/components/GoogleIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Icon',
  component: GoogleIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Google: Story = {
  args: {
    height: 100,
    width: 100,
  },
  render: (args) => {
    return <GoogleIcon {...args} />;
  },
};
