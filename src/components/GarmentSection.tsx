import { useState } from 'react';
import { Factory, Layers, MapPin, Users } from 'lucide-react';
import {
  ASSETS,
  GarmentTab,
  Language,
  VIETNAM_FACTORIES,
} from '../data/companyData';
import { GarmentValueChainDiagram } from './GarmentValueChainDiagram';

interface GarmentSectionProps {
  lang: Language;
  activeTab: GarmentTab;
  onTabChange: (tab: GarmentTab) => void;
}

export function GarmentSection({ lang, activeTab, onTabChange }: GarmentSectionProps) {
  const [selectedFactoryCode, setSelectedFactoryCode] = useState<string>(VIETNAM_FACTORIES[1].code);

  const tabs: { id: GarmentTab; label: { ko: string; en: string } }[] = [
    { id: 'oem', label: { ko: '01. 수행역량', en: '01. Execution Capabilities' } },
    { id: 'facilities', label: { ko: '02. 생산캐파', en: '02. Production Capacity' } },
  ];

  const activeFactory =
    VIETNAM_FACTORIES.find((f) => f.code === selectedFactoryCode) ?? VIETNAM_FACTORIES[0];

  return (
    <section id="garment" className="border-b border-[#0E233C]/10 bg-[#F6F6F3] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section Header + Right Clickable Menu */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#0E233C]/10 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs font-semibold tracking-wider text-[#1C707D]">
              PART 02 · GARMENT BUSINESS
            </p>
            <h2
              className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0E233C] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              {lang === 'ko'
                ? 'OEM 중심의 글로벌 의류 제조'
                : 'OEM-Led Global Apparel Manufacturing'}
            </h2>
          </div>

          <div
            className="flex flex-wrap items-center gap-1.5 rounded-lg bg-white p-1.5 shadow-xs"
            role="tablist"
            aria-label="Garment Business Menus"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onTabChange(tab.id)}
                  className={`cursor-pointer whitespace-nowrap rounded-md px-3.5 py-2 text-xs font-semibold transition-all duration-150 sm:text-sm ${
                    isActive
                      ? 'bg-[#0E233C] text-white shadow-sm'
                      : 'text-[#0E233C]/70 hover:text-[#0E233C]'
                  }`}
                >
                  {tab.label[lang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 01: INTEGRATED GARMENT VALUE CHAIN & 3 PRODUCT CATEGORIES */}
        {activeTab === 'oem' && (
          <div className="mt-10">
            <GarmentValueChainDiagram lang={lang} />
          </div>
        )}

        {/* TAB 02: VIETNAM 4 PRODUCTION FACILITIES WITH LARGE FACTORY BACKDROP */}
        {activeTab === 'facilities' && (
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-[#0E233C]/15 bg-[#1B3A5C] p-6 shadow-sm sm:p-8 lg:p-10">
            {/* Large Garment Factory Floor Full-Bleed Background */}
            <img
              src={ASSETS.heroGarmentFactory}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] object-cover object-center opacity-95 brightness-105 contrast-[1.03]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0E233C]/50 via-[#0E233C]/22 to-[#0E233C]/38"
            />

            {/* Top Open Factory Panorama Strip */}
            <div className="relative mb-6 flex flex-col justify-between gap-2 border-b border-white/25 pb-5 text-white drop-shadow-[0_1px_3px_rgba(14,35,60,0.55)] sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-xs font-semibold tracking-wider text-[#8BE2EE]">
                  GLOBAL PRODUCTION NETWORK · 4 PARTNER FACTORIES
                </p>
                <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {lang === 'ko'
                    ? '베트남 4개 거점 대규모 의류 생산 인프라'
                    : 'Vietnam 4-Facility Large-Scale Garment Production Network'}
                </h3>
              </div>
              <p className="font-mono text-xs font-semibold text-white/95 tabular-nums sm:text-sm">
                50+ Sewing Lines · 5.8M Pcs / Yr
              </p>
            </div>

            <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-8">
              {/* Left: Factory Selector List */}
              <div className="space-y-3 lg:col-span-5">
                {VIETNAM_FACTORIES.map((factory) => {
                  const isSelected = factory.code === selectedFactoryCode;
                  return (
                    <button
                      key={factory.code}
                      type="button"
                      onClick={() => setSelectedFactoryCode(factory.code)}
                      className={`w-full cursor-pointer rounded-xl border p-5 text-left backdrop-blur-sm transition-all duration-150 ${
                        isSelected
                          ? 'border-[#8BE2EE]/85 bg-[#0E233C]/68 text-white shadow-lg ring-1 ring-[#8BE2EE]/40'
                          : 'border-white/55 bg-white/62 text-[#0E233C] shadow-sm hover:border-[#8BE2EE] hover:bg-white/78'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`font-mono text-xs font-semibold tabular-nums ${
                            isSelected ? 'text-[#8BD3DE]' : 'text-[#145863]'
                          }`}
                        >
                          {factory.code}
                        </span>
                        <span
                          className={`font-mono text-xs font-medium tabular-nums ${
                            isSelected ? 'text-white/85' : 'text-[#0E233C]/80'
                          }`}
                        >
                          {factory.lines} Lines · {factory.employees} Staff
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-bold">{factory.name}</h3>
                      <p
                        className={`mt-1 flex items-center gap-1.5 text-xs font-medium ${
                          isSelected ? 'text-white/85' : 'text-[#0E233C]/80'
                        }`}
                      >
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span>{factory.location}</span>
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Right: Active Factory Detailed Specification */}
              <div className="flex flex-col justify-between rounded-xl border border-white/55 bg-white/70 p-8 shadow-lg backdrop-blur-sm lg:col-span-7 lg:p-10">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#0E233C]/12 pb-5">
                    <div>
                      <span className="font-mono text-xs font-semibold text-[#145863]">
                        {activeFactory.code} · VIETNAM PARTNER FACILITY
                      </span>
                      <h3 className="mt-1 font-display text-2xl font-bold text-[#0E233C]">
                        {activeFactory.name}
                      </h3>
                    </div>
                    <Factory className="h-6 w-6 text-[#145863]" />
                  </div>

                  <p className="mt-5 text-base font-medium leading-relaxed text-[#0E233C]/90">
                    {activeFactory.specialty[lang]}
                  </p>

                  {/* Tabular Metrics Grid */}
                  <div className="mt-8 grid grid-cols-2 gap-4 rounded-lg border border-[#0E233C]/10 bg-white/55 p-6 sm:grid-cols-4">
                    <div>
                      <p className="text-xs font-medium text-[#0E233C]/75">
                        {lang === 'ko' ? '부지 규모' : 'Facility Space'}
                      </p>
                      <p className="mt-1 font-mono text-lg font-bold text-[#0E233C] tabular-nums">
                        {activeFactory.space}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#0E233C]/75">
                        {lang === 'ko' ? '임직원 수' : 'Employees'}
                      </p>
                      <p className="mt-1 font-mono text-lg font-bold text-[#0E233C] tabular-nums">
                        {activeFactory.employees}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#0E233C]/75">
                        {lang === 'ko' ? '생산 라인' : 'Prod. Lines'}
                      </p>
                      <p className="mt-1 font-mono text-lg font-bold text-[#145863] tabular-nums">
                        {activeFactory.lines}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#0E233C]/75">
                        {lang === 'ko' ? '연간 생산량' : 'Capacity / Yr'}
                      </p>
                      <p className="mt-1 font-mono text-sm font-bold text-[#0E233C] tabular-nums">
                        {activeFactory.capacity}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3 text-sm font-medium text-[#0E233C]/90">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#145863]" />
                      <span>{activeFactory.address}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Users className="mt-0.5 h-4 w-4 shrink-0 text-[#145863]" />
                      <span>{activeFactory.extraSpace[lang]}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Layers className="mt-0.5 h-4 w-4 shrink-0 text-[#145863]" />
                      <span>{activeFactory.contact}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-[#0E233C]/12 pt-5">
                  <p className="font-mono text-xs font-semibold text-[#0E233C]/70">
                    {lang === 'ko' ? '주요 생산 거래처 (MAIN CUSTOMERS)' : 'MAIN CUSTOMERS'}
                  </p>
                  <p className="mt-2 font-display text-base font-bold text-[#0E233C]">
                    {activeFactory.clients.join('  ·  ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
