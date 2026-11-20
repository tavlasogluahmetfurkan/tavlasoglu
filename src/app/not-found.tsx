import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center px-6 text-center">
      <div>
        <p className="eyebrow mb-6">Hata 404</p>
        <h1 className="font-display text-7xl leading-none text-snow md:text-9xl">
          Kadraj <em className="text-gold-soft">dışı.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-mist">Aradığınız sayfa bulunamadı. Ana sayfaya dönerek devam edebilirsiniz.</p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-medium text-ink transition-colors hover:bg-gold-soft"
        >
          <ArrowLeft className="h-4 w-4" /> Ana sayfaya dön
        </Link>
      </div>
    </main>
  );
}
