import { Switch } from '@headlessui/react';
import React, { ReactElement } from 'react';

interface AnyObject {
  [key: string]: any;
}

export interface ToggleSwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  color?: string;
  label?: string | ReactElement;
  children?: ReactElement;
}

const bgClasses: AnyObject = {
  amber: `bg-amber-500`,
  blue: `bg-blue-500`,
  cyan: `bg-cyan-500`,
  emerald: `bg-emerald-500`,
  fuchsia: `bg-fuchsia-500`,
  green: `bg-green-500`,
  gray: `bg-gray-500`,
  indigo: `bg-indigo-500`,
  lime: `bg-lime-500`,
  orange: `bg-orange-500`,
  pink: `bg-pink-500`,
  purple: `bg-purple-500`,
  red: `bg-red-500`,
  rose: `bg-rose-500`,
  sky: `bg-sky-500`,
  teal: `bg-teal-500`,
  violet: `bg-violet-500`,
  yellow: `bg-yellow-500`,
  primary: `bg-primary-500`,
  secondary: `bg-secondary-500`,
  danger: `bg-danger-500`,
  white: `bg-white`,
};

const ToggleSwitch = ({ checked, onChange, color = 'primary', children, label }: ToggleSwitchProps) => {
  return (
    <div className="flex items-center">
      <Switch
        checked={checked}
        onChange={onChange}
        style={{ width: '42px', minWidth: '42px' }}
        className={`${checked ? bgClasses[color] : 'bg-gray-200'} relative inline-flex items-center h-5 rounded-full`}
      >
        <span
          style={{ height: '14px', width: '14px', minWidth: '14px' }}
          className={`${
            checked ? 'translate-x-6' : 'translate-x-1'
          } inline-block transform transition ease-in-out duration-200 bg-white rounded-full`}
        />
      </Switch>
      {children || (label && <p className="text-sm ms-2">{label}</p>)}
    </div>
  );
};

export default ToggleSwitch;
