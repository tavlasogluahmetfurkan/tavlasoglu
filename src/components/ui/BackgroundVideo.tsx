'use client';

import { getImageProps } from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery, useReducedMotion, useSaveData } from '@/lib/hooks';
import { cn } from '@/lib/utils';

type Source = { src: string; poster: string };

type Props = {
  landscape: Source;
  /** Dikey ekranlarda (telefon) kullanılacak alternatif video */
  portrait?: Source;
  /** Hero gibi ilk ekranda görünen videolar için posteri öncelikli yükler */
  priority?: boolean;
  className?: string;
};

const PORTRAIT_QUERY = '(max-aspect-ratio: 1/1)';

/**
 * Sessiz, döngüsel arka plan videosu.
 * - Poster her zaman sunucuda render edilir (anında görüntü, iyi LCP).
 * - Video sadece görünür alana yaklaşınca indirilir ve oynatılır, dışına çıkınca durur.
 * - "Hareketi azalt" veya "veri tasarrufu" açıksa sadece poster gösterilir.
 */
export function BackgroundVideo({ landscape, portrait, priority = false, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playingSrc, setPlayingSrc] = useState<string | null>(null);
  const reduced = useReducedMotion();
  const saveData = useSaveData();
  const isPortrait = useMediaQuery(PORTRAIT_QUERY);
  const active = portrait && isPortrait ? portrait : landscape;
  const disabled = reduced || saveData;

  useEffect(() => {
    const video = ref.current;
    if (!video || disabled) return;
    video.muted = true;
    let loaded = false;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!loaded) {
            video.src = active.src;
            loaded = true;
          }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: '300px 0px' },
    );
    io.observe(video);

    return () => {
      io.disconnect();
      video.pause();
      video.removeAttribute('src');
      video.load();
    };
  }, [active.src, disabled]);

  const common = { alt: '', fill: true, sizes: '100vw' } as const;
  const { props: landscapeImg } = getImageProps({
    ...common,
    src: landscape.poster,
    loading: priority ? 'eager' : 'lazy',
    fetchPriority: priority ? 'high' : 'auto',
  });
  const portraitSet = portrait
    ? getImageProps({ ...common, src: portrait.poster }).props.srcSet
    : undefined;

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      <picture>
        {portraitSet && <source media={PORTRAIT_QUERY} srcSet={portraitSet} sizes="100vw" />}
        {/* eslint-disable-next-line jsx-a11y/alt-text -- alt, getImageProps ile geliyor */}
        <img {...landscapeImg} className="object-cover" />
      </picture>
      <video
        ref={ref}
        className={cn(
          'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000',
          playingSrc === active.src ? 'opacity-100' : 'opacity-0',
        )}
        muted
        loop
        playsInline
        preload="none"
        disablePictureInPicture
        onPlaying={() => setPlayingSrc(active.src)}
      />
    </div>
  );
}
