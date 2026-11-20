import { ArrowUpRight } from 'lucide-react';
import { ASSETS, Language, PortalPillar } from '../data/companyData';
import { SafeImage } from './SafeImage';

interface SplitPortalProps {
  lang: Language;
  activePillar: PortalPillar;
  onSelectPillar: (pillar: PortalPillar) => void;
}

interface PortalItem {
  id: PortalPillar;
  index: string;
  enKicker: string;
  title: { ko: string; en: string };
  image: string;
  alt: string;
  fallback: string;
}

const PORTAL_ITEMS: PortalItem[] = [
  {
    id: 'company',
    index: '01',
    enKicker: 'COMPANY',
    title: { ko: '기업소개', en: 'About Company' },
    image: ASSETS.portalCompany,
    alt: 'Double N International corporate headquarters and leadership',
    fallback: '01. Company',
  },
  {
    id: 'garment',
    index: '02',
    enKicker: 'GARMENT OEM',
    title: { ko: '사업영역(의류)', en: 'Garment OEM' },
    image: ASSETS.portalBusiness,
    alt: 'Double N International global apparel OEM manufacturing',
    fallback: '02. Garment OEM',
  },
  {
    id: 'textile',
    index: '03',
    enKicker: 'TECHNICAL TEXTILE',
    title: { ko: '사업영역(원단)', en: 'Technical Textile' },
    image: ASSETS.laminatingFabric,
    alt: 'Double N International precision roll-to-roll laminated technical fabric',
    fallback: '03. Technical Textile',
  },
  {
    id: 'lab',
    index: '04',
    enKicker: 'R&D LAB',
    title: { ko: '기술개발(연구소)', en: 'R&D Lab' },
    image: ASSETS.apparelDesignStudio,
    alt: 'Double N International apparel design and technical R&D studio',
    fallback: '04. R&D Lab',
  },
];

export function SplitPortal({ lang, activePillar, onSelectPillar }: SplitPortalProps) {
  return (
    <section id="portal" className="border-b border-[#0E233C]/10 bg-[#F6F6F3] py-14 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* 4-Column Clickable Image Portal */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
          {PORTAL_ITEMS.map((item) => {
            const isActive = activePillar === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectPillar(item.id)}
                className={`group relative flex min-h-[320px] cursor-pointer flex-col justify-end overflow-hidden rounded-xl bg-[#163252] text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C707D] sm:min-h-[360px] lg:min-h-[430px] ${
                  isActive ? 'ring-2 ring-[#1C707D] ring-offset-4 ring-offset-[#F6F6F3]' : ''
                }`}
              >
                <SafeImage
                  src={item.image}
                  alt={item.alt}
                  fallbackLabel={item.fallback}
                  className="absolute inset-0 h-full w-full object-cover brightness-110 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E233C]/78 via-[#0E233C]/18 to-transparent transition-opacity duration-300 group-hover:via-[#0E233C]/28" />

                <div className="relative z-10 p-6 xl:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] font-medium tracking-wider text-[#8BD3DE] tabular-nums">
                      {item.index} · {item.enKicker}
                    </span>
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#1C707D]">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="mt-3.5 whitespace-nowrap font-display text-2xl font-bold tracking-tight text-white xl:text-[26px]">
                    {item.title[lang]}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
