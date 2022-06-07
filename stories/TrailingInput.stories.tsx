import React from 'react';
import { Meta, Story } from '@storybook/react';
import TrailingInput, { TrailingInputProps } from '../src/TrailingInput';
import { EyeIcon, LockClosedIcon } from '@heroicons/react/solid';

const meta: Meta = {
    title: 'Input',
    component: TrailingInput
};

export default meta;

const Template: Story<TrailingInputProps> = args => <TrailingInput className='mt-1' {...args} />;

export const TrailingInputDefault = Template.bind({});
export const TrailingInputIcon = Template.bind({});
export const TrailingInputText = Template.bind({});
export const TrailingInputError = Template.bind({});

TrailingInputDefault.args = {
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
    },
    helpText: ""
};

TrailingInputIcon.args = {
    icon: LockClosedIcon,
    ...TrailingInputDefault.args
};

TrailingInputText.args = {
    btnLabel: 'See',
    ...TrailingInputIcon.args
};

TrailingInputError.args = {
    errors: ['Password must be at least 8 characters.'],
    ...TrailingInputIcon.args
};
