import { ArrowLeft, Clock, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

import { OpenStatus } from '@/src/components/open-status';
import { site } from '@/src/data/site';
import { HOURS } from '@/src/lib/hours';

export function Visit() {
  return (
    <section id='visit' className='visit'>
      <Image
        src='/home/visit.webp'
        alt='قفسه‌های چوبی و پیشخوان فروشگاه در نور گرم'
        width={1400}
        height={788}
        loading='lazy'
        sizes='100vw'
        className='visit-img'
      />

      <div className='wrap'>
        <div className='visit-panel'>
          <p className='eyebrow'>دیدار</p>
          <h2 className='h-section mt-4'>چراغ پیشخوان روشن است.</h2>
          <p className='lead mt-5'>
            برای دیدن موجودی، بو کردن طعم‌ها و انتخاب درست باید حضوری بیایید.
            فروش آنلاین نداریم.
          </p>

          <div className='mt-8'>
            <div className='visit-row'>
              <MapPin className='h-4 w-4' aria-hidden='true' />
              <div>
                <p className='font-medium'>نشانی</p>
                <a
                  href={site.mapsUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline'
                >
                  {site.address}
                </a>
              </div>
            </div>

            <div className='visit-row'>
              <Clock className='h-4 w-4' aria-hidden='true' />
              <div>
                <p className='font-medium'>ساعت کاری</p>
                {HOURS.map(hour => (
                  <p key={hour.day} className='text-[0.82rem] leading-7'>
                    {hour.day}: <span className='num'>{hour.time}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className='visit-row'>
              <Phone className='h-4 w-4' aria-hidden='true' />
              <div>
                <p className='font-medium'>تلفن</p>
                <a href={site.phoneHref} className='num underline' dir='ltr'>
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className='mt-7 flex flex-wrap gap-3'>
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

          <div className='mt-5'>
            <OpenStatus className='text-[0.8rem]' />
          </div>
        </div>
      </div>
    </section>
  );
}
