import FormLabel, { FormLabelProps } from '@/components/FormLabel';
import { Meta } from '@storybook/react';

const meta: Meta<typeof FormLabel> = {
  title: 'FormLabel',
  component: FormLabel,
  tags: ['autodocs'],
};

export default meta;

export const Default = (args: FormLabelProps) => <FormLabel {...args} />;
export const Error = (args: FormLabelProps) => <FormLabel {...args} />;
export const Disabled = (args: FormLabelProps) => <FormLabel {...args} />;

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
