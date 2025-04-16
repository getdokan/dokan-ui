import { ReactNode } from 'react';
import type { ComponentProps } from 'react';
import Button from './Button';
interface ConfirmModalProps {
    title?: string;
    message?: string | ReactNode;
    isOpen: boolean;
    onConfirm: () => void;
    onCancel?: () => void;
    okButtonLabel?: string;
    cancelButtonLabel?: string;
    okButtonColor?: ComponentProps<typeof Button>['color'];
    showXButton?: boolean;
    isConfirmButtonLoading?: boolean;
}
declare const ConfirmModal: (props: ConfirmModalProps) => import("react/jsx-runtime").JSX.Element;
export default ConfirmModal;
