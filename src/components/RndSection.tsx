import { FlaskConical } from 'lucide-react';
import { ASSETS, Language, RndTab, TEXTILE_DATA } from '../data/companyData';

interface RndSectionProps {
  lang: Language;
  activeTab: RndTab;
  onTabChange: (tab: RndTab) => void;
}

export function RndSection({ lang, activeTab, onTabChange }: RndSectionProps) {
  const tabs: { id: RndTab; label: { ko: string; en: string } }[] = [
    { id: 'center', label: { ko: '01. 의류 디자인 개발', en: '01. Apparel Design' } },
    { id: 'laminating', label: { ko: '02. 신규 소재 개발', en: '02. New Materials' } },
  ];

  return (
    <section id="rnd" className="border-b border-[#0E233C]/10 bg-[#F6F6F3] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section Header + Right Clickable Menu */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#0E233C]/10 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs font-semibold tracking-wider text-[#1C707D]">
              PART 04 · R&amp;D
            </p>
            <h2
              className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0E233C] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              {lang === 'ko'
                ? '고객과 함께하는 연구활동'
                : 'Collaborative R&D With Our Partners'}
            </h2>
          </div>

          <div
            className="flex flex-wrap items-center gap-1.5 rounded-lg bg-white p-1.5 shadow-xs"
            role="tablist"
            aria-label="R&D Menus"
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

        {/* TAB 01: APPAREL DESIGN DEVELOPMENT (의류 디자인 개발) */}
        {activeTab === 'center' && (
          <div className="mt-12">
            <div className="relative flex min-h-[380px] items-center overflow-hidden rounded-2xl border border-[#0E233C]/15 bg-[#1B3A5C] px-7 py-14 text-white shadow-sm sm:min-h-[430px] sm:px-12 sm:py-20 lg:min-h-[460px] lg:px-16">
              {/* Apparel Design Studio Background Image + Lightened Directional Scrims */}
              <img
                src={ASSETS.apparelDesignStudio}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full scale-[1.03] object-cover object-center opacity-95 brightness-110 contrast-[1.03]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0E233C]/72 via-[#0E233C]/38 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E233C]/25 via-transparent to-transparent"
              />

              {/* Overlaid Design & Sample Content */}
              <div className="relative max-w-2xl drop-shadow-[0_1px_3px_rgba(14,35,60,0.55)]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8BE2EE]">
                  <FlaskConical className="h-4 w-4" aria-hidden="true" />
                  <span className="font-mono tracking-wider">Design &amp; Sample</span>
                </div>
                <h3
                  className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
                  style={{ textWrap: 'balance' }}
                >
                  {lang === 'ko'
                    ? '고객과 시장 트렌드 대응 디자인'
                    : 'Trend-Driven & Customer-Aligned Apparel Design'}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-white/95 sm:text-base">
                  {lang === 'ko'
                    ? '의류 디자인은 고객과의 접점에서 수렴되는 니즈와 시장을 리드할 수 있는 컨셉을 결합하여 내부적 의견 수렴을 통해 지속적으로 수행하고 있습니다. 아울러 공공기관 과제를 통해서도 업무를 수행하여 경험을 축적하고 대형프로젝트 수행이 가능할 수 있는 도약의 기반을 다지고 있습니다.'
                    : 'We continuously advance apparel design by combining insights gathered at customer touchpoints with market-leading concepts through collaborative internal reviews. Alongside commercial programs, we execute public-sector initiatives to accumulate expertise and build a foundation for large-scale projects.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 02: NEW MATERIAL DEVELOPMENT (신규 소재 개발) */}
        {activeTab === 'laminating' && (
          <div className="mt-12 space-y-10">
            <div className="relative flex min-h-[380px] items-center overflow-hidden rounded-2xl border border-[#0E233C]/15 bg-[#1B3A5C] px-7 py-14 text-white shadow-sm sm:min-h-[430px] sm:px-12 sm:py-20 lg:min-h-[460px] lg:px-16">
              {/* Fabric Reliability Testing Lab Background Image + Lightened Directional Scrims */}
              <img
                src={ASSETS.fabricTestingLab}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full scale-[1.03] object-cover object-center opacity-95 brightness-125 contrast-[1.04]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0E233C]/70 via-[#0E233C]/34 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E233C]/22 via-transparent to-transparent"
              />

              {/* Overlaid Textile Design & Laminating Content */}
              <div className="relative max-w-2xl drop-shadow-[0_1px_3px_rgba(14,35,60,0.55)]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8BE2EE]">
                  <FlaskConical className="h-4 w-4" aria-hidden="true" />
                  <span className="font-mono tracking-wider">Textile Design &amp; Laminating</span>
                </div>
                <h3
                  className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
                  style={{ textWrap: 'balance' }}
                >
                  {lang === 'ko'
                    ? '최적의 성능을 위한 원단 구조 설계'
                    : 'Structural Fabric Engineering for Optimal Performance'}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-white/95 sm:text-base">
                  {lang === 'ko'
                    ? '기능성 원단은 2레이어 이상의 소재들의 라미네이팅을 통해 최상의 성능을 구현해야 하는 기술의 조합이 필요합니다. 각 용도별 원단, 멤브레인, 기타 소재들을 적재적소에 배치하고 라미네이팅하여 최상의 조합이 될 수 있도록 끊임없는 개발을 통해 성과를 얻고 있습니다.'
                    : 'Functional textiles require precision engineering that bonds two or more material layers through lamination to achieve peak performance. By positioning face fabrics, membranes, and functional layers for each end use and optimizing lamination, we continuously deliver proven results through ongoing R&D.'}
                </p>
              </div>
            </div>

            {/* Test Lab. Catalog Showcase: Uploaded Equipment Sheet + 16-Unit Structured Spec Grid */}
            <div className="rounded-2xl border border-[#0E233C]/10 bg-white p-8 lg:p-10">
              <div className="flex flex-col justify-between gap-4 border-b border-[#0E233C]/10 pb-6 sm:flex-row sm:items-end">
                <div>
                  <p className="font-mono text-xs font-semibold tracking-wider text-[#1C707D]">
                    TEST LAB INSTRUMENTS · QUALITY ASSURANCE
                  </p>
                  <h4 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#0E233C]">
                    {lang === 'ko'
                      ? '자체 시험실 정밀 물성 평가 장비 (16종)'
                      : 'In-House Test Lab Equipment Inventory (16 Units)'}
                  </h4>
                </div>
                <p className="font-mono text-xs font-medium text-[#0E233C]/60">
                  {lang === 'ko'
                    ? '내수압 · 통기도 · 인장강도 · 세탁 내구성 전수 검증'
                    : 'Hydrostatic · Permeability · Tensile · Wash Durability'}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                {/* 16-Photo Equipment Sheet (cropped cleanly below the top 'Test Lab.' header) */}
                <div className="lg:col-span-5">
                  <div className="overflow-hidden rounded-xl border border-[#0E233C]/12 bg-[#F6F6F3] p-3 shadow-xs">
                    <div className="aspect-[489/578] w-full overflow-hidden rounded-lg bg-white">
                      <img
                        src={ASSETS.testLabCatalog}
                        alt={
                          lang === 'ko'
                            ? '더블엔인터내셔널 보유 물성 시험장비 16종 사진'
                            : 'Double N International 16 testing instruments photograph grid'
                        }
                        className="h-full w-full object-cover object-bottom"
                      />
                    </div>
                  </div>
                </div>

                {/* 16 Structured Equipment Cards */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
                  {TEXTILE_DATA.labEquipment.map((item) => (
                    <div
                      key={item.index}
                      className="flex items-start gap-3 rounded-lg border border-[#0E233C]/10 bg-[#F6F6F3] px-3.5 py-2.5"
                    >
                      <span className="mt-0.5 font-mono text-xs font-bold text-[#1C707D] tabular-nums">
                        {item.index}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate font-display text-sm font-bold text-[#0E233C]">
                          {item.name}
                        </p>
                        <p className="truncate text-xs text-[#0E233C]/65">
                          {lang === 'ko' ? item.ko : item.en}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
