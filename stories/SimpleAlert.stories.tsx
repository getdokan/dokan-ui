import React from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleAlert, { SimpleAlertProps } from '../src/SimpleAlert';

const meta: Meta = {
    title: 'Alert',
    component: SimpleAlert,
};

export default meta;

const Template: Story<SimpleAlertProps> = args => <SimpleAlert {...args} />;

export const Default = Template.bind({});

Default.args = {
    label: 'Successfully Created',
    type: "success",
    color: 'green'
};
