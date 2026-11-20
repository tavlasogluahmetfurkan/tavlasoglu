import { BackgroundVideo } from '@/components/ui/BackgroundVideo';
import { Reveal } from '@/components/ui/Reveal';
import { equipment, stats } from '@/content/site';

export function About() {
  return (
    <section id="hakkimda" className="relative py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-black lg:sticky lg:top-28">
            <BackgroundVideo landscape={{ src: '/media/about.mp4', poster: '/media/about.jpg' }} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgb(0_0_0/0.6))]" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
              <p className="eyebrow">Ekipman</p>
              <p className="font-display text-2xl text-snow">DJI Mavic 4 Pro</p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pt-6">
          <Reveal>
            <p className="eyebrow mb-5">Hakkımda</p>
            <h2 className="font-display text-5xl leading-[1] text-snow md:text-7xl">
              Her karede <em className="text-gold-soft">özgün</em> bir bakış açısı.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-snow/70">
              <p>
                Bireysel ve kurumsal projeler için drone ile havadan, belgesel tarzında ya da klasik video ve fotoğraf
                çekimleri gerçekleştiriyorum.
              </p>
              <p>
                Markalara ve kişilere özel hikâye anlatımıyla, her çekimde özgün bir bakış açısı ve sinematik kalite
                sunuyorum.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-12 grid grid-cols-3 border-y border-line">
              {stats.map((s, i) => (
                <div key={s.label} className={i > 0 ? 'border-l border-line py-6 pl-5 md:pl-8' : 'py-6'}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-4xl text-snow md:text-6xl">{s.value}</dd>
                  <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-mist">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="eyebrow mb-4 mt-14">Kullandığım ekipman</h3>
            <ul className="divide-y divide-line border-b border-line">
              {equipment.map((item) => (
                <li
                  key={item.name}
                  className="group flex items-baseline justify-between gap-4 py-4 transition-[padding] duration-500 hover:pl-2"
                >
                  <span className="font-display text-2xl text-snow md:text-3xl">{item.name}</span>
                  <span className="text-sm text-mist transition-colors group-hover:text-gold">{item.category}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
