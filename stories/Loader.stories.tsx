import React from 'react';
import { Meta, Story } from '@storybook/react';

import Loader, { LoaderProps } from '../src/Loader';

const meta: Meta = {
  title: 'Loader',
  component: Loader,
};

const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

export const Default = Template.bind({});

export default meta;
