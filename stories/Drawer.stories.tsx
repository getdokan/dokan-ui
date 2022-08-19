import React from 'react';
import { Meta, Story } from '@storybook/react';
import Drawer, { DrawerProps } from '../src/Drawer';

const meta: Meta = {
  title: 'Drawer',
  component: Drawer,
};

export default meta;

const Template: Story<DrawerProps> = (args) => {
  return (
    <Drawer {...args}>
      <div className="px-6">Drawer Content</div>
    </Drawer>
  );
};

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
  direction: 'ltr',
  onClose: () => alert('Close Clicked'),
};
