'use client';

import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-gold/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-display font-bold text-gold">SKİSNOWLY</p>
            <p className="text-gray-400 text-sm mt-1">
              © {currentYear} Tüm hakları saklıdır.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#about" className="text-gray-400 hover:text-gold transition-colors">
              Hakkımda
            </a>
            <a href="#gallery" className="text-gray-400 hover:text-gold transition-colors">
              Portföy
            </a>
            <a href="#services" className="text-gray-400 hover:text-gold transition-colors">
              Hizmetler
            </a>
            <a href="#contact" className="text-gray-400 hover:text-gold transition-colors">
              İletişim
            </a>
          </div>

          {/* Brand Statement */}
          <p className="text-gray-500 text-xs text-center md:text-right">
            Cinematic storytelling through digital innovation
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
