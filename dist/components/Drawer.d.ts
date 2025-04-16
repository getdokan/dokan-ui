import { ReactNode } from 'react';
export type DrawerProps = {
    direction?: 'ltr' | 'rtl';
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};
declare const Drawer: ({ direction, isOpen, onClose, children }: DrawerProps) => import("react/jsx-runtime").JSX.Element;
export default Drawer;
