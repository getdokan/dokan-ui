import React from 'react';
import { Meta, Story } from '@storybook/react';
import TextArea, { TextAreaProps } from '../src/TextArea';

const meta: Meta = {
    title: 'TextArea',
    component: TextArea,
};

export default meta;

const Template: Story<TextAreaProps> = args => <TextArea {...args}></TextArea>;

export const Default = Template.bind({});
export const Error = Template.bind({});

Default.args = {
    label: 'Description',
    input: {
      id: 'desc',
    }
};
Error.args = {
    label: 'Description',
    errors: ['Something went wrong'],
    input: {
      id: 'desc',
      placeholder: 'Lorem ipsum dolor sit amet'
    }
};
