import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FiChevronDown, FiDownload, FiMenu } from 'react-icons/fi';
import Button, { ButtonProps } from '../src/Button';
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
};

export default meta;

const Template = (args: any) => ({ args });

export const Default = Template.bind({});
export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});
export const Outlined = Template.bind({});
export const Icon = Template.bind({});
export const Disabled = Template.bind({});
export const Loading = Template.bind({});
export const Block = Template.bind({});
export const Link = Template.bind({});
export const WithChildren = Template.bind({});

Default.args = {
  color: 'primary',
  label: 'Download',
};

Large.args = {
  color: 'primary',
  label: 'Download',
  size: 'lg',
};

Medium.args = {
  color: 'primary',
  label: 'Download',
  size: 'md',
};

Small.args = {
  color: 'primary',
  label: 'Download',
  size: 'sm',
};

Link.args = {
  color: 'purple',
  label: 'Download',
  link: true,
  href: 'http://google.com',
  target: '_blank',
  underline: false,
  underlineOnHover: true,
  onClick: (e) => {
    alert('Clicked. e.preventDefault() is not called.');
  },
};

Outlined.args = {
  color: 'primary',
  label: 'Download',
  outlined: true,
};

Icon.args = {
  color: 'primary',
  label: 'Download',
  icon: FiDownload,
};

Disabled.args = {
  disabled: true,
  ...Default.args,
};

Loading.args = {
  loading: true,
  ...Disabled.args,
  label: 'Downloading',
};

Block.args = {
  icon: FiDownload,
  block: true,
  color: 'primary',
  label: 'Download',
};

WithChildren.args = {
  color: 'primary',
  children: (
    <p className="inline-flex items-center gap-2">
      <FiMenu size={16} />
      <span className="text-sm">Button</span>
      <FiChevronDown size={16} />
    </p>
  ),
};
