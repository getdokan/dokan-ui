import TextArea from '@/components/TextArea';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextArea> = {
  title: 'TextArea',
  component: TextArea,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Description',
    value: '',
    input: {
      id: 'desc',
    },
    helpText: '',
  },
  render: (args) => <TextArea {...args} />,
};

export const Error: Story = {
  args: {
    label: 'Description',
    errors: ['Something went wrong'],
    input: {
      id: 'desc',
      placeholder: 'Lorem ipsum dolor sit amet',
    },
  },
  render: (args) => <TextArea {...args} />,
};
