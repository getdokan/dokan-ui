import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleCheckboxGroup, { SimpleCheckboxGroupProps } from '../src/SimpleCheckboxGroup';

const meta: Meta = {
  title: 'Checkbox',
  component: SimpleCheckboxGroup,
};

export default meta;

const Template: Story<SimpleCheckboxGroupProps> = (args) => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <>
      <SimpleCheckboxGroup {...args} onChange={(checkedList) => setSelected(checkedList)} />
      <p className="text-gray-600 text-sm">Current Value: {selected.join(', ')}</p>
    </>
  );
};

export const SimpleCheckboxGroupWithoutLabel = Template.bind({});
export const SimpleCheckboxGroupWithLabel = Template.bind({});
export const SimpleCheckboxGroupWithLabelAndError = Template.bind({});

const commonArgs = {
  options: [
    { label: 'Standard Rate', value: 'standard' },
    { label: 'Reduced Rate', value: 'reduced' },
    { label: 'Zero Rate', value: 'zero' },
  ],
};

SimpleCheckboxGroupWithoutLabel.args = {
  ...commonArgs,
  defaultValue: ['reduced'],
};

SimpleCheckboxGroupWithLabel.args = {
  label: 'Choose tax classes',
  helpText: 'You can choose as many as class you want to attach with the country.',
  ...commonArgs,
};

SimpleCheckboxGroupWithLabelAndError.args = {
  label: 'Choose tax classes',
  helpText: 'You can choose as many as class you want to attach with the country.',
  ...commonArgs,
  errors: ['You must choose at least one from the above list.'],
};
