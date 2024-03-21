import MaskedInput, { MaskedInputProps } from '@/components/MaskedInput';
import { Meta } from '@storybook/react';
import { HiCreditCard, HiPhone } from 'react-icons/hi';

const meta: Meta = {
  title: 'Masked Input',
  component: MaskedInput,
};

export default meta;

export const CreditCard = (args: MaskedInputProps) => <MaskedInput {...args} />;
export const PhoneNumber = (args: MaskedInputProps) => <MaskedInput {...args} />;
export const DateFormatting = (args: MaskedInputProps) => <MaskedInput {...args} />;
export const DateFormattingMonthDay = (args: MaskedInputProps) => <MaskedInput {...args} />;
export const TimeFormattingDefault = (args: MaskedInputProps) => <MaskedInput {...args} />;
export const TimeFormattingHourMiniute = (args: MaskedInputProps) => <MaskedInput {...args} />;
export const Numeral = (args: MaskedInputProps) => <MaskedInput {...args} />;
export const Blocks = (args: MaskedInputProps) => <MaskedInput {...args} />;
export const Delimiter = (args: MaskedInputProps) => <MaskedInput {...args} />;
export const Delimiters = (args: MaskedInputProps) => <MaskedInput {...args} />;
export const Prefix = (args: MaskedInputProps) => <MaskedInput {...args} />;
export const MaskedLeftAddon = (args: MaskedInputProps) => <MaskedInput {...args} />;
export const MaskedRightAddon = (args: MaskedInputProps) => <MaskedInput {...args} />;
export const MaskedWithIcon = (args: MaskedInputProps) => <MaskedInput {...args} />;
export const MaskedError = (args: MaskedInputProps) => <MaskedInput {...args} />;

CreditCard.args = {
  label: 'Card',
  maskRule: { creditCard: true },
  input: {
    id: 'card',
    name: 'card',
    type: 'text',
    placeholder: 'Enter credit card number',
    required: false,
  },
};

PhoneNumber.args = {
  label: 'Phone',
  input: {
    id: 'phone',
    name: 'phone',
    type: 'text',
    placeholder: 'Enter phone number',
    required: true,
    autocomplete: 'off',
  },
  maskRule: { phone: true },
};

DateFormatting.args = {
  label: 'Date Formatting',
  input: {
    id: 'date',
    name: 'date',
    type: 'text',
    placeholder: 'YYYY-MM-DD',
    required: true,
  },
  maskRule: { date: true, delimiter: '-', datePattern: ['Y', 'm', 'd'] },
};

DateFormattingMonthDay.args = {
  label: 'Date Formatting (Month/Day)',
  input: {
    id: 'date',
    name: 'date',
    type: 'text',
    placeholder: 'MM/DD',
    required: true,
  },
  maskRule: { date: true, delimiter: '/', datePattern: ['m', 'd'] },
};

TimeFormattingDefault.args = {
  label: 'Time',
  input: {
    id: 'time',
    name: 'time',
    type: 'text',
    placeholder: 'hh:mm:ss',
    required: true,
  },
  maskRule: {
    time: true,
    timePattern: ['h', 'm', 's'],
  },
};

TimeFormattingHourMiniute.args = {
  label: 'Time',
  input: {
    id: 'time',
    name: 'time',
    type: 'text',
    placeholder: 'hh:mm',
    required: true,
  },
  maskRule: {
    time: true,
    timePattern: ['h', 'm'],
  },
};

Numeral.args = {
  label: 'Numeral',
  input: {
    id: 'numeral',
    name: 'numeral',
    type: 'text',
    placeholder: 'Enter numeral',
    required: true,
  },
  maskRule: {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
  },
};

Blocks.args = {
  label: 'Blocks',
  input: {
    id: 'blocks',
    name: 'blocks',
    type: 'text',
    placeholder: 'Blocks [4 4 3 4]',
    required: true,
  },
  maskRule: {
    blocks: [4, 3, 3, 4],
    uppercase: true,
  },
};

Delimiter.args = {
  label: 'Delimiter',
  input: {
    id: 'delimiter',
    name: 'delimiter',
    type: 'text',
    placeholder: 'Delimiter: "."',
    required: true,
  },
  maskRule: {
    delimiter: '·',
    blocks: [3, 3, 3],
    uppercase: true,
  },
};

Delimiters.args = {
  label: 'Delimiters',
  input: {
    id: 'delimiters',
    name: 'delimiters',
    type: 'text',
    placeholder: 'Delimiters: [".", ".", "-"]',
    required: true,
  },
  maskRule: {
    delimiters: ['.', '.', '-'],
    blocks: [3, 3, 3, 2],
    uppercase: true,
  },
};

Prefix.args = {
  label: 'Prefix',
  input: {
    id: 'prefix',
    name: 'prefix',
    type: 'text',
    placeholder: 'Prefix-',
    required: true,
  },
  maskRule: {
    prefix: 'PREFIX',
    delimiter: '-',
    blocks: [6, 4, 4, 4],
    uppercase: true,
  },
};

MaskedLeftAddon.args = {
  label: 'Left Addon',
  input: {
    id: 'maskedleftaddon',
    name: 'maskedleftaddon',
    type: 'text',
    placeholder: 'Shipping Cost',
    required: true,
  },
  maskRule: {
    numeral: true,
  },
  addOnLeft: '$',
};

MaskedRightAddon.args = {
  label: 'Right Addon',
  input: {
    id: 'maskedrightaddon',
    name: 'maskedrightaddon',
    type: 'text',
    placeholder: 'Shipping Cost',
    required: true,
  },
  maskRule: {
    numeral: true,
  },
  addOnRight: '$',
};

MaskedWithIcon.args = {
  label: 'Card',
  icon: HiCreditCard,
  maskRule: { creditCard: true },
  input: {
    id: 'card',
    name: 'card',
    type: 'text',
    placeholder: 'Enter credit card number',
    required: false,
  },
};

MaskedError.args = {
  label: 'Phone',
  icon: HiPhone,
  errors: ['Phone number field is required'],
  input: {
    id: 'phone',
    name: 'phone',
    type: 'text',
    placeholder: 'Enter phone number',
    required: true,
  },
  maskRule: { phone: true },
};
