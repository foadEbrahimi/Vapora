'use client';

import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { menu } from '@/src/data/home';
import { faNum } from '@/src/lib/hours';

export function Menu() {
  const [active, setActive] = useState(0);
  const current = menu[active] ?? menu[0];

  return (
    <section id='menu' className='section border-t border-[var(--line)]'>
      <div className='wrap'>
        <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
          <div data-reveal>
            <p className='eyebrow'>منوی قفسه‌ها</p>
            <h2 className='h-section mt-4 max-w-[16ch]'>
              شش قفسه، یک پیشخوان
            </h2>
          </div>
          <p className='lead max-w-[36ch] text-[0.95rem] md:text-end' data-reveal>
            همه‌چیز مرتب چیده شده؛ از یک‌بارمصرف‌های ساده تا باکس‌مود. قیمت‌ها
            شروع‌اند و موجودی را حضوری ببینید.
          </p>
        </div>

        <div className='menu-layout mt-10 md:mt-14'>
          <div data-reveal>
            {menu.map((item, index) => (
              <Link
                key={item.id}
                href={`/products#${item.id}`}
                className='menu-row'
                data-active={active === index}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <span className='menu-row-index num' aria-hidden='true'>
                  {faNum(index + 1)}
                </span>
                <span className='menu-row-main'>
                  <Image
                    src={item.image}
                    width={1200}
                    height={900}
                    alt=''
                    loading='lazy'
                    sizes='56px'
                    className='menu-row-thumb'
                  />
                  <span>
                    <span className='menu-row-title block'>{item.title}</span>
                    <span className='menu-row-detail block'>
                      {item.detail}
                      <span className='mx-1.5 text-[var(--line-strong)]'>·</span>
                      {item.brands}
                    </span>
                  </span>
                </span>
                <span className='menu-row-side'>
                  <span className='menu-row-price num'>{item.price}</span>
                  <ArrowLeft
                    className='menu-row-arrow h-4 w-4 shrink-0'
                    aria-hidden='true'
                  />
                </span>
              </Link>
            ))}

            <p className='menu-shelf-note'>
              <span
                className='h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]'
                aria-hidden='true'
              />
              قیمت‌ها شروع‌اند. برای موجودی و طعم‌ها، حضوری بیایید.
            </p>
          </div>

          <div className='menu-stage' aria-hidden='true' data-reveal>
            <div className='menu-stage-frame'>
              {menu.map((item, index) => (
                <div
                  key={item.id}
                  className='menu-stage-img'
                  data-active={active === index}
                >
                  <Image
                    src={item.image}
                    width={1200}
                    height={900}
                    alt=''
                    loading={index === 0 ? 'eager' : 'lazy'}
                    sizes='(min-width: 1024px) 38vw, 90vw'
                  />
                </div>
              ))}
            </div>
            <div className='menu-stage-caption'>
              <div>
                <p className='font-display text-[1.1rem] font-bold'>
                  {current.title}
                </p>
                <p className='meta mt-1'>{current.brands}</p>
              </div>
              <span className='meta num'>
                {faNum(active + 1)} / {faNum(menu.length)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
