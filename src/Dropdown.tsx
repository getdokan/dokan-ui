import React, { ReactNode } from 'react';
import { useLayer } from 'react-laag';
import { ReactElement, useState } from 'react';
import classNames from 'classnames';
import { PlacementType } from 'react-laag/dist/PlacementType';

export interface DropdownProps {
  children: ReactElement[];
  className?: string;
  placement?: PlacementType;
}

const Dropdown = ({
  children,
  className,
  placement = 'bottom-end',
}: DropdownProps) => {
  const [isOpen, setOpen] = useState(false);

  // helper function to close the menu
  function close() {
    setOpen(false);
  }

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    onOutsideClick: close, // close the menu when the user clicks outside
    onDisappear: close, // close the menu when the menu gets scrolled out of sight
    overflowContainer: true, // keep the menu positioned inside the container
    auto: true, // automatically find the best placement
    placement: placement, // we prefer to place the menu "top-end"
    triggerOffset: 12, // keep some distance to the trigger
    containerOffset: 16, // give the menu some room to breath relative to the container
    arrowOffset: 16, // let the arrow have some room to breath also
  });

  const trigger = children.find((el) => el.type === Trigger);
  const list = children.find((el) => el.type === List);

  // Again, we're using framer-motion for the transition effect
  return (
    <div>
      <button type="button" {...triggerProps} onClick={() => setOpen(!isOpen)}>
        {trigger ? trigger.props.children : null}
      </button>
      {isOpen &&
        renderLayer(
          <div className={className} {...layerProps}>
            {list ? list.props.children : null}
          </div>
        )}
    </div>
  );
};

interface TriggerProps {
  children?: ReactNode;
}
const Trigger = ({ children }: TriggerProps) => {
  return <>{children}</>;
};

interface ListProps {
  children?: ReactNode;
}
const List = ({ children }: ListProps) => {
  return <>{children}</>;
};

Dropdown.Trigger = Trigger;
Dropdown.List = List;

export default Dropdown;
