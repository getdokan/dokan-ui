import React from 'react';
import { Meta, Story } from '@storybook/react';
import MultipleTextInput, {
  MultipleTextInputProps,
} from '../src/MultipleTextInput';
import { useArgs } from '@storybook/client-api';

const meta: Meta = {
  title: 'MultipleTextInput',
  component: MultipleTextInput,
};

export default meta;

const Template: Story<MultipleTextInputProps> = (args) => {
  const [_, updateArgs] = useArgs();
  return (
    <MultipleTextInput
      {...args}
      setValue={(value) => updateArgs({ ...args, value: value })}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  className: 'mt-2',
  value: ['Bangladesh', 'Afghanistan', 'Saudi Arabia'],
  label: 'Countries',
  helpText: '',
};
