import React, { MouseEventHandler } from 'react';
import { SimpleInputProps } from './SimpleInput';
export interface TrailingInputProps extends SimpleInputProps {
    btnIcon?: any;
    btnLabel?: any;
    onBtnClick?: MouseEventHandler<HTMLButtonElement>;
    helpText?: string;
}
declare const TrailingInput: React.FC<TrailingInputProps>;
export default TrailingInput;
