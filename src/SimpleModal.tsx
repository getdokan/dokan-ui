import React, { Fragment, FunctionComponent, ReactElement } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames';

type CSSUnit = `${number}${'px' | 'rem' | 'em' | 'vh' | 'vw' | '%'}` | 'auto';

export interface SimpleModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
  height?: CSSUnit;
  width?: CSSUnit;
  children: ReactElement[];
}

const SimpleModal = (props: SimpleModalProps) => {
  const header = props.children.find((el) => el.type === Header);
  const body = props.children.find((el) => el.type === Body);
  const footer = props.children.find((el) => el.type === Footer);

  function closeModal() {
    props.setIsOpen(false);
  }

  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog
        as="div"
        className={`fixed inset-0 z-10 overflow-y-auto`}
        static
        open={props.isOpen}
        onClose={closeModal}
      >
        <div
          className={classNames(
            'min-h-screen h-full px-4 text-center',
            props?.className && props.className
          )}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

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
              className={`inline-flex flex-col max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded`}
              style={{
                width: `${props.width || '100%'}`,
                minWidth: `${props.width || '100%'}`,
                height: `${props.height || `50vh`}`,
              }}
            >
              {/* Title */}
              <Dialog.Title
                as="h3"
                className={classNames(
                  'text-lg font-medium leading-6 text-gray-900',
                  header && header.props?.className && header.props.className
                )}
              >
                <div className="relative">
                  <section>
                    {header ? (
                      header.props.children
                    ) : (
                      <div className="p-5 border-b">Title</div>
                    )}
                  </section>
                  <p
                    className="absolute top-1/2 right-5 -translate-y-1/2 text-2xl text-gray-500 hover:cursor-pointer"
                    onClick={closeModal}
                  >
                    &times;
                  </p>
                </div>
              </Dialog.Title>

              {/* Body */}
              <div
                className={classNames(
                  'flex-grow overflow-y-auto h-100 p-5',
                  body && body.props?.className && body.props.className
                )}
              >
                {body ? (
                  body.props.children
                ) : (
                  <>This is a modal with empty body</>
                )}
              </div>

              {/* Footer */}
              <div
                className={classNames(
                  footer && footer.props?.className && footer.props.className
                )}
              >
                {footer ? (
                  footer.props.children
                ) : (
                  <div className="flex justify-end p-5 border-t">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      Ok
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  return <>{props.children}</>;
};

interface BodyProps {
  className?: string;
  children?: React.ReactNode;
}

const Body: FunctionComponent<BodyProps> = (props) => {
  return <>{props.children}</>;
};

interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

const Footer: FunctionComponent<FooterProps> = (props) => {
  return <>{props.children}</>;
};

SimpleModal.Header = Header;
SimpleModal.Body = Body;
SimpleModal.Footer = Footer;

export default SimpleModal;
