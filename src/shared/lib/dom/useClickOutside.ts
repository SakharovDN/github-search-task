import { RefObject, useEffect } from 'react';

export function useClickOutside<T extends HTMLElement>(
  cb: (event: MouseEvent | TouchEvent) => void,
  ref: RefObject<T | null>
): void;

export function useClickOutside(
  cb: (event: MouseEvent | TouchEvent) => void,
  refs: RefObject<HTMLElement | null>[]
): void;

export function useClickOutside<T extends HTMLElement>(
  cb: (event: MouseEvent | TouchEvent) => void,
  refOrRefs: RefObject<HTMLElement | null>[] | RefObject<T | null>
): void {
  function handleClickOutside(event: MouseEvent | TouchEvent) {
    if (Array.isArray(refOrRefs)) {
      if (
        refOrRefs.some((ref) => !ref.current) ||
        refOrRefs.some((ref) => ref.current!.contains(event.target as HTMLElement))
      ) {
        return;
      }
    } else {
      if (refOrRefs.current && refOrRefs.current.contains(event.target as HTMLElement)) {
        return;
      }
    }

    cb(event);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refOrRefs, cb]);
}
