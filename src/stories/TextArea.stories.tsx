import TextArea from '@/components/TextArea';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextArea> = {
  title: 'TextArea',
  component: TextArea,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Description',
    defaultValue: '',
    input: {
      id: 'desc',
    },
    helpText: '',
    required: true,
  },
  render: (args) => <TextArea {...args} />,
};

export const WithError: Story = {
  args: {
    label: 'Description',
    errors: ['Description is required'],
    input: {
      id: 'desc',
    },
    required: true,
  },
  render: (args) => <TextArea {...args} />,
};
