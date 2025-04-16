export interface MultipleTextInputProps {
    id?: string;
    className?: string;
    label?: string;
    errors?: string[] | undefined;
    placeholder?: string;
    value: string[];
    setValue: (values: string[]) => void;
    helpText?: string;
}
declare const MultipleTextInput: ({ id, className, label, errors, placeholder, value, setValue, helpText, }: MultipleTextInputProps) => import("react/jsx-runtime").JSX.Element;
export default MultipleTextInput;
