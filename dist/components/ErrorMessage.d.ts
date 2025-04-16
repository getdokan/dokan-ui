import React, { FC } from 'react';
type ErrorMessageProps = {
    value: string | string[];
} & React.HTMLAttributes<HTMLParagraphElement>;
declare const ErrorMessage: FC<ErrorMessageProps>;
export default ErrorMessage;
