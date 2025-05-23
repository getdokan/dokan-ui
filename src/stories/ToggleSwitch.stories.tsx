import ToggleSwitch, { ToggleSwitchProps } from '@/components/ToggleSwitch';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
    label: 'Enable Shipping',
    color: 'primary',
  },
  render: () => {
    const [args, updateArgs] = useArgs<ToggleSwitchProps>();

    return (
      <ToggleSwitch
        {...args}
        onChange={(value) =>
          updateArgs({
            ...args,
            checked: value,
          })
        }
      />
    );
  },
};

export const WithHelpText: Story = {
  args: {
    checked: true,
    label: 'Enable Shipping',
    color: 'primary',
    helpText: 'This will enable shipping for your store',
  },
  render: () => {
    const [args, updateArgs] = useArgs<ToggleSwitchProps>();

    return (
      <ToggleSwitch
        {...args}
        onChange={(value) =>
          updateArgs({
            ...args,
            checked: value,
          })
        }
      />
    );
  },
};

export const WithDisabled: Story = {
  args: {
    checked: true,
    label: 'Enable Shipping',
    color: 'primary',
    disabled: true,
  } as ToggleSwitchProps,
  render: () => {
    const [args, updateArgs] = useArgs<ToggleSwitchProps>();

    return (
      <ToggleSwitch
        {...args}
        onChange={(value) =>
          updateArgs({
            ...args,
            checked: value,
          })
        }
      />
    );
  },
};
