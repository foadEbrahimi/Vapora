import { launch } from 'file:///C:/Users/Asus/.agents/skills/awwwards/scripts/browser.mjs';

const browser = await launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('console', message => {
  if (message.type() === 'error') errors.push(message.text());
});
page.on('pageerror', error => errors.push(String(error)));
await page.goto('http://127.0.0.1:4400/', { waitUntil: 'networkidle' });
await page.waitForTimeout(3200);

const info = await page.evaluate(() => {
  const html = document.documentElement;
  const h1 = document.querySelector('h1');
  const lines = [...document.querySelectorAll('[data-intro-line]')];
  const intro = [...document.querySelectorAll('[data-intro]')].map(el => ({
    tag: el.tagName,
    text: el.textContent?.trim().slice(0, 30),
    opacity: getComputedStyle(el).opacity,
    transform: getComputedStyle(el).transform,
    inline: el.getAttribute('style'),
  }));
  const lineInfo = lines.map(el => {
    const cs = getComputedStyle(el);
    const mask = el.parentElement;
    const box = el.getBoundingClientRect();
    const maskBox = mask?.getBoundingClientRect();
    return {
      text: el.textContent,
      color: cs.color,
      opacity: cs.opacity,
      transform: cs.transform,
      inline: el.getAttribute('style'),
      box: { x: box.x, y: box.y, w: box.width, h: box.height },
      mask: maskBox && { x: maskBox.x, y: maskBox.y, w: maskBox.width, h: maskBox.height },
      maskOverflow: mask && getComputedStyle(mask).overflow,
      maskPadding: mask && getComputedStyle(mask).padding,
      maskMargin: mask && getComputedStyle(mask).margin,
    };
  });
  const canvas = document.querySelector('canvas.vapor-canvas');
  return {
    htmlClass: html.className,
    h1: h1 && {
      text: h1.textContent,
      box: (() => {
        const r = h1.getBoundingClientRect();
        return { x: r.x, y: r.y, w: r.width, h: r.height };
      })(),
      color: getComputedStyle(h1).color,
      font: getComputedStyle(h1).fontFamily,
      fontSize: getComputedStyle(h1).fontSize,
      opacity: getComputedStyle(h1).opacity,
      visibility: getComputedStyle(h1).visibility,
      display: getComputedStyle(h1).display,
    },
    lineInfo,
    intro,
    canvas: canvas && {
      width: canvas.width,
      height: canvas.height,
      box: (() => {
        const r = canvas.getBoundingClientRect();
        return { x: r.x, y: r.y, w: r.width, h: r.height };
      })(),
      opacity: getComputedStyle(canvas).opacity,
      display: getComputedStyle(canvas).display,
    },
    motion: html.classList.contains('motion'),
  };
});

console.log(JSON.stringify({ info, errors }, null, 2));
await page.screenshot({ path: '.shots/check-desktop.png' });
await browser.close();
