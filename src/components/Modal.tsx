import { classNames } from '@/utils';
import * as Dialog from '@radix-ui/react-dialog';
import React, { HTMLAttributes } from 'react';

export type ModalProps = {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  showXButton?: boolean;
  onClose: () => void;
} & HTMLAttributes<HTMLDivElement>;

const Modal = ({ children, showXButton = true, className, isOpen, onClose }: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/25 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={classNames(
            'fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded bg-white shadow-xl',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
            'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
            'w-full max-w-lg duration-200',
            className
          )}
        >
          {children}
          {showXButton && (
            <Dialog.Close className="absolute right-2 top-2 rounded-primary p-1.5 transition-colors duration-150 text-sm text-gray-500 hover:text-gray-700 outline-none focus:outline-none">
              &#10005;
            </Dialog.Close>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export type TitleProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const Title: React.FunctionComponent<TitleProps> = ({ children, className, ...rest }) => {
  return (
    <Dialog.Title className={classNames('p-4 font-semibold', className)} {...rest}>
      {children}
    </Dialog.Title>
  );
};

export type ContentProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const Content: React.FunctionComponent<ContentProps> = ({ children, className, ...rest }) => {
  return (
    <Dialog.Description className={classNames('p-4', className)} {...rest}>
      {children}
    </Dialog.Description>
  );
};

export type FooterProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const Footer: React.FunctionComponent<FooterProps> = ({ children, className, ...rest }) => {
  return (
    <div className={classNames('p-4', className)} {...rest}>
      {children}
    </div>
  );
};

Modal.Title = Title;
Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;
