import { ToastPosition } from 'react-hot-toast';
type ToastTypes = 'success' | 'error' | 'warning' | 'info';
interface ToastOptions {
    title: string;
    subtitle?: string;
    type: ToastTypes;
    position?: ToastPosition;
    showCloseButton?: boolean;
    duration?: number;
}
declare const useToast: () => (toastOptions: ToastOptions) => string;
export default useToast;
