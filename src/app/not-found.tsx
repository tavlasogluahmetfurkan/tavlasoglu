'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-7xl md:text-8xl font-display font-bold text-gold mb-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          404
        </motion.h1>

        <h2 className="text-3xl font-display font-bold text-white mb-4">
          Sayfa Bulunamadı
        </h2>

        <p className="text-gray-400 text-lg mb-8">
          Aradığınız sayfa maalesef mevcut değil. Ana sayfaya dönen geri dönebilirsiniz.
        </p>

        <Link href="/">
          <motion.button
            className="px-8 py-3 bg-gradient-gold text-dark font-semibold rounded hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ana Sayfaya Dön
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
