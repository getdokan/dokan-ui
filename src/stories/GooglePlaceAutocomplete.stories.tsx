import GooglePlaceAutocomplete from '@/components/GooglePlaceAutocomplete';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GooglePlaceAutocomplete> = {
  title: 'GooglePlaceAutocomplete',
  component: GooglePlaceAutocomplete,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    apiKey: 'AIzaSyDvqF2TFlH_iL33LMiDHvNpkAcpK0nW7_0',
  },
  render: (args) => {
    return <GooglePlaceAutocomplete {...args} />;
  },
};
