import SearchableSelect from '@/components/SearchableSelect';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'SearchableSelect',
  component: SearchableSelect,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
    options: [
      { label: 'Bangladesh', value: 'BD' },
      { label: 'India', value: 'IN' },
      { label: 'Pakistan', value: 'PK' },
      { label: 'Sri Lanka', value: 'SL' },
    ],
    label: 'Countries',
    required: true,
    helpText: 'This is a help text example',
    errors: [],
  },
  render: (args) => {
    return (
      <>
        <div>
          <SearchableSelect {...args} />
        </div>
      </>
    );
  },
};

export const Multiple: Story = {
  args: {
    className: '',
    options: [
      { label: 'Bangladesh', value: 'BD' },
      { label: 'India', value: 'IN' },
      { label: 'Pakistan', value: 'PK' },
      { label: 'Sri Lanka', value: 'SL' },
    ],
    label: 'Countries',
    required: true,
    isMulti: true,
    helpText: '',
    errors: [],
  },
  render: (args) => {
    return (
      <>
        <div>
          <SearchableSelect {...args} />
        </div>
      </>
    );
  },
};

export const Error: Story = {
  args: {
    className: '',
    options: [
      { label: 'Bangladesh', value: 'BD' },
      { label: 'India', value: 'IN' },
      { label: 'Pakistan', value: 'PK' },
      { label: 'Sri Lanka', value: 'SL' },
    ],
    label: 'Countries',
    required: true,
    isMulti: true,
    helpText: '',
    errors: ['Country is required'],
  },
  render: (args) => {
    return (
      <>
        <div>
          <SearchableSelect {...args} />
        </div>
      </>
    );
  },
};

// const Template: Story = (args) => {
//   return (
//     <>
//       <div>
//         <SearchableSelect {...args} />
//       </div>
//     </>
//   );
// };

// export const Default = Template.bind({});
// export const Multiple = Template.bind({});
// export const Error = Template.bind({});

// Default.args = {
//   className: '',
//   options: [
//     { label: 'Bangladesh', value: 'BD' },
//     { label: 'India', value: 'IN' },
//     { label: 'Pakistan', value: 'PK' },
//     { label: 'Sri Lanka', value: 'SL' },
//   ],
//   label: 'Countries',
//   onChange: (item) => {
//     console.log(item);
//   },
//   helpText: 'This is a help text example',
//   errors: [],
// };

// Multiple.args = {
//   className: '',
//   options: [
//     { label: 'Bangladesh', value: 'BD' },
//     { label: 'India', value: 'IN' },
//     { label: 'Pakistan', value: 'PK' },
//     { label: 'Sri Lanka', value: 'SL' },
//   ],
//   label: 'Countries',
//   isMulti: true,
//   onChange: (items) => {
//     console.log(items);
//   },
//   helpText: '',
//   errors: [],
// };

// Error.args = {
//   className: '',
//   options: [
//     { label: 'Bangladesh', value: 'BD' },
//     { label: 'India', value: 'IN' },
//     { label: 'Pakistan', value: 'PK' },
//     { label: 'Sri Lanka', value: 'SL' },
//   ],
//   label: 'Countries',
//   isMulti: true,
//   onChange: (items) => {
//     console.log(items);
//   },
//   helpText: '',
//   errors: ['this is error text'],
// };
