import GooglePlaceAutocomplete, { GooglePlaceAutocompleteProps } from '@/components/GooglePlaceAutocomplete';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GooglePlaceAutocomplete> = {
  title: 'GooglePlaceAutocomplete',
  component: GooglePlaceAutocomplete,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    apiKey: '',
    label: 'Address',
  },
  render: () => {
    const [args] = useArgs<GooglePlaceAutocompleteProps>();

    return <GooglePlaceAutocomplete {...args} />;
  },
};

export const Error: Story = {
  args: {
    apiKey: '',
    errors: ['Address is required'],
    label: 'Address',
  },
  render: () => {
    const [args] = useArgs<GooglePlaceAutocompleteProps>();

    return <GooglePlaceAutocomplete {...args} />;
  },
};
