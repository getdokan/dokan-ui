import { classNames } from '@/utils';
import * as LabelPrimitive from '@radix-ui/react-label';
import React from 'react';

export type FormLabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

const FormLabel = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, FormLabelProps>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={classNames(
        'cursor-pointer select-none text-sm font-medium leading-[21px] text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
);

FormLabel.displayName = 'FormLabel';

export default FormLabel;
