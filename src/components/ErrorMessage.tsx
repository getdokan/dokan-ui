import React, { FC } from 'react';
import ErrorIcon from './icons/ErrorIcon';
import { classNames } from '@/utils';
import isEmpty from 'lodash/isEmpty';

type ErrorMessageProps = {
  value: string | string[];
} & React.HTMLAttributes<HTMLParagraphElement>;

const ErrorMessage: FC<ErrorMessageProps> = ({ value, className, ...rest }) => {
  if (isEmpty(value)) return null;
  return (
    <p className={classNames('mt-1.5 flex items-center space-x-1.5', className)} {...rest}>
      <ErrorIcon /> <span className={'text-xs text-danger-500'}>{Array.isArray(value) ? value.join(', ') : value}</span>
    </p>
  );
};

export default ErrorMessage;
