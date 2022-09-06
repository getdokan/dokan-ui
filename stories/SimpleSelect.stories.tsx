import React from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleSelect, { SimpleSelectProps } from '../src/SimpleSelect';

const meta: Meta = {
  title: 'SimpleSelect',
  component: SimpleSelect,
};

export default meta;

const Template: Story<SimpleSelectProps> = (args) => <SimpleSelect {...args} />;

export const Default = Template.bind({});
export const WithError = Template.bind({});

Default.args = {
  label: 'Fruits',
  options: [
    { value: 1, label: 'Apple' },
    { value: 2, label: 'Orange' },
    { value: 3, label: 'Banana' },
  ],
};

WithError.args = {
  errors: ['The fruits field is required'],
  label: 'Fruits',
  options: [
    { value: 1, label: 'Apple' },
    { value: 2, label: 'Orange' },
    { value: 3, label: 'Banana' },
  ],
};
