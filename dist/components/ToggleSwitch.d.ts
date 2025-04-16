import { ReactElement } from 'react';
export interface ToggleSwitchProps {
    checked: boolean;
    onChange: (value: boolean) => void;
    color?: string;
    label?: string | ReactElement;
    children?: ReactElement;
    name?: string;
    value?: string;
    defaultChecked?: boolean;
    helpText?: string | ReactElement;
    disabled?: boolean;
    id?: string;
    required?: boolean;
}
declare const ToggleSwitch: ({ checked, onChange, color, children, label, name, value, defaultChecked, helpText, disabled, id: providedId, required, }: ToggleSwitchProps) => import("react/jsx-runtime").JSX.Element;
export default ToggleSwitch;
