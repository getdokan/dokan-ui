import React from 'react';
import { Meta, Story } from '@storybook/react';
import SearchableSelect from '../src/SearchableSelect';

const meta: Meta = {
  title: 'SearchableSelect',
  component: SearchableSelect,
};

export default meta;

const Template: Story = (args) => <SearchableSelect {...args} />;

export const Default = Template.bind({});
export const Multiple = Template.bind({});

Default.args = {
  className: 'mt-2',
  options: [
    { label: 'Bangladesh', value: 'BD' },
    { label: 'India', value: 'IN' },
    { label: 'Pakistan', value: 'PK' },
    { label: 'Sri Lanka', value: 'SL' },
  ],
  label: 'Countries',
  onChange: (item) => {
    console.log(item);
  },
  helpText: '',
  error: [],
};

Multiple.args = {
  className: 'mt-2',
  options: [
    { label: 'Bangladesh', value: 'BD' },
    { label: 'India', value: 'IN' },
    { label: 'Pakistan', value: 'PK' },
    { label: 'Sri Lanka', value: 'SL' },
  ],
  label: 'Countries',
  isMulti: true,
  onChange: (items) => {
    console.log(items);
  },
  helpText: '',
};
