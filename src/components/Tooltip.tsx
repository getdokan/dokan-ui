import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { twMerge } from 'tailwind-merge';

export type TooltipProps = {
  direction?: 'top' | 'right' | 'bottom' | 'left';
  children: React.ReactNode;
  content: React.ReactNode;
  contentClass?: string;
};

export default function Tooltip({ direction = 'top', children, content, contentClass }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={0}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            sideOffset={5}
            className={twMerge(
              'text-dark-50 z-50 select-none rounded-[4px] bg-black px-2 py-1.5 text-xs leading-none text-white will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slide-up-fade data-[state=delayed-open]:data-[side=left]:animate-slide-right-fade data-[state=delayed-open]:data-[side=right]:animate-slide-left-fade data-[state=delayed-open]:data-[side=top]:animate-slide-down-fade',
              contentClass
            )}
            side={direction}
            align="center"
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-black" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
