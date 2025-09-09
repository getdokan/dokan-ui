import { classNames } from '@/utils';
import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode, useCallback } from 'react';
import { HiX } from 'react-icons/hi';

export type DrawerProps = {
  direction?: 'ltr' | 'rtl';
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Drawer = ({ direction = 'ltr', isOpen, onClose, children }: DrawerProps) => {
  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) onClose();
    },
    [onClose]
  );

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-600/75 transition-opacity ease-linear duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 " />

        <div className={classNames('fixed inset-0 flex z-40', direction === 'ltr' ? 'justify-end' : 'justify-start')}>
          <Dialog.Content
            className={classNames(
              'relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white',
              'transform',
              direction === 'ltr'
                ? 'data-[state=open]:animate-slide-in-from-right data-[state=closed]:animate-slide-out-to-right'
                : 'data-[state=open]:animate-slide-in-from-left data-[state=closed]:animate-slide-out-to-left'
            )}
          >
            <div className={`absolute pt-2 top-0 ${direction === 'ltr' ? '-left-12' : '-right-12'}`}>
              <Dialog.Close className="ms-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-opacity ease-in-out duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                <span className="sr-only">Close sidebar</span>
                <HiX className="h-6 w-6 text-white" aria-hidden="true" />
              </Dialog.Close>
            </div>
            <div className="mt-5 flex-1 h-full overflow-y-auto" dir={direction}>
              {children}
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Drawer;
