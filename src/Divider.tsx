import React, { FunctionComponent } from 'react';
export interface DividerProps {
    label: string;
}

const Divider: FunctionComponent<DividerProps> = (props) => {
    return (
        <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">{props.label}</span>
            </div>
        </div>
    );
}

export default Divider;
