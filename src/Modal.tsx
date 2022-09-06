import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames';
import React, { Fragment, ReactElement } from 'react';

interface ContentProps {
  className?: string;
}
interface TitleProps {
  className?: string;
}
export interface ModalProps {
  children: ReactElement[];
  className?: string;
  isOpen: boolean;
  showXButton: boolean;
  onClose: () => void;
}

/**
 * @deprecated
 */
const Modal = ({
  children,
  showXButton,
  className,
  isOpen,
  onClose,
}: ModalProps) => {
  const title = children.find((el) => el.type === Title);
  const content = children.find((el) => el.type === Content);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-visible"
          onClose={onClose}
        >
          <div className="min-h-screen px-4 text-center">
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
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
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
                className={classNames(
                  className,
                  'inline-block w-full p-6 my-8 overflow-visible text-left transition-all transform bg-white shadow-xl'
                )}
              >
                <Dialog.Title
                  as="div"
                  className={`p-0 flex items-center ${title?.props.className}`}
                >
                  {title ? title.props.children : null}
                  {showXButton && (
                    <button
                      type="button"
                      onClick={onClose}
                      className="absolute top-0 right-0 p-4 ms-auto text-gray-600"
                    >
                      &#10005;
                    </button>
                  )}
                </Dialog.Title>
                <div className="mt-4">
                  {content ? content.props.children : null}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const Title: React.FunctionComponent<TitleProps> = ({ children }) => {
  return <>{children}</>;
};

const Content: React.FunctionComponent<ContentProps> = ({ children }) => {
  return <>{children}</>;
};

Modal.Title = Title;
Modal.Content = Content;

export default Modal;
