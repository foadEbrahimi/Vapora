import { ArrowLeft, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { homeReviews } from '@/src/data/home';
import { site } from '@/src/data/site';

export function People() {
  return (
    <section className='section border-t border-[var(--line)]'>
      <div className='wrap'>
        <div className='people-grid'>
          <div data-reveal>
            <div className='people-frame'>
              <Image
                src='/home/people.webp'
                width={900}
                height={1125}
                alt='فروشنده ویپورا پشت پیشخوان فروشگاه'
                loading='lazy'
                sizes='(min-width: 1024px) 40vw, 90vw'
              />
              <p className='absolute bottom-4 start-4 inline-flex items-center gap-2 border border-[var(--line)] bg-[var(--background)] px-3 py-2 text-[0.7rem] text-muted-foreground'>
                <span
                  className='h-1.5 w-1.5 rounded-full bg-[var(--accent)]'
                  aria-hidden='true'
                />
                پیشخوان ویپورا، خیابان شریعتی
              </p>
            </div>
          </div>

          <div>
            <p className='eyebrow' data-reveal>
              پشت پیشخوان
            </p>
            <h2 className='h-section mt-4 max-w-[18ch]' data-reveal>
              قبل از خرید، حرف می‌زنیم.
            </h2>
            <p className='lead mt-5' data-reveal>
              سفارش اینترنتی نداریم و همین را دوست داریم. می‌آیید، قفسه‌ها را
              می‌بینید و با حوصله انتخاب می‌کنید. اگر چیزی به کارتان نیاید،
              همان‌جا می‌گوییم.
            </p>

            <div className='mt-10' data-reveal>
              <div className='flex flex-wrap items-end justify-between gap-3 border-b border-[var(--line)] pb-3'>
                <h3 className='h-sub'>از زبان مشتری‌ها</h3>
                <p className='flex items-center gap-1.5 text-[0.8rem] text-muted-foreground'>
                  <Star
                    className='h-3.5 w-3.5 fill-[var(--accent-text)] text-[var(--accent-text)]'
                    aria-hidden='true'
                  />
                  <span className='num font-semibold text-foreground'>
                    {site.rating}
                  </span>
                  از ۵، بیش از {site.reviewsCount} نظر
                </p>
              </div>

              <ul>
                {homeReviews.map(review => (
                  <li key={review.name} className='review'>
                    <div>
                      <p className='review-quote'>«{review.text}»</p>
                      <p className='review-name'>
                        {review.name}
                        <span className='mx-1.5' aria-hidden='true'>
                          ·
                        </span>
                        {review.date}
                      </p>
                    </div>
                    <span
                      className='review-score'
                      aria-label={`${review.score} از ۵`}
                    >
                      <Star
                        className='h-3.5 w-3.5 fill-current'
                        aria-hidden='true'
                      />
                      <span className='num'>{review.score}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <Link href='/reviews' className='link-arrow mt-6'>
                همه نظرها
                <ArrowLeft className='arrow h-4 w-4' aria-hidden='true' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
