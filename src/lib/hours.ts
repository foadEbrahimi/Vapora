const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹';

export function faNum(value: number | string) {
  return String(value).replace(/\d/g, digit => FA_DIGITS[Number(digit)]);
}

export function faTime(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${faNum(hours)}:${faNum(mins).padStart(2, FA_DIGITS[0])}`;
}

const DAY_NAMES = [
  'یکشنبه',
  'دوشنبه',
  'سه‌شنبه',
  'چهارشنبه',
  'پنجشنبه',
  'جمعه',
  'شنبه',
];

const WEEKDAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

export type ShopStatus = {
  open: boolean;
  label: string;
  detail: string;
};

export function getTehranStatus(now = new Date()): ShopStatus {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Tehran',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now);

  const weekday = parts.find(part => part.type === 'weekday')?.value ?? 'Mon';
  const hour = Number(parts.find(part => part.type === 'hour')?.value ?? 0);
  const minute = Number(parts.find(part => part.type === 'minute')?.value ?? 0);
  const day = WEEKDAY_INDEX[weekday] ?? 1;
  const minutes = (hour % 24) * 60 + minute;

  const openMinutes = day === 5 ? 10 * 60 : 9 * 60;
  const closeMinutes = day === 5 ? 18 * 60 : 21 * 60;

  if (minutes >= openMinutes && minutes < closeMinutes) {
    return {
      open: true,
      label: 'باز است',
      detail: `تا ${faTime(closeMinutes)}`,
    };
  }

  for (let add = 0; add < 8; add += 1) {
    const candidateDay = (day + add) % 7;
    const candidateOpen = candidateDay === 5 ? 10 * 60 : 9 * 60;
    if (add === 0 && minutes >= candidateOpen) continue;
    if (add === 0 && minutes < candidateOpen) {
      return {
        open: false,
        label: 'بسته است',
        detail: `امروز ${faTime(candidateOpen)} باز می‌شود`,
      };
    }
    const dayLabel =
      add === 1 ? 'فردا' : `${DAY_NAMES[candidateDay]} ${faTime(candidateOpen)}`;
    return {
      open: false,
      label: 'بسته است',
      detail: `${dayLabel} باز می‌شود`,
    };
  }

  return { open: false, label: 'بسته است', detail: 'ساعات کاری را ببینید' };
}

export const HOURS = [
  { day: 'شنبه تا پنجشنبه', time: '۹:۰۰ تا ۲۱:۰۰' },
  { day: 'جمعه', time: '۱۰:۰۰ تا ۱۸:۰۰' },
];
