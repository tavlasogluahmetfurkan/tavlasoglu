import { marqueeWords } from '@/content/site';

const Row = ({ hidden = false }: { hidden?: boolean }) => (
  <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
    {marqueeWords.map((word) => (
      <li key={word} className="flex items-center">
        <span className="px-6 font-display text-3xl italic text-snow/85 md:px-10 md:text-5xl">{word}</span>
        <span className="text-gold">✦</span>
      </li>
    ))}
  </ul>
);

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-ink-2 py-6 md:py-8">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-2 to-transparent" />
    </div>
  );
}
