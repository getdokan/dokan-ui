import React from 'react';
import { Meta, Story } from '@storybook/react';
import Divider, { DividerProps } from '../src/Divider';

const meta: Meta = {
    title: 'Divider',
    component: Divider,
};

export default meta;

const Template: Story<DividerProps> = args => <Divider {...args} />;

export const Default = Template.bind({});

Default.args = {
    label: 'Or continue with'
};
