import React from 'react';
import { Meta, Story } from '@storybook/react';
import TrailingBtnInput, { TrailingBtnInputProps } from '../src/TrailingBtnInput';
import { EyeIcon, LockClosedIcon, MailIcon } from '@heroicons/react/solid';

const meta: Meta = {
    title: 'Input',
    component: TrailingBtnInput
};

export default meta;

const Template: Story<TrailingBtnInputProps> = args => <TrailingBtnInput {...args} />;

export const TrailingButtonDefault = Template.bind({});
export const TrailingButtonIcon = Template.bind({});
export const TrailingButtonText = Template.bind({});
export const TrailingButtonError = Template.bind({});

TrailingButtonDefault.args = {
    block: true,
    btnIcon: EyeIcon,
    label: 'Password',
    input: {
        placeholder: '••••••••',
        id: 'login-password',
        name: 'password',
        type: 'password',
        autoComplete: 'off',
        required: true,
    }
};

TrailingButtonIcon.args = {
    icon: LockClosedIcon,
    ...TrailingButtonDefault.args
};

TrailingButtonText.args = {
    btnLabel: 'See',
    ...TrailingButtonIcon.args
};

TrailingButtonError.args = {
    error: 'Password must be at least 8 characters.',
    ...TrailingButtonIcon.args
};
