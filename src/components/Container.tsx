import { classNames } from '@/utils';
import React, { FC } from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container: FC<ContainerProps> = ({ className, children, ...rest }) => {
  return (
    <div className={classNames(`container mx-auto px-4`, className)} {...rest}>
      {children}
    </div>
  );
};

export default Container;
