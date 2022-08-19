import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dropdown, { DropdownProps } from '../src/Dropdown';
import { ChevronDown } from 'react-feather';

const meta: Meta = {
  title: 'Dropdown',
  component: Dropdown,
};

export default meta;

const Template: Story<DropdownProps> = (args) => (
  <div className="h-96 flex items-center justify-center">
    <Dropdown className={args.className} placement={args.placement}>
      <Dropdown.Trigger>
        <div className="flex items-center px-4 py-2 text-sm border text-gray-600 border-gray-200 rounded">
          <span>Action</span>
          <ChevronDown size={16} className="ml-1 text-gray-600" />
        </div>
      </Dropdown.Trigger>
      <Dropdown.List>
        <p className="px-4 py-2 text-sm hover:bg-gray-100">Edit</p>
        <p className="px-4 py-2 text-sm hover:bg-gray-100">Delete</p>
      </Dropdown.List>
    </Dropdown>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  className: 'w-32 rounded shadow-md bg-white',
  placement: 'bottom-end',
};
