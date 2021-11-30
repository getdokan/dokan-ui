import React from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleHeader, { SimpleHeaderProps } from '../src/SimpleHeader';

const meta: Meta = {
    title: 'Simple Header',
    component: SimpleHeader,
};

export default meta;

const Template: Story<SimpleHeaderProps> = args => <SimpleHeader {...args} />;

export const Default = Template.bind({});
export const WithSubtitle = Template.bind({});

Default.args = {
    title: 'Welcome to Dokan',
};

WithSubtitle.args = {
    subtitle: 'Please login to your Dokan account',
    ...Default.args
};
