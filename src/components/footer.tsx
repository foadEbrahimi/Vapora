import { ArrowLeft, Clock, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

import { BrandMark } from '@/src/components/brand-mark';
import { site } from '@/src/data/site';
import { HOURS } from '@/src/lib/hours';

const footerLinks = [
  { href: '/', label: 'صفحه اصلی' },
  { href: '/products', label: 'محصولات' },
  { href: '/reviews', label: 'نظرات مشتریان' },
  { href: '/about', label: 'درباره ما' },
  { href: '/contact', label: 'تماس و آدرس' },
];

export function Footer() {
  return (
    <footer className='site-footer'>
      <div className='wrap section-tight'>
        <div className='footer-grid'>
          <div>
            <Link
              href='/'
              className='inline-flex items-center gap-2.5 text-foreground no-underline'
            >
              <BrandMark className='h-9 w-9' />
              <span className='font-display text-[1.35rem] font-extrabold leading-none'>
                ویپورا
              </span>
            </Link>
            <p className='lead mt-4 max-w-[32ch] text-[0.9rem] leading-8'>
              ویپ، جویس و لوازم جانبی. انتخاب حضوری، مشاوره واقعی و قیمت
              منصفانه در خیابان شریعتی.
            </p>
            <p className='meta mt-4'>فروش حضوری، ویژه افراد بالای ۲۱ سال.</p>
          </div>

          <nav aria-label='ناوبری پاورقی'>
            <h2 className='text-[0.72rem] font-medium text-muted-foreground'>
              فروشگاه
            </h2>
            <ul className='mt-4 space-y-2.5'>
              {footerLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className='footer-link'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className='text-[0.72rem] font-medium text-muted-foreground'>
              دیدار
            </h2>
            <address className='mt-4 space-y-3 not-italic'>
              <a
                href={site.mapsUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='footer-contact-link flex items-start gap-2.5 py-1 text-[0.85rem] leading-7 text-foreground no-underline transition-colors hover:text-[var(--accent-text)]'
              >
                <MapPin
                  className='mt-1.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-text)]'
                  aria-hidden='true'
                />
                {site.address}
              </a>
              <a
                href={site.phoneHref}
                className='footer-contact-link flex items-center gap-2.5 py-1 text-[0.85rem] text-foreground no-underline transition-colors hover:text-[var(--accent-text)]'
              >
                <Phone
                  className='h-3.5 w-3.5 shrink-0 text-[var(--accent-text)]'
                  aria-hidden='true'
                />
                <span className='num' dir='ltr'>
                  {site.phoneDisplay}
                </span>
              </a>
              <div className='flex items-start gap-2.5 text-[0.85rem] leading-7 text-muted-foreground'>
                <Clock
                  className='mt-1.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-text)]'
                  aria-hidden='true'
                />
                <ul className='space-y-0.5'>
                  {HOURS.map(hour => (
                    <li key={hour.day}>
                      {hour.day}: <span className='num'>{hour.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </address>
            <Link href='/contact' className='link-arrow mt-5 text-[0.85rem]'>
              دیدار حضوری
              <ArrowLeft className='arrow h-4 w-4' aria-hidden='true' />
            </Link>
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-[var(--line)] pb-1 pt-5'>
          <p className='meta'>ویپورا، ۱۴۰۵. تهران.</p>
          <p className='meta'>فروش حضوری، بدون سفارش آنلاین.</p>
          <a
            href='https://foad-ebrahimi.ir'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-credit meta no-underline transition-colors hover:text-[var(--accent-text)]'
          >
            طراحی و توسعه: فؤاد ابراهیمی
          </a>
        </div>
      </div>
    </footer>
  );
}
