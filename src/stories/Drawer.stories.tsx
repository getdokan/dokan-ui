import Button from '@/components/Button';
import Drawer from '@/components/Drawer';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof Drawer> = {
  title: 'Drawer',
  component: Drawer,
  tags: ['autodocs'],
  decorators: [(Story) => <div className="h-96 flex items-center justify-center">{<Story />}</div>],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    direction: 'ltr',
    onClose: () => {},
  },

  render: (args) => {
    const [_, updateArgs] = useArgs();
    return (
      <>
        <Button color="primary" label="Open Drawer" onClick={() => updateArgs({ isOpen: true })}></Button>
        <Drawer {...args} onClose={() => updateArgs({ isOpen: false })}>
          <div className="px-6">Drawer Content</div>
        </Drawer>
      </>
    );
  },
};
