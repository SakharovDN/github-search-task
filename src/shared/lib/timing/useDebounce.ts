import { useEffect, useState } from 'react';

const DEFAULT_DEBOUNCE_DELAY = 500;

export const useDebounce = <T>(value: T, delay = DEFAULT_DEBOUNCE_DELAY): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
};
