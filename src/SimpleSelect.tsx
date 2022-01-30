import React, { ChangeEventHandler, FunctionComponent } from 'react';
export interface SimpleSelectProps {
    className?: string,
    error?: string,
    label: string,
    valueKey: string,
    labelKey: string,
    options: Array<{
        [key: string]: any
    }>,
    defaultOption?: string,
    onChange?: ChangeEventHandler<HTMLSelectElement>
}

const SimpleSelect: FunctionComponent<SimpleSelectProps> = (props) => {

    function slugify(sluggable: string) {
        sluggable = sluggable.replace(/^\s+|\s+$/g, ''); // trim
        sluggable = sluggable.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaeeeeiiiioooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            sluggable = sluggable.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        sluggable = sluggable.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return sluggable;
    }

    const validClasses = `mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded`;
    const errorClasses = `mt-1 block w-full pl-3 pr-10 py-2 text-base border-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm text-red-300 rounded`;
    return (
        <>
            <label htmlFor={`${slugify(props.label)}-simple-select`} className="block text-sm font-medium text-gray-700">
                {props.label}
            </label>
            <select
                defaultValue=''
                onChange={props.onChange}
                id={`${slugify(props.label)}-simple-select`}
                name={`${slugify(props.label)}-simple-select`}
                className={`${props.error ? errorClasses : validClasses} ${props.className}`}
            >
                <option disabled value=''>{`${props.defaultOption ? props.defaultOption : 'Select an option'}`}</option>
                {props.options.map((option) => <option key={option[props.valueKey]} value={option[props.valueKey]}>{option[props.labelKey]}</option>)}
            </select>
            {props.error && <p className="text-xs text-red-600" id={`${slugify(props.label)}-simple-select-error`}>
                {props.error}
            </p>}
        </>
    );
}

export default SimpleSelect;
