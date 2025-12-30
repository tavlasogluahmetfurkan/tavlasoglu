'use client';

import { motion } from 'framer-motion';
import { Film, Eye, Scissors } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'Belgesel Çekimi',
    description: 'Yüksek kaliteli belgesel prodüksiyonları. Kurgudan çekime kadar profesyonel hizmet.',
    features: ['4K/8K Çekimi', 'Sinematik Renk Gradasyonu', 'Profesyonel Ekip'],
  },
  {
    icon: Eye,
    title: 'Havadan Görüntüleme',
    description: 'Drone teknolojisini kullanarak perspektif farklı ve etkileyici çekimler.',
    features: ['DJI mavic 4 Pro', 'Real-time İzleme', 'Stabilize Kurgu'],
  },
  {
    icon: Scissors,
    title: 'Video Kurgu & Post-Production',
    description: 'Profesyonel edit, ses tasarımı ve renklandırma hizmetleri.',
    features: ['Adobe Creative Suite', 'VFX & Motion Graphics', 'Ses Tasarımı'],
  },
];

export const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="services"
      className="relative py-20 md:py-32 bg-dark section-snap overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-35"
        src="/videos/hizmetler.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/videos/hizmetler.mp4"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Hizmetler
          </h2>
          <p className="text-gray-400 text-lg">Profesyonel üretim süreci boyunca hizmet</p>
          <div className="w-16 h-1 bg-gradient-gold rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative p-8 bg-gradient-dark rounded-xl border border-gold/10 hover:border-gold/50 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -10 }}
              >
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-block p-3 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-2 text-gray-300 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="w-1 h-1 bg-gold rounded-full" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA butonu tamamen kaldırıldı */}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
