import classNames from 'classnames';
import React, { useState } from 'react';
import { TriggerProps, useLayer } from 'react-laag';

export type TooltipTriggerProps = {
  onMouseOver: () => void;
  onMouseLeave: () => void;
} & TriggerProps;

export type Direction = 'top' | 'bottom' | 'left' | 'right';

export type TooltipProps = {
  content: React.ReactNode;
  children: (props: TooltipTriggerProps) => React.ReactNode;
  className?: string;
  direction?: Direction;
};

const Tooltip = ({
  content,
  children,
  className,
  direction = 'top',
}: TooltipProps) => {
  const [isOpen, setOpen] = useState(true);

  // helper function to close the menu
  const open = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    placement: `${direction}-center`,
    triggerOffset: 14, // small gap between wrapped cont
  });

  const toolTipTriggerProps = () => ({
    onMouseOver: () => open(),
    onMouseLeave: () => close(),
    ...triggerProps,
  });

  return (
    <>
      {children(toolTipTriggerProps())}

      {renderLayer(
        isOpen && (
          <div
            {...layerProps}
            className={classNames('tooltip', `tooltip-${direction}`, className)}
          >
            {content}
          </div>
        )
      )}
    </>
  );
};

export default Tooltip;
