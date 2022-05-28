import React from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleInput, { SimpleInputProps } from '../src/SimpleInput';
import { MailIcon } from '@heroicons/react/solid';

const meta: Meta = {
    title: 'Input',
    component: SimpleInput
};

export default meta;

const Template: Story<SimpleInputProps> = args => <SimpleInput {...args} />;

export const SimpleDefault = Template.bind({});
export const SimpleIcon = Template.bind({});
export const SimpleError = Template.bind({});

SimpleDefault.args = {
    label: 'Email Address',
    className: 'mt-1',
    input: {
        id: 'login-email',
        name: 'email',
        type: 'email',
        autoComplete: 'off',
        required: true,
    }
};

SimpleIcon.args = {
    icon: MailIcon,
    label: 'Email Address',
    className: 'mt-1',
    input: {
        placeholder: 'yourname@email.com',
        id: 'login-email',
        name: 'email',
        type: 'email',
        autoComplete: 'off',
        required: true,
    }
};

SimpleError.args = {
    icon: MailIcon,
    errors: ['Email address field is required'],
    label: 'Email Address',
    className: 'mt-1',
    input: {
        placeholder: 'yourname@email.com',
        id: 'login-email',
        name: 'email',
        type: 'email',
        autoComplete: 'off',
        required: true,
    }
};
