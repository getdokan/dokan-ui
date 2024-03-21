import SimpleInput, { SimpleInputProps } from '@/components/SimpleInput';
import { Meta } from '@storybook/react';
import { HiMail } from 'react-icons/hi';

const meta: Meta<typeof SimpleInput> = {
  title: 'Input',
  component: SimpleInput,
};

export default meta;

export const SimpleDefault = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const SimpleLeftAddon = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const SimpleRightAddon = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const SimpleIcon = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const SimpleError = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const SimpleCounter = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const SimpleCounterWithDefault = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const SimpleCounterWithValue = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const SimpleIconWithCounter = (args: SimpleInputProps) => <SimpleInput {...args} />;
export const SimpleErrorWithCounter = (args: SimpleInputProps) => <SimpleInput {...args} />;

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
  className: 'pl-[68px]',
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
  className: 'pr-[110px]',
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
