import { FC } from 'react';
import { Toast } from 'react-hot-toast';
interface ToastBodyProps {
    t: Toast;
    type: 'success' | 'error' | 'warning' | 'info';
    title?: string;
    showCloseButton?: boolean;
    subtitle?: string;
}
declare const ToastBody: FC<ToastBodyProps>;
export default ToastBody;
