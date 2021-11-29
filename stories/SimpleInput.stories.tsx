import React from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleInput, { SimpleInputProps } from '../src/SimpleInput';

const meta: Meta = {
    title: 'Simple Input',
    component: SimpleInput,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story<SimpleInputProps> = args => <SimpleInput {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    label: 'Email Address',
    input: {
        placeholder: 'yourname@email.com',
        id: 'login-email',
        name: 'email',
        type: 'email',
        autoComplete: 'off',
        required: true,
    }
};
