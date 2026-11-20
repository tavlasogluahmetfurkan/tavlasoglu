'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { useLenis } from 'lenis/react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { works, type Work as WorkItem } from '@/content/site';
import { useMediaQuery, useReducedMotion } from '@/lib/hooks';
import { cn } from '@/lib/utils';

const pad = (n: number) => String(n).padStart(2, '0');

export function Work() {
  const [index, setIndex] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const open = (i: number, el: HTMLElement) => {
    lastTrigger.current = el;
    setIndex(i);
  };
  const close = () => {
    setIndex(null);
    lastTrigger.current?.focus({ preventScroll: true });
  };

  return (
    <section id="portfoy" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end">
          <Reveal>
            <p className="eyebrow mb-5">Seçilmiş işler</p>
            <h2 className="font-display text-6xl leading-[0.95] text-snow md:text-8xl">
              Portföy <span className="align-top font-sans text-base text-mist">({pad(works.length)})</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:justify-self-end">
            <p className="max-w-sm text-mist md:text-right">
              Erzurum&apos;un kışından, havadan anlatılmış kareler. İzlemek için bir videoya dokunun.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-flow-dense lg:auto-rows-[clamp(180px,19vw,300px)] lg:grid-cols-4">
          {works.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} onOpen={open} />
          ))}
        </ul>
      </div>

      <Lightbox index={index} onIndex={setIndex} onClose={close} />
    </section>
  );
}

function WorkCard({
  work,
  index,
  onOpen,
}: {
  work: WorkItem;
  index: number;
  onOpen: (i: number, el: HTMLElement) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLLIElement>(null);
  const [playing, setPlaying] = useState(false);
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)', true);
  const reduced = useReducedMotion();

  const play = () => {
    const v = videoRef.current;
    if (!v || reduced) return;
    if (!v.getAttribute('src')) v.src = work.preview;
    v.muted = true;
    v.play().catch(() => {});
  };
  const pause = () => videoRef.current?.pause();

  // Dokunmatik cihazlarda önizleme, kart ekranın ortasındayken oynar
  useEffect(() => {
    if (canHover || reduced || !cardRef.current) return;
    const v = videoRef.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!v) return;
        if (entry.isIntersecting) {
          if (!v.getAttribute('src')) v.src = work.preview;
          v.muted = true;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.65 },
    );
    io.observe(cardRef.current);
    return () => io.disconnect();
  }, [canHover, reduced, work.preview]);

  const wide = work.orientation === 'landscape';

  return (
    <motion.li
      ref={cardRef}
      className={cn(
        'relative lg:row-span-2 lg:aspect-auto',
        wide ? 'col-span-2 aspect-video' : 'col-span-1 aspect-[9/16]',
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        type="button"
        onClick={(e) => onOpen(index, e.currentTarget)}
        onPointerEnter={canHover ? play : undefined}
        onPointerLeave={canHover ? pause : undefined}
        onFocus={canHover ? play : undefined}
        onBlur={canHover ? pause : undefined}
        className="group relative block h-full w-full overflow-hidden rounded-2xl bg-ink-3 text-left"
        aria-label={`${work.title} videosunu oynat`}
      >
        <Image
          src={work.poster}
          alt=""
          fill
          sizes={wide ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
          className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
        <video
          ref={videoRef}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]',
            playing ? 'opacity-100' : 'opacity-0',
          )}
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
          aria-hidden="true"
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-ink/30" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 text-xs md:p-5">
          <span className="font-medium text-snow/80">{pad(index + 1)}</span>
          <span className="hidden rounded-full border border-white/20 bg-ink/40 px-2.5 py-1 text-snow/80 backdrop-blur-md sm:inline">
            {work.tag}
          </span>
        </div>

        <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 scale-75 place-items-center rounded-full bg-gold/90 text-ink opacity-0 backdrop-blur transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100">
          <Play className="h-5 w-5 translate-x-0.5 fill-current" />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
          <h3 className="font-display text-xl leading-tight text-snow sm:text-2xl md:text-3xl">{work.title}</h3>
          <p className="mt-1 hidden text-sm text-snow/60 sm:block">{work.caption}</p>
        </div>
      </button>
    </motion.li>
  );
}

function Lightbox({
  index,
  onIndex,
  onClose,
}: {
  index: number | null;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const lenis = useLenis();
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;
  const work = isOpen ? works[index] : null;

  const step = (dir: 1 | -1) => {
    if (index === null) return;
    onIndex((index + dir + works.length) % works.length);
  };

  // Açıkken sayfa kaydırmasını durdur, odağı kapat butonuna al
  useEffect(() => {
    if (!isOpen) return;
    lenis?.stop();
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      lenis?.start();
    };
  }, [isOpen, lenis]);

  // Klavye: Esc kapatır, oklar videolar arasında gezer
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onIndex((index + 1) % works.length);
      if (e.key === 'ArrowLeft') onIndex((index - 1 + works.length) % works.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, onIndex, onClose]);

  return (
    <AnimatePresence>
      {work && index !== null && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-black/92 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="dialog"
          aria-modal="true"
          aria-label={work.title}
          data-lenis-prevent
          onClick={onClose}
        >
          <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8" onClick={(e) => e.stopPropagation()}>
            <div className="min-w-0">
              <p className="text-xs text-mist">
                {pad(index + 1)} / {pad(works.length)}
              </p>
              <p className="truncate font-display text-2xl text-snow">{work.title}</p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 text-snow transition-colors hover:bg-white/10"
              aria-label="Kapat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-20">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={work.id}
                className={cn(
                  'relative max-h-full overflow-hidden rounded-xl bg-black shadow-2xl',
                  work.orientation === 'portrait'
                    ? 'aspect-[9/16] h-full max-w-full'
                    : 'aspect-video w-full max-w-6xl',
                )}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  className="h-full w-full object-contain"
                  src={work.src}
                  poster={work.poster}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 sm:block">
              <NavButton side="left" onClick={() => step(-1)} />
            </div>
            <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 sm:block">
              <NavButton side="right" onClick={() => step(1)} />
            </div>
          </div>

          <div className="flex justify-center gap-4 pb-6 sm:hidden">
            <NavButton side="left" onClick={() => step(-1)} />
            <NavButton side="right" onClick={() => step(1)} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavButton({ side, onClick }: { side: 'left' | 'right'; onClick: () => void }) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-ink/60 text-snow backdrop-blur transition-colors hover:bg-white/10"
      aria-label={side === 'left' ? 'Önceki video' : 'Sonraki video'}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
