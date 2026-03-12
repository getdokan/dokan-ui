import type { Meta, StoryObj } from '@storybook/react';
import AppTab from '../components/AppTab';

const sampleTabs = [
    { label: 'Basic', value: 'basic' },
    { label: 'Business Details', value: 'business-details' },
    { label: 'Domain', value: 'domain' },
    { label: 'Brand', value: 'brand' },
    { label: 'Code Snippet', value: 'code-snippet' },
    { label: 'Vendor Onboarding', value: 'vendor-onboarding' },
    { label: 'Customer Privacy', value: 'customer-privacy' },
];

const meta: Meta<typeof AppTab> = {
    title: 'AppTab',
    component: AppTab,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'underline'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md'],
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: sampleTabs,
        defaultValue: 'basic',
        variant: 'default',
    },
};

export const Underline: Story = {
    args: {
        items: sampleTabs,
        defaultValue: 'basic',
        variant: 'underline',
    },
};

export const SmallSize: Story = {
    args: {
        items: sampleTabs.slice(0, 4),
        defaultValue: 'basic',
        variant: 'default',
        size: 'sm',
    },
};

export const FullWidth: Story = {
    args: {
        items: sampleTabs.slice(0, 4),
        defaultValue: 'basic',
        variant: 'default',
        fullWidth: true,
    },
};

export const UnderlineFullWidth: Story = {
    args: {
        items: sampleTabs.slice(0, 4),
        defaultValue: 'basic',
        variant: 'underline',
        fullWidth: true,
    },
};

export const WithDisabledTab: Story = {
    args: {
        items: [
            { label: 'Active', value: 'active' },
            { label: 'Settings', value: 'settings' },
            { label: 'Disabled', value: 'disabled', disabled: true },
            { label: 'More', value: 'more' },
        ],
        defaultValue: 'active',
    },
};
