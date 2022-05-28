import React from 'react';
import { Meta, Story } from '@storybook/react';
import ComboBox, { ComboBoxProps } from '../src/ComboBox';

const meta: Meta = {
    title: 'ComboBox',
    component: ComboBox,
};

export default meta;

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

const Template: Story<ComboBoxProps<typeof people>> = args => <ComboBox {...args} />

export const Default = Template.bind({});
export const SearchableMultiple = Template.bind({});

Default.args = {
    items: people,
    valueFrom: 'name',
    keyFrom: 'id',
};

SearchableMultiple.args = {
    items: people,
    valueFrom: 'name',
    keyFrom: 'id',
    multiple: true
};
