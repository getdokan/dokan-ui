import { Meta, StoryObj } from '@storybook/react';
import useToast from '@/components/use-toast.tsx';
import Button from '@/components/Button.tsx';
import { Toaster } from 'react-hot-toast';
import { Fragment } from 'react';
import ToastBody from '@/components/toast-body.tsx';

const meta: Meta<typeof ToastBody> = {
  title: 'Toast',
  component: ToastBody,
};

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    title: 'Show Success',
    type: 'success'
  }
  ,
  render: () => {
    const toast = useToast();
    return (
      <Fragment>
        <Toaster />
        <Button onClick={() => {
          toast({
            title: 'Show Success',
            type: 'success'
          })
        }} color={'indigo'}>Show</Button>
      </Fragment>

    )
  },
};

export const Error: Story = {
  args: {
    title: 'Show Error',
    type: 'error'
  }
  ,
  render: () => {
    const toast = useToast();
    return (
      <Fragment>
        <Toaster />
        <Button onClick={() => {
          toast({
            title: 'Show Error',
            type: 'error'
          })
        }} color={'indigo'}>Show</Button>
      </Fragment>

    )
  },
};

export const Description: Story = {
  args: {
    title: 'Show Error',
    type: 'error',
    subtitle: 'This is a descirpiton'
  }
  ,
  render: () => {
    const toast = useToast();
    return (
      <Fragment>
        <Toaster />
        <Button onClick={() => {
          toast({
            title: 'Show Description',
            type: 'success',
            subtitle: 'This is a descirpiton'
          })
        }} color={'indigo'}>Show</Button>
      </Fragment>

    )
  },
};
