import { BackgroundVideo } from '@/components/ui/BackgroundVideo';
import { Reveal } from '@/components/ui/Reveal';
import { process, services } from '@/content/site';

export function Services() {
  return (
    <section id="hizmetler" className="relative isolate overflow-hidden bg-ink-2 py-24 md:py-36">
      <BackgroundVideo
        landscape={{ src: '/media/services.mp4', poster: '/media/services.jpg' }}
        className="-z-10 opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-2 via-ink-2/80 to-ink-2" />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mb-14 max-w-3xl md:mb-20">
          <p className="eyebrow mb-5">Hizmetler</p>
          <h2 className="font-display text-5xl leading-[1] text-snow md:text-7xl">
            Fikirden <em className="text-gold-soft">final</em> kurguya.
          </h2>
        </Reveal>

        <ol className="grid gap-4 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.title}
              delay={i * 0.08}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-ink/60 p-7 backdrop-blur-md transition-colors duration-500 hover:border-gold/40 md:p-9"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
              <span className="text-sm text-gold">0{i + 1}</span>
              <h3 className="mt-10 font-display text-3xl leading-tight text-snow md:text-4xl">{service.title}</h3>
              <p className="mb-8 mt-4 flex-1 leading-relaxed text-snow/65">{service.description}</p>
              <ul className="space-y-2.5 border-t border-line pt-6 text-sm text-snow/80">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="h-px w-4 bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-24 md:mt-32">
          <p className="eyebrow mb-10">Çalışma süreci</p>
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {process.map((stepItem, i) => (
              <li key={stepItem.title} className="relative lg:pr-10">
                <div className="mb-6 flex items-center gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/50 text-sm text-gold">
                    {i + 1}
                  </span>
                  {i < process.length - 1 && <span className="hidden h-px flex-1 bg-line lg:block" />}
                </div>
                <h3 className="font-display text-2xl text-snow">{stepItem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{stepItem.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
