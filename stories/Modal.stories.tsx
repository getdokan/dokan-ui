import React from 'react';
import { Meta, Story } from '@storybook/react';
import Modal, { ModalProps } from '../src/Modal';
import Button from '../src/Button';
import { useArgs } from '@storybook/client-api';

const meta: Meta = {
  title: 'Modal',
  component: Modal,
  decorators: [
    (Story) => (
      <div className="h-96 flex items-center justify-center">{<Story />}</div>
    ),
  ],
};

export default meta;

const Template: Story<ModalProps> = (args) => {
  const [_, updateArgs] = useArgs();
  return (
    <>
      <Button
        color="primary"
        label="Open Modal"
        onClick={() => updateArgs({ ...args, isOpen: true })}
      ></Button>
      <Modal {...args} onClose={() => updateArgs({ ...args, isOpen: false })}>
        <Modal.Title>Modal Title</Modal.Title>
        <Modal.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          omnis? Animi officia doloremque rem cum, deleniti commodi expedita
          atque, modi ad aliquam dicta accusantium optio qui velit voluptates
          consequatur labore!
        </Modal.Content>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
  showXButton: true,
  onClose: () => {},
};
