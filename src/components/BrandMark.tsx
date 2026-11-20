interface BrandMarkProps {
  variant?: 'color' | 'white';
  className?: string;
}

export function BrandMark({ variant = 'color', className = 'h-10 w-14' }: BrandMarkProps) {
  const primary = variant === 'white' ? '#FFFFFF' : '#0E2D4C';
  const secondary = variant === 'white' ? '#55C7D7' : '#1E727E';

  return (
    <svg
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-hidden="true"
    >
      {/* Primary N Frame (Deep Navy on light / Pure White on dark) */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H20L38.4 18.2V32L9.8 10V89H38.4L35.4 100H0V0ZM16.6 20L38.4 41.2V55L26.2 43.2V78.5H16.6V20ZM48.8 36L91.8 78V91.5L48.8 49.5V36ZM101.8 0H140V100H121.2L101.8 81V67L130.2 89V10.5H101.8V0Z"
        fill={primary}
      />
      {/* Interlocking Secondary N Ribbon (Precision Teal) */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.4 0H51.6L91.8 39.2V0H104.8L101.8 10.5V100H87.4L48.8 62.2V100H35.6L38.4 89V0ZM48.8 10.5V48.5L91.8 90.5V52.5L48.8 10.5ZM114 20.5H123.4V78.5H121.5L101.8 59V45.5L114 57.5V20.5Z"
        fill={secondary}
      />
    </svg>
  );
}
