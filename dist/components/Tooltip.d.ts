/// <reference types="react" />
export type TooltipProps = {
    direction?: 'top' | 'right' | 'bottom' | 'left';
    children: React.ReactNode;
    content: React.ReactNode;
    contentClass?: string;
};
export default function Tooltip({ direction, children, content, contentClass }: TooltipProps): import("react/jsx-runtime").JSX.Element;
