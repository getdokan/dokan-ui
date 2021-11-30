import React from 'react';
import { Meta, Story } from '@storybook/react';
import FancyCheckbox, { FancyCheckboxProps } from '../src/FancyCheckbox';

const meta: Meta = {
    title: 'Checkbox',
    component: FancyCheckbox
};

export default meta;

const Template: Story<FancyCheckboxProps> = args => <FancyCheckbox {...args} />;

export const Fancy = Template.bind({});

Fancy.args = {
    inputs: [
        {
            label: 'Apple',
            description: 'Fresh Apples',
            id: 'apple',
            name: 'apple',
        },
        {
            label: 'Orange',
            description: 'Fresh Oranges',
            id: 'orange',
            name: 'orange',
        },
        {
            label: 'Banana',
            description: 'Fresh Bananas',
            id: 'banana',
            name: 'banana',
        },
    ],
};
