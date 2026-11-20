import { CONTACT_INFO, Language } from '../data/companyData';
import { BrandMark } from './BrandMark';

interface FooterProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  onNavigate: (id: string) => void;
}

export function Footer({ lang, onChangeLang, onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0B1A2C] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-14 lg:px-10">
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-10 md:flex-row md:items-start">
          {/* Brand Column */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3.5">
              <BrandMark variant="white" className="h-10 w-[56px] shrink-0" />
              <div className="leading-none">
                <p className="font-display text-base tracking-tight text-white">
                  <span className="font-extrabold">더블엔</span>
                  <span className="font-light text-white/90">인터내셔널</span>
                </p>
                <p className="mt-1 font-display text-sm tracking-tight text-white">
                  <span className="font-extrabold">Double N</span>{' '}
                  <span className="font-light text-white/90">International</span>
                </p>
                <div className="my-1.5 h-px w-full bg-white/25" aria-hidden="true" />
                <p className="font-display text-[11px] font-medium tracking-[0.02em] text-[#8BD3DE]">
                  Crafting Trust, Wearing Innovation.
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/65">
              {lang === 'ko' ? CONTACT_INFO.addressKo : CONTACT_INFO.addressEn}
            </p>
            <p className="mt-2 font-mono text-xs text-white/65 tabular-nums">
              T {CONTACT_INFO.tel} · F {CONTACT_INFO.fax}
            </p>
          </div>

          {/* Navigation Mirror & Language */}
          <div className="flex flex-wrap gap-12">
            <div>
              <p className="font-mono text-xs font-semibold text-[#8BD3DE]">NAVIGATION</p>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('hero')}
                    className="cursor-pointer hover:text-white"
                  >
                    {lang === 'ko' ? '홈 (슬로건)' : 'Overview'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('company')}
                    className="cursor-pointer hover:text-white"
                  >
                    {lang === 'ko' ? '기업 소개' : 'About Company'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('garment')}
                    className="cursor-pointer hover:text-white"
                  >
                    {lang === 'ko' ? '가먼트 사업' : 'Garment Business'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('textile')}
                    className="cursor-pointer hover:text-white"
                  >
                    {lang === 'ko' ? '텍스타일 사업' : 'Textile Business'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('rnd')}
                    className="cursor-pointer hover:text-white"
                  >
                    {lang === 'ko' ? '기술개발 (R&D)' : 'R&D Lab'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="cursor-pointer hover:text-white"
                  >
                    {lang === 'ko' ? '오시는 길 · 문의' : 'Location & Contact'}
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs font-semibold text-[#8BD3DE]">LANGUAGE</p>
              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onChangeLang('ko')}
                  className={`cursor-pointer rounded px-3 py-1.5 text-xs font-semibold transition-colors ${
                    lang === 'ko'
                      ? 'bg-[#1C707D] text-white'
                      : 'border border-white/15 text-white/70 hover:text-white'
                  }`}
                >
                  한국어
                </button>
                <button
                  type="button"
                  onClick={() => onChangeLang('en')}
                  className={`cursor-pointer rounded px-3 py-1.5 text-xs font-semibold transition-colors ${
                    lang === 'en'
                      ? 'bg-[#1C707D] text-white'
                      : 'border border-white/15 text-white/70 hover:text-white'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Double N International Inc. All rights reserved.</p>
          <p>“A Company That Makes The Pleasure of Working and Happy Life”</p>
        </div>
      </div>
    </footer>
  );
}
