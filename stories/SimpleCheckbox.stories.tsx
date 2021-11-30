import React from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleCheckbox, { SimpleCheckboxProps } from '../src/SimpleCheckbox';

const meta: Meta = {
    title: 'Checkbox',
    component: SimpleCheckbox
};

export default meta;

const Template: Story<SimpleCheckboxProps> = args => <SimpleCheckbox {...args} />;

export const Simple = Template.bind({});

Simple.args = {
    label: 'Remember Me',
    input: {
        id: 'remember',
        name: 'remember-me',
        type: 'checkbox'
    }
};
