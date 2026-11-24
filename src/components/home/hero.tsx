import { ArrowLeft, MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { VaporField } from '@/src/components/home/vapor-field';
import { OpenStatus } from '@/src/components/open-status';
import { heroImage } from '@/src/data/home';
import { site } from '@/src/data/site';

export function Hero() {
  return (
    <section className='hero'>
      <div className='wrap'>
        <div className='hero-grid'>
          <div className='max-w-[37rem]'>
            <p className='eyebrow' data-intro>
              ویپ‌شاپ تهران، خیابان شریعتی
            </p>

            <h1 className='h-display mt-5 text-foreground'>
              <span className='line-mask'>
                <span data-intro-line>ویپ را</span>
              </span>
              <span className='line-mask'>
                <span data-intro-line>
                  از <span className='underline-accent'>اهلش</span> بخر
                </span>
              </span>
            </h1>

            <p className='lead hero-lead' data-intro>
              بدون اصطلاحات پیچیده و اصرار به فروش. می‌گوییم چه چیزی به کارتان
              می‌آید، چه چیزی نه.
            </p>

            <div
              className='mt-8 flex flex-wrap items-center gap-x-7 gap-y-4'
              data-intro
            >
              <Link href='#menu' className='btn btn-primary'>
                دیدن قفسه‌ها
                <ArrowLeft className='arrow h-4 w-4' aria-hidden='true' />
              </Link>
              <Link href='#visit' className='link-arrow'>
                دیدار حضوری
                <ArrowLeft className='arrow h-4 w-4' aria-hidden='true' />
              </Link>
            </div>

            <div className='hero-meta-grid mt-10' data-intro>
              <div>
                <p className='meta'>امتیاز مشتری‌ها</p>
                <p className='hero-meta-value flex items-center gap-1.5 text-[0.85rem]'>
                  <Star
                    className='h-3.5 w-3.5 fill-[var(--accent-text)] text-[var(--accent-text)]'
                    aria-hidden='true'
                  />
                  <span className='num font-semibold'>{site.rating}</span>
                  <span className='text-muted-foreground'>از ۵</span>
                </p>
              </div>
              <div>
                <p className='meta'>امروز</p>
                <OpenStatus className='hero-meta-value text-[0.8rem]' />
              </div>
              <div>
                <p className='meta'>نشانی</p>
                <p className='hero-meta-value flex items-start gap-1.5 text-[0.8rem] leading-6'>
                  <MapPin
                    className='mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-text)]'
                    aria-hidden='true'
                  />
                  {site.addressShort}
                </p>
              </div>
            </div>
          </div>

          <div className='hero-stage'>
            <VaporField />
            <div className='hero-frame'>
              <Image
                src={heroImage.src}
                width={heroImage.width}
                height={heroImage.height}
                alt={heroImage.alt}
                priority
                sizes='(min-width: 1024px) 42vw, 90vw'
                data-hero-img
              />
            </div>
            <p className='hero-tag' data-hero-tag>
              <span
                className='h-1.5 w-1.5 rounded-full bg-[var(--accent)]'
                aria-hidden='true'
              />
              پرفروش‌ترین قفسه، یک‌بارمصرف‌ها
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
