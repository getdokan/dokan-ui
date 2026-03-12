import React, { HTMLAttributes, KeyboardEvent, useCallback, useEffect, useId, useRef, useState } from 'react';
import { classNames } from '@/utils';

export type TabItem = {
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
};

export type AppTabVariant = 'default' | 'underline';
export type AppTabSize = 'sm' | 'md';

export type AppTabProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
    items: TabItem[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    variant?: AppTabVariant;
    size?: AppTabSize;
    className?: string;
    fullWidth?: boolean;
    /** Id prefix used to generate aria-controls/id pairs. Defaults to a React-generated id. */
    tabId?: string;
};

const AppTab = ({
    items,
    value: controlledValue,
    defaultValue,
    onChange,
    variant = 'default',
    size = 'md',
    className,
    fullWidth = false,
    tabId: tabIdProp,
    ...rest
}: AppTabProps) => {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState(
        defaultValue ?? items[0]?.value ?? ''
    );
    const activeValue = isControlled ? controlledValue : internalValue;

    const generatedId = useId();
    const tabId = tabIdProp ?? generatedId;

    const containerRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
    const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

    const updateIndicator = useCallback(() => {
        const activeTab = tabRefs.current.get(activeValue);
        const container = containerRef.current;
        if (!activeTab || !container) return;

        const containerRect = container.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();

        setIndicatorStyle({
            width: tabRect.width,
            left: tabRect.left - containerRect.left,
        });
    }, [activeValue]);

    useEffect(() => {
        updateIndicator();
    }, [updateIndicator, items]);

    useEffect(() => {
        const observer = new ResizeObserver(() => updateIndicator());
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [updateIndicator]);

    const handleTabClick = (tabValue: string) => {
        if (!isControlled) {
            setInternalValue(tabValue);
        }
        onChange?.(tabValue);
    };

    const setTabRef = (value: string) => (el: HTMLButtonElement | null) => {
        if (el) {
            tabRefs.current.set(value, el);
        } else {
            tabRefs.current.delete(value);
        }
    };

    const enabledItems = items.filter((item) => !item.disabled);

    const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, currentValue: string) => {
        const currentIndex = enabledItems.findIndex((item) => item.value === currentValue);
        let nextIndex: number | null = null;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            nextIndex = (currentIndex + 1) % enabledItems.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            nextIndex = (currentIndex - 1 + enabledItems.length) % enabledItems.length;
        } else if (e.key === 'Home') {
            nextIndex = 0;
        } else if (e.key === 'End') {
            nextIndex = enabledItems.length - 1;
        }

        if (nextIndex !== null) {
            e.preventDefault();
            const nextValue = enabledItems[nextIndex].value;
            tabRefs.current.get(nextValue)?.focus();
            handleTabClick(nextValue);
        }
    };

    const sizeClasses = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2 text-sm',
    };

    const isDefault = variant === 'default';
    const isUnderline = variant === 'underline';

    return (
        <div
            ref={containerRef}
            role="tablist"
            className={classNames(
                'relative inline-flex items-center',
                isDefault && 'gap-0 rounded-lg bg-[#e2e2e7] p-1',
                isUnderline && 'gap-0 border-b border-gray-200',
                fullWidth && 'flex w-full',
                className
            )}
            {...rest}
        >
            {/* Sliding indicator */}
            <span
                aria-hidden="true"
                className={classNames(
                    'absolute transition-all duration-300 ease-in-out',
                    isDefault &&
                        'top-1 bottom-1 rounded-md bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.05)]',
                    isUnderline && 'bottom-0 h-0.5 bg-primary-700'
                )}
                style={indicatorStyle}
            />

            {items.map((item) => {
                const isActive = activeValue === item.value;

                return (
                    <button
                        key={item.value}
                        ref={setTabRef(item.value)}
                        id={`${tabId}-tab-${item.value}`}
                        role="tab"
                        type="button"
                        aria-selected={isActive}
                        aria-controls={`${tabId}-panel-${item.value}`}
                        tabIndex={isActive ? 0 : -1}
                        disabled={item.disabled}
                        onClick={() => handleTabClick(item.value)}
                        onKeyDown={(e) => handleKeyDown(e, item.value)}
                        className={classNames(
                            'relative z-[1] cursor-pointer whitespace-nowrap font-medium leading-5 transition-colors duration-200 select-none',
                            sizeClasses[size],
                            fullWidth && 'flex-1 text-center',
                            isActive
                                ? 'text-[#464654]'
                                : 'text-[#68687e] hover:text-[#464654]',
                            item.disabled && 'pointer-events-none opacity-50',
                            isDefault && 'rounded-md',
                        )}
                    >
                        {item.label}
                    </button>
                );
            })}
        </div>
    );
};

AppTab.displayName = 'AppTab';

export default AppTab;
