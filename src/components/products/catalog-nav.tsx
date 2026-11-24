'use client';

import { useEffect, useState } from 'react';

import { faNum } from '@/src/lib/hours';

export type CatalogNavItem = {
  id: string;
  title: string;
  count: number;
};

export function CatalogNav({ items }: { items: CatalogNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const sections = items
      .map(item => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-25% 0px -65% 0px' }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className='catalog-index' aria-label='فهرست قفسهها'>
      <p className='catalog-index-label meta'>قفسهها</p>
      <ol className='catalog-index-list'>
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className='catalog-index-link'
              data-active={active === item.id}
              aria-current={active === item.id ? 'location' : undefined}
              onClick={() => setActive(item.id)}
            >
              <span className='catalog-index-num num' aria-hidden='true'>
                {faNum(index + 1)}
              </span>
              <span className='catalog-index-title'>{item.title}</span>
              <span className='catalog-index-count num'>
                {faNum(item.count)}
              </span>
            </a>
          </li>
        ))}
      </ol>
      <p className='catalog-index-note'>فروش حضوری، ویژه ۲۱+</p>
    </nav>
  );
}
