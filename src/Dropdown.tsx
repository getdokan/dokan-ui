import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import {
  Arrow,
  ArrowProps,
  LayerProps,
  TriggerProps,
  useLayer,
} from 'react-laag';
import { PlacementType } from 'react-laag/dist/PlacementType';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type DropdownContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  renderLayer: (children: React.ReactNode) => React.ReactNode;
  triggerProps: TriggerProps;
  layerProps: LayerProps;
  arrowProps: ArrowProps;
  showArrow?: boolean;
};

const DropDownContext =
  createContext<DropdownContextType | undefined>(undefined);

export type DropdownProps =
  | {
      initialOpen?: boolean;
      isOpen: boolean;
      setIsOpen: (isOpen: boolean) => void;
      className?: string;
      placement?: PlacementType;
      children: React.ReactNode;
      showArrow?: boolean;
    }
  | {
      initialOpen?: boolean;
      isOpen?: never;
      setIsOpen?: never;
      className?: string;
      placement?: PlacementType;
      children: React.ReactNode;
      showArrow?: boolean;
    };

const Dropdown = ({
  initialOpen = false,
  isOpen: controlledOpen,
  setIsOpen: setControlledOpen,
  className,
  placement = 'bottom-end',
  showArrow = false,
  children,
}: DropdownProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

  const isOpen = controlledOpen ?? uncontrolledOpen;
  const setIsOpen = setControlledOpen ?? setUncontrolledOpen;

  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
    isOpen,
    onOutsideClick: close, // close the menu when the user clicks outside
    onDisappear: close, // close the menu when the menu gets scrolled out of sight
    overflowContainer: true, // keep the menu positioned inside the container
    auto: true, // automatically find the best placement
    placement: placement, // we prefer to place the menu "top-end"
    triggerOffset: 8, // keep some distance to the trigger
    containerOffset: 16, // give the menu some room to breath relative to the container
    arrowOffset: 16, // let the arrow have some room to breath also
  });

  useEffect(() => {
    if (controlledOpen && !setControlledOpen) {
      throw new Error('Must provide setIsOpen prop when using isOpen prop');
    }
  }, []);

  return (
    <DropDownContext.Provider
      value={{
        isOpen,
        setIsOpen,
        renderLayer,
        triggerProps,
        layerProps,
        showArrow,
        arrowProps,
      }}
    >
      <div className={twMerge('relative inline-block', className)}>
        {children}
      </div>
    </DropDownContext.Provider>
  );
};

// Dropdown context
const useDropdownContext = () => {
  const context = useContext(DropDownContext);
  if (context === undefined) {
    throw new Error('Must be used in a Dropdown component');
  }
  return context;
};

// Dropdown Trigger
type DropdownTriggerProps = {
  children: React.ReactNode;
  className?: string;
};
const Trigger = ({ children, className }: DropdownTriggerProps) => {
  const { isOpen, setIsOpen, triggerProps } = useDropdownContext();

  return (
    <>
      <div
        role={'button'}
        {...triggerProps}
        className={className}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {children}
      </div>
    </>
  );
};

// Dropdown Content
type DropdownContentProps = {
  children: React.ReactNode;
  className?: string;
};

const Content = ({ className, children }: DropdownContentProps) => {
  const { isOpen, renderLayer, layerProps, showArrow, arrowProps } =
    useDropdownContext();

  return (
    <>
      {renderLayer(
        isOpen && (
          <div
            {...layerProps}
            className={twMerge(
              'relative z-20 rounded border bg-white shadow-lg',
              className
            )}
          >
            {children}
            {showArrow && (
              <Arrow
                {...arrowProps}
                borderWidth={1}
                borderColor="var(--gray-200)"
              />
            )}
          </div>
        )
      )}
    </>
  );
};

// Dropdown Link
type DropdownLinkProps = {
  children: React.ReactNode;
  href: string;
  method?: string;
  className?: string;
};

const DropdownLink = ({ href, children, className }: DropdownLinkProps) => {
  return (
    <Link
      to={href}
      className={twMerge(
        'flex w-full items-center px-4 py-2 text-left text-sm leading-5 text-gray-800 transition duration-150 ease-in-out first:rounded-t last:rounded-b hover:bg-gray-100 focus:outline-none',
        className
      )}
    >
      {children}
    </Link>
  );
};

type DropdownItemProps = {
  children: React.ReactNode;
  className?: string;
};

const DropdownItem = ({ children, className }: DropdownItemProps) => {
  const { setIsOpen } = useDropdownContext();
  return (
    <div
      className={twMerge(
        'flex w-full items-center px-4 py-2 text-left text-sm leading-5 text-gray-800 transition duration-150 ease-in-out first:rounded-t last:rounded-b hover:bg-gray-100 focus:outline-none',
        className
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </div>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
Dropdown.Item = DropdownItem;

export default Dropdown;
