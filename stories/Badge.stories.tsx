import React from 'react';
import { Meta, Story } from '@storybook/react';
import Badge, { BadgeProps } from '../src/Badge';

const meta: Meta = {
  title: 'Badge',
  component: Badge,
};

export default meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
export const Success = Template.bind({});
export const Info = Template.bind({});
export const Warning = Template.bind({});
export const Danger = Template.bind({});

Primary.args = {
  color: 'primary',
  label: 'Completed',
};

Success.args = {
  color: 'green',
  label: 'Published',
};

Info.args = {
  color: 'blue',
  label: 'Processing',
};

Warning.args = {
  color: 'yellow',
  label: 'Draft',
};

Danger.args = {
  color: 'red',
  label: 'Failed',
};
