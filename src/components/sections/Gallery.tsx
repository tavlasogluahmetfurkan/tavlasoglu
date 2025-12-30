'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play, Search, X } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'drone' | 'documentary' | 'commercial';
  thumbnail: string;
  fullImage: string;
  type: 'image' | 'video';
  videoSrc?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: '',
    category: 'commercial',
    thumbnail: '/videos/projevideo1.jpg',
    fullImage: '/videos/projevideo1.mp4',
    type: 'video',
    videoSrc: '/videos/projevideo1.mp4',
  },
  {
    id: 2,
    title: '',
    category: 'documentary',
    thumbnail: '/videos/projevideo2.jpg',
    fullImage: '/videos/projevideo2.mp4',
    type: 'video',
    videoSrc: '/videos/projevideo2.mp4',
  },
  {
    id: 3,
    title: '',
    category: 'drone',
    thumbnail: '/videos/projevideo3.jpg',
    fullImage: '/videos/projevideo3.mp4',
    type: 'video',
    videoSrc: '/videos/projevideo3.mp4',
  },
  {
    id: 4,
    title: '',
    category: 'commercial',
    thumbnail: '/videos/projevideo4.jpg',
    fullImage: '/videos/projevideo4.mp4',
    type: 'video',
    videoSrc: '/videos/projevideo4.mp4',
  },
];

export const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'drone' | 'documentary' | 'commercial'>('all');

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-32 bg-dark-secondary section-snap overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="/videos/projevideo1.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/videos/projevideo1.mp4"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark/80" />

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
            Portföy
          </h2>
          <p className="text-gray-400 text-lg">Profesyonel çalışmalarımdan seçmeler</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {['all', 'drone', 'documentary', 'commercial'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat
                  ? 'bg-gradient-gold text-dark'
                  : 'bg-dark border border-gold/30 text-gold hover:border-gold'
              }`}
            >
              {cat === 'all' && 'Tümü'}
              {cat === 'drone' && 'Drone'}
              {cat === 'documentary' && 'Belgesel'}
              {cat === 'commercial' && 'Ticari'}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid - Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer h-64"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedItem(item)}
            >
              {/* Video Thumbnail */}
              {item.type === 'video' ? (
                <video
                  src={item.videoSrc}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  preload="metadata"
                  muted
                  playsInline
                  style={{ pointerEvents: 'none' }}
                  poster={undefined}
                />
              ) : (
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  className="text-center"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.type === 'video' && (
                    <Play className="w-12 h-12 text-gold mb-4 mx-auto fill-gold" />
                  )}
                  {item.type === 'image' && (
                    <Search className="w-12 h-12 text-gold mb-4 mx-auto" />
                  )}
                  <p className="text-white font-semibold text-lg">{item.title}</p>
                </motion.div>
              </div>

              {/* Video Badge */}
              {item.type === 'video' && (
                <div className="absolute top-4 right-4 bg-gold/80 rounded-full p-2">
                  <Play className="w-4 h-4 text-dark fill-dark" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-dark/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 text-gold hover:text-gold-light transition-colors z-10"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            {/* Image/Video */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {selectedItem.type === 'image' ? (
                <Image
                  src={selectedItem.fullImage}
                  alt={selectedItem.title}
                  width={1400}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-2xl"
                  loading="eager"
                />
              ) : (
                <div className="relative bg-black rounded-lg overflow-hidden aspect-video shadow-2xl">
                  <video
                    className="w-full h-full"
                    controls
                    preload="metadata"
                    poster={selectedItem.thumbnail}
                    muted
                  >
                    <source
                      src={selectedItem.videoSrc || selectedItem.fullImage}
                      type="video/mp4"
                    />
                    Tarayıcınız video etiketini desteklemiyor.
                  </video>
                </div>
              )}
            </motion.div>

            {/* Title */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-display font-bold text-white">
                {selectedItem.title}
              </h3>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
