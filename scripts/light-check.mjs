import { launch } from 'file:///C:/Users/Asus/.agents/skills/awwwards/scripts/browser.mjs';

const browser = await launch();

async function shot(path, url, width, height, fullPage) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.addInitScript(() => localStorage.setItem('theme', 'light'));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);
  const info = await page.evaluate(() => {
    const cs = getComputedStyle(document.documentElement);
    const body = getComputedStyle(document.body);
    const anchors = [...document.querySelectorAll('.utility-bar a')].map(a => {
      const r = a.getBoundingClientRect();
      return { text: a.textContent.trim(), w: Math.round(r.width), h: Math.round(r.height) };
    });
    return {
      theme: document.documentElement.className,
      bg: body.backgroundColor,
      text: body.color,
      overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      anchors,
    };
  });
  await page.screenshot({ path, fullPage });
  await page.close();
  return info;
}

const out = {};
out.homeDesktop = await shot('.shots/final/light-desktop.png', 'http://127.0.0.1:4400/', 1440, 900, false);
out.homePhone = await shot('.shots/final/light-mobile.png', 'http://127.0.0.1:4400/', 390, 844, false);
out.contactPhone = await shot('.shots/final/light-contact-mobile.png', 'http://127.0.0.1:4400/contact', 390, 844, false);
console.log(JSON.stringify(out, null, 2));
await browser.close();
