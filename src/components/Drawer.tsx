import { classNames } from '@/utils';
import { Drawer as VaulDrawer } from 'vaul';
import { ReactNode } from 'react';
import CloseIcon from './icons/CloseIcon';

export type DrawerProps = {
  direction?: 'ltr' | 'rtl';
  isOpen: boolean;
  children: ReactNode;
  setIsOpen: (open: boolean) => void;
};

const Drawer = ({ direction = 'ltr', isOpen, setIsOpen, children, ...rest }: DrawerProps) => {
  // Close button
  const closeButton = (
    <VaulDrawer.Close className="flex pt-5 px-2">
      <span className="sr-only">Close sidebar</span>
      <CloseIcon color="white" />
    </VaulDrawer.Close>
  );

  // Content
  const content = <div className="flex-1 h-full overflow-y-auto bg-white">{children}</div>;

  // Render content in the correct order based on direction
  const renderContent = () => {
    return direction === 'ltr' ? [closeButton, content] : [content, closeButton];
  };

  return (
    <VaulDrawer.Root
      key={direction}
      open={isOpen}
      onOpenChange={setIsOpen}
      direction={direction === 'ltr' ? 'right' : 'left'}
      {...rest}
    >
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className="fixed z-20 inset-0 bg-gray-600/75" />

        <VaulDrawer.Content
          className={classNames(
            'fixed top-0 h-full flex z-40 max-w-sm w-full outline-none',
            direction === 'ltr' ? 'right-0' : 'left-0'
          )}
        >
          {renderContent()}
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
};

export default Drawer;
