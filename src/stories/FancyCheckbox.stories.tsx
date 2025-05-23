import FancyCheckbox, { FancyCheckboxProps } from '@/components/FancyCheckbox';
import { useArgs } from '@storybook/preview-api';
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
  render: () => {
    const [args] = useArgs<FancyCheckboxProps>();

    return <FancyCheckbox {...args} />;
  },
};
