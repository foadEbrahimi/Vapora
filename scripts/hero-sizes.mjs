import { launch } from 'file:///C:/Users/Asus/.agents/skills/awwwards/scripts/browser.mjs';

const browser = await launch();
const sizes = [
  [1920, 1080],
  [1440, 900],
  [1366, 768],
  [1280, 720],
  [1024, 768],
  [768, 1024],
  [390, 844],
];
const out = [];

for (const [w, h] of sizes) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.goto('http://127.0.0.1:4400/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(700);
  out.push(
    await page.evaluate(() => {
      const r = el => {
        if (!el) return null;
        const b = el.getBoundingClientRect();
        return {
          y: Math.round(b.y),
          bottom: Math.round(b.bottom),
          h: Math.round(b.height),
          w: Math.round(b.width),
        };
      };
      const hero = document.querySelector('.hero');
      const frame = document.querySelector('.hero-frame');
      const stage = document.querySelector('.hero-stage');
      const next = hero?.nextElementSibling;
      return {
        viewport: `${innerWidth}x${innerHeight}`,
        hero: r(hero),
        frame: r(frame),
        stage: r(stage),
        nextTop: next ? Math.round(next.getBoundingClientRect().top) : null,
        frameOverflow: frame ? Math.round(frame.getBoundingClientRect().bottom - hero.getBoundingClientRect().bottom) : null,
      };
    })
  );
  await page.screenshot({ path: `.shots/hero-${w}.png` });
  await page.close();
}
console.log(JSON.stringify(out, null, 2));
await browser.close();
