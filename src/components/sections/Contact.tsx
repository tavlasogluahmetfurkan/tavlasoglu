import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { BackgroundVideo } from '@/components/ui/BackgroundVideo';
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from '@/components/ui/BrandIcons';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/content/site';

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export function Contact() {
  return (
    <section id="iletisim" className="relative isolate overflow-hidden py-28 md:py-44">
      <BackgroundVideo
        landscape={{ src: '/media/contact.mp4', poster: '/media/contact.jpg' }}
        className="-z-10 opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/60 to-ink" />

      <div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6">İletişim</p>
          <h2 className="mx-auto max-w-5xl font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] text-snow">
            Bir sonraki hikâyeyi <em className="text-gold-soft">birlikte</em> çekelim.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={`mailto:${site.email}`}
            className="group mt-12 inline-flex items-center gap-2 break-all font-display text-2xl text-snow sm:text-4xl md:text-5xl"
          >
            <span className="bg-gradient-to-r from-gold to-gold bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-700 group-hover:bg-[length:100%_1px]">
              {site.email}
            </span>
            <ArrowUpRight className="h-7 w-7 shrink-0 text-gold transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 md:h-10 md:w-10" />
          </a>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.whatsapp}
              {...ext}
              className="inline-flex items-center gap-2.5 rounded-full bg-gold px-6 py-3.5 font-medium text-ink transition-colors duration-300 hover:bg-gold-soft"
            >
              <WhatsappIcon className="h-5 w-5" /> WhatsApp&apos;tan yaz
            </a>
            <a
              href={site.phone.href}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-ink/40 px-6 py-3.5 text-snow backdrop-blur-md transition-colors duration-300 hover:border-white/50"
            >
              <Phone className="h-4 w-4 text-gold" /> {site.phone.display}
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-mist">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-gold" /> {site.location}
            </span>
            <span className="h-4 w-px bg-line" />
            <a href={site.instagram} {...ext} className="transition-colors hover:text-snow" aria-label="Instagram">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={site.linkedin} {...ext} className="transition-colors hover:text-snow" aria-label="LinkedIn">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
