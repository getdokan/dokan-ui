/// <reference types="google.maps" />
import React, { FC, FocusEvent } from 'react';
export type OnPlaceSelectedParamType = {
    city: string;
    state: string;
    zip: string;
    country: {
        long_name: string;
        short_name: string;
    };
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
declare const GooglePlaceAutocomplete: FC<GooglePlaceAutocompleteProps>;
export default GooglePlaceAutocomplete;
