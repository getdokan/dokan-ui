import React, { FC } from 'react';

export interface ContainerProps {
  className?: string;
}

const Container: FC<ContainerProps> = (props) => {
  return (
    <>
      <div className={`container mx-auto px-4 ${props.className}`}>
        {props.children}
      </div>
    </>
  );
};

export default Container;
