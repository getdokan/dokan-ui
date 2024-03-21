import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  decorators: [(Story) => <div className="h-96 flex items-center justify-center">{<Story />}</div>],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    showXButton: true,
    onClose: () => {},
  },

  render: (args) => {
    const [_, updateArgs] = useArgs();
    return (
      <>
        <Button color="primary" label="Open Modal" onClick={() => updateArgs({ ...args, isOpen: true })}></Button>
        <Modal className="max-w-2xl" {...args} onClose={() => updateArgs({ ...args, isOpen: false })}>
          <Modal.Title className="border-b">Modal Title</Modal.Title>
          <Modal.Content>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo doloribus et quisquam laborum amet
            dolorem magnam ipsum neque consectetur consequatur, ipsam optio deserunt accusamus voluptatem reprehenderit
            possimus quo fugit impedit quas totam ullam dolore! Maxime corporis quaerat eos. Exercitationem a, alias
            perspiciatis facilis saepe in officiis aspernatur ducimus minima inventore!
          </Modal.Content>
          <Modal.Footer className="border-t">
            <Button color="red" label="Close Modal" onClick={() => updateArgs({ ...args, isOpen: false })}></Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
