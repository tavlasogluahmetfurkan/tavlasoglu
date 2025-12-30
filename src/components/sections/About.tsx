'use client';

import { motion } from 'framer-motion';
import { Camera, Hexagon, Video } from 'lucide-react';

export const About = () => {
  const equipment = [
    { name: 'DJI mavic 4 Pro', category: 'Drone' },
    { name: 'DJI Osmo pocket 3 ', category: 'Sinema Kamerası' },
    { name: 'Canon 650D', category: 'Sinematik Kamera' },
    { name: 'GIMBAL Stabilizer', category: 'Video Stabilisasyon' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="relative py-20 md:py-28 bg-black section-snap overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-[0_20px_70px_-40px_rgba(0,0,0,0.75)] border border-gold/10">
          {/* Left: background visual with right-fading gradient */}
          <div className="relative h-80 md:h-full min-h-[320px]">
            <video
              key="hakkimizda-video-v4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              {/* cache-bust query to ensure latest upload is loaded */}
              <source src="/videos/hakkimizda.mp4?v=4" type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/60 to-black" />
          </div>

          {/* Right: content on solid dark surface */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative bg-black/95 backdrop-blur-sm px-6 sm:px-8 md:px-10 py-10 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Hakkımda
              </h2>
              <div className="w-12 h-1 bg-gradient-gold rounded-full" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed"
            >
              Bireysel ve kurumsal projeler için; drone ile havadan, belgesel tarzında ya da klasik video ve fotoğraf çekimleri gerçekleştiriyoruz. 
              Markalara ve kişilere özel hikaye anlatımıyla, her çekimde özgün bir bakış açısı ve sinematik kalite sunuyoruz.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 py-6"
            >
              {[
                { number: '100+', label: 'Proje' },
                { number: '10+', label: 'Yıl Deneyim' },
                { number: '5+', label: 'Ödül & Taklif' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-display font-bold text-gold">{stat.number}</p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Equipment Grid */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-display font-semibold text-white mb-4">
                Kullanılan Ekipman
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {equipment.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="p-4 bg-dark-secondary rounded-lg border border-gold/20 hover:border-gold transition-colors group cursor-pointer"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-gold mb-2 group-hover:scale-110 transition-transform">
                      {index === 0 && <Camera className="w-5 h-5" />}
                      {index === 1 && <Video className="w-5 h-5" />}
                      {index === 2 && <Hexagon className="w-5 h-5" />}
                      {index === 3 && <Camera className="w-5 h-5" />}
                    </div>
                    <p className="text-white font-semibold text-sm">{item.name}</p>
                    <p className="text-gray-400 text-xs">{item.category}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
