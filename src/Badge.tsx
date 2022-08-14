import classNames from 'classnames';
import React, { ReactNode } from 'react';

export type BadgeProps = {
  color:
    | 'amber'
    | 'blue'
    | 'cyan'
    | 'emerald'
    | 'fuchsia'
    | 'green'
    | 'gray'
    | 'indigo'
    | 'lime'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'red'
    | 'rose'
    | 'sky'
    | 'teal'
    | 'violet'
    | 'yellow'
    | 'primary'
    | 'secondary'
    | 'danger';
  label: ReactNode;
};

const colors = {
  amber: 'bg-amber-200 text-amber-900',
  blue: 'bg-blue-200 text-blue-900',
  cyan: 'bg-cyan-200 text-cyan-900',
  emerald: 'bg-emerald-200 text-emerald-900',
  fuchsia: 'bg-fuchsia-200 text-fuchsia-900',
  green: 'bg-green-200 text-green-900',
  gray: 'bg-gray-200 text-gray-900',
  indigo: 'bg-indigo-200 text-indigo-900',
  lime: 'bg-lime-200 text-lime-900',
  orange: 'bg-orange-200 text-orange-900',
  pink: 'bg-pink-200 text-pink-900',
  purple: 'bg-purple-200 text-purple-900',
  red: 'bg-red-200 text-red-900',
  rose: 'bg-rose-200 text-rose-900',
  sky: 'bg-sky-200 text-sky-900',
  teal: 'bg-teal-200 text-teal-900',
  violet: 'bg-violet-200 text-violet-900',
  yellow: 'bg-yellow-200 text-yellow-900',
  primary: 'bg-primary-200 text-primary-900',
  secondary: 'bg-secondary-200 text-secondary-900',
  danger: 'bg-danger-200 text-danger-900',
};

const Badge = ({ color, label }: BadgeProps) => {
  return (
    <span
      className={classNames(
        'text-xs px-2 py-1 rounded-full whitespace-nowrap',
        colors[color]
      )}
    >
      {label}
    </span>
  );
};

export default Badge;
