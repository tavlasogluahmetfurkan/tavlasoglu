'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variants?: Variants;
}

export const SectionWrapper = ({
  children,
  id,
  className = '',
  variants,
}: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      className={`${className} section-snap`.trim()}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};
