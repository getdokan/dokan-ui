import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import RadioGroup, { RadioGroupProps } from '../src/RadioGroup';
import { Box, Truck } from 'react-feather';

const meta: Meta = {
  title: 'RadioGroup',
  component: RadioGroup,
};

export default meta;

const Template: Story<RadioGroupProps> = (args) => {
  const [selected, setSelected] = useState('');
  return (
    <>
      <RadioGroup
        {...args}
        onChange={(selectedValue: string) => setSelected(selectedValue)}
      ></RadioGroup>
      <p className="text-gray-600 text-sm">Current Value: {selected}</p>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  allowDeselect: true,
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
};
