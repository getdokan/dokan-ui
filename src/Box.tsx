import React, { FunctionComponent } from 'react';

export interface BoxProps {
  className?: string;
}

const Box: FunctionComponent<BoxProps> = (props) => {
  return (
    <>
      <div className={`${props.className} bg-white overflow-hidden shadow border rounded-sm p-4`}>{props.children}</div>
    </>
  );
};
export default Box;
