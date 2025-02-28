import Popover from '@/components/Popover';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';
import { FiChevronDown } from 'react-icons/fi';

const meta: Meta = {
  title: 'Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    modal: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    align: {
      control: 'select',
      options: ['center', 'start', 'end'],
    },
    alignOffset: {
      control: {
        type: 'number',
      },
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    sideOffset: {
      control: {
        type: 'number',
      },
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
  render: (args) => {
    const [_, updateArgs] = useArgs();

    const handleOpenChange = (open: boolean) => {
      updateArgs({ open });
    };

    return (
      <>
        <Popover open={args.open} onOpenChange={handleOpenChange}>
          <Popover.Trigger>
            <div className="flex items-center px-4 py-2 text-sm border text-gray-600 border-gray-200 rounded">
              <span>Action</span>
              <FiChevronDown size={16} className="ml-1 text-gray-600" />
            </div>
          </Popover.Trigger>
          <Popover.Content
            className="w-32 p-0"
            align={args.align}
            sideOffset={args.sideOffset}
            side={args.side}
            alignOffset={args.alignOffset}
          >
            <button className="flex w-full items-center px-4 py-2 text-left text-sm leading-5 text-gray-800 transition duration-150 ease-in-out first:rounded-t last:rounded-b hover:bg-gray-50 focus:outline-none">
              Item 1
            </button>
            <button className="flex w-full items-center px-4 py-2 text-left text-sm leading-5 text-gray-800 transition duration-150 ease-in-out first:rounded-t last:rounded-b hover:bg-gray-50 focus:outline-none">
              Item 2
            </button>
          </Popover.Content>
        </Popover>
      </>
    );
  },
};
