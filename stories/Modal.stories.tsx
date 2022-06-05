import React from 'react';
import { Meta, Story } from '@storybook/react';
import Modal, { ModalProps } from '../src/Modal';

const meta: Meta = {
    title: 'Modal',
    component: Modal,
};

export default meta;

const Template: Story<ModalProps> = args => <Modal {...args}>
  <Modal.Title>View Post</Modal.Title>
  <Modal.Content>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, omnis? Animi officia doloremque rem cum, deleniti commodi expedita atque, modi ad aliquam dicta accusantium optio qui velit voluptates consequatur labore!
  </Modal.Content>
</Modal>;

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
  showXButton: true,
  onClose: () => alert('Close Clicked'),
};
