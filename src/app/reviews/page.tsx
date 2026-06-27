import { AnimatedSection } from '@/src/components/animated-section';
import { Footer } from '@/src/components/footer';
import { Header } from '@/src/components/header';
import { Button } from '@/src/components/ui/button';
import { Award, Quote, Shield, Star, ThumbsUp, Users } from 'lucide-react';
import Link from 'next/link';

const reviews = [
  {
    name: 'محمد طاهری',
    rating: 5,
    text: 'خیلی از خدماتشون راضیم. صاحب فروشگاه خیلی باحاله و قشنگ راهنمایی می‌کنه.',
    date: '۲ ماه پیش',
  },
  {
    name: 'سارا کریمی',
    rating: 5,
    text: 'ویپ‌های خفنی دارن و بچه‌های فروشگاه هم خیلی حرفه‌ای و خوش‌برخوردن.',
    date: '۳ ماه پیش',
  },
  {
    name: 'علی رضایی',
    rating: 4,
    text: 'قیمت‌هاشون منصفانه‌ست، فقط کاش تنوع پادهای یک‌بارمصرفشون بیشتر بود.',
    date: '۴ ماه پیش',
  },
  {
    name: 'نگار محمدی',
    rating: 5,
    text: 'فروشگاه دنج و عالیه، جالب اینه که همیشه یادشونه چی می‌خوام!',
    date: '۱ ماه پیش',
  },
  {
    name: 'بهرام کریمی',
    rating: 5,
    text: 'جو مغازه خیلی صمیمی و عالیه، من که مشتری ثابتشون شدم.',
    date: '۵ ماه پیش',
  },
  {
    name: 'امین لطفی',
    rating: 4,
    text: 'تنوع محصولاتشون بالاست و بچه‌ها هم با حوصله جواب همه سوالات رو میدن.',
    date: '۲ هفته پیش',
  },
];

const trustBadges = [
  {
    icon: Star,
    title: 'نمره ۴.۶',
    description: 'بر اساس بیش از ۴۰ نظر واقعی',
  },
  {
    icon: Shield,
    title: 'فروشگاه معتبر',
    description: 'سال‌ها تجربه تو قلب تهران',
  },
  {
    icon: ThumbsUp,
    title: 'تایید شده توسط مشتریان',
    description: 'معروف به مشتری‌مداری و راهنمایی درست',
  },
  {
    icon: Award,
    title: 'کیفیت تضمینی',
    description: 'فقط برندهای خاص و اورجینال',
  },
];

export default function ReviewsPage() {
  return (
    <div dir='rtl' className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1'>
        <section className='py-20 md:py-28 relative overflow-hidden'>
          <div className='absolute inset-0 bg-linear-to-br from-background via-card to-background' />
          <div className='absolute inset-0 smoke-overlay' />

          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <AnimatedSection>
              <div className='inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8'>
                <div className='flex items-center gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < 5
                          ? 'fill-primary text-primary'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className='text-2xl font-bold text-primary'>۴.۶</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className='text-5xl md:text-6xl font-bold text-foreground mb-6 uppercase tracking-tight'>
                مشتریان درباره ما{' '}
                <span className='text-primary text-glow-amber'>چی میگن؟</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className='text-xl text-muted-foreground max-w-2xl leading-relaxed'>
                فقط به حرف ما گوش نکنید؛ خودتون ببینید چرا مشتری‌های ما همیشه
                برای خرید ویپ و جویس، اول از همه میان پیش بچه‌های ویپورا.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className='py-12 border-y border-border/30 bg-secondary/20'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              {trustBadges.map((badge, index) => (
                <AnimatedSection key={badge.title} delay={index * 100}>
                  <div className='text-center group'>
                    <div className='inline-flex items-center justify-center rounded-xl bg-primary/10 p-4 mb-4 group-hover:glow-amber transition-all'>
                      <badge.icon className='h-7 w-7 text-primary' />
                    </div>
                    <h3 className='font-bold text-foreground uppercase tracking-wide'>
                      {badge.title}
                    </h3>
                    <p className='text-sm text-muted-foreground mt-1'>
                      {badge.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className='py-20 relative overflow-hidden'>
          <div className='absolute inset-0 smoke-overlay opacity-30' />
          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {reviews.map((review, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className='group h-full'>
                    <div className='glass-card rounded-2xl p-8 h-full hover:glow-amber transition-all duration-300 relative flex flex-col'>
                      <Quote className='absolute top-6 left-6 h-10 w-10 text-primary/10' />

                      <div className='flex items-center gap-1 mb-4'>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < review.rating
                                ? 'fill-primary text-primary'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>

                      <p className='text-foreground mb-6 leading-relaxed text-lg flex-1'>
                        {review.text}
                      </p>

                      <div className='flex items-center justify-between mt-auto'>
                        <div className='flex items-center gap-3'>
                          <div className='w-12 h-12 rounded-full bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0'>
                            <span className='text-primary font-bold text-lg'>
                              {review.name[0]}
                            </span>
                          </div>
                          <span className='font-bold text-foreground'>
                            {review.name}
                          </span>
                        </div>
                        <span className='text-sm text-muted-foreground shrink-0 mr-2'>
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <AnimatedSection>
          <section className='py-16 bg-card relative overflow-hidden'>
            <div className='absolute inset-0 smoke-overlay' />
            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
              <Users className='h-12 w-12 text-primary mx-auto mb-6' />
              <h2 className='text-3xl font-bold text-foreground mb-4 uppercase'>
                تو هم به جمعمون اضافه شو
              </h2>
              <p className='text-muted-foreground mb-8 max-w-xl mx-auto'>
                خودت تفاوت خرید از ویپورا رو تجربه کن. خوشحال می‌شیم ببینیمت!
              </p>
              <Button
                asChild
                className='rounded-full px-8 glow-amber text-lg py-6'
              >
                <Link href='/contact'>مسیریابی و آدرس فروشگاه</Link>
              </Button>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
