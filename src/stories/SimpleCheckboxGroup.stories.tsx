import SimpleCheckboxGroup from '@/components/SimpleCheckboxGroup';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof SimpleCheckboxGroup> = {
  title: 'SimpleCheckboxGroup',
  component: SimpleCheckboxGroup,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'taxClasses',
    options: [
      { label: 'Standard Rate', value: 'standard' },
      { label: 'Reduced Rate', value: 'reduced' },
      { label: 'Zero Rate', value: 'zero' },
    ],
    defaultValue: ['reduced'],
  },
  render: (args) => {
    const [selected, setSelected] = useState<Array<string | number>>([]);

    return (
      <>
        <SimpleCheckboxGroup {...args} onChange={(checkedList) => setSelected(checkedList)} />
        <p className="text-gray-600 text-sm">Current Value: {selected.join(', ')}</p>
      </>
    );
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Choose tax classes',
    helpText: 'You can choose as many as class you want to attach with the country.',
    name: 'taxClasses',
    options: [
      { label: 'Standard Rate', value: 'standard' },
      { label: 'Reduced Rate', value: 'reduced' },
      { label: 'Zero Rate', value: 'zero' },
    ],
  },
  render: (args) => {
    const [selected, setSelected] = useState<Array<string | number>>([]);

    return (
      <>
        <SimpleCheckboxGroup {...args} onChange={(checkedList) => setSelected(checkedList)} />
        <p className="text-gray-600 text-sm">Current Value: {selected.join(', ')}</p>
      </>
    );
  },
};

export const WithLabelAndError: Story = {
  args: {
    label: 'Choose tax classes',
    helpText: 'You can choose as many as class you want to attach with the country.',
    name: 'taxClasses',
    options: [
      { label: 'Standard Rate', value: 'standard' },
      { label: 'Reduced Rate', value: 'reduced' },
      { label: 'Zero Rate', value: 'zero' },
    ],
    errors: ['You must choose at least one from the above list.'],
  },
  render: (args) => {
    const [selected, setSelected] = useState<Array<string | number>>([]);

    return (
      <>
        <SimpleCheckboxGroup {...args} onChange={(checkedList) => setSelected(checkedList)} />
        <p className="text-gray-600 text-sm">Current Value: {selected.join(', ')}</p>
      </>
    );
  },
};
