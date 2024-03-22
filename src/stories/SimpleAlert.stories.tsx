import SimpleAlert from '@/components/SimpleAlert';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SimpleAlert> = {
  title: 'Alert',
  component: SimpleAlert,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Successfully Created',
    type: 'success',
    color: 'green',
  },
  render: (args) => {
    return <SimpleAlert {...args} />;
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Something is wrong!',
    type: 'info',
    color: 'yellow',
  },
  render: (args) => {
    return (
      <SimpleAlert {...args}>
        <div className="text-sm mt-1">We are not able to process your request now. You can learn more about this.</div>
      </SimpleAlert>
    );
  },
};
