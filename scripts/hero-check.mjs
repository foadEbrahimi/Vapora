import { launch } from 'file:///C:/Users/Asus/.agents/skills/awwwards/scripts/browser.mjs';

const browser = await launch();

async function inspectHero(width, height, label) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  await page.goto('http://127.0.0.1:4400/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2600);

  const data = await page.evaluate(() => {
    const rect = (el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        x: Math.round(r.x),
        y: Math.round(r.y),
        w: Math.round(r.width),
        h: Math.round(r.height),
        bottom: Math.round(r.bottom),
        right: Math.round(r.right),
      };
    };
    const info = (el) => {
      if (!el) return null;
      const cs = getComputedStyle(el);
      return {
        rect: rect(el),
        display: cs.display,
        gap: cs.gap,
        padding: cs.padding,
        margin: cs.margin,
        fontSize: cs.fontSize,
        lineHeight: cs.lineHeight,
        overflow: el.scrollWidth > el.clientWidth,
        scrollWidth: el.scrollWidth,
        clientWidth: el.clientWidth,
        text: el.textContent?.trim().replace(/\s+/g, ' ').slice(0, 80),
      };
    };

    const hero = document.querySelector('.hero');
    const grid = document.querySelector('.hero-grid');
    const textCol = grid?.firstElementChild;
    const stage = document.querySelector('.hero-stage');
    const frame = document.querySelector('.hero-frame');
    const h1 = document.querySelector('h1');
    const lead = h1?.nextElementSibling;
    const actions = lead?.nextElementSibling;
    const meta = document.querySelector('.hero-meta-grid');
    const metaChildren = meta ? [...meta.children].map(info) : [];
    const status = meta?.querySelector('[data-open]')?.parentElement?.parentElement;
    const address = meta?.lastElementChild;
    const tag = document.querySelector('.hero-tag');
    const header = document.querySelector('header');
    const siteHead = document.querySelector('.site-head');
    const cta = [...document.querySelectorAll('a')].find(
      (a) => a.textContent?.trim().startsWith('دیدن قفسه‌ها')
    );
    const cs = cta ? getComputedStyle(cta) : null;

    return {
      viewport: { w: innerWidth, h: innerHeight },
      header: info(header),
      siteHead: info(siteHead),
      hero: info(hero),
      grid: info(grid),
      textCol: info(textCol),
      stage: info(stage),
      frame: info(frame),
      h1: info(h1),
      lead: info(lead),
      actions: info(actions),
      meta: info(meta),
      metaChildren,
      status: info(status),
      address: info(address),
      tag: info(tag),
      cta: cta
        ? {
            rect: rect(cta),
            background: cs.backgroundColor,
            color: cs.color,
            classes: cta.className,
          }
        : null,
      smallLinks: [...document.querySelectorAll('a')]
        .map((a) => ({ text: a.textContent?.trim().replace(/\s+/g, ' ').slice(0, 42), ...rect(a) }))
        .filter((item) => item.h < 24),
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    };
  });

  if (label === 'desktop') {
    await page.hover('a:has-text("دیدن قفسه‌ها")');
    await page.waitForTimeout(500);
    const hover = await page.evaluate(() => {
      const cta = [...document.querySelectorAll('a')].find(
        (a) => a.textContent?.trim().startsWith('دیدن قفسه‌ها')
      );
      if (!cta) return null;
      const r = cta.getBoundingClientRect();
      const cs = getComputedStyle(cta);
      return {
        background: cs.backgroundColor,
        color: cs.color,
        transform: cs.transform,
        box: { x: r.x, y: r.y, w: r.width, h: r.height },
      };
    });
    data.hover = hover;
    await page.screenshot({
      path: '.shots/hero-hover.png',
      clip: { x: 1000, y: 560, width: 440, height: 120 },
    });
  }

  await page.screenshot({
    path: `.shots/hero-${label}.png`,
    fullPage: false,
  });

  await page.close();
  return data;
}

const desktop = await inspectHero(1440, 900, 'desktop');
const mobile = await inspectHero(390, 844, 'mobile');
console.log(JSON.stringify({ desktop, mobile }, null, 2));
await browser.close();
