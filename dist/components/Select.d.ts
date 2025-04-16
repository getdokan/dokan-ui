import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
declare const Select: {
    ({ children, ...props }: SelectPrimitive.SelectProps): import("react/jsx-runtime").JSX.Element;
    Group: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Value: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
    Trigger: React.ForwardRefExoticComponent<SelectTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Label: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLDivElement>>;
    ItemIndicator: React.ForwardRefExoticComponent<SelectPrimitive.SelectItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
    ItemText: React.ForwardRefExoticComponent<SelectPrimitive.SelectItemTextProps & React.RefAttributes<HTMLSpanElement>>;
    Separator: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Portal: React.FC<SelectPrimitive.SelectPortalProps>;
    ScrollUpButton: React.ForwardRefExoticComponent<SelectPrimitive.SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>>;
    ScrollDownButton: React.ForwardRefExoticComponent<SelectPrimitive.SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>>;
    Viewport: React.ForwardRefExoticComponent<SelectPrimitive.SelectViewportProps & React.RefAttributes<HTMLDivElement>>;
    Icon: React.ForwardRefExoticComponent<SelectPrimitive.SelectIconProps & React.RefAttributes<HTMLSpanElement>>;
    Arrow: React.ForwardRefExoticComponent<SelectPrimitive.SelectArrowProps & React.RefAttributes<SVGSVGElement>>;
    displayName: string | undefined;
};
interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
    chevronDown?: boolean;
}
interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
    showCheck?: boolean;
}
export default Select;
