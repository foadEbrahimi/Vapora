import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const out = 'public/home';
await fs.mkdir(out, { recursive: true });

const jobs = [
  // Hero: 4:5 crop keeps the device and its smoke.
  { src: 'public/hero-vape.webp', file: 'device.webp', w: 820, h: 1025 },
  // Menu previews: one shelf, one 4:3 frame.
  {
    src: 'public/vape2.png',
    file: 'menu-disposable.webp',
    w: 1200,
    h: 900,
  },
  { src: 'public/vape1.png', file: 'menu-pod.webp', w: 1200, h: 900 },
  {
    src: 'public/vaporesso-M8CrCzlS78Y-unsplash.jpg',
    file: 'menu-box.webp',
    w: 1200,
    h: 900,
  },
  {
    src: 'public/colorful-vape-juice-bottles-neon-lights-dark-ambie.jpg',
    file: 'menu-juice.webp',
    w: 1200,
    h: 900,
  },
  {
    src: 'public/erik-seth-K5P84luYcGg-unsplash.jpg',
    file: 'menu-pouch.webp',
    w: 1200,
    h: 900,
  },
  {
    src: 'public/smoking-accessories-lighters-grinders-dark-moody.jpg',
    file: 'menu-accessories.webp',
    w: 1200,
    h: 900,
  },
  // People: a 4:5 portrait, cropped to the person behind the counter.
  {
    src: 'public/friendly-smoke-shop-owner-helping-customer-warm-in.jpg',
    file: 'people.webp',
    w: 900,
    h: 1125,
  },
  // Visit: a wide, dark warm interior.
  {
    src: 'public/premium-smoke-shop-interior-warm-lighting-tobacco-.jpg',
    file: 'visit.webp',
    w: 1400,
    h: 788,
  },
  // Legacy category cards: pre-sized WebP instead of multi-megabyte originals.
  {
    src: 'public/modern-vape-devices-neon-blue-glow-dark-background.jpg',
    file: 'category-disposable.webp',
    w: 1200,
    h: 800,
  },
  {
    src: 'public/vape1.png',
    file: 'category-pod.webp',
    w: 1200,
    h: 800,
  },
  {
    src: 'public/vape2.png',
    file: 'category-box.webp',
    w: 1200,
    h: 800,
  },
  {
    src: 'public/e-liquids-uk-8RN9UZeL-fo-unsplash.jpg',
    file: 'category-juice.webp',
    w: 1200,
    h: 800,
  },
  {
    src: 'public/erik-seth-K5P84luYcGg-unsplash.jpg',
    file: 'category-pouch.webp',
    w: 1200,
    h: 800,
  },
  {
    src: 'public/vaporesso-M8CrCzlS78Y-unsplash.jpg',
    file: 'category-accessories.webp',
    w: 1200,
    h: 800,
  },
];

for (const job of jobs) {
  const dest = path.join(out, job.file);
  const info = await sharp(job.src)
    .resize(job.w, job.h, { fit: 'cover', position: 'centre' })
    .sharpen({ sigma: 0.4 })
    .webp({ quality: 82, effort: 6 })
    .toFile(dest);
  console.log(
    `${job.file}: ${info.width}x${info.height} ${Math.round(info.size / 1024)} KB`
  );
}

// Social card: the warm interior cropped to the 1200x630 OG ratio.
const og = await sharp('public/home/visit.webp')
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile('public/og.jpg');
console.log(`og.jpg: ${og.width}x${og.height} ${Math.round(og.size / 1024)} KB`);
