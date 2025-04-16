export type FormSelectProps = {
    value?: string | number;
    onChange?: (value: string | number) => void;
    id?: string;
    contentClass?: string;
    triggerClass?: string;
    name?: string;
    options: {
        label: string;
        value: string | number;
    }[];
    placeholder?: string;
    disabled?: boolean;
    isError?: boolean;
};
export default function FormSelect(props: FormSelectProps): import("react/jsx-runtime").JSX.Element;
