'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Gallery } from '@/components/sections/Gallery';
import { Services } from '@/components/sections/Services';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="w-full bg-dark site-scroll">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
