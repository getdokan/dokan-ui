import { RadioGroup } from '@headlessui/react';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FiBox, FiTruck } from 'react-icons/fi';

const meta: Meta = {
  title: 'RadioGroup',
  component: RadioGroup,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    allowDeselect: true,
    className: 'w-80',
    options: [
      {
        label: 'Custom Shipping',
        value: 'custom',
        description: 'Manually calculate the shipping rates and ship depending on your needs.',
        icon: <FiBox />,
      },
      {
        label: 'Carrier Based Shipping',
        value: 'carrier',
        description: 'Send your delivery through third-part delivery provider.',
        icon: <FiTruck />,
      },
    ],
  },
  render: (args) => {
    const [selected, setSelected] = useState('');
    return (
      <>
        <RadioGroup {...args} onChange={(selectedValue: string) => setSelected(selectedValue)}></RadioGroup>
        <p className="text-gray-600 text-sm">Current Value: {selected}</p>
      </>
    );
  },
};
