export type CatalogProduct = {
  name: string;
  price: string;
  tag: string | null;
};

export type CatalogShelf = {
  id: string;
  title: string;
  description: string;
  image: string;
  products: CatalogProduct[];
};

export const shelves: CatalogShelf[] = [
  {
    id: 'disposable',
    title: 'ویپ‌های یکبارمصرف',
    description:
      'ویپ‌های آماده به استفاده در صدها طعم مختلف. بدون نیاز به شارژ یا پر کردن.',
    image: '/home/category-disposable.webp',
    products: [
      { name: 'الف بار', price: 'شروع از ۶۷۵٬۰۰۰ تومان', tag: 'پرفروشترین' },
      { name: 'لاست مری', price: 'شروع از ۷۲۰٬۰۰۰ تومان', tag: 'محبوب' },
      { name: 'فانکی ریپابلیک', price: 'شروع از ۷۶۵٬۰۰۰ تومان', tag: 'جدید' },
      { name: 'راز ویپ', price: 'شروع از ۸۱۰٬۰۰۰ تومان', tag: 'پوف بالا' },
      { name: 'گیک بار', price: 'شروع از ۷۲۰٬۰۰۰ تومان', tag: null },
      { name: 'هید', price: 'شروع از ۵۸۵٬۰۰۰ تومان', tag: 'با ارزش' },
      { name: 'بریز پرو', price: 'شروع از ۶۳۰٬۰۰۰ تومان', tag: null },
      { name: 'فلام فلوات', price: 'شروع از ۶۷۵٬۰۰۰ تومان', tag: 'محبوب' },
    ],
  },
  {
    id: 'pod-systems',
    title: 'سیستم‌های پاد',
    description:
      'دستگاه‌های پت کوچکتر و قابل حمل با گزینه‌های قابل پر کردن و پیش‌پر شده.',
    image: '/home/category-pod.webp',
    products: [
      { name: 'کیت شروع JUUL', price: 'شروع از ۸۹۵٬۰۰۰ تومان', tag: 'کلاسیک' },
      { name: 'واپرسو XROS', price: 'شروع از ۱٬۱۲۵٬۰۰۰ تومان', tag: 'پرفروش' },
      { name: 'اسموک نورد', price: 'شروع از ۱٬۳۵۰٬۰۰۰ تومان', tag: 'محبوب' },
      { name: 'یوول کالیبرن', price: 'شروع از ۱٬۰۳۵٬۰۰۰ تومان', tag: 'لطیف' },
      { name: 'ووپو وینچی', price: 'شروع از ۱٬۲۵۵٬۰۰۰ تومان', tag: null },
      { name: 'گیک\u200cویپ وناکس', price: 'شروع از ۱٬۱۷۰٬۰۰۰ تومان', tag: 'جدید' },
    ],
  },
  {
    id: 'box-mods',
    title: 'باکس مود و کیت\u200cها',
    description:
      'دستگاه‌های حرفه‌ای ویپینگ برای کاربران باتجربه. قدرت و شخصی‌سازی بالا.',
    image: '/home/category-box.webp',
    products: [
      { name: 'ووپو درگ', price: 'شروع از ۲٬۲۴۵٬۰۰۰ تومان', tag: 'محبوب' },
      { name: 'گیک\u200cویپ ایجیس', price: 'شروع از ۲٬۴۷۵٬۰۰۰ تومان', tag: 'محکم' },
      { name: 'اسموک مورف', price: 'شروع از ۲٬۶۹۵٬۰۰۰ تومان', tag: null },
      { name: 'واپرسو جن', price: 'شروع از ۲٬۰۲۵٬۰۰۰ تومان', tag: 'پرفروش' },
      { name: 'فریمکس مکسوس', price: 'شروع از ۲٬۱۵۵٬۰۰۰ تومان', tag: null },
      {
        name: 'لاست ویپ تلماتما',
        price: 'شروع از ۲٬۹۲۰٬۰۰۰ تومان',
        tag: 'پریمیوم',
      },
    ],
  },
  {
    id: 'vape-juices',
    title: 'جویس و ای-مایع ویپ',
    description:
      'ای-مایع\u200cهای درجه\u200cیک با هر طعمی که بتوانید تصور کنید. فر‌ی\u200cبیس و نیکوتین سالت.',
    image: '/home/category-juice.webp',
    products: [
      { name: 'طعم\u200cهای میوه\u200cای', price: 'شروع از ۵۸۵٬۰۰۰ تومان', tag: 'محبوب' },
      { name: 'دسر و شیرینی', price: 'شروع از ۶۷۵٬۰۰۰ تومان', tag: null },
      { name: 'منتول و یخ', price: 'شروع از ۵۸۵٬۰۰۰ تومان', tag: 'تازهکننده' },
      { name: 'ترکیب تنباکو', price: 'شروع از ۶۲۵٬۰۰۰ تومان', tag: 'کلاسیک' },
      { name: 'نیکوتین سالت', price: 'شروع از ۷۲۰٬۰۰۰ تومان', tag: 'لطیف' },
      { name: 'جویس ماکس ویجی', price: 'شروع از ۷۶۵٬۰۰۰ تومان', tag: 'ابر' },
      { name: 'جویس CBD', price: 'شروع از ۱٬۱۲۵٬۰۰۰ تومان', tag: 'آرامبخش' },
      { name: 'بدون نیکوتین', price: 'شروع از ۵۳۵٬۰۰۰ تومان', tag: null },
    ],
  },
  {
    id: 'nicotine-pouches',
    title: 'پک\u200cهای نیکوتین',
    description:
      'پک\u200cهای نیکوتین بدون دود و بزاق. رضایت مخفیانه در هر مکان.',
    image: '/home/category-pouch.webp',
    products: [
      { name: 'زین', price: 'شروع از ۲۲۵٬۰۰۰ تومان', tag: 'پرفروش' },
      { name: 'آن!', price: 'شروع از ۱۸۰٬۰۰۰ تومان', tag: 'با ارزش' },
      { name: 'ولو', price: 'شروع از ۲۰۲٬۰۰۰ تومان', tag: 'محبوب' },
      { name: 'لوسی', price: 'شروع از ۲۲۵٬۰۰۰ تومان', tag: null },
      { name: 'روگ', price: 'شروع از ۱۹۳٬۰۰۰ تومان', tag: null },
      { name: 'افآرای', price: 'شروع از ۱۸۰٬۰۰۰ تومان', tag: 'جدید' },
    ],
  },
  {
    id: 'accessories',
    title: 'لوازم جانبی ویپ',
    description:
      'کویل\u200cها، تانک\u200cها، باتری\u200cها، شارژرها و هر آنچه برای ویپینگ نیاز دارید.',
    image: '/home/category-accessories.webp',
    products: [
      { name: 'کویل\u200cهای جایگزین', price: 'شروع از ۴۵۰٬۰۰۰ تومان', tag: 'ضروری' },
      { name: 'تانک\u200cهای ساب\u200cاهم', price: 'شروع از ۹۰۰٬۰۰۰ تومان', tag: null },
      { name: 'باتری ۱۸۶۵۰', price: 'شروع از ۴۰۵٬۰۰۰ تومان', tag: null },
      { name: 'شارژر باتری', price: 'شروع از ۶۷۵٬۰۰۰ تومان', tag: null },
      { name: 'قطعات درپ تیپ', price: 'شروع از ۲۲۵٬۰۰۰ تومان', tag: null },
      { name: 'کیس ویپ', price: 'شروع از ۵۸۵٬۰۰۰ تومان', tag: null },
      { name: 'پنبه و سیم', price: 'شروع از ۳۱۵٬۰۰۰ تومان', tag: 'دستی' },
      { name: 'کارتریج پاد', price: 'شروع از ۵۳۵٬۰۰۰ تومان', tag: null },
    ],
  },
];

export const catalogItemCount = shelves.reduce(
  (total, shelf) => total + shelf.products.length,
  0
);
