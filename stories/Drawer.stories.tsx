import React from 'react';
import { Meta, Story } from '@storybook/react';
import Drawer, { DrawerProps } from '../src/Drawer';
import Button from '../src/Button';
import { useArgs } from '@storybook/client-api';

const meta: Meta = {
  title: 'Drawer',
  component: Drawer,
  decorators: [
    (Story) => (
      <div className="h-96 flex items-center justify-center">{<Story />}</div>
    ),
  ],
};

export default meta;

const Template: Story<DrawerProps> = (args) => {
  const [_, updateArgs] = useArgs();
  return (
    <>
      <Button
        color="primary"
        label="Open Drawer"
        onClick={() => updateArgs({ ...args, isOpen: true })}
      ></Button>
      <Drawer {...args} onClose={() => updateArgs({ ...args, isOpen: false })}>
        <div className="px-6">Drawer Content</div>
      </Drawer>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
  direction: 'ltr',
  onClose: () => {},
};
