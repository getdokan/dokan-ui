import FancyCheckbox from '@/components/FancyCheckbox';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FancyCheckbox> = {
  title: 'Checkbox',
  component: FancyCheckbox,
  argTypes: {
    onChange: { control: false },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Fancy: Story = {
  args: {
    inputs: [
      {
        label: 'Apple',
        description: 'Fresh Apples',
        id: 'apple',
        name: 'apple',
      },
      {
        label: 'Orange',
        description: 'Fresh Oranges',
        id: 'orange',
        name: 'orange',
      },
      {
        label: 'Banana',
        description: 'Fresh Bananas',
        id: 'banana',
        name: 'banana',
      },
    ],
  },
  render: (args) => {
    return <FancyCheckbox {...args} />;
  },
};
