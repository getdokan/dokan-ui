import { Meta, StoryObj } from '@storybook/react';
import Box from '../components/Box';

const meta: Meta = {
  title: 'Box',
  component: Box,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hello, World!',
  },
};

export const WithShadow: Story = {
  args: {
    children: 'Hello, World!',
    shadow: true,
  },
};
