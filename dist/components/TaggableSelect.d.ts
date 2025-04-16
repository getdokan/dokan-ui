import { CreatableAdditionalProps } from 'node_modules/react-select/dist/declarations/src/useCreatable';
import { StateManagerProps } from 'node_modules/react-select/dist/declarations/src/useStateManager';
import { GroupBase } from 'react-select';
type CreatableProps<Option, IsMulti extends boolean, Group extends GroupBase<Option>> = StateManagerProps<Option, IsMulti, Group> & CreatableAdditionalProps<Option, Group> & {
    label?: string;
    id?: string;
    className?: string;
    errors?: string[];
    helpText?: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
};
declare const TaggableSelect: <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: CreatableProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
export default TaggableSelect;
