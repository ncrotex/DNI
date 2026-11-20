import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ASSETS, FLASH_SLIDES, HERO_METRICS, Language } from '../data/companyData';
import { BrandMark } from './BrandMark';
import { SafeImage } from './SafeImage';

interface FlashHeroProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
}

export function FlashHero({ lang, onChangeLang }: FlashHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flashPulse, setFlashPulse] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const timer = window.setInterval(() => {
      setFlashPulse(true);
      setActiveIndex((prev) => (prev + 1) % FLASH_SLIDES.length);
      window.setTimeout(() => setFlashPulse(false), 180);
    }, 3800);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  const current = FLASH_SLIDES[activeIndex];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#142C47] text-white"
    >
      {/* Full-bleed background photography with balanced scrim */}
      <div className="absolute inset-0">
        <SafeImage
          src={ASSETS.heroAtelier}
          alt="Double N International garment and textile design studio"
          fallbackLabel="Double N International Atelier"
          className="h-full w-full object-cover object-center opacity-80 brightness-120 contrast-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E233C]/60 via-[#0E233C]/26 to-[#0E233C]/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E233C]/72 via-[#0E233C]/30 to-transparent" />
      </div>

      {/* Subtle optical flash shutter overlay during slogan transitions */}
      {!shouldReduceMotion && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 bg-white transition-opacity duration-150 ${
            flashPulse ? 'opacity-[0.09]' : 'opacity-0'
          }`}
        />
      )}

      {/* Top Hero Bar: Crisp, enlarged Corporate CI Lockup + Language Switcher */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] items-start justify-between gap-6 px-6 pt-8 sm:items-center lg:px-10 lg:pt-10">
        <div className="flex items-center gap-3.5 sm:gap-4">
          <BrandMark
            variant="white"
            className="h-11 w-[62px] shrink-0 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:h-14 sm:w-[78px]"
          />
          <div className="leading-none drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
            <p className="font-display text-base tracking-tight text-white sm:text-[21px]">
              <span className="font-extrabold">더블엔</span>
              <span className="font-light text-white/90">인터내셔널</span>
            </p>
            <p className="mt-1 font-display text-sm tracking-tight text-white sm:text-[17px]">
              <span className="font-extrabold">Double N</span>{' '}
              <span className="font-light text-white/90">International</span>
            </p>
            <div className="my-1.5 h-px w-full bg-white/30" aria-hidden="true" />
            <p className="font-display text-[10px] font-medium tracking-[0.02em] text-[#8BD3DE] sm:text-xs">
              Crafting Trust, Wearing Innovation.
            </p>
          </div>
        </div>

        {/* Language Toggle */}
        <div
          className="inline-flex shrink-0 items-center rounded-md border border-white/20 bg-[#0B1A2C]/60 p-0.5 backdrop-blur-sm"
          role="group"
          aria-label="Language Selector"
        >
          <button
            type="button"
            onClick={() => onChangeLang('ko')}
            className={`cursor-pointer whitespace-nowrap rounded px-3 py-1 text-xs font-semibold transition-colors ${
              lang === 'ko'
                ? 'bg-white text-[#0E233C]'
                : 'text-white/80 hover:text-white'
            }`}
          >
            KO
          </button>
          <button
            type="button"
            onClick={() => onChangeLang('en')}
            className={`cursor-pointer whitespace-nowrap rounded px-3 py-1 text-xs font-semibold transition-colors ${
              lang === 'en'
                ? 'bg-white text-[#0E233C]'
                : 'text-white/80 hover:text-white'
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Main Kinetic Flash Slogan Centerpiece */}
      <div className="relative z-10 mx-auto my-auto w-full max-w-[1280px] px-6 py-12 lg:px-10">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -14, filter: 'blur(3px)' }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-4 text-sm font-medium tracking-wide text-[#8BD3DE] sm:text-base">
                {current.kicker[lang]}
              </p>

              <h1
                className="font-display text-[clamp(2.4rem,5.4vw,4.75rem)] font-bold leading-[1.06] tracking-tight text-white"
                style={{ textWrap: 'balance' }}
              >
                <span className="block">{current.headlineTop}</span>
                <span className="block text-[#8BD3DE]">{current.headlineBottom}</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                {current.subline[lang]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Full-Width 4-Column Quantitative Proof Strip anchored below Hero */}
      <div className="relative z-10 border-t border-white/15 bg-[#0E233C]/75 backdrop-blur-sm">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">
          {HERO_METRICS.map((metric) => (
            <div key={metric.value} className="px-6 py-5 lg:px-10">
              <div className="flex items-baseline gap-1.5">
                <span className="font-mono text-2xl font-semibold tracking-tight text-white tabular-nums sm:text-3xl">
                  {metric.value}
                </span>
                <span className="text-xs font-medium text-[#8BD3DE]">{metric.unit[lang]}</span>
              </div>
              <p className="mt-1 text-xs text-white/75 sm:text-sm">{metric.label[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
