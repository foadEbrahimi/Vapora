import { Footer } from '@/src/components/footer';
import { Header } from '@/src/components/header';
import { Hero } from '@/src/components/home/hero';
import { HomeMotion } from '@/src/components/home/home-motion';
import { Menu } from '@/src/components/home/menu';
import { People } from '@/src/components/home/people';
import { Visit } from '@/src/components/home/visit';
import { facts } from '@/src/data/home';

export default function HomePage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <main id='main' tabIndex={-1} className='flex-1 outline-none'>
        <Hero />

        <section
          aria-label='فروشگاه در یک نگاه'
          className='section-tight border-b border-[var(--line)]'
        >
          <div className='wrap'>
            <div className='grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4'>
              {facts.map(fact => (
                <div key={fact.label} className='fact' data-reveal>
                  <p className='fact-value num'>{fact.value}</p>
                  <p className='fact-label'>{fact.label}</p>
                  <p className='fact-note'>{fact.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Menu />
        <People />
        <Visit />
      </main>

      <Footer />
      <HomeMotion />
    </div>
  );
}
