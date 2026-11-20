'use client';

import { useLenis } from 'lenis/react';
import { useCallback } from 'react';

/** Lenis varsa akıcı, yoksa yerel kaydırma ile bir bölüme gider. */
export function useScrollTo() {
  const lenis = useLenis();
  return useCallback(
    (hash: string) => {
      const target = hash === '#top' ? 0 : hash;
      if (lenis) {
        lenis.start();
        lenis.scrollTo(target, { offset: -72, duration: 1.4 });
      } else if (target === 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [lenis],
  );
}
