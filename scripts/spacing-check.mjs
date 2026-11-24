import { launch } from 'file:///C:/Users/Asus/.agents/skills/awwwards/scripts/browser.mjs';

const browser = await launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://127.0.0.1:4400/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1800);

const result = await page.evaluate(() => {
  const box = (el) => {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return {
      tag: el.tagName,
      cls: el.className?.toString().slice(0, 60),
      text: el.textContent?.trim().replace(/\s+/g, ' ').slice(0, 60),
      x: Math.round(r.x),
      y: Math.round(r.y),
      w: Math.round(r.width),
      h: Math.round(r.height),
      right: Math.round(r.right),
      bottom: Math.round(r.bottom),
      minHeight: cs.minHeight,
      height: cs.height,
      padding: cs.padding,
      display: cs.display,
      whiteSpace: cs.whiteSpace,
    };
  };

  const meta = document.querySelector('.hero-meta-grid');
  const cells = meta ? [...meta.children] : [];
  const inner = cells.flatMap((cell) => [cell, ...cell.querySelectorAll('p, a, span')]);

  const footerLinks = [...document.querySelectorAll('footer a')].map(box);

  return { cells: cells.map(box), inner: inner.map(box), footerLinks };
});

console.log(JSON.stringify(result, null, 2));
await browser.close();
