import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { HiChevronDown } from 'react-icons/hi';
import { BsCheck2 } from 'react-icons/bs';
import { classNames } from '@/utils';

const Select = ({ children, ...props }: SelectPrimitive.SelectProps) => {
  return <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>;
};

const SelectGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.SelectGroup>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.SelectGroup>
>(({ children, ...props }, ref) => {
  return (
    <SelectPrimitive.Group ref={ref} {...props}>
      {children}
    </SelectPrimitive.Group>
  );
});

SelectGroup.displayName = SelectPrimitive.SelectGroup.displayName;

const SelectValue = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.SelectValue>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.SelectValue>
>(({ children, className, ...props }, ref) => {
  return (
    <SelectPrimitive.Value className={classNames('', className)} ref={ref} {...props}>
      {children}
    </SelectPrimitive.Value>
  );
});

SelectValue.displayName = SelectPrimitive.SelectValue.displayName;

interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  chevronDown?: boolean;
}
const SelectTrigger = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, SelectTriggerProps>(
  ({ className, children, chevronDown = true, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={classNames(
        'flex h-[30px] w-full  items-center justify-between whitespace-nowrap rounded border border-gray-300 bg-transparent  p-2 text-xs text-gray-800 placeholder:text-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}

      {chevronDown && (
        <SelectPrimitive.Icon asChild>
          <HiChevronDown className="h-4 w-4 opacity-50 flex-none" />
        </SelectPrimitive.Icon>
      )}
    </SelectPrimitive.Trigger>
  )
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, sideOffset = -40, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Content
    ref={ref}
    className={classNames(
      'relative z-50 min-w-[8rem] overflow-hidden rounded border bg-white  shadow-md will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slide-up-fade data-[state=open]:data-[side=left]:animate-slide-right-fade data-[state=open]:data-[side=right]:animate-slide-left-fade data-[state=open]:data-[side=top]:animate-slide-down-fade',
      position === 'popper' &&
        'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
      className
    )}
    sideOffset={sideOffset}
    position={position}
    {...props}
  >
    <SelectPrimitive.Viewport
      className={classNames(
        // 'p-1',
        position === 'popper' &&
          'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
      )}
    >
      {children}
    </SelectPrimitive.Viewport>
  </SelectPrimitive.Content>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={classNames('py-1.5 ps-8 pe-2 text-sm font-semibold', className)}
    {...props}
  >
    {children}
  </SelectPrimitive.Label>
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  showCheck?: boolean;
}
const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, SelectItemProps>(
  ({ className, children, showCheck = true, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={classNames(
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 ps-8 pe-2 text-xs text-gray-800 outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      {showCheck && (
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <SelectPrimitive.ItemIndicator>
            <BsCheck2 className="h-4 w-4" />
          </SelectPrimitive.ItemIndicator>
        </span>
      )}

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={classNames('-mx-1 my-1 h-px bg-slate-300', className)} {...props}>
    {children}
  </SelectPrimitive.Separator>
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

Select.Group = SelectGroup;
Select.Value = SelectValue;
Select.Trigger = SelectTrigger;
Select.Content = SelectContent;
Select.Label = SelectLabel;
Select.Item = SelectItem;
Select.Separator = SelectSeparator;

Select.displayName = SelectPrimitive.Select.displayName;

export default Select;
