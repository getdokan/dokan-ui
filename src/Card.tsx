import React, { FunctionComponent } from 'react';

interface HeaderProps {
  className?: string;
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  return (
    <>
      <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
        {props.children}
      </div>
    </>
  );
};

interface BodyProps {
  className?: string;
}

const Body: FunctionComponent<BodyProps> = (props) => {
  return (
    <>
      <section className={props.className}>
        <div className="px-4 py-4 sm:px-6">{props.children}</div>
      </section>
    </>
  );
};

interface FooterProps {
  colorClass?: string;
  className?: string;
}

const Footer: FunctionComponent<FooterProps> = (props) => {
  return (
    <>
      <div className={`${props.colorClass || 'bg-gray-50'} px-4 py-4 sm:px-6`}>
        {props.children}
      </div>
    </>
  );
};

export interface CardProps {
  title?: string;
  subTitle?: string;
  className?: string;
}

const Card: FunctionComponent<CardProps> & {
  Header: FunctionComponent<HeaderProps>;
} & {
  Body: FunctionComponent<BodyProps>;
} & {
  Footer: FunctionComponent<FooterProps>;
} = (props) => {
  return (
    <>
      <section className={props.className}>
        <div className="bg-white shadow border rounded-sm">
          {props.title && (
            <div className="border-b border-gray-200 px-4 py-5 sm:px-11">
              {props.title}
              {props.subTitle && (
                <p className="text-xs text-gray-500 mt-1">{props.subTitle}</p>
              )}
            </div>
          )}
          {props.children}
        </div>
      </section>
    </>
  );
};

Card.Body = Body;
Card.Header = Header;
Card.Footer = Footer;

export default Card;
