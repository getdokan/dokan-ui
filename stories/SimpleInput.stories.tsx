import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HiMail } from 'react-icons/hi';
import SimpleInput, { SimpleInputProps } from '../src/SimpleInput';

const meta: Meta = {
  title: 'Input',
  component: SimpleInput,
};

export default meta;

const Template: Story<SimpleInputProps> = (args) => <SimpleInput {...args} />;

export const SimpleDefault = Template.bind({});
export const SimpleLeftAddon = Template.bind({});
export const SimpleRightAddon = Template.bind({});
export const SimpleIcon = Template.bind({});
export const SimpleError = Template.bind({});
export const SimpleCounter = Template.bind({});
export const SimpleCounterWithDefault = Template.bind({});
export const SimpleCounterWithValue = Template.bind({});
export const SimpleIconWithCounter = Template.bind({});
export const SimpleErrorWithCounter = Template.bind({});

SimpleDefault.args = {
  label: 'Email Address',
  input: {
    id: 'login-email',
    name: 'email',
    type: 'email',
    autoComplete: 'off',
    placeholder: 'yourname@email.com',
    required: true,
  },
};

SimpleLeftAddon.args = {
  addOnLeft: 'http://',
  label: 'Web Address',
  input: {
    id: 'login-web',
    name: 'web',
    type: 'text',
    autoComplete: 'off',
    placeholder: 'google.com',
    required: true,
  },
};
SimpleRightAddon.args = {
  addOnRight: '.dokan.cloud',
  label: 'Store Name',
  input: {
    id: 'login-storename',
    name: 'storename',
    type: 'text',
    autoComplete: 'off',
    placeholder: 'daraz',
    required: true,
  },
};

SimpleIcon.args = {
  icon: HiMail,
  label: 'Email Address',
  className: '',
  input: {
    placeholder: 'yourname@email.com',
    id: 'login-email',
    name: 'email',
    type: 'email',
    autoComplete: 'off',
    required: true,
  },
};

SimpleError.args = {
  // icon: MailIcon,
  addOnLeft: '@',
  errors: ['Email address field is required'],
  label: 'Email Address',
  input: {
    placeholder: 'yourname@email.com',
    id: 'login-email',
    name: 'email',
    type: 'email',
    autoComplete: 'off',
    required: true,
  },
};

SimpleCounter.args = {
  ...SimpleDefault.args,
  counter: true,
  input: {
    ...SimpleDefault.args.input,
    maxLength: 64,
  },
};

SimpleCounterWithDefault.args = {
  ...SimpleDefault.args,
  defaultValue: 'example default value',
  counter: true,
  input: {
    ...SimpleDefault.args.input,
    maxLength: 64,
  },
};

SimpleCounterWithValue.args = {
  ...SimpleDefault.args,
  defaultValue: 'example controlled value',
  counter: true,
  input: {
    ...SimpleDefault.args.input,
    maxLength: 64,
  },
};

SimpleIconWithCounter.args = {
  ...SimpleIcon.args,
  counter: true,
  input: {
    ...SimpleIcon.args.input,
    maxLength: 64,
  },
};

SimpleErrorWithCounter.args = {
  ...SimpleError.args,
  counter: true,
  input: {
    ...SimpleError.args.input,
    maxLength: 64,
  },
};
