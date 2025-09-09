import Button from '@/components/Button';
import Modal, { ModalProps } from '@/components/Modal';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  decorators: [(Story) => <div className="h-96 flex items-center justify-center">{<Story />}</div>],
  argTypes: {
    onInteractOutside: {
      control: false, // no auto control, but we’ll log manually
      description: `
                onInteractOutside={(e) => e.preventDefault()}`,
      table: {
        category: 'Events',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    showXButton: true,
    onClose: () => {},
  },

  render: () => {
    const [args, updateArgs] = useArgs<ModalProps>();
    return (
      <>
        <Button color="primary" label="Open Modal" onClick={() => updateArgs({ ...args, isOpen: true })}></Button>
        <Modal
          className="max-w-2xl"
          {...args}
          // 👇 storybook preview: show how onInteractOutside works
          onInteractOutside={(event: React.MouseEvent<HTMLDivElement>) => {
            console.log('Outside interaction triggered:', event);
            // Example: prevent closing when clicked outside
            event.preventDefault();
            alert('You clicked outside the modal!\nRemove e.preventDefault() to allow closing.');

            // If consumer passes custom handler, call it
            args.onInteractOutside?.(event);
          }}
          onClose={() => updateArgs({ ...args, isOpen: false })}
        >
          <Modal.Title className="border-b">Modal Title</Modal.Title>
          <Modal.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. This modal won’t close if you click outside because
            we called
            <code> e.preventDefault() </code> in <b>onInteractOutside</b>. if you want to close the modal on outside
            click, you can set so don't call <code> e.preventDefault() </code> in <b>onInteractOutside</b>.
          </Modal.Content>
          <Modal.Footer className="border-t">
            <Button color="red" label="Close Modal" onClick={() => updateArgs({ ...args, isOpen: false })}></Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
