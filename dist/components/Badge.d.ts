import { ReactNode } from 'react';
export type BadgeProps = {
    className?: string;
    color: 'amber' | 'blue' | 'cyan' | 'emerald' | 'fuchsia' | 'green' | 'gray' | 'indigo' | 'lime' | 'orange' | 'pink' | 'purple' | 'red' | 'rose' | 'sky' | 'teal' | 'violet' | 'yellow' | 'primary' | 'secondary' | 'danger';
    label: ReactNode;
};
declare const Badge: ({ color, label, className }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export default Badge;
