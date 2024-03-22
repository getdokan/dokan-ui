import { classNames } from '@/utils';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { HiX } from 'react-icons/hi';

export type DrawerProps = {
  direction?: 'ltr' | 'rtl';
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Drawer = ({ direction = 'ltr', isOpen, onClose, children }: DrawerProps) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>

        <div className={classNames('fixed inset-0 flex z-40', direction === 'ltr' ? 'justify-end' : 'justify-start')}>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom={direction === 'ltr' ? 'translate-x-full' : '-translate-x-full'}
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo={direction === 'ltr' ? 'translate-x-full' : '-translate-x-full'}
          >
            <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className={`absolute pt-2 top-0 ${direction === 'ltr' ? '-left-12' : '-right-12'}`}>
                  <button
                    type="button"
                    className="ms-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <HiX className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="mt-5 flex-1 h-full overflow-y-auto" dir={direction}>
                {children}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Drawer;
