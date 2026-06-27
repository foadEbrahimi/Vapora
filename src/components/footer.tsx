import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';

import logo from '../../public/logo.svg';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className='border-t border-border/50 bg-card relative overflow-hidden'>
      <div className='absolute inset-0 smoke-overlay pointer-events-none' />
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-5'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
          {/* برند */}
          <div className='space-y-4'>
            <Link href='/' className='flex items-center gap-3'>
              <Image src={logo} className='w-12 h-12' alt='vapora logo' />
            </Link>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              فروشگاه تخصصی ویپ و تنباکوی شما در تهران. کیفیت بالا، قیمت منصفانه
              و خدمات ویژه.
            </p>
          </div>

          {/* لینک‌های سریع */}
          <div>
            <h3 className='font-semibold text-foreground mb-4 tracking-wide'>
              لینک‌های سریع
            </h3>
            <ul className='space-y-3'>
              {['خانه', 'محصولات', 'نظرات', 'درباره', 'تماس'].map(item => {
                const paths: Record<string, string> = {
                  خانه: '/',
                  محصولات: '/products',
                  نظرات: '/reviews',
                  درباره: '/about',
                  تماس: '/contact',
                };
                return (
                  <li key={item}>
                    <Link
                      href={paths[item]}
                      className='text-muted-foreground hover:text-primary transition-colors text-sm'
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* اطلاعات تماس */}
          <div>
            <h3 className='font-semibold text-foreground mb-4 tracking-wide'>
              تماس با ما
            </h3>
            <ul className='space-y-4 text-sm text-muted-foreground'>
              <li className='flex items-start gap-3'>
                <MapPin className='h-4 w-4 text-primary mt-0.5 shrink-0' />
                <span>تهران، خیابان شریعتی، پلاک ۲۴۳</span>
              </li>
              <li className='flex items-center gap-3'>
                <Phone className='h-4 w-4 text-primary shrink-0' />
                <a
                  href='tel:02122223344'
                  className='hover:text-primary transition-colors'
                >
                  ۰۲۱-۲۲۲۲۳۳۴۴
                </a>
              </li>
            </ul>
          </div>

          {/* ساعات کاری */}
          <div>
            <h3 className='font-semibold text-foreground mb-4 tracking-wide'>
              ساعات کاری
            </h3>
            <ul className='space-y-3 text-sm text-muted-foreground'>
              <li className='flex items-center gap-3'>
                <Clock className='h-4 w-4 text-primary shrink-0' />
                <span>شنبه تا پنج‌شنبه: 9:00 صبح – 21:00 شب</span>
              </li>
              <li className='pl-7'>جمعه: 10:00 صبح – 18:00 عصر</li>
            </ul>
          </div>
        </div>

        <div className='border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground'>
          <p>&copy; {new Date().getFullYear()} ویپورا. تمامی حقوق محفوظ است.</p>
          <p className='text-xs px-4 py-2 bg-secondary/50 rounded-full'>
            فروش محصولات تنباکو و ویپ فقط برای افراد بالای ۲۱ سال مجاز است.
          </p>
        </div>
        <div className='relative flex items-center justify-center pt-2'>
          <a
            href='https://foad-ebrahimi.ir'
            target='_blank'
            rel='noopener noreferrer'
            className='group inline-flex items-center gap-2 text-xs font-medium text-gray-400 transition-all hover:text-primary dark:text-gray-500 dark:hover:text-primary'
          >
            <span className='h-px w-4 bg-linear-to-r from-transparent to-gray-300 transition-all group-hover:w-8 group-hover:to-primary dark:to-gray-600 dark:group-hover:to-primary' />
            <span>طراحی و توسعه توسط فؤاد ابراهیمی</span>
            <span className='h-px w-4 bg-linear-to-l from-transparent to-gray-300 transition-all group-hover:w-8 group-hover:to-primary dark:to-gray-600 dark:group-hover:to-primary' />
          </a>
        </div>
      </div>
    </footer>
  );
}
