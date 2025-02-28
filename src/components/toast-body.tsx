import { FC, useState } from 'react';
import { Toast } from 'react-hot-toast';
import { HiCheckCircle, HiExclamationCircle, HiInformationCircle, HiXCircle } from 'react-icons/hi';

interface ToastBodyProps {
  t: Toast;
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  showCloseButton?: boolean;
  subtitle?: string;
}

const colorClasses = {
  success: 'text-green-600',
  error: 'text-red-600',
  warning: 'text-amber-600',
  info: 'text-blue-600',
};

const ToastBody: FC<ToastBodyProps> = (props) => {
  const [showToast, setShowToast] = useState(true);

  return (
    <>
      {showToast && (
        <div
          className={`${
            props.t.visible ? 'animate-enter' : 'animate-leave'
          } pointer-events-auto flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
        >
          <div className="w-0 flex-1 p-4">
            <div className="flex items-start">
              <div className={`${colorClasses[props.type]} flex-shrink-0 pt-0.5`}>
                {props.type == 'success' && <HiCheckCircle className="h-10 w-10" />}
                {props.type == 'error' && <HiXCircle className="h-10 w-10" />}
                {props.type == 'warning' && <HiExclamationCircle className="h-10 w-10" />}
                {props.type == 'info' && <HiInformationCircle className="h-10 w-10" />}
              </div>
              <div className={`ms-3 flex-1 ${!props.subtitle && 'mt-3'}`}>
                <p className={`text-sm font-medium text-gray-500`}>
                  {props.type == 'success' && (props.title || 'Success')}
                  {props.type == 'error' && (props.title || 'Error')}
                  {props.type == 'warning' && (props.title || 'Warning')}
                  {props.type == 'info' && (props.title || 'Info')}
                </p>
                <p className="mt-1 text-sm text-gray-500">{props.subtitle}</p>
              </div>
            </div>
          </div>
          {props.showCloseButton && (
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => setShowToast(false)}
                className={`flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-gray-500`}
              >
                Close
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default ToastBody;
