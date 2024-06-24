import { Switch } from '@headlessui/react';
import { ReactElement } from 'react';

export interface ToggleSwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  color?: string;
  label?: string | ReactElement;
  children?: ReactElement;
  name?: string;
  value?: string;
  defaultChecked?: boolean;
  helpText?: string | ReactElement;
}

const bgClasses: Record<string, string> = {
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

const ToggleSwitch = ({
  checked,
  onChange,
  color = 'primary',
  children,
  label,
  name,
  value,
  defaultChecked,
  helpText,
}: ToggleSwitchProps) => {
  return (
    <>
      <Switch.Group as="div" className="flex items-center">
        <Switch
          defaultChecked={defaultChecked}
          name={name}
          value={value}
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
        {children ||
          (label && (
            <Switch.Label className="ms-2.5 cursor-pointer text-sm font-medium text-[#25252D]">{label}</Switch.Label>
          ))}
      </Switch.Group>
      {helpText && <p className="mt-2.5 text-xs text-[#828282]">{helpText}</p>}
    </>
  );
};

export default ToggleSwitch;
