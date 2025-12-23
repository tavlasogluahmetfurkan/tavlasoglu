'use client';

import { motion } from 'framer-motion';

export const Skeleton = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      className={`bg-dark-secondary rounded ${className}`}
      animate={{
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
    />
  );
};

export const ImageSkeleton = () => (
  <Skeleton className="w-full h-64 md:h-96" />
);

export const TextSkeleton = ({ lines = 3 }: { lines?: number }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
      />
    ))}
  </div>
);
