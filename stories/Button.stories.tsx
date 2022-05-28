import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '../src/Button';
import { Download } from 'react-feather';
const meta: Meta = {
    title: 'Button',
    component: Button,
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
export const Outlined = Template.bind({});
export const Icon = Template.bind({});
export const Disabled = Template.bind({});
export const Loading = Template.bind({});
export const Block = Template.bind({});

Default.args = {
    color: 'primary',
    label: 'Download'
};

Outlined.args = {
    color: 'primary',
    label: 'Download',
    outlined: true
};

Icon.args = {
    color: 'primary',
    label: 'Download',
    icon: Download,
};

Disabled.args = {
    disabled: true,
    ...Default.args
};

Loading.args = {
    loading: true,
    ...Disabled.args,
    label: 'Downloading',
};

Block.args = {
    icon: Download,
    block: true,
    color: 'primary',
    label: 'Download'
};
