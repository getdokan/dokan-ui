import * as Switch from '@radix-ui/react-switch';
import { ReactElement, useId } from 'react';

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
  disabled?: boolean;
  id?: string;
  required?: boolean;
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
  disabled = false,
  id: providedId,
  required,
}: ToggleSwitchProps) => {
  // Generate a unique ID if none provided
  const generatedId = useId();
  const id = providedId || `toggle-${generatedId}`;

  return (
    <>
      <div className="flex items-center relative">
        <Switch.Root
          id={id}
          defaultChecked={defaultChecked}
          name={name}
          value={value}
          checked={checked}
          onCheckedChange={onChange}
          disabled={disabled}
          className={`${checked ? bgClasses[color] : 'bg-gray-200'} ${
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          } relative inline-flex items-center h-5 w-10 rounded-full outline-none`}
          required={required}
        >
          <Switch.Thumb
            className={`${
              checked ? 'translate-x-6' : 'translate-x-1'
            } block h-3.5 w-3.5 rounded-full bg-white transition-transform duration-200 ease-in-out`}
          />
        </Switch.Root>
        {children ||
          (label && (
            <label
              htmlFor={id}
              className={`ms-2.5 text-sm font-medium text-gray-900 ${
                disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              {label}
              {required && <span className={'ms-0.5 text-danger-500'}>*</span>}
            </label>
          ))}
      </div>
      {helpText && <p className={`mt-2.5 text-xs text-gray-400 ${disabled ? 'opacity-50' : ''}`}>{helpText}</p>}
    </>
  );
};

export default ToggleSwitch;
