import React from 'react';
import { Meta, Story } from '@storybook/react';
import SearchableSelect from '../src/SearchableSelect';

const meta: Meta = {
  title: 'SearchableSelect',
  component: SearchableSelect,
};

export default meta;

const Template: Story = (args) => {
  return (
    <>
      <div>
        <SearchableSelect {...args} />
      </div>
    </>
  );
};

export const Default = Template.bind({});
export const Multiple = Template.bind({});
export const Error = Template.bind({});

Default.args = {
  className: '',
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
  helpText: 'This is a help text example',
  errors: [],
};

Multiple.args = {
  className: '',
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
  errors: [],
};

Error.args = {
  className: '',
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
  errors: ['this is error text'],
};
