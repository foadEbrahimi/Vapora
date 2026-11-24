import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { Footer } from '@/src/components/footer';
import { Header } from '@/src/components/header';
import { aboutTimeline, aboutValues } from '@/src/data/about';
import { faNum } from '@/src/lib/hours';

export const metadata: Metadata = {
  title: 'درباره ویپورا | ویپ، جویس و لوازم جانبی در تهران',
  description:
    'ویپورا یک فروشگاه صمیمی در خیابان شریعتی تهران است؛ جایی که مشتریها با خیال راحت میآیند، انتخاب میکنند و با حس خوب برمیگردند.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <main id='main' tabIndex={-1} className='flex-1 outline-none'>
        <section className='about-hero'>
          <div className='wrap'>
            <p className='eyebrow'>درباره ویپورا · خیابان شریعتی</p>
            <h1 className='h-display about-title'>
              {'درباره '}
              <span className='underline-accent'>ویپورا</span>
            </h1>
            <p className='lead about-lead'>
              {'ویپورا یک فروشگاه صمیمی در خیابان شریعتی تهران است. جایی که مشتریها با خیال راحت میآیند، انتخاب میکنند و با حس خوب برمیگردند.'}
            </p>
          </div>
        </section>

        <section className='about-story'>
          <div className='wrap about-story-grid'>
            <div className='about-story-copy'>
              <h2 className='h-section'>
                {'یک فروشگاه محلی با '}
                <span className='about-story-accent'>حس دوستانه</span>
              </h2>

              <div className='about-story-text'>
                <p>
                  ویپورا سالهاست در تهران فعالیت میکند و به خاطر قیمت مناسب،
                  برخورد خوب و محصولات متنوع شناخته شده است.
                </p>
                <p>
                  چیزی که برای ما مهم است، تجربه مشتری است. ما سعی میکنیم
                  مشتریهایمان را بشناسیم و کمک کنیم بهترین انتخاب را داشته
                  باشند.
                </p>
                <p>
                  چه دنبال یک برند خاص سیگار باشید، چه بخواهید ویپ جدیدی امتحان
                  کنید یا فقط نیاز به راهنمایی داشته باشید، همیشه با روی خوش از
                  شما استقبال میکنیم.
                </p>
              </div>

              <Link href='/contact' className='btn btn-primary about-story-cta'>
                به ما سر بزنید
                <ArrowLeft className='arrow h-4 w-4' aria-hidden='true' />
              </Link>
            </div>

            <figure className='about-story-figure'>
              <Image
                src='/home/people.webp'
                alt='پیشخوان فروشگاه و راهنمایی مشتری در ویپورا'
                width={900}
                height={1125}
                loading='lazy'
                sizes='(min-width: 1024px) 38vw, 90vw'
                className='about-story-image'
              />
              <figcaption>پیشخوان ویپورا، خیابان شریعتی</figcaption>
            </figure>
          </div>
        </section>

        <section className='about-timeline-section'>
          <div className='wrap'>
            <p className='eyebrow'>مسیر ما</p>
            <h2 className='h-section about-section-title'>مسیر ما تا امروز</h2>

            <ol className='about-timeline'>
              {aboutTimeline.map((item, index) => (
                <li key={item.label}>
                  <span className='about-step-num num' aria-hidden='true'>
                    {faNum(index + 1)}
                  </span>
                  <span className='about-step-label'>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className='about-values'>
          <div className='wrap'>
            <p className='eyebrow'>ارزشها</p>
            <h2 className='h-section about-section-title'>
              ارزشهایی که برای ما مهماند
            </h2>
            <p className='lead about-values-lead'>
              این ارزشها مسیر کار ما را مشخص میکنند و دلیل اعتماد مشتریها به
              ویپورااند.
            </p>

            <div className='about-values-grid'>
              {aboutValues.map((value, index) => (
                <article key={value.title}>
                  <span className='about-value-num num' aria-hidden='true'>
                    {faNum(index + 1)}
                  </span>
                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='about-cta'>
          <div className='wrap about-cta-grid'>
            <div>
              <p className='eyebrow'>دیدار</p>
              <h2 className='h-section mt-4'>تفاوت را خودتان ببینید</h2>
              <p className='lead about-cta-lead'>
                اگر دوست دارید تجربه یک فروشگاه صمیمی و متفاوت را داشته باشید،
                خوشحال میشویم به ویپورا سر بزنید.
              </p>
            </div>

            <div className='about-cta-actions'>
              <Link href='/contact' className='btn btn-primary'>
                دریافت مسیر
                <ArrowLeft className='arrow h-4 w-4' aria-hidden='true' />
              </Link>
              <Link href='/products' className='btn btn-ghost'>
                مشاهده محصولات
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
