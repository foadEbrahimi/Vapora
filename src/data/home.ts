export type MenuItem = {
  id: string;
  title: string;
  detail: string;
  brands: string;
  price: string;
  image: string;
  alt: string;
};

export const menu: MenuItem[] = [
  {
    id: 'disposable',
    title: 'ویپ‌های یک‌بارمصرف',
    detail: 'بدون شارژ و تنظیم، آماده استفاده',
    brands: 'الف بار، لاست مری، فانکی ریپابلیک، هید',
    price: 'از ۵۸۵٬۰۰۰ تومان',
    image: '/home/menu-disposable.webp',
    alt: 'چهار ویپ یک‌بارمصرف رنگارنگ زیر نور نئون',
  },
  {
    id: 'pod-systems',
    title: 'سیستم‌های پاد',
    detail: 'جمع‌وجور، قابل شارژ، با کارتریج قابل تعویض',
    brands: 'واپرسو، اسموک، یوول، گی‌ویپ',
    price: 'از ۸۹۵٬۰۰۰ تومان',
    image: '/home/menu-pod.webp',
    alt: 'چهار پاد سیستم مشکی و سرمه‌ای در نور کم',
  },
  {
    id: 'box-mods',
    title: 'باکس‌مود و کیت‌ها',
    detail: 'برای دود بیشتر و تنظیمات دلخواه',
    brands: 'ووپو، گی‌ویپ، اسموک، واپرسو',
    price: 'از ۲٬۰۲۵٬۰۰۰ تومان',
    image: '/home/menu-box.webp',
    alt: 'باکس‌مود قرمز با تانک شیشه‌ای روی سنگ تیره',
  },
  {
    id: 'vape-juices',
    title: 'جویس‌ها',
    detail: 'میوه‌ای، دسری، منتول و ترکیب تنباکو',
    brands: 'فر‌ی‌بیس، نیکوتین سالت، بدون نیکوتین',
    price: 'از ۵۳۵٬۰۰۰ تومان',
    image: '/home/menu-juice.webp',
    alt: 'بطری‌های جویس رنگارنگ در نور نئون',
  },
  {
    id: 'nicotine-pouches',
    title: 'پک‌های نیکوتین',
    detail: 'بدون دود و خاکستر',
    brands: 'زین، ولو، روگ، لوسی',
    price: 'از ۱۸۰٬۰۰۰ تومان',
    image: '/home/menu-pouch.webp',
    alt: 'قوطی پک نیکوتین سبز روی سطح تیره',
  },
  {
    id: 'accessories',
    title: 'لوازم جانبی',
    detail: 'کویل، تانک، باتری، شارژر و قطعات',
    brands: 'کویل، تانک، باتری ۱۸۶۵۰',
    price: 'از ۲۲۵٬۰۰۰ تومان',
    image: '/home/menu-accessories.webp',
    alt: 'فندک فلزی و لوازم دخانی روی میز چوبی تیره',
  },
];

export type HomeReview = {
  name: string;
  text: string;
  date: string;
  score: string;
};

export const homeReviews: HomeReview[] = [
  {
    name: 'نگار محمدی',
    text: 'فروشگاه دنج و عالیه، جالب اینه که همیشه یادشونه چی می‌خوام!',
    date: '۱ ماه پیش',
    score: '۵',
  },
  {
    name: 'سارا کریمی',
    text: 'ویپ‌های خفنی دارن و بچه‌های فروشگاه هم خیلی حرفه‌ای و خوش‌برخوردن.',
    date: '۳ ماه پیش',
    score: '۵',
  },
  {
    name: 'علی رضایی',
    text: 'قیمت‌هاشون منصفانه‌ست، فقط کاش تنوع پادهای یک‌بارمصرفشون بیشتر بود.',
    date: '۴ ماه پیش',
    score: '۴',
  },
];

export const facts = [
  {
    value: '۶',
    label: 'قفسه',
    note: 'از یک‌بارمصرف تا لوازم جانبی',
  },
  {
    value: '۴.۶',
    label: 'از ۵',
    note: 'بر اساس بیش از ۴۰ نظر',
  },
  {
    value: '۲۱+',
    label: 'محدودیت سنی',
    note: 'فروش فقط به بزرگسالان',
  },
  {
    value: '۹ تا ۲۱',
    label: 'شنبه تا پنجشنبه',
    note: 'جمعه ۱۰ تا ۱۸',
  },
] as const;

export const heroImage = {
  src: '/home/device.webp',
  width: 820,
  height: 1025,
  alt: 'ویپ مشکی و طلایی در میان دود گرم روی پیشخوان',
};
