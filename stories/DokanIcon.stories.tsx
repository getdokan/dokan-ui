import React from 'react';
import { Meta, Story } from '@storybook/react';
import DokanIcon, { DokanIconProps } from '../src/DokanIcon';

const meta: Meta = {
    title: 'Icon',
    component: DokanIcon,
};

export default meta;

const Template: Story<DokanIconProps> = args => <DokanIcon {...args} />;

export const Dokan = Template.bind({});

Dokan.args = {
    height: 100,
    width: 100
};
