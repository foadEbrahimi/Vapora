import { AnimatedSection } from '@/src/components/animated-section';
import { Footer } from '@/src/components/footer';
import { Header } from '@/src/components/header';
import { Badge } from '@/src/components/ui/badge';
import { Card, CardContent } from '@/src/components/ui/card';
import {
  Battery,
  ChevronRight,
  Droplets,
  Flame,
  Sparkles,
  Wind,
  Zap,
} from 'lucide-react';

const categories = [
  {
    id: 'disposable',
    title: 'ویپ‌های یکبارمصرف',
    icon: Zap,
    description:
      'ویپ‌های آماده به استفاده در صدها طعم مختلف. بدون نیاز به شارژ یا پر کردن.',
    image: '/modern-vape-devices-neon-blue-glow-dark-background.jpg',
    products: [
      { name: 'الف بار', price: 'شروع از ۶۷۵,۰۰۰ تومان', tag: 'پرفروش‌ترین' },
      { name: 'لاست مری', price: 'شروع از ۷۲۰,۰۰۰ تومان', tag: 'محبوب' },
      { name: 'فانکی ریپابلیک', price: 'شروع از ۷۶۵,۰۰۰ تومان', tag: 'جدید' },
      { name: 'راز ویپ', price: 'شروع از ۸۱۰,۰۰۰ تومان', tag: 'پوف بالا' },
      { name: 'گیک بار', price: 'شروع از ۷۲۰,۰۰۰ تومان', tag: null },
      { name: 'هید', price: 'شروع از ۵۸۵,۰۰۰ تومان', tag: 'با ارزش' },
      { name: 'بریز پرو', price: 'شروع از ۶۳۰,۰۰۰ تومان', tag: null },
      { name: 'فلام فلوات', price: 'شروع از ۶۷۵,۰۰۰ تومان', tag: 'محبوب' },
    ],
  },
  {
    id: 'pod-systems',
    title: 'سیستم‌های پاد',
    icon: Battery,
    description:
      'دستگاه‌های پت کوچکتر و قابل حمل با گزینه‌های قابل پر کردن و پیش‌پر شده.',
    image: '/vape1.png',
    products: [
      { name: 'کیت شروع JUUL', price: 'شروع از ۸۹۵,۰۰۰ تومان', tag: 'کلاسیک' },
      {
        name: 'واپرسو XROS',
        price: 'شروع از ۱,۱۲۵,۰۰۰ تومان',
        tag: 'پرفروش',
      },
      { name: 'اسموک نورد', price: 'شروع از ۱,۳۵۰,۰۰۰ تومان', tag: 'محبوب' },
      { name: 'یوول کالیبرن', price: 'شروع از ۱,۰۳۵,۰۰۰ تومان', tag: 'لطیف' },
      { name: 'ووپو وینچی', price: 'شروع از ۱,۲۵۵,۰۰۰ تومان', tag: null },
      { name: 'گیک‌ویپ وناکس', price: 'شروع از ۱,۱۷۰,۰۰۰ تومان', tag: 'جدید' },
    ],
  },
  {
    id: 'box-mods',
    title: 'باکس‌مود و کیت‌ها',
    icon: Flame,
    description:
      'دستگاه‌های حرفه‌ای ویپینگ برای کاربران باتجربه. قدرت و شخصی‌سازی بالا.',
    image: '/vape2.png',
    products: [
      { name: 'ووپو درگ', price: 'شروع از ۲,۲۴۵,۰۰۰ تومان', tag: 'محبوب' },
      { name: 'گیک‌ویپ ایجیس', price: 'شروع از ۲,۴۷۵,۰۰۰ تومان', tag: 'محکم' },
      { name: 'اسموک مورف', price: 'شروع از ۲,۶۹۵,۰۰۰ تومان', tag: null },
      {
        name: 'واپرسو جن',
        price: 'شروع از ۲,۰۲۵,۰۰۰ تومان',
        tag: 'پرفروش',
      },
      { name: 'فری‌مکس مکسوس', price: 'شروع از ۲,۱۵۵,۰۰۰ تومان', tag: null },
      {
        name: 'لاست ویپ تلماتما',
        price: 'شروع از ۲,۹۲۰,۰۰۰ تومان',
        tag: 'پریمیوم',
      },
    ],
  },
  {
    id: 'vape-juices',
    title: 'جویس و ای-مایع ویپ',
    icon: Droplets,
    description:
      'ای-مایع‌های درجه‌یک با هر طعمی که بتوانید تصور کنید. فر‌ی‌بیس و نیکوتین سالت.',
    image: '/e-liquids-uk-8RN9UZeL-fo-unsplash.jpg',
    products: [
      { name: 'طعم‌های میوه‌ای', price: 'شروع از ۵۸۵,۰۰۰ تومان', tag: 'محبوب' },
      { name: 'دسر و شیرینی', price: 'شروع از ۶۷۵,۰۰۰ تومان', tag: null },
      { name: 'منتول و یخ', price: 'شروع از ۵۸۵,۰۰۰ تومان', tag: 'تازه‌کننده' },
      { name: 'ترکیب تنباکو', price: 'شروع از ۶۲۵,۰۰۰ تومان', tag: 'کلاسیک' },
      { name: 'نیکوتین سالت', price: 'شروع از ۷۲۰,۰۰۰ تومان', tag: 'لطیف' },
      { name: 'جویس ماکس وی‌جی', price: 'شروع از ۷۶۵,۰۰۰ تومان', tag: 'ابر' },
      { name: 'جویس CBD', price: 'شروع از ۱,۱۲۵,۰۰۰ تومان', tag: 'آرام‌بخش' },
      { name: 'بدون نیکوتین', price: 'شروع از ۵۳۵,۰۰۰ تومان', tag: null },
    ],
  },
  {
    id: 'nicotine-pouches',
    title: 'پک‌های نیکوتین',
    icon: Sparkles,
    description: 'پک‌های نیکوتین بدون دود و بزاق. رضایت مخفیانه در هر مکان.',
    image: '/erik-seth-K5P84luYcGg-unsplash.jpg',
    products: [
      { name: 'زین', price: 'شروع از ۲۲۵,۰۰۰ تومان', tag: 'پرفروش' },
      { name: 'آن!', price: 'شروع از ۱۸۰,۰۰۰ تومان', tag: 'با ارزش' },
      { name: 'ولو', price: 'شروع از ۲۰۲,۰۰۰ تومان', tag: 'محبوب' },
      { name: 'لوسی', price: 'شروع از ۲۲۵,۰۰۰ تومان', tag: null },
      { name: 'روگ', price: 'شروع از ۱۹۳,۰۰۰ تومان', tag: null },
      { name: 'اف‌آر‌ای', price: 'شروع از ۱۸۰,۰۰۰ تومان', tag: 'جدید' },
    ],
  },
  {
    id: 'accessories',
    title: 'لوازم جانبی ویپ',
    icon: Wind,
    description:
      'کویل‌ها، تانک‌ها، باتری‌ها، شارژرها و هر آنچه برای ویپینگ نیاز دارید.',
    image: '/vaporesso-M8CrCzlS78Y-unsplash.jpg',
    products: [
      {
        name: 'کویل‌های جایگزین',
        price: 'شروع از ۴۵۰,۰۰۰ تومان',
        tag: 'ضروری',
      },
      { name: 'تانک‌های ساب‌اهم', price: 'شروع از ۹۰۰,۰۰۰ تومان', tag: null },
      { name: 'باتری ۱۸۶۵۰', price: 'شروع از ۴۰۵,۰۰۰ تومان', tag: null },
      { name: 'شارژر باتری', price: 'شروع از ۶۷۵,۰۰۰ تومان', tag: null },
      { name: 'قطعات درپ تیپ', price: 'شروع از ۲۲۵,۰۰۰ تومان', tag: null },
      { name: 'کیس ویپ', price: 'شروع از ۵۸۵,۰۰۰ تومان', tag: null },
      { name: 'پنبه و سیم', price: 'شروع از ۳۱۵,۰۰۰ تومان', tag: 'دستی' },
      { name: 'کارتریج پاد', price: 'شروع از ۵۳۵,۰۰۰ تومان', tag: null },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div dir='rtl' className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1'>
        <section className='py-20 md:py-28 relative overflow-hidden'>
          <div className='absolute inset-0 bg-linear-to-br from-background via-card to-background' />
          <div className='absolute inset-0 smoke-overlay' />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl' />

          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <AnimatedSection>
              <h1 className='text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]'>
                ویپ و{' '}
                <span className='text-primary text-glow-amber'>ای-مایع</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <p className='text-xl text-muted-foreground max-w-2xl leading-relaxed'>
                مجموعه‌ای گسترده از ویپ‌های یکبارمصرف، سیستم‌های پاد، باکس‌مود،
                ای-مایع‌های درجه‌یک و لوازم جانبی. بهترین انتخاب‌ها در تهران با
                قیمت‌هایی بی‌رقیب.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className='py-16'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-20'>
              {categories.map((category, index) => (
                <AnimatedSection key={category.id} delay={index * 100}>
                  <a
                    href={`#${category.id}`}
                    className='group relative overflow-hidden rounded-2xl border border-border/50 h-64 block'
                  >
                    <img
                      src={category.image || '/placeholder.svg'}
                      alt={category.title}
                      className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-linear-to-t from-background via-background/70 to-transparent' />
                    <div className='absolute inset-0 p-8 flex flex-col justify-end'>
                      <div className='flex items-center gap-3 mb-2'>
                        <category.icon className='h-6 w-6 text-primary' />
                        <h3 className='text-2xl font-bold text-foreground tracking-wide'>
                          {category.title}
                        </h3>
                      </div>
                      <p className='text-muted-foreground'>
                        {category.description}
                      </p>
                    </div>
                    <div className='absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity'>
                      <div className='px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center gap-1'>
                        مشاهده <ChevronRight className='h-4 w-4 rotate-180' />
                      </div>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            {/* لیست محصولات */}
            <div className='space-y-20'>
              {categories.map((category, catIndex) => (
                <div
                  key={category.id}
                  id={category.id}
                  className='scroll-mt-24'
                >
                  <AnimatedSection>
                    <div className='flex items-center gap-4 mb-10'>
                      <div className='rounded-xl bg-primary/10 p-4 glow-amber'>
                        <category.icon className='h-8 w-8 text-primary' />
                      </div>
                      <div>
                        <h2 className='text-3xl md:text-4xl font-bold text-foreground tracking-wide leading-tight'>
                          {category.title}
                        </h2>
                        <p className='text-muted-foreground mt-1'>
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>

                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {category.products.map((product, index) => (
                      <AnimatedSection key={product.name} delay={index * 50}>
                        <Card className='glass-card hover:glow-amber transition-all duration-300 group cursor-pointer h-full'>
                          <CardContent className='p-6'>
                            <div className='flex items-start justify-between gap-2'>
                              <h3 className='font-semibold text-foreground text-lg group-hover:text-primary transition-colors'>
                                {product.name}
                              </h3>
                              {product.tag && (
                                <Badge
                                  variant='secondary'
                                  className='bg-primary/10 text-primary border-0 shrink-0'
                                >
                                  {product.tag}
                                </Badge>
                              )}
                            </div>
                            <p className='text-muted-foreground text-sm mt-2'>
                              {product.price}
                            </p>
                          </CardContent>
                        </Card>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* نکته */}
        <AnimatedSection>
          <section className='py-12 bg-card relative overflow-hidden text-center'>
            <div className='absolute inset-0 smoke-overlay opacity-30' />
            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <p className='text-muted-foreground'>
                قیمت‌ها و موجودی ممکن است تغییر کنند. برای قیمت‌های به‌روز و
                انتخاب کامل دوستانه به فروشگاه ما مراجعه کنید.
              </p>
              <p className='text-xs text-muted-foreground mt-2 px-4 py-2 bg-secondary/50 rounded-full inline-block'>
                خرید محصولات تنباکو و ویپ فقط برای افراد بالای ۲۱ سال مجاز است
              </p>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
