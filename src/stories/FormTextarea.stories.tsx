import FormTextarea, { FormTextareaProps } from '@/components/FormTextarea';
import { Meta } from '@storybook/react';

const meta: Meta<typeof FormTextarea> = {
  title: 'FormTextarea',
  component: FormTextarea,
  tags: ['autodocs'],
};

export default meta;

export const Default = (args: FormTextareaProps) => <FormTextarea {...args} />;
export const Error = (args: FormTextareaProps) => <FormTextarea {...args} />;
export const Disabled = (args: FormTextareaProps) => <FormTextarea {...args} />;

Default.args = {
  id: 'contact-message',
  name: 'message',
  placeholder: 'Type your message here',
  rows: 3,
};

Error.args = {
  id: 'contact-message',
  name: 'message',
  placeholder: 'Type your message here',
  rows: 3,
  isError: true,
};

Disabled.args = {
  id: 'contact-message',
  name: 'message',
  placeholder: 'Type your message here',
  rows: 3,
  disabled: true,
};
