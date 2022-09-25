import React from 'react';
import Cleave from 'cleave.js/react';
import { CleaveOptions } from 'cleave.js/options';
import 'cleave.js/dist/addons/cleave-phone.i18n.js';
import classNames from 'classnames';
import { SimpleInputProps } from './SimpleInput';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

export interface MaskedInputProps extends SimpleInputProps {
  maskRule: CleaveOptions;
}

const MaskedInput: React.FC<MaskedInputProps> = (props) => {
  const Icon = props.icon;

  const validClasses = `appearance-none block w-full pl-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm`;

  const errorClasses = `block w-full border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded`;

  return (
    <>
      {props.label && (
        <label
          htmlFor={props?.input?.id || false}
          className={'block text-sm font-medium text-gray-700 mb-1'}
        >
          {props.label}
        </label>
      )}
      <div className="relative flex">
        {props.addOnLeft && (
          <span className="inline-flex items-center rounded-l border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
            {props.addOnLeft}
          </span>
        )}
        {props.icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon
              className={`h-5 w-5 text-gray-400 ${
                props.errors && 'text-red-400'
              }`}
              aria-hidden="true"
            />
          </div>
        )}
        <Cleave
          {...props.input}
          options={props.maskRule || {}}
          value={props.value}
          id={props?.input?.id || false}
          defaultValue={props.defaultValue}
          className={classNames(
            props.errors?.length ? errorClasses : validClasses,
            props.className,
            props.disabled && 'disabled',
            props.icon && 'pl-10',
            props.addOnLeft && 'rounded-l-none',
            props.addOnRight && 'rounded-r-none'
          )}
          disabled={props.disabled}
          onChange={(event) => {
            props.onChange && props.onChange(event);
          }}
          onKeyDown={props.onKeyDown}
          onKeyPress={props.onKeyPress}
          onKeyUp={props.onKeyUp}
          onBlur={props.onBlur}
          aria-invalid={props.errors ? 'true' : 'false'}
          aria-describedby={props?.input?.id && `${props.input.id}-error`}
        />
        {props.addOnRight && (
          <span className="-ml-px relative inline-flex items-center rounded-r border border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
            {props.addOnRight}
          </span>
        )}
        {props.errors && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 sm:h-4 sm:w-4 text-red-400"
              aria-hidden="true"
            />
          </div>
        )}
        {props.children}
      </div>
      {props.errors && (
        <p
          className="text-xs text-red-600"
          id={props?.input?.id ? `${props.input.id}-error` : ''}
        >
          {props.errors.join(', ')}
        </p>
      )}
      {props.helpText && (
        <span className="text-xs text-gray-600">{props.helpText}</span>
      )}
    </>
  );
};

export default MaskedInput;
