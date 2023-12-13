import React, { useEffect, useRef, useState } from 'react';
import { Combobox } from '@headlessui/react';
import { HiCheck, HiSelector } from 'react-icons/hi';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export interface ComboBoxProps<TItem> {
  inputClasses?: string;
  buttonClasses?: string;
  optionClasses?: string;
  optionsClasses?: string;
  multiple?: boolean;
  vertical?: boolean;
  label?: string;
  valueFrom: keyof TItem;
  items: TItem[];
  onChange: (items: TItem[]) => void;
  selected?: TItem[];
  errors?: string[];
  helpText?: string;
}
const validClasses = `w-full rounded border border-gray-300 bg-white pl-3 pr-10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm`;
const errorClasses = `block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded`;
const ComboBox = <TItem,>(props: ComboBoxProps<TItem>) => {
  const [query, setQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState(props.selected || []);
  const [inputHasFocus, setInputHasFocus] = useState(false);
  const inputField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputHasFocus && props.multiple) {
      inputField.current && inputField.current.focus();
    }
  }, [inputHasFocus]);

  useEffect(() => {
    setSelectedItems(props.selected || []);
  }, [props.selected]);

  const filteredItems =
    query === ''
      ? props.items
      : props.items.filter((items) =>
          String(items[props.valueFrom])
            .toLowerCase()
            .includes(query.toLowerCase())
        );

  function removeItem(index: number) {
    selectedItems.splice(index, 1);
    setSelectedItems((prevItems) => {
      return [...prevItems];
    });
    props.onChange(selectedItems);
  }

  return (
    <Combobox
      value={selectedItems}
      onChange={(items) => {
        setSelectedItems(items);
        props.onChange(items);
      }}
      multiple={props.multiple}
    >
      <Combobox.Label className="block text-sm font-medium text-gray-700">
        {props.label || 'Search and Select'}
      </Combobox.Label>
      <div className="relative mt-1">
        {inputHasFocus && selectedItems.length > 0 && (
          <span
            onClick={() => setInputHasFocus(false)}
            className="hover:cursor-pointer bg-primary-600 text-white rounded-3xl px-1.5 py-0.5 text-xs absolute top-2.5 right-8"
          >
            +{selectedItems.length}
          </span>
        )}
        {!props.multiple && (
          <Combobox.Input
            placeholder="Search..."
            className={`${props.errors ? errorClasses : validClasses} ${
              props.inputClasses
            }`}
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(item: TItem) =>
              item[props.valueFrom] as unknown as string
            }
          />
        )}
        {props.multiple && (selectedItems.length < 1 || inputHasFocus) && (
          <Combobox.Input
            ref={inputField}
            onFocus={() => setInputHasFocus(true)}
            onBlur={() => setInputHasFocus(false)}
            placeholder={
              selectedItems.length < 1 || inputHasFocus ? 'Search...' : ''
            }
            className={`${props.errors ? errorClasses : validClasses} ${
              props.inputClasses
            }`}
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(item: any) => item[props.valueFrom]}
          />
        )}
        {props.multiple && !inputHasFocus && selectedItems.length > 0 && (
          <section
            onClick={() => setInputHasFocus(true)}
            className={`hover:cursor-text mt-1 p-2 ${
              props.errors && selectedItems.length < 0
                ? errorClasses
                : validClasses
            }`}
          >
            {props.multiple &&
              !inputHasFocus &&
              selectedItems.map((selectedItem, index) => {
                return (
                  <span key={index}>
                    <span className="mr-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-primary-800">
                      {selectedItem[props.valueFrom]}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeItem(index);
                        }}
                        className="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                      >
                        <span className="sr-only">
                          Remove {selectedItem[props.valueFrom]} option
                        </span>
                        <svg
                          className="h-2 w-2"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 8 8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            d="M1 1l6 6m0-6L1 7"
                          />
                        </svg>
                      </button>
                    </span>
                    {props.vertical && <br />}
                  </span>
                );
              })}
          </section>
        )}
        <Combobox.Button
          className={`absolute inset-y-0 right-0 flex items-center rounded-r px-2 focus:outline-none ${props.buttonClasses}`}
        >
          <HiSelector className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>
        {filteredItems.length > 0 && (
          <Combobox.Options
            className={`absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${props.optionsClasses}`}
          >
            {filteredItems.map((item, index) => (
              <Combobox.Option
                key={index}
                value={item}
                className={({ active }) =>
                  classNames(
                    'relative cursor-pointer select-none py-2 pl-3 pr-9',
                    active ? 'bg-primary-600 text-white' : 'text-gray-900',
                    props.optionClasses as string
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        'block truncate',
                        selected ? 'font-semibold' : ''
                      )}
                    >
                      {item[props.valueFrom] as unknown as TItem}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-primary-600'
                        )}
                      >
                        <HiCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
        {props.errors && props.selected?.length == 0 && (
          <span className="text-xs absolute text-red-600">
            {props.errors.join(', ')}
          </span>
        )}
        {props.helpText && (
          <span className="text-xs text-gray-600">{props.helpText}</span>
        )}
      </div>
      {/* {(!viewSelectedItems && selectedItems.length) > 0 && <span className="text-xs text-gray-600">{selectedItems.length} {selectedItems.length == 1 ? 'Item' : 'Items'} selected. <p onClick={() => setViewSelectedItems(true)} className="inline-flex underline cursor-pointer">View</p> <p onClick={() => setSelectedItems([])} className="inline-flex underline cursor-pointer">Clear</p></span>}
      {viewSelectedItems && <span className="text-xs text-gray-600">{selectedItems.map(item => item[props.valueFrom]).join(', ')}. <p onClick={() => setViewSelectedItems(false)} className="inline-flex underline cursor-pointer">Hide</p></span>} */}
    </Combobox>
  );
};

export default ComboBox;
