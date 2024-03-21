import SimpleHeader from '@/components/SimpleHeader';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Simple Header',
  component: SimpleHeader,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Welcome to Dokan',
  },
  render: (args) => <SimpleHeader {...args} />,
};

export const WithSubtitle: Story = {
  args: {
    title: 'Welcome to Dokan',
    subtitle: 'Please login to your Dokan account',
  },
  render: (args) => <SimpleHeader {...args} />,
};
