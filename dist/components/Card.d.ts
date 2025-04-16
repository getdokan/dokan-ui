import React, { HTMLAttributes } from 'react';
type CardProps = HTMLAttributes<HTMLDivElement> & {
    className?: string;
    children: React.ReactNode;
    clickable?: boolean;
    onClick?: () => void;
};
declare const Card: {
    ({ className, children, clickable, onClick, ...rest }: CardProps): import("react/jsx-runtime").JSX.Element;
    Header: ({ className, children, ...rest }: CardHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Title: ({ className, children, ...rest }: CardTitleProps) => import("react/jsx-runtime").JSX.Element;
    Subtitle: ({ className, children, ...rest }: CardSubtitleProps) => import("react/jsx-runtime").JSX.Element;
    Text: ({ className, children, ...rest }: CardTextProps) => import("react/jsx-runtime").JSX.Element;
    Body: ({ className, children, ...rest }: CardBodyProps) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ className, children, ...rest }: CardFooterProps) => import("react/jsx-runtime").JSX.Element;
};
type CardHeaderProps = {
    className?: string;
    children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;
type CardTitleProps = {
    className?: string;
    children: React.ReactNode;
} & HTMLAttributes<HTMLHeadingElement>;
type CardSubtitleProps = {
    className?: string;
    children: React.ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;
type CardTextProps = {
    className?: string;
    children: React.ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;
type CardBodyProps = {
    className?: string;
    children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;
type CardFooterProps = {
    className?: string;
    children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export default Card;
