'use client';

import { ArrowLeft, MapPin, Menu, Moon, Phone, Sun, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { BrandMark } from '@/src/components/brand-mark';
import { OpenStatus } from '@/src/components/open-status';
import { useTheme } from '@/src/components/theme-provider';
import { site } from '@/src/data/site';

const navItems = [
  { href: '/', label: 'صفحه اصلی' },
  { href: '/products', label: 'محصولات' },
  { href: '/reviews', label: 'نظرات' },
  { href: '/about', label: 'درباره ما' },
  { href: '/contact', label: 'تماس با ما' },
];

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href='/'
      onClick={onClick}
      className='inline-flex items-center gap-2.5 text-foreground no-underline'
    >
      <BrandMark className='h-8 w-8' />
      <span className='flex flex-col'>
        <span className='font-display text-[1.2rem] font-extrabold leading-none'>
          ویپورا
        </span>
        <span className='mt-1 text-[0.52rem] font-medium tracking-[0.2em] text-muted-foreground leading-none'>
          VAPORA · TEHRAN
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const { toggleTheme } = useTheme();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    dialogRef.current?.close();
  };

  const openMenu = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    setMenuOpen(true);
    document.documentElement.classList.add('menu-open');
  };

  useEffect(() => {
    return () => {
      document.documentElement.classList.remove('menu-open');
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onClose = () => {
      setMenuOpen(false);
      document.documentElement.classList.remove('menu-open');
    };

    dialog.addEventListener('close', onClose);
    return () => dialog.removeEventListener('close', onClose);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const onChange = () => {
      if (media.matches) closeMenu();
    };

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const isCurrent = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header>
      <div className='utility-bar hidden sm:block'>
        <div className='wrap flex h-9 items-center justify-between gap-6'>
          <OpenStatus className='text-[0.72rem]' />
          <div className='flex items-center gap-5 text-[0.72rem]'>
            <a
              href={site.phoneHref}
              className='inline-flex items-center gap-1.5 transition-colors hover:text-foreground'
            >
              <Phone className='h-3 w-3' aria-hidden='true' />
              <span className='num' dir='ltr'>
                {site.phoneDisplay}
              </span>
            </a>
            <span className='hidden items-center gap-1.5 md:inline-flex'>
              <MapPin className='h-3 w-3' aria-hidden='true' />
              {site.addressShort}
            </span>
            <span className='hidden text-muted-foreground/80 lg:inline'>
              فروش حضوری، ویژه ۲۱+
            </span>
          </div>
        </div>
      </div>

      <div className='site-head'>
        <div className='wrap flex h-17 items-center justify-between gap-4'>
          <Brand />

          <nav
            aria-label='ناوبری اصلی'
            className='hidden items-center gap-7 lg:flex'
          >
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className='nav-link'
                aria-current={isCurrent(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className='flex items-center gap-2'>
            <button
              type='button'
              className='icon-btn'
              onClick={toggleTheme}
              aria-label='تغییر حالت روشن و تاریک'
              title='تغییر حالت روشن و تاریک'
            >
              <Moon className='theme-icon-moon h-[1.05rem] w-[1.05rem]' />
              <Sun className='theme-icon-sun h-[1.05rem] w-[1.05rem]' />
            </button>

            <Link
              href='/contact'
              className='btn btn-primary header-cta h-10 min-h-10 px-4 text-[0.85rem]'
            >
              دیدار حضوری
              <ArrowLeft className='arrow h-4 w-4' aria-hidden='true' />
            </Link>

            <button
              type='button'
              className='icon-btn menu-trigger'
              onClick={openMenu}
              aria-label='باز کردن منو'
              aria-haspopup='dialog'
              aria-expanded={menuOpen}
            >
              <Menu className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className='menu-dialog'
        aria-labelledby='mobile-menu-title'
        onClick={event => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className='flex min-h-dvh flex-col'>
          <div className='flex items-center justify-between border-b border-(--line) px-5 py-4'>
            <Brand onClick={closeMenu} />
            <button
              type='button'
              className='icon-btn'
              onClick={closeMenu}
              aria-label='بستن منو'
            >
              <X className='h-5 w-5' />
            </button>
          </div>

          <nav aria-label='منوی موبایل' className='px-5 py-4'>
            <h2 id='mobile-menu-title' className='sr-only'>
              منوی اصلی
            </h2>
            <ul>
              {navItems.map(item => (
                <li key={item.href} className='border-b border-(--line)'>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isCurrent(item.href) ? 'page' : undefined}
                    className='flex items-center justify-between py-4 text-[1.25rem] font-semibold text-foreground no-underline'
                  >
                    <span className='font-display'>{item.label}</span>
                    <ArrowLeft
                      className='h-4 w-4 text-muted-foreground'
                      aria-hidden='true'
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='mt-auto space-y-4 border-t border-(--line) px-5 pb-6 pt-5'>
            <OpenStatus className='text-[0.8rem]' />
            <div className='space-y-1.5 text-[0.82rem] text-muted-foreground'>
              <a
                href={site.phoneHref}
                className='flex items-center gap-2 text-foreground no-underline'
              >
                <Phone className='h-3.5 w-3.5' aria-hidden='true' />
                <span className='num' dir='ltr'>
                  {site.phoneDisplay}
                </span>
              </a>
              <p className='flex items-start gap-2 leading-7'>
                <MapPin
                  className='mt-1.5 h-3.5 w-3.5 shrink-0'
                  aria-hidden='true'
                />
                {site.address}
              </p>
            </div>
            <Link
              href='/contact'
              onClick={closeMenu}
              className='btn btn-primary w-full'
            >
              دیدار حضوری
              <ArrowLeft className='arrow h-4 w-4' aria-hidden='true' />
            </Link>
            <p className='text-[0.7rem] leading-6 text-muted-foreground'>
              فروش حضوری و ویژه افراد بالای ۲۱ سال.
            </p>
          </div>
        </div>
      </dialog>
    </header>
  );
}
