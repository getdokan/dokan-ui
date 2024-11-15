import SimpleInput, { SimpleInputProps } from '@/components/SimpleInput';
import { Meta } from '@storybook/react';
import { HiMail } from 'react-icons/hi';

const meta: Meta<typeof SimpleInput> = {
  title: 'SimpleInput',
  component: SimpleInput,
};

export default meta;

export const Default = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const LeftAddon = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const RightAddon = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const Icon = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const Error = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const Counter = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const CounterWithDefault = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const CounterWithValue = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const IconWithCounter = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const ErrorWithCounter = (args: SimpleInputProps) => <SimpleInput {...args} />;

Default.args = {
  label: 'Email Address',
  input: {
    id: 'login-email',
    name: 'email',
    type: 'email',
    autoComplete: 'off',
    placeholder: 'yourname@email.com',
  },
  required: true,
};

LeftAddon.args = {
  addOnLeft: 'http://',
  label: 'Web Address',
  className: 'pl-[68px]',
  input: {
    id: 'login-web',
    name: 'web',
    type: 'text',
    autoComplete: 'off',
    placeholder: 'google.com',
  },
  required: true,
};
RightAddon.args = {
  addOnRight: '.dokan.cloud',
  className: 'pr-[110px]',
  label: 'Store Name',
  input: {
    id: 'login-storename',
    name: 'storename',
    type: 'text',
    autoComplete: 'off',
    placeholder: 'daraz',
  },
  required: true,
};

Icon.args = {
  icon: HiMail,
  label: 'Email Address',
  className: '',
  input: {
    placeholder: 'yourname@email.com',
    id: 'login-email',
    name: 'email',
    type: 'email',
    autoComplete: 'off',
  },
  required: true,
};

Error.args = {
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
  },
  required: true,
};

Counter.args = {
  ...Default.args,
  counter: true,
  input: {
    ...Default.args.input,
    maxLength: 64,
  },
};

CounterWithDefault.args = {
  ...Default.args,
  defaultValue: 'example default value',
  counter: true,
  input: {
    ...Default.args.input,
    maxLength: 64,
  },
};

CounterWithValue.args = {
  ...Default.args,
  defaultValue: 'example controlled value',
  counter: true,
  input: {
    ...Default.args.input,
    maxLength: 64,
  },
};

IconWithCounter.args = {
  ...Icon.args,
  counter: true,
  input: {
    ...Icon.args.input,
    maxLength: 64,
  },
};

ErrorWithCounter.args = {
  ...Error.args,
  counter: true,
  input: {
    ...Error.args.input,
    maxLength: 64,
  },
};
