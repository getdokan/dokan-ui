import { GroupBase, MenuPosition } from 'react-select';
import { AsyncProps } from 'react-select/async';
export type AsyncSearchableSelectProps<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> = AsyncProps<Option, IsMulti, Group> & {
    label?: string;
    id?: string;
    className?: string;
    errors?: string[];
    helpText?: string;
    required?: boolean;
    disabled?: boolean;
    menuPortalTarget?: HTMLElement | null;
    menuPosition?: MenuPosition;
};
declare const AsyncSearchableSelect: <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: AsyncSearchableSelectProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
export default AsyncSearchableSelect;
