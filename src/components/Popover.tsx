import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { PopoverArrow, PopoverClose } from '@radix-ui/react-popover';
import { classNames } from '@/utils';

const Popover = ({ children, ...props }: PopoverPrimitive.PopoverProps) => {
  return <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>;
};

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ children, ...props }, ref) => {
  return (
    <PopoverPrimitive.Trigger ref={ref} {...props}>
      {children}
    </PopoverPrimitive.Trigger>
  );
});

PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ children, className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={classNames(
      'reset z-50 w-72 rounded bg-white p-4 shadow-[0px_2px_20px_rgb(0,0,0,0.15)] outline-none will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slide-up-fade data-[state=open]:data-[side=left]:animate-slide-right-fade data-[state=open]:data-[side=right]:animate-slide-left-fade data-[state=open]:data-[side=top]:animate-slide-down-fade',
      className
    )}
    {...props}
  >
    {children}
  </PopoverPrimitive.Content>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
Popover.Arrow = PopoverArrow;
Popover.Close = PopoverClose;
Popover.Portal = PopoverPrimitive.PopoverPortal;

Popover.displayName = PopoverPrimitive.Root.displayName;

export default Popover;
