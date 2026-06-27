import { AnimatedSection } from '@/src/components/animated-section';
import { Footer } from '@/src/components/footer';
import { Header } from '@/src/components/header';
import { Button } from '@/src/components/ui/button';
import { Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1'>
        <section className='py-20 md:py-28 relative overflow-hidden'>
          <div className='absolute inset-0 bg-linear-to-br from-background via-card to-background' />
          <div className='absolute inset-0 smoke-overlay' />

          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <AnimatedSection>
              <h1 className='text-5xl md:text-6xl font-bold text-foreground mb-6 uppercase tracking-tight'>
                منتظر{' '}
                <span className='text-primary text-glow-amber'>دیدار شما</span>{' '}
                هستیم
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <p className='text-xl text-muted-foreground max-w-2xl leading-relaxed mt-4'>
                فروشگاه ما در خیابان شریعتی تهران قرار داره. خوشحال می‌شیم یه سر
                به ما بزنید و از نزدیک تنوع و کیفیت محصولات رو بررسی کنید.
                قدمتون روی چشم!
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className='py-20 relative overflow-hidden'>
          <div className='absolute inset-0 smoke-overlay opacity-30' />
          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
              {/* Map */}
              <AnimatedSection direction='left'>
                <div className='relative h-full'>
                  <div className='absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl -z-10' />
                  <div className='rounded-3xl overflow-hidden border border-border/50 h-[400px] lg:h-[550px]'>
                    <iframe
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.8976765432!2d-101.05423!3d39.39234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s475%20N%20Franklin%20Ave%2C%20Colby%2C%20KS%2067701!5e0!3m2!1sen!2sus!4v1234567890'
                      width='100%'
                      height='100%'
                      style={{ border: 0 }}
                      allowFullScreen
                      loading='lazy'
                      referrerPolicy='no-referrer-when-downgrade'
                      title='مکان فروشگاه'
                      className='grayscale contrast-125'
                    />
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Info */}
              <div className='space-y-6'>
                {/* Address */}
                <AnimatedSection delay={100} direction='right'>
                  <div className='glass-card rounded-2xl p-8 hover:glow-amber transition-all duration-300'>
                    <div className='flex items-start gap-5'>
                      <div className='rounded-xl bg-primary/10 p-4'>
                        <MapPin className='h-7 w-7 text-primary' />
                      </div>
                      <div>
                        <h3 className='font-bold text-foreground text-xl mb-3 uppercase tracking-wide'>
                          آدرس ما
                        </h3>
                        <p className='text-muted-foreground text-lg leading-relaxed'>
                          تهران، خیابان شریعتی، بالاتر از میرداماد، پلاک ۲۴۳
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Phone */}
                <AnimatedSection delay={200} direction='right'>
                  <div className='glass-card rounded-2xl p-8 hover:glow-amber transition-all duration-300'>
                    <div className='flex items-start gap-5'>
                      <div className='rounded-xl bg-primary/10 p-4'>
                        <Phone className='h-7 w-7 text-primary' />
                      </div>
                      <div>
                        <h3 className='font-bold text-foreground text-xl mb-3 uppercase tracking-wide'>
                          تماس تلفنی
                        </h3>
                        <a
                          href='tel:02122223344'
                          className='text-2xl text-primary hover:underline font-bold dir-ltr inline-block'
                        >
                          ۰۲۱-۲۲۲۲۳۳۴۴
                        </a>
                        <p className='text-muted-foreground mt-2 leading-relaxed'>
                          اگه دنبال محصول خاصی هستید یا درباره موجودی سوالی
                          دارید، با خیال راحت زنگ بزنید. بچه‌های ما آماده
                          راهنمایی هستن.
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Hours */}
                <AnimatedSection delay={300} direction='right'>
                  <div className='glass-card rounded-2xl p-8 hover:glow-amber transition-all duration-300'>
                    <div className='flex items-start gap-5'>
                      <div className='rounded-xl bg-primary/10 p-4'>
                        <Clock className='h-7 w-7 text-primary' />
                      </div>
                      <div className='flex-1'>
                        <h3 className='font-bold text-foreground text-xl mb-4 uppercase tracking-wide'>
                          ساعات کاری
                        </h3>
                        <div className='space-y-3'>
                          <div className='flex justify-between items-center py-2 border-b border-border/30'>
                            <span className='text-muted-foreground'>
                              شنبه تا پنجشنبه
                            </span>
                            <span className='text-foreground font-semibold'>
                              ۹ صبح تا 21 شب
                            </span>
                          </div>
                          <div className='flex justify-between items-center py-2'>
                            <span className='text-muted-foreground'>
                              جمعه‌ها
                            </span>
                            <span className='text-foreground font-semibold'>
                              ۱۰ صبح تا 18 عصر
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={400}>
                  <div className='text-sm text-muted-foreground px-4 leading-relaxed'>
                    <strong className='text-foreground'>توجه:</strong> دوستان
                    عزیز، در حال حاضر فروش ما فقط به صورت حضوریه و امکان ثبت
                    سفارش آنلاین یا ارسال با پیک رو نداریم. تو فروشگاه
                    می‌بینیمتون!
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <AnimatedSection>
          <section className='py-16 bg-card relative overflow-hidden'>
            <div className='absolute inset-0 smoke-overlay' />
            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
              <MessageCircle className='h-12 w-12 text-primary mx-auto mb-6' />
              <h2 className='text-3xl font-bold text-foreground mb-4 uppercase tracking-tight'>
                هنوز سوالی تو ذهنتون مونده؟
              </h2>
              <p className='text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed'>
                هر سوالی درباره دستگاه‌ها، طعم‌ها یا لوازم جانبی دارید، کافیه با
                ما تماس بگیرید یا حضوری تشریف بیارید. با کمال میل راهنماییتون
                می‌کنیم.
              </p>
              <Button
                size='lg'
                asChild
                className='rounded-full px-8 glow-amber text-lg'
              >
                <a href='tel:02122223344'>همین حالا تماس بگیرید</a>
              </Button>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
