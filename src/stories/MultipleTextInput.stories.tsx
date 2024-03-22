import { Meta, StoryObj } from '@storybook/react';

import MultipleTextInput from '@/components/MultipleTextInput';
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof MultipleTextInput> = {
  title: 'MultipleTextInput',
  component: MultipleTextInput,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'mt-2',
    value: ['Bangladesh', 'Afghanistan', 'Saudi Arabia'],
    label: 'Countries',
    helpText: '',
  },
  render: (args) => {
    const [_, updateArgs] = useArgs();
    return <MultipleTextInput {...args} setValue={(value) => updateArgs({ ...args, value: value })} />;
  },
};
