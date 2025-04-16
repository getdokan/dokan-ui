import React, { FunctionComponent } from 'react';
export interface BoxProps {
    className?: string;
    shadow?: boolean;
    children?: React.ReactNode;
}
declare const Box: FunctionComponent<BoxProps>;
export default Box;
