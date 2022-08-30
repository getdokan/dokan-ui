import React from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleAlert, { SimpleAlertProps } from '../src/SimpleAlert';

const meta: Meta = {
  title: 'Alert',
  component: SimpleAlert,
};

export default meta;

const Template: Story<SimpleAlertProps> = (args) => <SimpleAlert {...args} />;
const TemplateWithDescription: Story<SimpleAlertProps> = (args) => (
  <SimpleAlert {...args}>
    <div className="text-sm mt-1">
      We are not able to process your request now. You can learn more about
      this.
    </div>
  </SimpleAlert>
);

export const Default = Template.bind({});
export const WithDescription = TemplateWithDescription.bind({});

Default.args = {
  label: 'Successfully Created',
  type: 'success',
  color: 'green',
};

WithDescription.args = {
  label: 'Something is wrong!',
  type: 'info',
  color: 'yellow',
};
