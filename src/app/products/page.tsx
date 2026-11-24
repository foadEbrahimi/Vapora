import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

import { CatalogNav } from '@/src/components/products/catalog-nav';
import { Footer } from '@/src/components/footer';
import { Header } from '@/src/components/header';
import { OpenStatus } from '@/src/components/open-status';
import { catalogItemCount, shelves } from '@/src/data/products';
import { site } from '@/src/data/site';
import { faNum } from '@/src/lib/hours';

export const metadata: Metadata = {
  title: 'قفسهها و محصولات | ویپورا',
  description:
    'فهرست کامل قفسههای ویپورا: ویپ یکبارمصرف، پاد سیستم، باکس مود، جویس، پک نیکوتین و لوازم جانبی. قیمت شروع و موجودی حضوری.',
  alternates: { canonical: '/products' },
};

export default function ProductsPage() {
  const navItems = shelves.map(shelf => ({
    id: shelf.id,
    title: shelf.title,
    count: shelf.products.length,
  }));

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <main id='main' tabIndex={-1} className='flex-1 outline-none'>
        <section className='catalog-hero'>
          <div className='wrap'>
            <p className='eyebrow'>فهرست کامل · پیشخوان ویپورا</p>
            <h1 className='h-display catalog-title'>
              {'قفسه\u200cهای '}
              <span className='underline-accent'>ویپورا</span>
            </h1>

            <div className='catalog-hero-foot'>
              <p className='lead catalog-lead'>
                {'از ویپ\u200cهای یکبارمصرف تا باکس مودها و جویس؛ اسم\u200cها و قیمت\u200cهای شروع روی قفسه\u200cاند. موجودی و طعم\u200cها را حضوری می\u200cبینیم.'}
              </p>
              <p className='catalog-hero-meta'>
                <span className='num'>{faNum(shelves.length)}</span> قفسه
                <span className='catalog-dot' aria-hidden='true'>
                  ·
                </span>
                <span className='num'>{faNum(catalogItemCount)}</span> آیتم
                <span className='catalog-dot' aria-hidden='true'>
                  ·
                </span>
                فروش حضوری
              </p>
            </div>
          </div>
        </section>

        <section id='catalog' className='catalog-main'>
          <div className='wrap catalog-wrap'>
            <CatalogNav items={navItems} />

            <div className='catalog-shelves'>
              {shelves.map((shelf, index) => (
                <section key={shelf.id} id={shelf.id} className='catalog-shelf'>
                  <header className='catalog-shelf-head'>
                    <span className='catalog-shelf-num num' aria-hidden='true'>
                      {faNum(index + 1)}
                    </span>
                    <div className='catalog-shelf-heading'>
                      <h2>{shelf.title}</h2>
                      <p>{shelf.description}</p>
                    </div>
                    <span className='catalog-shelf-count num'>
                      {faNum(shelf.products.length)} آیتم
                    </span>
                  </header>

                  <div className='catalog-shelf-body'>
                    <figure className='catalog-shelf-figure'>
                      <Image
                        src={shelf.image}
                        alt=''
                        width={1200}
                        height={800}
                        loading={index === 0 ? undefined : 'lazy'}
                        priority={index === 0}
                        decoding='async'
                        sizes='(min-width: 1024px) 32vw, 90vw'
                        className='catalog-shelf-image'
                      />
                    </figure>

                    <ul className='catalog-product-list'>
                      {shelf.products.map(product => (
                        <li key={product.name} className='catalog-product'>
                          <div className='catalog-product-name'>
                            <h3>{product.name}</h3>
                            {product.tag && (
                              <span className='catalog-product-tag'>
                                {product.tag}
                              </span>
                            )}
                          </div>
                          <span className='catalog-product-price num'>
                            {product.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className='catalog-foot'>
          <div className='wrap'>
            <div className='catalog-foot-grid'>
              <div>
                <p className='eyebrow'>پیش از دیدار</p>
                <h2 className='h-section mt-4'>
                  قیمت و موجودی را حضوری ببینید
                </h2>
                <p className='lead catalog-foot-lead'>
                  {'قیمت\u200cهای بالا شروع\u200cاند و ممکن است تغییر کنند. برای موجودی و طعم\u200cها زنگ بزنید یا سر بزنید.'}
                </p>

                <dl className='catalog-contact-list'>
                  <div>
                    <dt>نشانی</dt>
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
                  <div>
                    <dt>امروز</dt>
                    <dd>
                      <OpenStatus className='text-[0.85rem]' />
                    </dd>
                  </div>
                  <div>
                    <dt>تلفن</dt>
                    <dd>
                      <a href={site.phoneHref} dir='ltr' className='num'>
                        {site.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className='catalog-foot-actions'>
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

            <p className='catalog-age'>
              خرید محصولات تنباکو و ویپ فقط برای افراد بالای ۲۱ سال مجاز است.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
