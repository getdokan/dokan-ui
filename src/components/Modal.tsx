import * as Dialog from '@radix-ui/react-dialog';
import React, { memo } from 'react';
import { classNames } from '@/utils';

// ----------- Types -----------
export type ModalProps = Omit<React.ComponentPropsWithoutRef<typeof Dialog.Content>, 'onOpenChange'> & {
  isOpen: boolean;
  onClose: () => void;
  showXButton?: boolean;
  className?: string;
};

export type TitleProps = React.ComponentPropsWithoutRef<typeof Dialog.Title>;
export type ContentProps = React.HTMLAttributes<HTMLDivElement>;
export type FooterProps = React.HTMLAttributes<HTMLDivElement>;

interface ModalComponent extends React.FC<ModalProps> {
  Title: React.FC<TitleProps>;
  Content: React.FC<ContentProps>;
  Footer: React.FC<FooterProps>;
}

// ----------- Root Modal -----------
const ModalRoot: React.FC<ModalProps> = ({ children, className, isOpen, onClose, showXButton = true, ...rest }) => {
  // ----------- Classes -----------
  const overlayClasses =
    'fixed inset-0 z-10 backdrop-blur-[1px] bg-black/25 data-[state=open]:animate-modal-overlay-enter data-[state=closed]:animate-modal-overlay-exit';

  const contentClasses = classNames(
    'fixed left-1/2 top-1/2 z-20 w-[90vw] max-w-lg max-h-[85vh] overflow-y-auto',
    'rounded bg-white shadow-xl focus:outline-none',
    'transform -translate-x-1/2 -translate-y-1/2 will-change-[transform,opacity]',
    'data-[state=open]:animate-modal-enter data-[state=closed]:animate-modal-exit',
    className
  );

  const closeButtonClasses =
    'absolute right-2 top-2 rounded p-1.5 transition-colors duration-150 text-sm text-gray-500 hover:text-gray-700 focus:outline-none';

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className={overlayClasses} />
        <Dialog.Content className={contentClasses} {...rest}>
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
};

ModalRoot.displayName = 'Modal';

// ----------- Sub components -----------

// Title
const Title: React.FC<TitleProps> = ({ children, className, ...rest }) => {
  const titleClasses = classNames('p-4 font-semibold', className);
  return (
    <Dialog.Title className={titleClasses} {...rest}>
      {children}
    </Dialog.Title>
  );
};
Title.displayName = 'Modal.Title';

// Content
const Content: React.FC<ContentProps> = ({ children, className, ...rest }) => {
  const contentClasses = classNames('p-4', className);
  return (
    <div className={contentClasses} {...rest}>
      {children}
    </div>
  );
};
Content.displayName = 'Modal.Content';

// Footer
const Footer: React.FC<FooterProps> = ({ children, className, ...rest }) => {
  const footerClasses = classNames('p-4 flex justify-end gap-2', className);
  return (
    <div className={footerClasses} {...rest}>
      {children}
    </div>
  );
};
Footer.displayName = 'Modal.Footer';

// ----------- Compound Assignment -----------
const Modal = memo(ModalRoot) as unknown as ModalComponent;
Modal.Title = Title;
Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;
