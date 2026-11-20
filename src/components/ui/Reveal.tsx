'use client';

import { motion, type HTMLMotionProps } from 'motion/react';

type Props = HTMLMotionProps<'div'> & { delay?: number; y?: number; as?: 'div' | 'li' };

/** Görünür alana girince yumuşakça beliren sarmalayıcı. */
export function Reveal({ delay = 0, y = 28, as = 'div', children, ...rest }: Props) {
  const Comp = (as === 'li' ? motion.li : motion.div) as typeof motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
