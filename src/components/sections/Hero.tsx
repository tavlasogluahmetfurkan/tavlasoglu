'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen bg-dark overflow-hidden pt-20 section-snap">
      {/* Video Background: prefer WebM then MP4; poster for fallback */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        src="/videos/anasayfa.mp4"
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        {/* Use the new hero video */}
        <source src="/videos/anasayfa.mp4" type="video/mp4" />
        {/* Browser fallback message */}
        Your browser does not support the background video.
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <motion.div
          className="text-center max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Havadan
            <span className="block text-gold mt-2">Sinema Anlatısı</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Profesyonel belgesel çekimleri ve drone görüntüleriyle markanızın hikayesini anlatıyorum.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('gallery')}
            >
              Projeleri Gör
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              İletişim Kur
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-gold" />
      </motion.div>
    </section>
  );
};
