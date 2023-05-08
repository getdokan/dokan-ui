import React from 'react';
import { Meta, Story } from '@storybook/react';
import ConfirmModal, { ConfirmModalProps } from '../src/ConfirmModal';
import Button from '../src/Button';
import { useArgs } from '@storybook/client-api';

const meta: Meta = {
  title: 'ConfirmModal',
  component: ConfirmModal,
  decorators: [
    (Story) => (
      <div className="h-96 flex items-center justify-center">{<Story />}</div>
    ),
  ],
};

export default meta;

const Template: Story<ConfirmModalProps> = (args) => {
  const [_, updateArgs] = useArgs();
  return (
    <>
      <Button
        color="primary"
        label="Open Modal"
        onClick={() => updateArgs({ ...args, isOpen: true })}
      ></Button>
      <ConfirmModal
        className="max-w-2xl"
        {...args}
        onConfirm={() => updateArgs({ ...args, isOpen: false })}
        onCancel={() => updateArgs({ ...args, isOpen: false })}
      ></ConfirmModal>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
  onConfirm: () => {},
  onCancel: () => {},
};
