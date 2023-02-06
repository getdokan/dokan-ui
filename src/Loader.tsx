import React, { ReactElement } from 'react';

export interface LoaderProps {
  loading?: boolean;
  children?: ReactElement | ReactElement[];
  height?: string;
}

const Loader = ({ loading = true, children, height }: LoaderProps) => {
  return (
    <>
      {loading ? (
        <div
          className="loader flex items-center justify-center"
          style={{ height: height || '100px' }}
        >
          <div className={'lds-ellipsis'}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;
