import type { Metadata } from 'next';
import { ArrowLeft, Star } from 'lucide-react';
import Link from 'next/link';

import { Footer } from '@/src/components/footer';
import { Header } from '@/src/components/header';
import { reviews, trustBadges } from '@/src/data/reviews';
import { site } from '@/src/data/site';
import { faNum } from '@/src/lib/hours';

export const metadata: Metadata = {
  title: 'نظرات مشتریان | ویپورا',
  description:
    'آنچه مشتریان ویپورا درباره مشاوره، طعمها، قیمت و فضای فروشگاه میگویند. نظرات واقعی از پیشخوان ویپورا در تهران.',
  alternates: { canonical: '/reviews' },
};

function Stars({ rating }: { rating: number }) {
  return (
    <span
      className='review-stars'
      role='img'
      aria-label={`امتیاز ${faNum(rating)} از ۵`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden='true'
          className={`h-4 w-4 ${
            index < rating
              ? 'fill-[var(--accent-text)] text-[var(--accent-text)]'
              : 'text-[var(--line-strong)]'
          }`}
        />
      ))}
    </span>
  );
}

export default function ReviewsPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <main id='main' tabIndex={-1} className='flex-1 outline-none'>
        <section className='reviews-hero'>
          <div className='wrap reviews-hero-grid'>
            <div>
              <p className='eyebrow'>نظرات مشتریان · پیشخوان ویپورا</p>
              <h1 className='h-display reviews-title'>
                مشتریان درباره ما{' '}
                <span className='underline-accent'>چی میگن؟</span>
              </h1>
              <p className='lead reviews-lead'>
                فقط به حرف ما گوش نکنید؛ خودتون ببینید چرا مشتریهای ما همیشه
                برای خرید ویپ و جویس، اول از همه میان پیش بچههای ویپورا.
              </p>
            </div>

            <div className='reviews-score'>
              <p className='reviews-score-value num'>{site.rating}</p>
              <Stars rating={5} />
              <p className='reviews-score-note'>
                بر اساس بیش از {site.reviewsCount} نظر واقعی
              </p>
            </div>
          </div>
        </section>

        <section className='reviews-facts'>
          <div className='wrap'>
            <h2 className='sr-only'>چرا مشتریان ویپورا را انتخاب میکنند</h2>
            <dl className='reviews-facts-grid'>
              {trustBadges.map(badge => (
                <div key={badge.title}>
                  <dt>{badge.title}</dt>
                  <dd>{badge.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className='reviews-body'>
          <div className='wrap'>
            <h2 className='sr-only'>نظرهای مشتریان</h2>
            <div className='reviews-grid'>
              {reviews.map(review => (
                <article key={review.name} className='review-card'>
                  <header className='review-card-top'>
                    <Stars rating={review.rating} />
                    <span className='review-date num'>{review.date}</span>
                  </header>

                  <p className='review-quote'>{review.text}</p>

                  <footer className='review-person'>
                    <span className='review-avatar num' aria-hidden='true'>
                      {review.name[0]}
                    </span>
                    <span>{review.name}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='reviews-cta'>
          <div className='wrap reviews-cta-grid'>
            <div>
              <p className='eyebrow'>دیدار</p>
              <h2 className='h-section mt-4'>تو هم به جمعمون اضافه شو</h2>
              <p className='lead reviews-cta-lead'>
                خودت تفاوت خرید از ویپورا رو تجربه کن. خوشحال میشیم ببینیمت!
              </p>
            </div>

            <div className='reviews-cta-actions'>
              <Link href='/contact' className='btn btn-primary'>
                مسیریابی و آدرس فروشگاه
                <ArrowLeft className='arrow h-4 w-4' aria-hidden='true' />
              </Link>
              <a href={site.phoneHref} className='btn btn-ghost'>
                تماس تلفنی
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
