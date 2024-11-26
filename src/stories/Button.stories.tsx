import type { Meta, StoryObj } from '@storybook/react';
import { FiChevronDown, FiDownload, FiMenu } from 'react-icons/fi';
import Button from '@/components/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [
          'amber',
          'blue',
          'cyan',
          'emerald',
          'fuchsia',
          'green',
          'gray',
          'indigo',
          'lime',
          'orange',
          'pink',
          'purple',
          'red',
          'rose',
          'sky',
          'teal',
          'violet',
          'yellow',
          'primary',
          'secondary',
          'danger',
          'white',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['lg', 'md', 'sm'],
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    color: 'primary',
    label: 'Download',
  },
};

export const Large: Story = {
  args: {
    color: 'primary',
    label: 'Download',
    size: 'lg',
  },
};

export const Medium: Story = {
  args: {
    color: 'primary',
    label: 'Download',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    color: 'primary',
    label: 'Download',
    size: 'sm',
  },
};

export const Link: Story = {
  args: {
    color: 'purple',
    label: 'Download',
    link: true,
    href: 'http://google.com',
    target: '_blank',
    underline: false,
    underlineOnHover: true,
    onClick: () => {
      alert('Clicked. e.preventDefault() is not called.');
    },
  },
};

export const Outline: Story = {
  args: {
    color: 'primary',
    label: 'Download',
    outlined: true,
  },
};

export const Icon: Story = {
  args: {
    color: 'primary',
    label: 'Download',
    icon: FiDownload,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    ...Default.args,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    ...Default.args,
    label: 'Loading',
  },
};

export const Block: Story = {
  args: {
    icon: FiDownload,
    block: true,
    color: 'primary',
    label: 'Download',
  },
};

export const WithChildren: Story = {
  args: {
    color: 'primary',
    children: (
      <p className="inline-flex items-center gap-2">
        <FiMenu size={16} />
        <span className="text-sm">Button</span>
        <FiChevronDown size={16} />
      </p>
    ),
  },
};
