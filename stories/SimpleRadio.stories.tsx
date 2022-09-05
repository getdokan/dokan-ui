import React from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleRadio, {SimpleRadioProps} from "../src/SimpleRadio";

const meta: Meta = {
  title: 'RadioGroup',
  component: SimpleRadio,
};

export default meta;

const Template: Story<SimpleRadioProps> = (args) => <SimpleRadio {...args} />;

export const SimpleRadioGroup = Template.bind({});
export const SimpleRadioGroupWithLabel = Template.bind({});
export const SimpleRadioGroupWithLabelAndError = Template.bind({});

const commonArgs = {
  name: 'tax-class-re-assign',
  options: [
    { label: 'Standard Rate', value: 'standard' },
    { label: 'Reduced Rate', value: 'reduced' },
    { label: 'Zero Rate', value: 'zero' },
  ],
};

SimpleRadioGroup.args = commonArgs;

SimpleRadioGroupWithLabel.args = {
  label: 'Assign another tax class',
  helpText: 'You should assign another class before deleting a class.',
  ...commonArgs,
};

SimpleRadioGroupWithLabelAndError.args = {
  label: 'Assign another tax class',
  helpText: 'You should assign another class before deleting a class.',
  ...commonArgs,
  errors: ['You must choose one from the above list.'],
};
