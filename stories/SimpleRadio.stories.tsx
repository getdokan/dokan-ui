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

SimpleRadioGroup.args = {
  name: 'tax-class-re-assign',
  options: [
    { label: 'Standard Rate', value: 'standard' },
    { label: 'Reduced Rate', value: 'reduced' },
    { label: 'Zero Rate', value: 'zero' },
  ],
};

SimpleRadioGroupWithLabel.args = {
  label: 'Assign another tax class',
  name: 'tax-class-re-assign',
  helpText: 'You should assign another class before deleting a class.',
  options: [
    { label: 'Standard Rate', value: 'standard' },
    { label: 'Reduced Rate', value: 'reduced' },
    { label: 'Zero Rate', value: 'zero' },
  ],
};
