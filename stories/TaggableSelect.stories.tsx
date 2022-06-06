import React from 'react';
import { Meta, Story } from '@storybook/react';
import TaggableSelect from '../src/TaggableSelect';

const meta: Meta = {
  title: 'TaggableSelect',
  component: TaggableSelect,
};

export default meta;

const Template: Story = (args) => <TaggableSelect {...args} />;

export const Default = Template.bind({});

Default.args = {
  className: 'mt-2',
  options: [
    { label: 'Bangladesh', value: 'BD' },
    { label: 'India', value: 'IN' },
    { label: 'Pakistan', value: 'PK' },
    { label: 'Sri Lanka', value: 'SL' },
  ],
  label: 'Countries',
  placeholder: 'Search...',
  isMulti: true,
  onChange: (items) => {
    console.log(items);
  },
  helpText: '',
  errors: [],
};
