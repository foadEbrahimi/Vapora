import type { Metadata } from 'next';
import { ArrowLeft, Clock, MapPin, Phone } from 'lucide-react';

import { Footer } from '@/src/components/footer';
import { Header } from '@/src/components/header';
import { OpenStatus } from '@/src/components/open-status';
import { site } from '@/src/data/site';

export const metadata: Metadata = {
  title: 'تماس و آدرس | ویپورا',
  description:
    'نشانی، شماره تلفن و ساعات کاری ویپورا در خیابان شریعتی تهران. فروش حضوری ویپ، جویس و لوازم جانبی. پیش از دیدار تماس بگیرید.',
  alternates: { canonical: '/contact' },
};

const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  site.address
)}&z=15&output=embed`;

export default function ContactPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <main id='main' tabIndex={-1} className='flex-1 outline-none'>
        <section className='contact-hero'>
          <div className='wrap'>
            <p className='eyebrow'>دیدار حضوری · خیابان شریعتی</p>
            <h1 className='h-display contact-title'>
              منتظر{' '}
              <span className='underline-accent'>دیدار شما</span> هستیم
            </h1>
            <p className='lead contact-lead'>
              فروشگاه ما در خیابان شریعتی تهران قرار داره. خوشحال میشیم یه سر
              به ما بزنید و از نزدیک تنوع و کیفیت محصولات رو بررسی کنید.
              قدمتون روی چشم!
            </p>
            <div className='contact-status'>
              <OpenStatus className='text-[0.85rem]' />
            </div>
          </div>
        </section>

        <section className='contact-main'>
          <div className='wrap contact-grid'>
            <div className='contact-card'>
              <h2 className='sr-only'>اطلاعات تماس و نشانی</h2>

              <dl className='contact-rows'>
                <div className='contact-row'>
                  <dt>
                    <MapPin className='h-4 w-4' aria-hidden='true' />
                    نشانی
                  </dt>
                  <dd>
                    <a
                      href={site.mapsUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {site.address}
                    </a>
                  </dd>
                </div>

                <div className='contact-row'>
                  <dt>
                    <Phone className='h-4 w-4' aria-hidden='true' />
                    تلفن
                  </dt>
                  <dd>
                    <a href={site.phoneHref} dir='ltr' className='num'>
                      {site.phoneDisplay}
                    </a>
                    <p className='contact-detail'>
                      اگه دنبال محصول خاصی هستید یا درباره موجودی سوالی دارید،
                      با خیال راحت زنگ بزنید. بچههای ما آماده راهنمایی هستن.
                    </p>
                  </dd>
                </div>

                <div className='contact-row'>
                  <dt>
                    <Clock className='h-4 w-4' aria-hidden='true' />
                    ساعت کاری
                  </dt>
                  <dd>
                    <div className='contact-hours'>
                      <div className='contact-hours-row'>
                        <span>{site.hours.weekdays.label}</span>
                        <span className='num'>
                          {site.hours.weekdays.open} تا {site.hours.weekdays.close}
                        </span>
                      </div>
                      <div className='contact-hours-row'>
                        <span>{site.hours.friday.label}</span>
                        <span className='num'>
                          {site.hours.friday.open} تا {site.hours.friday.close}
                        </span>
                      </div>
                    </div>
                  </dd>
                </div>
              </dl>

              <p className='contact-note'>
                <strong>توجه:</strong> دوستان عزیز، در حال حاضر فروش ما فقط به
                صورت حضوریه و امکان ثبت سفارش آنلاین یا ارسال با پیک رو نداریم.
                تو فروشگاه میبینیمتون!
              </p>

              <div className='contact-actions'>
                <a
                  href={site.mapsUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary'
                >
                  مسیریابی
                  <ArrowLeft className='arrow h-4 w-4' aria-hidden='true' />
                </a>
                <a href={site.phoneHref} className='btn btn-ghost'>
                  تماس تلفنی
                </a>
              </div>
            </div>

            <figure className='contact-map'>
              <iframe
                src={mapEmbed}
                title='مکان فروشگاه ویپورا'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                allowFullScreen
              />
              <figcaption>
                <span>نشانی روی نقشه</span>
                <a
                  href={site.mapsUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  باز کردن نقشه
                  <ArrowLeft className='arrow h-3.5 w-3.5' aria-hidden='true' />
                </a>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className='contact-cta'>
          <div className='wrap contact-cta-grid'>
            <div>
              <p className='eyebrow'>سوالی هست؟</p>
              <h2 className='h-section mt-4'>
                هنوز سوالی تو ذهنتون مونده؟
              </h2>
              <p className='lead contact-cta-lead'>
                هر سوالی درباره دستگاهها، طعمها یا لوازم جانبی دارید، کافیه با
                ما تماس بگیرید یا حضوری تشریف بیارید. با کمال میل راهنماییتون
                میکنیم.
              </p>
            </div>

            <a href={site.phoneHref} className='btn btn-primary'>
              همین حالا تماس بگیرید
              <ArrowLeft className='arrow h-4 w-4' aria-hidden='true' />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
