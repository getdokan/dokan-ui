import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '../src/Button';
import { ArrowDown, Download } from 'react-feather';
const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
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
  icon: Download,
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
  icon: Download,
  block: true,
  color: 'primary',
  label: 'Download',
};

WithChildren.args = {
  color: 'primary',
  children: (
    <div className="inline-flex items-center gap-2">
      Download <ArrowDown className="h-4 animate-bounce" />
    </div>
  ),
};
