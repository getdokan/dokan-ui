import { classNames } from '@/utils';
import * as Dialog from '@radix-ui/react-dialog';
import React, { HTMLAttributes, memo, useCallback } from 'react';

export type ModalProps = {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  showXButton?: boolean;
  onClose: () => void;
  closeOnOutsideClick?: boolean;
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

const Modal = memo<ModalProps>(
  ({ children, showXButton = true, className, isOpen, onClose, closeOnOutsideClick = true, ...rest }) => {
    const handleOpenChange = useCallback(
      (open: boolean) => {
        if (!open) {
          onClose();
        }
      },
      [onClose]
    );

    const handleInteractOutside = useCallback(
      (e: Event) => {
        if (!closeOnOutsideClick) {
          e.preventDefault();
        }
      },
      [closeOnOutsideClick]
    );

    // Pre-calculate classes for better performance - using existing animations
    const overlayClasses =
      'fixed z-10 inset-0 bg-black/25 data-[state=open]:animate-slide-up-fade data-[state=closed]:animate-slide-down-fade-out';

    const contentClasses = classNames(
      'fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-lg',
      'rounded bg-white shadow-xl focus:outline-none',
      'transform -translate-x-1/2 -translate-y-1/2',
      'will-change-[transform,opacity]',
      'data-[state=open]:animate-slide-up-fade',
      'data-[state=closed]:animate-slide-down-fade-out',
      className
    );

    const closeButtonClasses =
      'absolute right-2 top-2 rounded p-1.5 transition-colors duration-150 text-sm text-gray-500 hover:text-gray-700 focus:outline-none';

    return (
      <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
        <Dialog.Portal>
          <Dialog.Overlay className={overlayClasses} />
          <Dialog.Content className={contentClasses} onInteractOutside={handleInteractOutside} {...rest}>
            {children}
            {showXButton && (
              <Dialog.Close className={closeButtonClasses} aria-label="Close" title="Close">
                &#10005;
              </Dialog.Close>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }
);

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
    <div className={contentClasses} {...rest}>
      {children}
    </div>
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
