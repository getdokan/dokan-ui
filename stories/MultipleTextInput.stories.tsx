import React from 'react';
import { Meta, Story } from '@storybook/react';
import MultipleTextInput, { MultipleTextInputProps } from '../src/MultipleTextInput';

const meta: Meta = {
  title: 'MultipleTextInput',
  component: MultipleTextInput,
};

export default meta;

const Template: Story<MultipleTextInputProps> = args => <MultipleTextInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  className: 'mt-2',
  value: ['US', 'UK', 'Canada'],
  label: 'Countries',
  setValue: () => { },
};

