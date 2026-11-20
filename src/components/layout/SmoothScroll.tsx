'use client';

import { ReactLenis } from 'lenis/react';
import { useReducedMotion } from '@/lib/hooks';

/** Lenis ile akıcı kaydırma. "Hareketi azalt" tercihi açıksa yerel kaydırmaya döner. */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: !reduced,
        anchors: { offset: -72 },
        stopInertiaOnNavigate: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
