import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
declare const Popover: {
    ({ children, ...props }: PopoverPrimitive.PopoverProps): import("react/jsx-runtime").JSX.Element;
    Trigger: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Arrow: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverArrowProps & React.RefAttributes<SVGSVGElement>>;
    Close: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverCloseProps & React.RefAttributes<HTMLButtonElement>>;
    Portal: React.FC<PopoverPrimitive.PopoverPortalProps>;
    displayName: string | undefined;
};
export default Popover;
