import React from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleInput, { SimpleInputProps } from '../src/SimpleInput';
import { MailIcon } from '@heroicons/react/solid';

const meta: Meta = {
  title: 'Input',
  component: SimpleInput,
};

export default meta;

const Template: Story<SimpleInputProps> = (args) => <SimpleInput {...args} />;
const TemplateMask: Story<SimpleInputProps> = (args) => {
  return (
    <>
      <SimpleInput
        {...args}
        // maskRule={{
        //   date: true,
        //   delimiter: '-',
        //   datePattern: ['Y', 'm', 'd'],
        // }}
        maskRule={{ creditCard: true }}
        input={{
          id: 'card',
          name: 'card',
          type: 'text',
          placeholder: 'Enter credit card number',
          required: true,
        }}
        label="Card"
      />
      <SimpleInput
        label="Phone"
        {...args}
        input={{
          id: 'phone',
          name: 'phone',
          type: 'text',
          placeholder: 'Enter phone number',
          required: true,
        }}
        maskRule={{ phone: true }}
      />
      <SimpleInput
        label="Date"
        {...args}
        input={{
          id: 'date',
          name: 'date',
          type: 'text',
          placeholder: 'YYYY-MM-DD',
          required: true,
        }}
        maskRule={{
          date: true,
          delimiter: '-',
          datePattern: ['Y', 'm', 'd'],
        }}
      />
      <SimpleInput
        label="Date (Month/Day)"
        {...args}
        input={{
          id: 'dm',
          name: 'dm',
          type: 'text',
          placeholder: 'MM/DD',
          required: true,
        }}
        maskRule={{
          date: true,
          datePattern: ['m', 'd'],
        }}
      />
      <SimpleInput
        label="Time"
        {...args}
        input={{
          id: 'time',
          name: 'time',
          type: 'text',
          placeholder: 'hh:mm:ss',
          required: true,
        }}
        maskRule={{
          time: true,
          timePattern: ['h', 'm', 's'],
        }}
      />
      <SimpleInput
        label="Time (hour:minute)"
        {...args}
        input={{
          id: 'thm',
          name: 'thm',
          type: 'text',
          placeholder: 'hh:mm',
          required: true,
        }}
        maskRule={{
          time: true,
          timePattern: ['h', 'm'],
        }}
      />
      <SimpleInput
        label="Numeral"
        {...args}
        input={{
          id: 'numeral',
          name: 'numeral',
          type: 'text',
          placeholder: 'Enter numeral',
          required: true,
        }}
        maskRule={{
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
        }}
      />
      <SimpleInput
        label="Blocks"
        {...args}
        input={{
          id: 'blocks',
          name: 'blocks',
          type: 'text',
          placeholder: 'Blocks: [4, 3, 3, 4]',
          required: true,
        }}
        maskRule={{
          blocks: [4, 3, 3, 4],
          uppercase: true,
        }}
      />
      <SimpleInput
        label="Delimiter"
        {...args}
        input={{
          id: 'delimiter',
          name: 'delimiter',
          type: 'text',
          placeholder: 'Delimiter: "."',
          required: true,
        }}
        maskRule={{
          delimiter: '·',
          blocks: [3, 3, 3],
          uppercase: true,
        }}
      />
      <SimpleInput
        label="Delimiters"
        {...args}
        input={{
          id: 'delimiters',
          name: 'delimiters',
          type: 'text',
          placeholder: 'Delimiters: [".", ".", "-"]',
          required: true,
        }}
        maskRule={{
          delimiter: '·',
          blocks: [3, 3, 3],
          uppercase: true,
        }}
      />
      <SimpleInput
        label="Prefix"
        {...args}
        input={{
          id: 'prefix',
          name: 'prefix',
          type: 'text',
          placeholder: 'PREFIX-',
          required: true,
        }}
        maskRule={{
          prefix: 'PREFIX',
          delimiter: '-',
          blocks: [6, 4, 4, 4],
          uppercase: true,
        }}
      />
    </>
  );
};

export const SimpleDefault = Template.bind({});
export const SimpleLeftAddon = Template.bind({});
export const SimpleRightAddon = Template.bind({});
export const SimpleWithMask = TemplateMask.bind({});
export const SimpleIcon = Template.bind({});
export const SimpleError = Template.bind({});
export const SimpleCounter = Template.bind({});
export const SimpleIconWithCounter = Template.bind({});
export const SimpleErrorWithCounter = Template.bind({});

SimpleDefault.args = {
  label: 'Email Address',
  className: 'mt-1',
  input: {
    id: 'login-email',
    name: 'email',
    type: 'email',
    autoComplete: 'off',
    placeholder: 'yourname@email.com',
    required: true,
  },
};

SimpleLeftAddon.args = {
  addOnLeft: 'http://',
  label: 'Web Address',
  className: 'mt-1',
  input: {
    id: 'login-web',
    name: 'web',
    type: 'text',
    autoComplete: 'off',
    placeholder: 'google.com',
    required: true,
  },
};
SimpleRightAddon.args = {
  addOnRight: '.dokan.cloud',
  label: 'Store Name',
  className: 'mt-1',
  input: {
    id: 'login-storename',
    name: 'storename',
    type: 'text',
    autoComplete: 'off',
    placeholder: 'daraz',
    required: true,
  },
};

SimpleWithMask.args = {
  className: 'my-2',
};

SimpleIcon.args = {
  icon: MailIcon,
  label: 'Email Address',
  className: 'mt-1',
  input: {
    placeholder: 'yourname@email.com',
    id: 'login-email',
    name: 'email',
    type: 'email',
    autoComplete: 'off',
    required: true,
  },
};

SimpleError.args = {
  // icon: MailIcon,
  addOnLeft: '@',
  errors: ['Email address field is required'],
  label: 'Email Address',
  className: 'mt-1',
  input: {
    placeholder: 'yourname@email.com',
    id: 'login-email',
    name: 'email',
    type: 'email',
    autoComplete: 'off',
    required: true,
  },
};

SimpleCounter.args = {
  ...SimpleDefault.args,
  counter: true,
  input: {
    ...SimpleDefault.args.input,
    maxLength: 64,
  },
};

SimpleIconWithCounter.args = {
  ...SimpleIcon.args,
  counter: true,
  input: {
    ...SimpleIcon.args.input,
    maxLength: 64,
  },
};

SimpleErrorWithCounter.args = {
  ...SimpleError.args,
  counter: true,
  input: {
    ...SimpleError.args.input,
    maxLength: 64,
  },
};
