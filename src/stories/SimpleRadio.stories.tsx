import SimpleRadio from '@/components/SimpleRadio';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SimpleRadio> = {
  title: 'SimpleRadioGroup',
  component: SimpleRadio,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleRadioGroup: Story = {
  args: {
    name: 'tax-class-selection',
    options: [
      { label: 'Standard Rate', value: 'standard' },
      { label: 'Reduced Rate', value: 'reduced' },
      { label: 'Zero Rate', value: 'zero' },
    ],
  },
  render: (args) => <SimpleRadio {...args} />,
};

export const SimpleRadioGroupWithLabel: Story = {
  args: {
    label: 'Assign another tax class',
    helpText: 'You should assign another class before deleting a class.',
    name: 'tax-class-selection',
    options: [
      { label: 'Standard Rate', value: 'standard' },
      { label: 'Reduced Rate', value: 'reduced' },
      { label: 'Zero Rate', value: 'zero' },
    ],
  },
  render: (args) => <SimpleRadio {...args} />,
};

export const SimpleRadioGroupWithLabelAndSelectedBackground: Story = {
  args: {
    label: 'Assign another tax class',
    helpText: 'You should assign another class before deleting a class.',
    name: 'tax-class-selection',
    options: [
      { label: 'Standard Rate', value: 'standard' },
      { label: 'Reduced Rate', value: 'reduced' },
      { label: 'Zero Rate', value: 'zero' },
    ],
    selectedOptionClass: 'bg-blue-100',
  },
  render: (args) => <SimpleRadio {...args} />,
};

export const SimpleRadioGroupWithLabelAndDefault: Story = {
  args: {
    label: 'Assign another tax class',
    helpText: 'You should assign another class before deleting a class.',
    name: 'tax-class-selection',
    options: [
      { label: 'Standard Rate', value: 'standard' },
      { label: 'Reduced Rate', value: 'reduced' },
      { label: 'Zero Rate', value: 'zero' },
    ],
    defaultValue: 'zero',
  },

  render: (args) => <SimpleRadio {...args} />,
};

export const SimpleRadioGroupWithLabelAndValue: Story = {
  args: {
    label: 'Assign another tax class',
    helpText: 'You should assign another class before deleting a class.',
    name: 'tax-class-selection',
    options: [
      { label: 'Standard Rate', value: 'standard' },
      { label: 'Reduced Rate', value: 'reduced' },
      { label: 'Zero Rate', value: 'zero' },
    ],
    value: 'reduced',
  },
  render: (args) => <SimpleRadio {...args} />,
};

export const SimpleRadioGroupWithLabelAndError: Story = {
  args: {
    label: 'Assign another tax class',
    helpText: 'You should assign another class before deleting a class.',
    name: 'tax-class-selection',
    options: [
      { label: 'Standard Rate', value: 'standard' },
      { label: 'Reduced Rate', value: 'reduced' },
      { label: 'Zero Rate', value: 'zero' },
    ],
    errors: ['You must choose one from the above list.'],
  },
  render: (args) => <SimpleRadio {...args} />,
};
