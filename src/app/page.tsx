import { AnimatedSection } from '@/src/components/animated-section';
import { Footer } from '@/src/components/footer';
import { Header } from '@/src/components/header';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import {
  Battery,
  ChevronRight,
  Clock,
  Droplets,
  MapPin,
  Phone,
  Star,
  Wind,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Zap,
    title: 'ویپ‌های یک‌بارمصرف',
    description:
      'کلی طعم خفن از بهترین برندها مثل Elf Bar، Lost Mary و برندهای معروف دیگه.',
  },
  {
    icon: Battery,
    title: 'پاد سیستم‌ها',
    description:
      'دستگاه‌های جمع‌وجور و راحت؛ هم برای اونایی که تازه شروع کردن، هم ویپربازای حرفه‌ای.',
  },
  {
    icon: Wind,
    title: 'باکس‌مودها و کیت‌ها',
    description:
      'دستگاه‌های حرفه‌ای برای دود بیشتر، کام‌دهی قوی‌تر و تنظیمات دلخواه شما.',
  },
  {
    icon: Droplets,
    title: 'جویس‌ها و سالت‌ها',
    description:
      'انواع جویس و سالت نیکوتین با بهترین کیفیت و طعم‌هایی که عاشقشون می‌شید.',
  },
];

const trendingProducts = [
  { name: 'Elf Bar BC5000', category: 'Disposable', tag: 'پرفروش' },
  { name: 'Lost Mary OS5000', category: 'Disposable', tag: 'محبوب' },
  { name: 'Nic Salt E-Liquids', category: 'Juices', tag: 'ملایم' },
  { name: 'Vaporesso XROS', category: 'Pod System', tag: 'امتیاز بالا' },
];

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1'>
        <section className='relative overflow-hidden py-20 pb-32 flex items-center'>
          {/* Background */}
          <div className="absolute inset-0 bg-[url('/premium-tobacco-vape-shop-dark-ambiance.jpg')] bg-cover bg-center opacity-35" />
          <div className='absolute inset-0 bg-linear-to-br from-background/10 via-background/50 to-background/70' />
          {/* <div className='absolute inset-0 smoke-overlay' /> */}

          {/* Ambient Glows */}
          <div className='absolute bottom-1/3 right-1/4 w-[200px] h-[200px] bg-accent/20 blur-3xl rounded-full' />

          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full'>
            <div className='flex flex-col-reverse lg:grid lg:grid-cols-2 gap-14 items-center'>
              {/* LEFT — TEXT */}
              <div className='relative z-10'>
                <AnimatedSection>
                  <div className='inline-flex items-center gap-3 px-5 py-2 rounded-full bg-card/60 backdrop-blur border border-border/50 mb-8'>
                    <Star className='h-4 w-4 fill-primary text-primary' />
                    <span className='text-primary font-semibold'>
                      ۴.۶ امتیاز کاربران
                    </span>
                    <span className='text-muted-foreground text-sm'>
                      +۴۰ نظر واقعی
                    </span>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={100}>
                  <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.3] mb-6'>
                    ویپورا
                    <span className='block text-primary mt-3'>
                      دنیای حرفه‌ای ویپ
                    </span>
                  </h1>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                  <p className='text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-10'>
                    از دستگاه‌های حرفه‌ای تا جویس‌های اصل برند. تجربه‌ای لوکس،
                    مشاوره واقعی و کیفیتی که کاملاً حسش می‌کنی.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={300}>
                  <div className='flex flex-col sm:flex-row gap-4 w-full'>
                    <Button
                      size='lg'
                      asChild
                      className='w-full sm:w-auto rounded-full px-10 py-6 hover:scale-[1.03] transition-all duration-300'
                    >
                      <Link
                        href='/products'
                        className='flex items-center gap-2'
                      >
                        دیدن محصولات
                        <ChevronRight className='h-5 w-5 rotate-180' />
                      </Link>
                    </Button>

                    <Button
                      size='lg'
                      variant='outline'
                      asChild
                      className='w-full sm:w-auto rounded-full px-10 py-6 dark:hover:text-foreground border-border/60 bg-transparent'
                    >
                      <Link href='/contact'>آدرس فروشگاه</Link>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>

              {/* RIGHT — PRODUCT SPOTLIGHT */}
              <AnimatedSection direction='right'>
                <div className='relative flex justify-center'>
                  {/* Glow */}
                  <div className='absolute inset-0 bg-linear-to-br from-primary/30 to-accent/30 blur-3xl rounded-full -z-10' />

                  <div className='absolute -top-3 left-0 glass-card px-3 py-1.5 rounded-xl text-xs sm:text-sm animate-float'>
                    ✅ جویس اصل
                  </div>

                  <div className='absolute bottom-4 right-0 glass-card px-3 py-1.5 rounded-xl text-xs sm:text-sm animate-float delay-200'>
                    🔥 پرفروش
                  </div>

                  {/* Product Image */}
                  <img
                    src='/hero-vape.webp'
                    alt='Premium Vape Device'
                    className='w-[250px] sm:w-[300px] -z-2 md:w-[380px] mx-auto rounded-lg drop-shadow-[0_25px_60px_rgba(0,0,0,0.55)]'
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <AnimatedSection>
          <section className='py-6 bg-secondary/30 border-y border-border/30'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='flex items-center gap-8 overflow-x-auto scrollbar-hide py-2'>
                <span className='text-muted-foreground text-sm font-medium tracking-wider shrink-0'>
                  پرطرفدارها:
                </span>
                {trendingProducts.map(product => (
                  <Link
                    key={product.name}
                    href='/products'
                    className='flex items-center gap-3 px-4 py-2 rounded-full bg-card/50 border border-border/30 hover:border-primary/50 transition-colors shrink-0 group'
                  >
                    <span className='text-foreground font-medium text-sm'>
                      {product.name}
                    </span>
                    <span className='text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary'>
                      {product.tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <section className='py-28 relative overflow-hidden'>
          <div className='absolute inset-0 smoke-overlay opacity-50' />
          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <AnimatedSection>
              <div className='text-center mb-16'>
                <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight leading-[1.35]'>
                  محصولات <span className='text-primary'>ویپورا</span>
                </h2>
                <p className='text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed'>
                  از تنباکوهای خاص گرفته تا جدیدترین دستگاه‌های ویپ؛ هر چیزی که
                  لازم داشته باشی رو براتون فراهم کردیم.
                </p>
              </div>
            </AnimatedSection>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {features.map((feature, index) => (
                <AnimatedSection
                  key={feature.title}
                  delay={index * 100}
                  direction='up'
                >
                  <Card className='glass-card hover:glow-amber transition-all duration-300 group cursor-pointer h-full'>
                    <CardContent className='p-8'>
                      <div className='relative mb-6'>
                        <feature.icon className='h-12 w-12 text-primary transition-transform group-hover:scale-110' />
                        <div className='absolute inset-0 blur-xl bg-primary/20 -z-10 opacity-0 group-hover:opacity-100 transition-opacity' />
                      </div>
                      <h3 className='text-xl font-bold text-foreground mb-3 tracking-wide leading-[1.4]'>
                        {feature.title}
                      </h3>
                      <p className='text-muted-foreground leading-relaxed'>
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className='py-28 bg-card relative overflow-hidden'>
          <div className='absolute inset-0 smoke-overlay' />
          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <AnimatedSection>
              <div className='text-center mb-16'>
                <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight leading-[1.35]'>
                  مشتری‌ها درباره ما{' '}
                  <span className='text-primary'>چی میگن؟</span>
                </h2>
                <p className='text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed'>
                  تجربه واقعی دوستانی که همیشه به ما سر می‌زنن و بهمون لطف دارن.
                </p>
              </div>
            </AnimatedSection>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {/* ریویوها بعداً */}
            </div>

            <AnimatedSection delay={500}>
              <div className='text-center mt-12'>
                <Button
                  variant='outline'
                  asChild
                  className='rounded-full px-8 hover:text-background dark:hover:text-primary bg-transparent'
                >
                  <Link href='/reviews'>دیدن همه نظرات</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className='py-28 relative overflow-hidden'>
          <div className='absolute inset-0 smoke-overlay opacity-50' />
          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
              <AnimatedSection direction='left'>
                <div>
                  <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-[1.35]'>
                    چطور پیدامون کنید؟
                    <span className='block text-primary mt-2'>
                      فروشگاه ویپورا
                    </span>
                  </h2>

                  <div className='space-y-6'>
                    <div className='flex items-start gap-5'>
                      <div className='rounded-xl bg-primary/10 p-4 glow-amber'>
                        <MapPin className='h-6 w-6 text-primary' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-foreground text-lg mb-1'>
                          آدرس
                        </h3>
                        <p className='text-muted-foreground'>
                          تهران، خیابان شریعتی، بالاتر از میرداماد، پلاک ۲۴۳
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start gap-5'>
                      <div className='rounded-xl bg-primary/10 p-4'>
                        <Phone className='h-6 w-6 text-primary' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-foreground text-lg mb-1'>
                          تماس
                        </h3>
                        <a
                          href='tel:02122223344'
                          className='text-primary hover:underline text-lg dir-ltr inline-block'
                        >
                          ۰۲۱-۲۲۲۲۳۳۴۴
                        </a>
                      </div>
                    </div>

                    <div className='flex items-start gap-5'>
                      <div className='rounded-xl bg-primary/10 p-4'>
                        <Clock className='h-6 w-6 text-primary' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-foreground text-lg mb-1'>
                          ساعات کاری
                        </h3>
                        <p className='text-muted-foreground'>
                          شنبه تا پنجشنبه: ۹ صبح تا ۹ شب
                        </p>
                        <p className='text-muted-foreground'>
                          جمعه‌ها: ۱۰ صبح تا ۶ عصر
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    size='lg'
                    className='mt-10 rounded-full px-8 glow-amber'
                    asChild
                  >
                    <Link href='/contact'>مسیریابی رو نقشه</Link>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection direction='right'>
                <div className='relative'>
                  <div className='absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl -z-10' />
                  <div className='rounded-3xl overflow-hidden border border-border/50'>
                    <img
                      src='/premium-smoke-shop-interior-warm-lighting-tobacco-.jpg'
                      alt='نمای داخلی فروشگاه ویپورا'
                      className='w-full h-[450px] object-cover'
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <AnimatedSection>
          <section className='py-28 bg-linear-to-br from-secondary via-card to-secondary relative overflow-hidden'>
            <div className='absolute inset-0 smoke-overlay' />
            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
              <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-[1.35]'>
                آماده‌ای یه کیفیت واقعی رو
                <span className='block text-primary text-glow-amber mt-2'>
                  تجربه کنی؟
                </span>
              </h2>
              <p className='text-muted-foreground mb-10 max-w-2xl mx-auto text-lg leading-relaxed'>
                همین امروز پاشو بیا ویپورا. قیمت‌های عالی، برخورد دوستانه و
                تنوعی که هیچ‌جای تهران پیدا نمی‌کنی.
              </p>
              <Button
                size='lg'
                asChild
                className='rounded-full px-10 py-6 text-lg glow-amber hover:glow-blue transition-all'
              >
                <Link href='/products' className='flex items-center gap-2'>
                  دیدن محصولات
                  <ChevronRight className='mr-2 h-5 w-5 rotate-180' />
                </Link>
              </Button>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
