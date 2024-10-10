
import toast, { ToastPosition } from 'react-hot-toast';
import ToastBody from '@/components/toast-body.tsx';

type ToastTypes = 'success' | 'error' | 'warning' | 'info';

interface ToastOptions {
  title: string;
  subtitle?: string;
  type: ToastTypes;
  // className?: string;
  position?: ToastPosition;
  showCloseButton?: boolean;
  duration?: number;
}

const useToast = () => {
  return (toastOptions: ToastOptions) => {
    return toast.custom(
      (t) => (
        <ToastBody
          showCloseButton={toastOptions.showCloseButton}
          t={t}
          type={toastOptions.type}
          title={toastOptions.title}
          subtitle={toastOptions.subtitle || ''}
          // className={toastOptions.className}
        />
      ),
      {
        position: toastOptions.position || 'bottom-right',
        duration: toastOptions.duration || 2000,
      }
    );
  };
};

export default useToast;
