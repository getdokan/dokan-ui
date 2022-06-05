import React from 'react';
import { Meta, Story } from '@storybook/react';
import ToggleSwitch, { ToggleSwitchProps } from '../src/ToggleSwitch';

const meta: Meta = {
    title: 'ToggleSwitch',
    component: ToggleSwitch,
};

export default meta;

const Template: Story<ToggleSwitchProps> = args => <ToggleSwitch {...args}></ToggleSwitch>;

export const Default = Template.bind({});

// let enabled = false;

Default.args = {
    checked: true,
    label: ' Enable Shipping',
    color: 'primary',
};
