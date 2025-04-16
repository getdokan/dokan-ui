import { ChangeEventHandler } from 'react';
interface Option {
    label: string;
    value: unknown;
}
export interface SimpleSelectProps {
    className?: string;
    errors?: string[];
    label: string;
    value?: unknown;
    options: Option[];
    placeholder?: string;
    defaultValue?: string | number;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    helpText?: string;
    required?: boolean;
    disabled?: boolean;
}
/**
 * @deprecated use `SearchableSelect` component instead
 */
declare const SimpleSelect: (props: SimpleSelectProps) => import("react/jsx-runtime").JSX.Element;
export default SimpleSelect;
