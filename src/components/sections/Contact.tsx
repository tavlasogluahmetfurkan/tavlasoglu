'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Contact = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/skisnowly/', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/%C3%B6mer-faruk-tavla%C5%9Fo%C4%9Flu-b83731325/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' },
  ];

  const contactInfo = [
    { icon: Mail, label: 'E-mail', value: 'omerfb399@hotmail.com', href: 'mailto:omerfb399@hotmail.com' },
    { icon: Phone, label: 'Telefon', value: '+90 553 751 01 25', href: 'tel:+905537510125' },
    { icon: MapPin, label: 'Konum', value: 'Erzurum, Türkiye' },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-dark-secondary section-snap overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-55"
        src="/videos/iletisim.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/videos/iletisim.mp4"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/78" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="rounded-2xl bg-black/55 backdrop-blur-md border border-gold/10 shadow-[0_20px_80px_-50px_rgba(0,0,0,0.8)] p-8 sm:p-10 lg:p-12 space-y-10">
          {/* Header */}
          <motion.div
            className="space-y-3 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-gold/80">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              İletişim
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
              Projeleriniz için doğrudan ulaşın.
            </p>
          </motion.div>

          {/* Content layout: left contact lines, right socials */}
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
            {/* Contact lines */}
            <motion.div
              className="flex-1 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              viewport={{ once: true }}
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const clickable = Boolean(info.href);
                const contentClass = info.label === 'Konum' ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl';

                const content = clickable ? (
                  <a
                    href={info.href}
                    className={`transition-colors ${contentClass} font-semibold text-white hover:text-amber-300`}
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className={`${contentClass} font-semibold text-white`}>{info.value}</span>
                );

                return (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-xs uppercase tracking-[0.25em] text-gold/80">{info.label}</p>
                      {content}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Social Links on the right */}
            <motion.div
              className="w-full md:w-72 lg:w-80 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-gold/80 text-center md:text-left">Sosyal Medya</p>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-full px-4 py-3 rounded-full border border-gold/30 bg-gold/5 text-gold hover:bg-gold hover:text-dark transition-all flex items-center gap-3 justify-center md:justify-start"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-semibold">{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
