import Container from '@/components/Container';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Container',
  component: Container,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore vero hic et quaerat velit, ab aliquam adipisci tenetur, veritatis iste a facere. Earum, vero nam numquam amet accusamus sunt corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam natus repudiandae sapiente, animi est, assumenda corporis, officiis veniam similique distinctio esse molestias cum ad dignissimos. Soluta accusamus placeat tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, perferendis consequuntur corporis omnis laborum sit quas reprehenderit? Numquam quibusdam ad reiciendis doloribus illum modi! Dolor voluptatibus in expedita sint distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sequi quam optio illo, quo deserunt harum necessitatibus dolorem nobis omnis temporibus iusto ex, quibusdam ipsum. Quae repellat molestiae libero repudiandae!',
    className: 'border border-gray-300 p-4 rounded',
  },
  render: (args) => <Container {...args} />,
};
