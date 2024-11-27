import Dropdown from '@/components/Dropdown';
import { Meta, StoryObj } from '@storybook/react';
import { FiChevronDown } from 'react-icons/fi';

const meta: Meta = {
  title: 'Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: [
          'top-start',
          'top-end',
          'right-start',
          'right-end',
          'bottom-start',
          'bottom-end',
          'left-start',
          'left-end',
        ],
      },
      defaultValue: 'bottom-end',
    },
  },
  decorators: [
    (Story) => (
      <div className="h-96 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Trigger>
        <div className="flex items-center px-4 py-2 text-sm border text-gray-600 border-gray-200 rounded">
          <span>Action</span>
          <FiChevronDown size={16} className="ml-1 text-gray-600" />
        </div>
      </Dropdown.Trigger>
      <Dropdown.Content className="w-32">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
};
