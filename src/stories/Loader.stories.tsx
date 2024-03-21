import Loader from '@/components/Loader';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Loader',
  component: Loader,
};

type Story = StoryObj<typeof meta>;

// const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

// export const Default = Template.bind({});

export default meta;

export const Default: Story = {
  args: {
    size: 50,
  },
  render: (args) => {
    return <Loader {...args} />;
  },
};
