import { AnimatedSection } from '@/src/components/animated-section';
import { Footer } from '@/src/components/footer';
import { Header } from '@/src/components/header';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import {
  Calendar,
  ChevronRight,
  Heart,
  Package,
  Star,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Heart,
    title: 'برخورد صمیمی',
    description:
      'در ویپورا سعی می‌کنیم هر مشتری را مثل یک دوست ببینیم. با حوصله کمک می‌کنیم دقیقا چیزی را که دنبالش هستید پیدا کنید.',
  },
  {
    icon: Package,
    title: 'انتخاب‌های خاص',
    description:
      'برندها و محصولاتی داریم که شاید در فروشگاه‌های بزرگ به راحتی پیدا نشوند؛ انتخاب‌هایی برای سلیقه‌های خاص.',
  },
  {
    icon: Users,
    title: 'بخشی از محله',
    description:
      'ما فقط یک فروشگاه نیستیم؛ بخشی از همین خیابان و همین جامعه‌ایم و به اعتماد مشتری‌هایمان افتخار می‌کنیم.',
  },
  {
    icon: Star,
    title: 'کیفیت واقعی',
    description:
      'از تنباکوهای باکیفیت گرفته تا جدیدترین ویپ‌ها، محصولاتی را ارائه می‌دهیم که خودمان هم به کیفیتشان اعتماد داریم.',
  },
];

const timeline = [
  {
    year: 'شروع',
    title: 'آغاز در تهران',
    description:
      'ویپورا با یک هدف ساده شروع شد؛ ارائه محصولات باکیفیت و ایجاد فضایی دوستانه برای مشتریان.',
  },
  {
    year: 'رشد',
    title: 'تنوع بیشتر',
    description:
      'با اضافه شدن ویپ‌ها، مایعات و لوازم جانبی، سعی کردیم انتخاب‌های بیشتری برای مشتریان فراهم کنیم.',
  },
  {
    year: 'امروز',
    title: 'اعتماد مشتریان',
    description:
      'امروز با مشتریان وفادار و امتیاز ۴.۶ ستاره، خوشحالیم که بخشی از تجربه روزمره بسیاری از مشتریان هستیم.',
  },
];

