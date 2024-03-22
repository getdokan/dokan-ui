import SimpleRadio from '@/components/SimpleRadio';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SimpleRadio> = {
  title: 'SimpleRadioGroup',
  component: SimpleRadio,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
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

export const WithLabel: Story = {
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

export const WithLabelAndSelectedBackground: Story = {
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

export const WithLabelAndDefault: Story = {
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

export const WithLabelAndValue: Story = {
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

export const WithLabelAndError: Story = {
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
