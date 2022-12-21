import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export type ModalProps = {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  showXButton?: boolean;
  onClose: () => void;
} & HTMLAttributes<HTMLDivElement>;

const Modal = ({
  children,
  showXButton = true,
  className,
  isOpen,
  onClose,
}: ModalProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-auto"
          onClose={onClose}
        >
          <div className="min-h-screen p-4 text-center flex">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            {/* <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span> */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={twMerge(
                  'relative inline-block text-left w-full rounded transition-all transform bg-white shadow-xl self-center',
                  className
                )}
              >
                {children}
                {showXButton && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-2 top-2 rounded-primary p-1.5 transition-colors duration-150 text-sm text-gray-500 hover:text-gray-700 outline-none focus:outline-none"
                  >
                    &#10005;
                  </button>
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export type TitleProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const Title: React.FunctionComponent<TitleProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={twMerge('p-4 font-semibold', className)} {...rest}>
      {children}
    </div>
  );
};

export type ContentProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const Content: React.FunctionComponent<ContentProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={twMerge('p-4', className)} {...rest}>
      {children}
    </div>
  );
};

export type FooterProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const Footer: React.FunctionComponent<FooterProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={twMerge('p-4', className)} {...rest}>
      {children}
    </div>
  );
};

Modal.Title = Title;
Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;
