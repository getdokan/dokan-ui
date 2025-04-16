import React from 'react';
import { GroupBase, Props } from 'react-select';
export type SearchableSelectProps<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> = Props<Option, IsMulti, Group> & {
    label?: React.ReactNode;
    id?: string;
    className?: string;
    errors?: string[];
    helpText?: string;
    required?: boolean;
    disabled?: boolean;
    ref?: any;
};
declare const SearchableSelect: <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: SearchableSelectProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
export default SearchableSelect;
