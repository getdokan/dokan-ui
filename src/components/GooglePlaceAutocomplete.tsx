import _ from 'lodash';
import React, { useEffect, useRef, RefObject, FC, FocusEvent, useId } from 'react';
import ErrorMessage from './ErrorMessage';
import { classNames } from '@/utils';
import FormLabel from './FormLabel';

export type OnPlaceSelectedParamType = {
  city: string;
  state: string;
  zip: string;
  country: { long_name: string; short_name: string };
  address: string;
  place: google.maps.places.PlaceResult;
  inputValue: string;
};

export type GooglePlaceAutocompleteProps = {
  label?: React.ReactNode;
  input?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  className?: string;
  errors?: string[];
  onPlaceSelected: (data: OnPlaceSelectedParamType) => void;
  countryRestriction?: string;
  value?: string;
  onClear?: () => void;
  onFocus?: (event?: FocusEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  apiKey: string;
  showClear: boolean;
  disabled?: boolean;
};

let autoComplete: google.maps.places.Autocomplete;

const loadScript = (url: string, callback: () => void) => {
  // Don't load Google API script in every component mounts
  if (window.google?.maps?.places) {
    callback();
    return;
  }
  const scriptEl = document.createElement('script');
  const initMapEl = document.createElement('script');
  initMapEl.type = 'text/javascript';
  initMapEl.textContent = 'function initMapPlaceholderFunc() {}';
  scriptEl.type = 'text/javascript';
  scriptEl.src = url;
  document.body.appendChild(initMapEl);
  document.body.appendChild(scriptEl);

  scriptEl.onload = () => callback();
  // document.getElementsByTagName('head')[0].appendChild(initMapEl);
  // document.getElementsByTagName('head')[0].appendChild(scriptEl);
};

const GooglePlaceAutocomplete: FC<GooglePlaceAutocompleteProps> = ({
  label,
  apiKey,
  input,
  className,
  errors,
  onPlaceSelected,
  countryRestriction,
  value,
  onClear,
  onFocus,
  onBlur,
  showClear = true,
  disabled,
}) => {
  const generatedId = useId();
  const autoCompleteRef = useRef<HTMLInputElement>(null);

  const handlePlaceSelect = () => {
    const place = autoComplete.getPlace();

    const inputValue = autoCompleteRef.current!.value;
    if (place && place.name) {
      autoCompleteRef.current!.value = place.name;
    } else {
      autoCompleteRef.current!.value = inputValue;
    }

    // updateQuery(place.formatted_address);
    const address = _.get(place, 'address_components');
    let city = '';
    let state = '';
    let zip = '';
    let country = { long_name: '', short_name: '' };

    _.forEach(address, function (component) {
      const types = _.get(component, 'types');
      if (_.includes(types, 'country')) {
        country = component;
      }
      if (_.includes(types, 'locality')) {
        city = _.get(component, 'long_name');
      }
      if (_.includes(types, 'administrative_area_level_1')) {
        state = _.get(component, 'long_name');
      }
      if (_.includes(types, 'postal_code')) {
        zip = _.get(component, 'long_name');
      }
    });

    onPlaceSelected({
      city: city ?? '',
      state: state ?? '',
      zip: zip ?? '',
      country: country ?? { long_name: '', short_name: '' },
      address: autoCompleteRef.current?.value ?? '',
      place,
      inputValue,
    });
  };

  const handleScriptLoad = (autoCompleteRef: RefObject<HTMLInputElement | null>, countryRestriction?: string) => {
    const { maps } = window.google;
    autoComplete = new maps.places.Autocomplete(autoCompleteRef.current as HTMLInputElement);

    if (countryRestriction) {
      autoComplete.setComponentRestrictions({
        country: countryRestriction,
      });
    }

    autoComplete.addListener('place_changed', () => handlePlaceSelect());
  };

  useEffect(() => {
    if (autoCompleteRef.current && value) {
      autoCompleteRef.current.value = value;
    }
  }, [value]);

  useEffect(() => {
    const googleURL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&language=en&callback=initMapPlaceholderFunc`;

    loadScript(googleURL, () => handleScriptLoad(autoCompleteRef, countryRestriction));
  }, [countryRestriction]);

  const hasErrors = Boolean(errors && errors.length > 0);

  return (
    <>
      {typeof label === 'string' ? (
        <FormLabel
          htmlFor={input?.id ?? generatedId}
          className={classNames('mb-2 inline-block', disabled && 'cursor-not-allowed opacity-50')}
        >
          {label}
        </FormLabel>
      ) : (
        label
      )}
      <div className="relative flex">
        <input
          id={input?.id ?? generatedId}
          className={classNames(
            'w-full h-10 rounded border-0 px-4 py-2.5 text-sm leading-5 text-gray-800 ring-1 focus:ring-2 ring-gray-200 placeholder:text-gray-400 focus:ring-primary-600 disabled:cursor-not-allowed disabled:opacity-50',
            hasErrors && 'ring-red-500 focus:ring-red-500 hasErrors',
            className
          )}
          {...input}
          disabled={disabled}
          ref={autoCompleteRef}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {value && value.toString().length && showClear && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <button
              type="button"
              onClick={() => {
                autoCompleteRef.current!.value = '';
                if (onClear) onClear();
              }}
              className="inset-y-0 right-0 text-sm flex items-center me-3 text-gray-400"
            >
              Clear
            </button>
          </div>
        )}
      </div>
      <ErrorMessage value={errors ?? []} />
    </>
  );
};

export default GooglePlaceAutocomplete;
