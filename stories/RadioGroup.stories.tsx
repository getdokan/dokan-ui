import React from 'react';
import { Meta, Story } from '@storybook/react';
import RadioGroup, { RadioGroupProps } from '../src/RadioGroup';
import { Box, Settings, ShoppingBag, ShoppingCart, Truck } from 'react-feather';

const meta: Meta = {
  title: 'RadioGroup',
  component: RadioGroup,
};

export default meta;

const Template: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args}></RadioGroup>
);

export const Default = Template.bind({});

Default.args = {
  className: 'w-80',
  options: [
    {
      label: 'Custom Shipping',
      value: 'custom',
      description:
        'Manually calculate the shipping rates and ship depending on your needs.',
      icon: <Box />,
    },
    {
      label: 'Carrier Based Shipping',
      value: 'carrier',
      description: 'Send your delivery through third-part delivery provider.',
      icon: <Truck />,
    },
  ],
  onChange: (selectedValue: string) => alert(selectedValue),
};
