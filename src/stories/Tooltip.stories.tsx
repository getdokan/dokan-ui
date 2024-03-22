import Tooltip, { TooltipProps } from '@/components/Tooltip';
import { Meta } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
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

export const Default = (args: TooltipProps) => (
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

Default.args = {
  content: 'Tooltip Content',
  direction: 'top',
};

Default.parameters = {
  docs: {
    source: {
      code: `<Tooltip content="Tooltip Content" direction="top">
    {(toolTipTriggerProps) => (
        <div
            {...toolTipTriggerProps}
            className="inline-flex px-6 py-2 text-sm border border-gray-300 rounded text-gray-600 hover:text-gray-800 cursor-pointer"
        >
            Hover Me
        </div>
    )}
</Tooltip>`,
    },
  },
};
