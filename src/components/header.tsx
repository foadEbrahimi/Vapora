'use client';

import { useTheme } from '@/src/components/theme-provider';
import { Button } from '@/src/components/ui/button';
import { ChevronLeft, Clock, MapPin, Moon, Phone, Sun, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import logo from '../../public/logo.svg';

const navItems = [
  { href: '/', label: 'صفحه اصلی' },
  { href: '/products', label: 'محصولات' },
  { href: '/reviews', label: 'نظرات مشتریان' },
  { href: '/about', label: 'درباره ما' },
  { href: '/contact', label: 'تماس با ما' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      {/* نوار بالایی */}
      <div className='hidden lg:block bg-secondary/80 border-b border-border/30'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-10 items-center justify-between text-xs'>
            <div className='flex items-center gap-6'>
              {/* آدرس */}
              <div className='flex items-center gap-2 text-muted-foreground'>
                <MapPin className='h-3.5 w-3.5 text-primary' />
                <span>تهران، خیابان شریعتی، بالاتر از میرداماد، پلاک ۲۴۳</span>
              </div>

              {/* شماره تماس */}
              <a
                href='tel:02122223344'
                className='flex items-center gap-2 text-muted-foreground'
              >
                <Phone className='h-3.5 w-3.5 text-primary' />
                <span>021-22223344</span>
              </a>
            </div>

            {/* وضعیت باز بودن فروشگاه */}
            <div className='flex items-center gap-2 text-muted-foreground'>
              <Clock className='h-3.5 w-3.5 text-accent' />
              <span className='text-accent font-medium'>باز هستیم</span>
              <span className='text-muted-foreground/60'>|</span>
              <span>شنبه تا پنجشنبه: ۹ تا ۲۱، جمعه: ۱۰ تا ۱۸</span>
            </div>
          </div>
        </div>
      </div>

      {/* هدر اصلی */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40'
            : 'bg-transparent'
        }`}
      >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-20 items-center justify-between'>
            <Link href='/' className='flex items-center gap-3 group relative'>
              <Image src={logo} className='w-10 h-10' alt='vapora logo' />

              <div className='flex flex-col gap-1'>
                <span className='text-xl font-bold font-vazir! tracking-wide text-foreground uppercase group-hover:text-primary transition-colors'>
                  ویپورا
                </span>
                <span className='text-[10px] text-muted-foreground tracking-[0.25em] uppercase'>
                  فروشگاه تخصصی ویپ و تنباکو
                </span>
              </div>
            </Link>

            {/* منوی دسکتاپ */}
            <nav className='hidden lg:flex items-center'>
              <div className='flex items-center bg-secondary/50 rounded-full p-1.5 backdrop-blur-sm border border-border/30'>
                {navItems.map(item => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative px-5 py-2.5 text-sm font-medium uppercase tracking-wide transition-all duration-300 rounded-full ${
                        isActive
                          ? 'text-primary-foreground bg-primary shadow-lg'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className='absolute inset-0 rounded-full bg-primary/20 blur-md -z-10' />
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* دکمه روشن/تاریک + CTA */}
            <div className='hidden lg:flex items-center gap-3'>
              <button
                onClick={toggleTheme}
                className='relative w-11 h-11 flex items-center justify-center rounded-full bg-secondary/50 border border-border/30 hover:bg-secondary transition-all duration-300 group'
                aria-label='تغییر تم'
              >
                {mounted ? (
                  <>
                    <Sun
                      className={`h-5 w-5 absolute transition-all duration-300 ${
                        theme === 'dark'
                          ? 'opacity-100 rotate-0 scale-100'
                          : 'opacity-0 rotate-90 scale-0'
                      } text-primary`}
                    />
                    <Moon
                      className={`h-5 w-5 absolute transition-all duration-300 ${
                        theme === 'light'
                          ? 'opacity-100 rotate-0 scale-100'
                          : 'opacity-0 -rotate-90 scale-0'
                      } text-primary`}
                    />
                  </>
                ) : (
                  <Sun className='h-5 w-5 text-primary' />
                )}
              </button>

              <Button
                asChild
                className='rounded-full px-6 py-5 bg-linear-to-r from-primary to-primary/80 hover:from-accent hover:to-accent/80 text-primary-foreground font-semibold uppercase tracking-wide transition-all duration-300 hover:glow-blue group'
              >
                <Link
                  href='/products'
                  className='flex text-sm items-center gap-2'
                >
                  <span>بازدید از فروشگاه</span>
                  <ChevronLeft className='h-4 w-4 group-hover:-translate-x-1 transition-transform' />
                </Link>
              </Button>
            </div>

            {/* منوی موبایل */}
            <div className='flex lg:hidden items-center gap-2'>
              <button
                onClick={toggleTheme}
                className='relative w-11 h-11 flex items-center justify-center rounded-full bg-secondary/50 border border-border/30 hover:bg-secondary transition-all duration-300'
                aria-label='تغییر تم'
              >
                {mounted ? (
                  <>
                    <Sun
                      className={`h-5 w-5 absolute transition-all duration-300 ${
                        theme === 'dark'
                          ? 'opacity-100 rotate-0 scale-100'
                          : 'opacity-0 rotate-90 scale-0'
                      } text-primary`}
                    />
                    <Moon
                      className={`h-5 w-5 absolute transition-all duration-300 ${
                        theme === 'light'
                          ? 'opacity-100 rotate-0 scale-100'
                          : 'opacity-0 -rotate-90 scale-0'
                      } text-primary`}
                    />
                  </>
                ) : (
                  <Sun className='h-5 w-5 text-primary' />
                )}
              </button>

              <button
                className='relative w-12 h-12 flex items-center justify-center rounded-full bg-secondary/50 border border-border/30 hover:bg-secondary transition-colors'
                onClick={() => setIsOpen(!isOpen)}
                aria-label='باز کردن منو'
              >
                <div className='relative w-6 h-5 flex flex-col justify-between'>
                  <span
                    className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 origin-center ${
                      isOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                      isOpen ? 'opacity-0 scale-0' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 origin-center ${
                      isOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* منوی موبایل باز شونده */}
      <div
        className={`lg:hidden fixed inset-0 z-200 transition-all duration-500 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className='absolute inset-0 bg-background/95 backdrop-blur-xl'
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`relative h-full flex flex-col pt-24 px-6 pb-8 transition-all duration-500 ${
            isOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
        >
          {/* دکمه بستن (X) */}
          <button
            onClick={() => setIsOpen(false)}
            className='absolute top-6 left-6 p-2 rounded-full bg-secondary/50 border border-border/30 hover:bg-secondary transition-colors text-foreground z-10'
            aria-label='بستن منو'
          >
            <X className='h-6 w-6' />
          </button>

          <nav className='flex-1 flex flex-col justify-center gap-2'>
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-secondary text-foreground'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                    transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive
                        ? 'bg-primary-foreground'
                        : 'bg-primary group-hover:bg-accent'
                    } transition-colors`}
                  />
                  <span className='text-2xl font-bold uppercase tracking-wide'>
                    {item.label}
                  </span>
                  <ChevronLeft
                    className={`ml-auto h-5 w-5 transition-transform ${
                      isActive
                        ? 'translate-x-0'
                        : 'group-hover:translate-x-1 -translate-x-2 opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* اطلاعات پایین منو */}
          <div className='space-y-4 pt-6 border-t border-border/30'>
            <div className='flex items-center gap-3 text-muted-foreground'>
              <MapPin className='h-5 w-5 text-primary' />
              <span className='text-sm'>
                ۱۰۱۶ خیابان برادوی شمالی، پیتسبورگ، کانزاس
              </span>
            </div>
            <div className='flex items-center gap-3 text-muted-foreground'>
              <Phone className='h-5 w-5 text-primary' />
              <span className='text-sm'>(620) 308-6718</span>
            </div>
            <div className='flex items-center gap-3'>
              <Clock className='h-5 w-5 text-accent' />
              <span className='text-sm text-accent font-medium'>باز هستیم</span>
            </div>

            <Button
              asChild
              className='w-full mt-4 rounded-full py-6 bg-linear-to-r from-primary to-accent text-primary-foreground font-semibold uppercase tracking-wide'
            >
              <Link href='/contact' onClick={() => setIsOpen(false)}>
                مسیریابی به فروشگاه
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
