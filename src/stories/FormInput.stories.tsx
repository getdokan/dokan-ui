import FormInput, { FormInputElementProps } from '@/components/FormInput';
import { Meta } from '@storybook/react';

const meta: Meta<typeof FormInput> = {
  title: 'FormInput',
  component: FormInput,
  tags: ['autodocs'],
};

export default meta;

export const Default = (args: FormInputElementProps) => <FormInput {...args} />;
export const Error = (args: FormInputElementProps) => <FormInput {...args} />;
export const Disabled = (args: FormInputElementProps) => <FormInput {...args} />;

Default.args = {
  id: 'login-email',
  name: 'email',
  type: 'email',
  autoComplete: 'off',
  placeholder: 'yourname@email.com',
};

Error.args = {
  placeholder: 'yourname@email.com',
  id: 'login-email',
  name: 'email',
  type: 'email',
  autoComplete: 'off',
  isError: true,
};

Disabled.args = {
  placeholder: 'yourname@email.com',
  id: 'login-email',
  name: 'email',
  type: 'email',
  autoComplete: 'off',
  disabled: true,
};
