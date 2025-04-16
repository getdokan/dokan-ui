import React from 'react';
import { PlacementType } from 'react-laag/dist/PlacementType';
export type DropdownProps = {
    initialOpen?: boolean;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    className?: string;
    placement?: PlacementType;
    children: React.ReactNode;
} | {
    initialOpen?: boolean;
    isOpen?: never;
    setIsOpen?: never;
    className?: string;
    placement?: PlacementType;
    children: React.ReactNode;
};
/**
 *
 * @deprecated use `Popover` component instead
 */
declare const Dropdown: {
    ({ initialOpen, isOpen: controlledOpen, setIsOpen: setControlledOpen, className, placement, children, }: DropdownProps): import("react/jsx-runtime").JSX.Element;
    Trigger: ({ children, className }: DropdownTriggerProps) => import("react/jsx-runtime").JSX.Element;
    Content: ({ className, children }: DropdownContentProps) => import("react/jsx-runtime").JSX.Element;
    Item: ({ children, className }: DropdownItemProps) => import("react/jsx-runtime").JSX.Element;
};
type DropdownTriggerProps = {
    children: React.ReactNode;
    className?: string;
};
type DropdownContentProps = {
    children: React.ReactNode;
    className?: string;
};
type DropdownItemProps = {
    children: React.ReactNode;
    className?: string;
};
export default Dropdown;
