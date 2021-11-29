import React from 'react';
import { Meta, Story } from '@storybook/react';
import Btn, { BtnProps } from '../src/Btn';

const meta: Meta = {
    title: 'Button',
    component: Btn,
    // argTypes: {
    //     children: {
    //         control: {
    //             type: 'text',
    //         },
    //     },
    // },
    // parameters: {
    //     controls: { expanded: true },
    // },
};

export default meta;

const Template: Story<BtnProps> = args => <Btn {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    color: 'indigo',
    label: 'Btn'
};
