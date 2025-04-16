import { CleaveOptions } from 'cleave.js/options';
import React from 'react';
import { SimpleInputProps } from './SimpleInput';
export interface MaskedInputProps extends SimpleInputProps {
    maskRule: CleaveOptions;
}
declare const MaskedInput: React.FC<MaskedInputProps>;
export default MaskedInput;
