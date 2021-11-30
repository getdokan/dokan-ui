import React from 'react';
import { Meta, Story } from '@storybook/react';
import GoogleIcon, { GoogleIconProps } from '../src/GoogleIcon';

const meta: Meta = {
    title: 'Icon',
    component: GoogleIcon,
};

export default meta;

const Template: Story<GoogleIconProps> = args => <GoogleIcon {...args} />;

export const Google = Template.bind({});

Google.args = {
    height: 100,
    width: 100
};
