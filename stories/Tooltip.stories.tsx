import React from 'react';
import { Meta, Story } from '@storybook/react';
import Tooltip, { TooltipProps } from '../src/Tooltip';

const meta: Meta = {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <div className="h-96 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;

const Template: Story<TooltipProps> = (args) => (
  <Tooltip {...args}>
    {(toolTipTriggerProps) => (
      <div
        {...toolTipTriggerProps}
        className="inline-flex px-6 py-2 text-sm border border-gray-300 rounded text-gray-600 hover:text-gray-800 cursor-pointer"
      >
        Hover Me
      </div>
    )}
  </Tooltip>
);

export const Default = Template.bind({});

Default.args = {
  content: 'Tooltip Content',
  direction: 'top',
};
