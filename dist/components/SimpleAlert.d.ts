import React, { FC, MouseEventHandler } from 'react';
export interface SimpleAlertProps {
    children?: React.ReactNode;
    className?: string;
    type: 'success' | 'danger' | 'warning' | 'info';
    color: 'primary' | 'amber' | 'blue' | 'cyan' | 'emerald' | 'fuchsia' | 'green' | 'gray' | 'indigo' | 'lime' | 'orange' | 'pink' | 'purple' | 'red' | 'rose' | 'sky' | 'teal' | 'violet' | 'yellow';
    label: string;
    dismissable?: boolean;
    centered?: boolean;
    onDismiss?: MouseEventHandler<HTMLButtonElement>;
}
declare const SimpleAlert: FC<SimpleAlertProps>;
export default SimpleAlert;
