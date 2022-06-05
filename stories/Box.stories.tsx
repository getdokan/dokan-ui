import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box, { BoxProps } from '../src/Box';

const meta: Meta = {
    title: 'Box',
    component: Box,
};

export default meta;

const Template: Story<BoxProps> = args => <Box {...args}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ad nobis dolorem cupiditate pariatur velit accusamus qui id asperiores? Odio eos reiciendis esse assumenda porro, animi quidem molestias numquam cumque.
</Box>;

export const Default = Template.bind({});

Default.args = {};
