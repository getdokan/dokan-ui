import React from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleModal, { SimpleModalProps } from '../src/SimpleModal';

const meta: Meta = {
  title: 'SimpleModal',
  component: SimpleModal,
};

export default meta;

const Template: Story<SimpleModalProps> = (args) => (
  <SimpleModal {...args}>
    <SimpleModal.Header>
      <span>This is a Header</span>
      <div className="border-b min-w-full -ml-96 -mr-96 py-2"></div>
    </SimpleModal.Header>
    <SimpleModal.Body>This is a Body</SimpleModal.Body>
    <SimpleModal.Footer>
      <div className="border-t min-w-full -ml-96 -mr-96 py-2"></div>This is a
      Footer
    </SimpleModal.Footer>
  </SimpleModal>
);

export const Default = Template.bind({});
let isOpen = true;
Default.args = {
  isOpen,
  setIsOpen: (show) => (isOpen = show),
  widthClass: 'w-4/12',
  heightClass: '80vh',
};
