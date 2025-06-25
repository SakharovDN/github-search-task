import { MouseEvent, ReactNode, useRef, useState } from 'react';

import clsx from 'clsx';

import { useClickOutside } from '@/shared/lib/dom';

import { ChevronDownIcon } from '../icons';

import styles from './Select.module.scss';

export interface SelectOption<T extends SelectValue = SelectValue> {
  value: T;
  label: ReactNode;
}

interface SelectProps<T extends SelectValue = SelectValue> {
  options: SelectOption<T>[];
  value?: T;
  className?: string;
  placeholder?: string;
  onChange?: (value: T | undefined) => void;
}

type SelectValue = number | string | undefined;

export const Select = <T extends SelectValue = SelectValue>({
  options,
  className,
  value,
  placeholder = 'Select',
  onChange,
}: SelectProps<T>) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (value: T) => (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(false);
    onChange?.(value);
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useClickOutside(() => setIsOpen(false), [selectRef, dropdownRef]);

  const label = getOptionLabel(options, value);

  return (
    <div ref={selectRef} className={clsx(styles.select, className)} onClick={handleClick}>
      <div className={clsx(styles.value, !label && styles.isPlaceholder)}>{label ?? placeholder}</div>
      <ChevronDownIcon className={clsx(styles.selectArrow, isOpen && styles.isOpen)} />

      {isOpen && (
        <div ref={dropdownRef} className={styles.dropdown}>
          {options.map((option) => (
            <div
              key={option.value}
              className={clsx(styles.option, value === option.value && styles.selected)}
              onClick={handleChange(option.value)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function getOptionLabel<T extends SelectValue>(options: SelectOption<T>[], optionValue: T) {
  return options.find((option) => option.value === optionValue)?.label;
}
