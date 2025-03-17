import { classNames } from '@/utils';
import React, { FunctionComponent } from 'react';

export interface BoxProps {
  className?: string;
  shadow?: boolean;
  children?: React.ReactNode;
}

const Box: FunctionComponent<BoxProps> = (props) => {
  return (
    <>
      <div
        className={classNames(
          'bg-white overflow-hidden border border-gray-300 rounded p-4',
          props.shadow && 'shadow',
          props.className
        )}
      >
        {props.children}
      </div>
    </>
  );
};
export default Box;