export default function AboutPage() {
  return (
    <div dir='rtl' className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1'>
        <section className='py-20 md:py-28 relative overflow-hidden'>
          <div className='absolute inset-0 bg-linear-to-br from-background via-card to-background' />
          <div className='absolute inset-0 smoke-overlay' />

          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <AnimatedSection>
              <h1 className='text-5xl md:text-6xl font-bold text-foreground mb-6 uppercase tracking-tight'>
                درباره{' '}
                <span className='text-primary text-glow-amber'>ویپورا</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p className='text-xl text-muted-foreground max-w-2xl leading-relaxed'>
                ویپورا یک فروشگاه صمیمی در خیابان شریعتی تهران است. جایی که
                مشتری‌ها با خیال راحت می‌آیند، انتخاب می‌کنند و با حس خوب
                برمی‌گردند.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className='py-20 relative overflow-hidden'>
          <div className='absolute inset-0 smoke-overlay opacity-50' />
          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
              <AnimatedSection
                direction='right'
                className='relative order-2 lg:order-1'
              >
                <div className='absolute inset-0 bg-linear-to-br from-primary/20 to-accent/10 rounded-3xl blur-3xl -z-10' />
                <div className='rounded-3xl overflow-hidden border border-border/50'>
                  <img
                    src='/friendly-smoke-shop-owner-helping-customer-warm-in.jpg'
                    alt='داخل فروشگاه ویپورا'
                    className='w-full h-[450px] object-cover'
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection direction='left' className='order-1 lg:order-2'>
                <h2 className='text-4xl font-bold text-foreground mb-6 uppercase tracking-tight'>
                  یک فروشگاه محلی با
                  <span className='block text-primary'>حس دوستانه</span>
                </h2>

                <div className='space-y-5 text-muted-foreground leading-relaxed text-lg'>
                  <p>
                    ویپورا سال‌هاست در تهران فعالیت می‌کند و به خاطر قیمت مناسب،
                    برخورد خوب و محصولات متنوع شناخته شده است.
                  </p>

                  <p>
                    چیزی که برای ما مهم است، تجربه مشتری است. ما سعی می‌کنیم
                    مشتری‌هایمان را بشناسیم و کمک کنیم بهترین انتخاب را داشته
                    باشند.
                  </p>

                  <p>
                    چه دنبال یک برند خاص سیگار باشید، چه بخواهید ویپ جدیدی
                    امتحان کنید یا فقط نیاز به راهنمایی داشته باشید، همیشه با
                    روی خوش از شما استقبال می‌کنیم.
                  </p>
                </div>

                <Button
                  size='lg'
                  className='mt-10 rounded-full px-8 glow-amber'
                  asChild
                >
                  <Link href='/contact'>
                    به ما سر بزنید
                    <ChevronRight className='mr-2 rotate-180 h-5 w-5' />
                  </Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className='py-20 bg-card relative overflow-hidden'>
          <div className='absolute inset-0 smoke-overlay' />

          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <AnimatedSection>
              <div className='text-center mb-16'>
                <Calendar className='h-12 w-12 text-primary mx-auto mb-4' />

                <h2 className='text-4xl font-bold text-foreground mb-4 uppercase tracking-tight'>
                  مسیر ما تا <span className='text-primary'>امروز</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {timeline.map((item, index) => (
                <AnimatedSection key={index} delay={index * 150}>
                  <div className='relative h-full'>
                    <div className='glass-card rounded-2xl p-8 h-full'>
                      <span className='text-sm font-medium text-primary uppercase tracking-wider'>
                        {item.year}
                      </span>

                      <h3 className='text-2xl font-bold text-foreground mt-2 mb-4 uppercase'>
                        {item.title}
                      </h3>

                      <p className='text-muted-foreground leading-relaxed'>
                        {item.description}
                      </p>
                    </div>

                    {index < timeline.length - 1 && (
                      <div className='hidden md:block absolute top-1/2 -left-4 w-8 h-0.5 bg-border' />
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className='py-20 relative overflow-hidden'>
          <div className='absolute inset-0 smoke-overlay opacity-30' />

          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <AnimatedSection>
              <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-foreground mb-4 uppercase tracking-tight'>
                  ارزش‌هایی که برای ما
                  <span className='text-primary'> مهم هستند</span>
                </h2>

                <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
                  این ارزش‌ها مسیر کار ما را مشخص می‌کنند و دلیل اعتماد مشتری‌ها
                  به ویپورا هستند.
                </p>
              </div>
            </AnimatedSection>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {values.map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 100}>
                  <Card className='glass-card hover:glow-amber transition-all duration-300 group h-full'>
                    <CardContent className='p-8 flex gap-6'>
                      <div className='rounded-xl bg-primary/10 p-4 h-fit group-hover:glow-amber transition-all'>
                        <value.icon className='h-7 w-7 text-primary' />
                      </div>

                      <div>
                        <h3 className='text-xl font-bold text-foreground mb-3 uppercase tracking-wide'>
                          {value.title}
                        </h3>

                        <p className='text-muted-foreground leading-relaxed'>
                          {value.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <AnimatedSection>
          <section className='py-20 bg-linear-to-br from-secondary via-card to-secondary relative overflow-hidden'>
            <div className='absolute inset-0 smoke-overlay' />

            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
              <h2 className='text-4xl font-bold text-foreground mb-4 uppercase tracking-tight'>
                تفاوت را <span className='text-primary'>خودتان ببینید</span>
              </h2>

              <p className='text-muted-foreground mb-10 max-w-2xl mx-auto text-lg'>
                اگر دوست دارید تجربه یک فروشگاه صمیمی و متفاوت را داشته باشید،
                خوشحال می‌شویم به ویپورا سر بزنید.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  size='lg'
                  asChild
                  className='rounded-full px-8 glow-amber'
                >
                  <Link href='/contact'>دریافت مسیر</Link>
                </Button>

                <Button
                  size='lg'
                  variant='outline'
                  asChild
                  className='rounded-full px-8 border-border/50 bg-transparent'
                >
                  <Link href='/products'>مشاهده محصولات</Link>
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
