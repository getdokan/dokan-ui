import { CheckCircleIcon, ExclamationIcon, InformationCircleIcon, XCircleIcon, XIcon } from '@heroicons/react/solid';
import React, { FC, useState } from 'react';
export interface SimpleAlertProps {
    type: "success" | "danger" | "warning" | "info",
    label: string,
    dismissable?: boolean
}

enum Colors {
    success = 'green',
    warning = 'yellow',
    danger = 'red',
    info = 'indigo'
}

const SimpleAlert: FC<SimpleAlertProps> = (props) => {
    const [visible, setVisible] = useState(true);

    const getIconClasses = () => {
        return `h-5 w-5 text-${Colors[props.type as keyof typeof Colors]}-400`;
    };

    const getDismissClasses = () => {
        let color = Colors[props.type as keyof typeof Colors];
        return `inline-flex bg-${color}-50 rounded-md p-1.5 text-${color}-500 hover:bg-${color}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${color}-50 focus:ring-${color}-600`;
    };
    return (<>
        {visible && <div className={`rounded-md bg-${Colors[props.type as keyof typeof Colors]}-50 p-4`}>
            <div className="flex">
                <div className="flex-shrink-0">
                    {props.type == 'success' && <CheckCircleIcon className={getIconClasses()} aria-hidden="true" />}
                    {props.type == 'warning' && <ExclamationIcon className={getIconClasses()} aria-hidden="true" />}
                    {props.type == 'danger' && <XCircleIcon className={getIconClasses()} aria-hidden="true" />}
                    {props.type == 'info' && <InformationCircleIcon className={getIconClasses()} aria-hidden="true" />}
                </div>
                <div className="ml-3">
                    <p className={`text-sm font-medium text-${Colors[props.type as keyof typeof Colors]}-800`}>{props.label}</p>
                </div>
                {props.dismissable && <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button
                            onClick={() => setVisible(false)}
                            type="button"
                            className={getDismissClasses()}
                        >
                            <span className="sr-only">Dismiss</span>
                            <XIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>}
            </div>
        </div>}
    </>);
}

export default SimpleAlert;
