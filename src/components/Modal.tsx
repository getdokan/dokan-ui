import { classNames } from '@/utils';
import * as Dialog from '@radix-ui/react-dialog';
import React, { HTMLAttributes, memo, useCallback } from 'react';

export type ModalProps = {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  showXButton?: boolean;
  onClose: () => void;
} & HTMLAttributes<HTMLDivElement>;

export type TitleProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export type ContentProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export type FooterProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

interface ModalComponent extends React.NamedExoticComponent<ModalProps> {
  Title: React.NamedExoticComponent<TitleProps>;
  Content: React.NamedExoticComponent<ContentProps>;
  Footer: React.NamedExoticComponent<FooterProps>;
}

const Modal = memo<ModalProps>(({ children, showXButton = true, className, isOpen, onClose }) => {
  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) onClose();
    },
    [onClose]
  );

  // Pre-calculate classes for better performance
  const overlayClasses =
    'fixed inset-0 bg-black/25 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=open]:opacity-100 data-[state=closed]:opacity-0 data-[state=open]:delay-0 data-[state=closed]:delay-100';

  const contentClasses = classNames(
    'fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-lg',
    'rounded bg-white shadow-xl focus:outline-none',
    'transform -translate-x-1/2 -translate-y-1/2',
    'transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
    'data-[state=open]:opacity-100 data-[state=open]:scale-100 data-[state=open]:delay-75',
    'data-[state=closed]:opacity-0 data-[state=closed]:scale-98 data-[state=closed]:delay-0',
    className
  );

  const closeButtonClasses =
    'absolute right-2 top-2 rounded p-1.5 transition-colors duration-150 text-sm text-gray-500 hover:text-gray-700 focus:outline-none';

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={overlayClasses} />
        <Dialog.Content className={contentClasses}>
          {children}
          {showXButton && <Dialog.Close className={closeButtonClasses}>&#10005;</Dialog.Close>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
});

Modal.displayName = 'Modal';

const Title = memo<TitleProps>(({ children, className, ...rest }) => {
  const titleClasses = classNames('p-4 font-semibold', className);

  return (
    <Dialog.Title className={titleClasses} {...rest}>
      {children}
    </Dialog.Title>
  );
});

Title.displayName = 'Modal.Title';

const Content = memo<ContentProps>(({ children, className, ...rest }) => {
  const contentClasses = classNames('p-4', className);

  return (
    <Dialog.Description className={contentClasses} {...rest}>
      {children}
    </Dialog.Description>
  );
});

Content.displayName = 'Modal.Content';

const Footer = memo<FooterProps>(({ children, className, ...rest }) => {
  const footerClasses = classNames('p-4', className);

  return (
    <div className={footerClasses} {...rest}>
      {children}
    </div>
  );
});

Footer.displayName = 'Modal.Footer';

(Modal as ModalComponent).Title = Title;
(Modal as ModalComponent).Content = Content;
(Modal as ModalComponent).Footer = Footer;

export default Modal as ModalComponent;
