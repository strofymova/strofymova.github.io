import { RefObject, useEffect } from 'react';

export const useIntersectionObserver = (
  targetRef: RefObject<Element>,
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
) => {
  useEffect(() => {
    if (!targetRef.current || !callback) return;

    const observer = new IntersectionObserver((entries) => {
      callback(entries[0]);
    }, options);

    observer.observe(targetRef.current);

    return () => {
      observer.unobserve;
    };
  }, [targetRef, callback, options]);
};
