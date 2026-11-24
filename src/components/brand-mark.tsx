type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4.5 7.5 14 26.2 23.5 7.5"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M23.8 14.6c3.1-1.7 4.6-3.9 4.3-6.5"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="28.2" cy="6.6" r="1.5" fill="var(--accent)" />
    </svg>
  );
}
