'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';
import { BackgroundVideo } from '@/components/ui/BackgroundVideo';
import { site, stats } from '@/content/site';
import { useScrollTo } from '@/lib/useScrollTo';

const ease = [0.16, 1, 0.3, 1] as const;

const Line = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
  <span className="block overflow-hidden pb-[0.08em]">
    <motion.span
      className="block"
      initial={{ y: '105%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, delay, ease }}
    >
      {children}
    </motion.span>
  </span>
);

export function Hero() {
  const scrollTo = useScrollTo();
  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <section id="top" className="grain relative isolate flex h-[100svh] min-h-[640px] flex-col overflow-hidden">
      <BackgroundVideo
        priority
        landscape={{ src: '/media/hero-desktop.mp4', poster: '/media/hero-desktop.jpg' }}
        portrait={{ src: '/media/hero-mobile.mp4', poster: '/media/hero-mobile.jpg' }}
        className="-z-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/10 to-ink" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_85%,rgb(6_8_11/0.75),transparent_60%)]" />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-5 pb-28 sm:px-8 md:pb-32">
        <motion.p
          className="eyebrow mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {site.location.split(',')[0]} · {site.role}
        </motion.p>

        <h1 className="font-display text-[clamp(3.6rem,11.5vw,10.5rem)] leading-[0.88] tracking-[-0.02em] text-snow">
          <Line delay={0.25}>Havadan</Line>
          <Line delay={0.4}>
            <em className="text-gold-soft">sinema</em> anlatısı.
          </Line>
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease }}
          >
            <p className="text-base leading-relaxed text-snow/75 md:text-lg">
              Drone ve belgesel çekimleriyle markanızın, şehrinizin ya da hikâyenizin en etkileyici anlarını
              yakalıyorum.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#portfoy"
                onClick={(e) => go(e, '#portfoy')}
                className="group inline-flex items-center gap-3 rounded-full bg-gold py-2 pl-2 pr-6 font-medium text-ink transition-colors duration-300 hover:bg-gold-soft"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-gold transition-transform duration-500 group-hover:scale-110">
                  <Play className="h-4 w-4 translate-x-px fill-current" />
                </span>
                Projeleri izle
              </a>
              <a
                href="#iletisim"
                onClick={(e) => go(e, '#iletisim')}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-6 py-3.5 text-snow backdrop-blur-sm transition-colors duration-300 hover:border-white/50 hover:bg-white/5"
              >
                İletişime geç <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.dl
            className="hidden gap-10 md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="border-l border-white/15 pl-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl text-snow">{s.value}</dd>
                <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-mist">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        aria-hidden="true"
      >
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/30 pt-2">
          <span className="h-1.5 w-1 animate-scroll-dot rounded-full bg-gold" />
        </span>
      </motion.div>
    </section>
  );
}
