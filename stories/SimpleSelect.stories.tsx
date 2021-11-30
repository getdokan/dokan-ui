import React from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleSelect, { SimpleSelectProps } from '../src/SimpleSelect';

const meta: Meta = {
    title: 'Dropdown',
    component: SimpleSelect,
};

export default meta;

const Template: Story<SimpleSelectProps> = args => <SimpleSelect {...args} />;

export const Default = Template.bind({});

Default.args = {
    label: 'Fruits',
    labelKey: 'name',
    valueKey: 'id',
    options: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Orange' },
        { id: 3, name: 'Banana' },
    ]
};
