import React from 'react';
import { Meta, Story } from '@storybook/react';

import GooglePlaceAutocomplete, {
  GooglePlaceAutocompleteProps,
} from '../src/GooglePlaceAutocomplete';

const meta: Meta = {
  title: 'GooglePlaceAutocomplete',
  component: GooglePlaceAutocomplete,
};

const Template: Story<GooglePlaceAutocompleteProps> = (args) => (
  <GooglePlaceAutocomplete {...args} />
);

export const Default = Template.bind({});
Default.args = {
  apiKey: 'AIzaSyDvqF2TFlH_iL33LMiDHvNpkAcpK0nW7_0',
};

export default meta;
