import React, { HTMLAttributes } from 'react';
export type ModalProps = {
    children: React.ReactNode;
    className?: string;
    backdropClassName?: string;
    isOpen: boolean;
    showXButton?: boolean;
    onClose: () => void;
} & HTMLAttributes<HTMLDivElement>;
declare const Modal: {
    ({ children, showXButton, className, isOpen, onClose, backdropClassName }: ModalProps): import("react/jsx-runtime").JSX.Element;
    Title: React.FunctionComponent<TitleProps>;
    Content: React.FunctionComponent<ContentProps>;
    Footer: React.FunctionComponent<FooterProps>;
};
export type TitleProps = {
    className?: string;
} & HTMLAttributes<HTMLDivElement>;
export type ContentProps = {
    className?: string;
} & HTMLAttributes<HTMLDivElement>;
export type FooterProps = {
    className?: string;
} & HTMLAttributes<HTMLDivElement>;
export default Modal;
