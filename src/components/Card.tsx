import { classNames } from '@/utils';
import React, { HTMLAttributes } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
  clickable?: boolean;
  onClick?: () => void;
};

const Card = ({ className, children, clickable, onClick, ...rest }: CardProps) => {
  return (
    <div
      className={classNames(
        'w-full rounded transition-all duration-300 border',
        clickable && 'cursor-pointer hover:shadow-lg',
        className
      )}
      onClick={() => clickable && onClick?.()}
      {...rest}
    >
      {children}
    </div>
  );
};

// Card Header
type CardHeaderProps = {
  className?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Header = ({ className, children, ...rest }: CardHeaderProps) => {
  return (
    <div className={classNames('border-b px-6 py-4 first:rounded-t bg-gray-50', className)} {...rest}>
      {children}
    </div>
  );
};

// Card Title
type CardTitleProps = {
  className?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLHeadingElement>;

const Title = ({ className, children, ...rest }: CardTitleProps) => {
  return (
    <h4 className={classNames('text-base font-medium', className)} {...rest}>
      {children}
    </h4>
  );
};

// Card Subtitle
type CardSubtitleProps = {
  className?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

const Subtitle = ({ className, children, ...rest }: CardSubtitleProps) => {
  return (
    <p className={classNames('text-sm text-gray-500', className)} {...rest}>
      {children}
    </p>
  );
};

// Card Text
type CardTextProps = {
  className?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

const Text = ({ className, children, ...rest }: CardTextProps) => {
  return (
    <div className={classNames('text-sm', className)} {...rest}>
      {children}
    </div>
  );
};

// Card Body
type CardBodyProps = {
  className?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Body = ({ className, children, ...rest }: CardBodyProps) => {
  return (
    <div className={classNames('p-6 first:rounded-t', className)} {...rest}>
      {children}
    </div>
  );
};

// Card Footer
type CardFooterProps = {
  className?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Footer = ({ className, children, ...rest }: CardFooterProps) => {
  return (
    <div className={classNames('border-t px-6 py-4 last:rounded-b', className)} {...rest}>
      {children}
    </div>
  );
};

Card.Header = Header;
Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Text = Text;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
