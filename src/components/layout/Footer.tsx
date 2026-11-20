import { InstagramIcon, LinkedinIcon, WhatsappIcon } from '@/components/ui/BrandIcons';
import { navItems, site } from '@/content/site';

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-16 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-6xl leading-none text-snow md:text-8xl">
              {site.brand}
              <span className="text-gold">.</span>
            </p>
            <p className="mt-4 text-mist">Havadan sinema anlatısı — {site.location}</p>
          </div>

          <nav aria-label="Alt menü">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-snow/70 transition-colors hover:text-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-6 border-t border-line pt-8 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.brand} · {site.person}. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-5">
            <a href={site.instagram} {...ext} aria-label="Instagram" className="transition-colors hover:text-snow">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={site.linkedin} {...ext} aria-label="LinkedIn" className="transition-colors hover:text-snow">
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href={site.whatsapp} {...ext} aria-label="WhatsApp" className="transition-colors hover:text-snow">
              <WhatsappIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
