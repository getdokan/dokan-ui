import React from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleRadio, {SimpleRadioProps} from "../src/SimpleRadio";

const meta: Meta = {
  title: 'SimpleRadioGroup',
  component: SimpleRadio,
};

export default meta;

const Template: Story<SimpleRadioProps> = (args) => <SimpleRadio {...args} />;

export const SimpleRadioGroup = Template.bind({});
export const SimpleRadioGroupWithLabel = Template.bind({});
export const SimpleRadioGroupWithLabelAndSelectedBackground = Template.bind({});
export const SimpleRadioGroupWithLabelAndDefault = Template.bind({});
export const SimpleRadioGroupWithLabelAndValue = Template.bind({});
export const SimpleRadioGroupWithLabelAndError = Template.bind({});

const commonArgs = {
  name: 'tax-class-selection',
  options: [
    { label: 'Standard Rate', value: 'standard' },
    { label: 'Reduced Rate', value: 'reduced' },
    { label: 'Zero Rate', value: 'zero' },
  ],
};

const label = 'Assign another tax class';
const helpText = 'You should assign another class before deleting a class.';

SimpleRadioGroup.args = commonArgs;

SimpleRadioGroupWithLabel.args = {
  label,
  helpText,
  ...commonArgs,
};

SimpleRadioGroupWithLabelAndSelectedBackground.args = {
  label,
  helpText,
  ...commonArgs,
  selectedOptionClass: 'bg-blue-100',
};

SimpleRadioGroupWithLabelAndDefault.args = {
  label,
  helpText,
  defaultValue: 'zero',
  ...commonArgs,
};

SimpleRadioGroupWithLabelAndValue.args = {
  label,
  helpText,
  value: 'reduced',
  ...commonArgs,
};

SimpleRadioGroupWithLabelAndError.args = {
  label,
  helpText,
  ...commonArgs,
  errors: ['You must choose one from the above list.'],
};
