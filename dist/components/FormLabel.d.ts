import * as LabelPrimitive from '@radix-ui/react-label';
import React from 'react';
export type FormLabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;
declare const FormLabel: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & React.RefAttributes<HTMLLabelElement>>;
export default FormLabel;
