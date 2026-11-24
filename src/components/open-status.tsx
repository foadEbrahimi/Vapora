'use client';

import { useEffect, useState } from 'react';

import { getTehranStatus, type ShopStatus } from '@/src/lib/hours';
import { cn } from '@/src/lib/utils';

type OpenStatusProps = {
  className?: string;
  detail?: boolean;
};

export function OpenStatus({ className, detail = true }: OpenStatusProps) {
  const [status, setStatus] = useState<ShopStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(getTehranStatus());
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  if (!status) {
    return (
      <span className={cn('inline-flex items-center gap-2', className)}>
        <span className='status-dot' aria-hidden='true' />
        <span>ساعات کاری</span>
      </span>
    );
  }

  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <span
        className='status-dot'
        data-open={status.open}
        aria-hidden='true'
      />
      <span>{status.label}</span>
      {detail ? (
        <span className='opacity-80'>{status.detail}</span>
      ) : null}
    </span>
  );
}
