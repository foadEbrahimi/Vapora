'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export function HomeMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add('(min-width: 1024px)', () => {
        const timeline = gsap.timeline({
          defaults: { ease: 'power3.out' },
        });

        timeline
          .fromTo(
            '[data-hero-img]',
            { scale: 1.045 },
            { scale: 1, duration: 1.5, ease: 'power2.out' },
            0
          )
          .fromTo(
            '[data-intro]',
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.07 },
            0.22
          )
          .fromTo(
            '[data-hero-tag]',
            { opacity: 0, x: -12 },
            { opacity: 1, x: 0, duration: 0.7 },
            0.72
          );
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(element => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });
    });

    return () => {
      context.revert();
      media.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
}
