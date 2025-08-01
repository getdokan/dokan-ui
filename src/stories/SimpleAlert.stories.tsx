import SimpleAlert, { SimpleAlertProps } from '@/components/SimpleAlert';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SimpleAlert> = {
  title: 'Alert',
  component: SimpleAlert,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Successfully Created',
    type: 'success',
    color: 'green',
  },
  render: () => {
    const [args] = useArgs<SimpleAlertProps>();

    return <SimpleAlert {...args} />;
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Something is wrong!',
    type: 'info',
    color: 'yellow',
  },
  render: () => {
    const [args] = useArgs<SimpleAlertProps>();
    return (
      <SimpleAlert {...args}>
        <div className="text-sm mt-1">We are not able to process your request now. You can learn more about this.</div>
      </SimpleAlert>
    );
  },
};
