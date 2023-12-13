import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FiChevronDown } from 'react-icons/fi';
import Dropdown, { DropdownProps } from '../src/Dropdown';

const meta: Meta = {
  title: 'Dropdown',
  component: Dropdown,
};

export default meta;

const Template: Story<DropdownProps> = (args) => (
  <div className="h-96 flex items-center justify-center">
    <Dropdown
      className={args.className}
      placement={args.placement}
      showArrow={args.showArrow}
    >
      <Dropdown.Trigger>
        <div className="flex items-center px-4 py-2 text-sm border text-gray-600 border-gray-200 rounded">
          <span>Action</span>
          <FiChevronDown size={16} className="ml-1 text-gray-600" />
        </div>
      </Dropdown.Trigger>
      <Dropdown.Content className="w-32">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  placement: 'bottom-end',
  showArrow: false,
};
