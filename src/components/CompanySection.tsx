import { ASSETS, CompanyTab, Language } from '../data/companyData';
import { CompetitiveEdgeSection } from './CompetitiveEdgeSection';
import { HistoryCurve } from './HistoryCurve';
import { OrganizationSection } from './OrganizationSection';
import { PhilosophyDiagram } from './PhilosophyDiagram';
import { SafeImage } from './SafeImage';

interface CompanySectionProps {
  lang: Language;
  activeTab: CompanyTab;
  onTabChange: (tab: CompanyTab) => void;
}

export function CompanySection({ lang, activeTab, onTabChange }: CompanySectionProps) {
  const tabs: { id: CompanyTab; label: { ko: string; en: string } }[] = [
    { id: 'message', label: { ko: '01. 메세지·비전', en: '01. Message & Vision' } },
    { id: 'ci', label: { ko: '02. CI 로고', en: '02. CI Logo' } },
    { id: 'history', label: { ko: '03. 기업연혁', en: '03. History' } },
    { id: 'organization', label: { ko: '04. 조직과 인재', en: '04. Organization & Talent' } },
    { id: 'edge', label: { ko: '05. 핵심경쟁력', en: '05. Competitive Edge' } },
  ];

  return (
    <section id="company" className="border-b border-[#0E233C]/10 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section Title + Sub-Navigation Tabs */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#0E233C]/10 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs font-semibold tracking-wider text-[#1C707D]">
              PART 01 · DOUBLE N INTERNATIONAL
            </p>
            <h2
              className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0E233C] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              {lang === 'ko' ? '기업 소개 · 신뢰와 혁신의 여정' : 'Company Profile · Heritage & Leadership'}
            </h2>
          </div>

          <div
            className="flex flex-wrap items-center gap-1.5 rounded-lg bg-[#F6F6F3] p-1.5"
            role="tablist"
            aria-label="Company sections"
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

        {/* TAB 01: MESSAGE & VISION */}
        {activeTab === 'message' && (
          <div className="mt-12 space-y-16">
            {/* CEO Message Banner with Weaving & Sewing Filtered Background */}
            <div className="relative overflow-hidden rounded-2xl border border-[#0E233C]/15 bg-[#1B3A5C] px-7 py-12 text-white shadow-sm sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              {/* Background Image + Brightened Atmospheric Filter */}
              <img
                src={ASSETS.ceoMessageBg}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full scale-[1.04] object-cover object-center opacity-95 brightness-115 contrast-105"
              />
              {/* Lighter Directional Navy + Precision Teal Filter Scrims */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0E233C]/70 via-[#0E233C]/38 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E233C]/24 via-transparent to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(56,163,179,0.22),transparent_60%)]"
              />

              {/* Foreground Editorial Copy */}
              <div className="relative z-10 max-w-2xl drop-shadow-[0_1px_3px_rgba(14,35,60,0.5)]">
                <p className="text-sm font-semibold text-[#8BE2EE]">
                  {lang === 'ko' ? "대표 메세지 · CEO's Message" : "CEO's Message"}
                </p>
                <h3
                  className="mt-2.5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
                  style={{ textWrap: 'balance' }}
                >
                  {lang === 'ko' ? (
                    <>
                      <span>신뢰를 직조하여 혁신을 입는다.</span>
                      <span className="mt-2.5 block font-script text-3xl font-semibold text-[#7AD3E0] sm:text-4xl lg:text-[2.6rem]">
                        Crafting Trust, Wearing Innovation.
                      </span>
                    </>
                  ) : (
                    <span className="block font-script text-3xl font-semibold text-white sm:text-4xl lg:text-[2.6rem]">
                      Crafting Trust, Wearing Innovation.
                    </span>
                  )}
                </h3>

                <div className="mt-7 space-y-4 text-sm leading-relaxed text-white/85 sm:text-base">
                  <p>
                    {lang === 'ko' ? (
                      <>
                        더블엔인터내셔널(Double N International)은 다년간의 수출 경험을 바탕으로
                        <br />
                        의류와 원단을 제조 및 수출하는 회사입니다.
                      </>
                    ) : (
                      'Double N International is a specialized apparel and textile manufacturing and export enterprise built on years of global trade experience.'
                    )}
                  </p>
                  <p>
                    {lang === 'ko' ? (
                      <>
                        2020년 설립 이후 의류 및 원단 수출 증가에 힘입어 빠르게 성장해 왔으며,
                        <br />
                        동시에 내부 경영을 통해 안정성을 유지해 왔습니다.
                      </>
                    ) : (
                      'Since our establishment in 2020, we have achieved rapid growth driven by expanding garment and fabric exports while maintaining solid stability through disciplined internal management.'
                    )}
                  </p>
                  <p>
                    {lang === 'ko'
                      ? '또한, 기업의 이익은 적극적으로 회사의 경쟁력을 확보하는 연구개발과 주주환원, 사회공헌에 반영하여 고객과 지속 가능한 기업을 지향하고 있습니다.'
                      : 'Furthermore, we actively reinvest corporate earnings into R&D that strengthens our competitiveness, shareholder returns, and social contribution—striving to be a sustainable enterprise alongside our customers.'}
                  </p>
                </div>
              </div>
            </div>

            {/* 1-Page Integrated Mission, Vision & 5 Core Values */}
            <PhilosophyDiagram lang={lang} />
          </div>
        )}

        {/* TAB 02: CI LOGO & VISUAL SYSTEM */}
        {activeTab === 'ci' && (
          <div className="mt-10">
            <div className="mb-8 border-b border-[#0E233C]/12 pb-5">
              <p className="font-mono text-xs font-semibold text-[#1C707D]">CORPORATE IDENTITY</p>
              <h3 className="mt-1.5 font-display text-2xl font-bold text-[#0E233C] sm:text-3xl">
                {lang === 'ko' ? '공식 CI 및 브랜드 아이덴티티' : 'Official CI & Visual System'}
              </h3>
            </div>

              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
                {/* Left Column: Horizontal & Vertical Signatures in Original Ratios */}
                <div className="flex flex-col justify-between gap-6 lg:col-span-4">
                  <div className="overflow-hidden rounded-xl border border-[#0E233C]/10 bg-[#F3F2ED]">
                    <SafeImage
                      src={ASSETS.ciHorizontal}
                      alt="Double N International horizontal corporate identity lockup"
                      fallbackLabel="Horizontal CI"
                      className="block h-auto w-full"
                    />
                    <div className="border-t border-[#0E233C]/10 bg-white px-5 py-3">
                      <p className="text-xs font-semibold text-[#0E233C]">
                        {lang === 'ko'
                          ? '가로형 시그니처 (Horizontal CI)'
                          : 'Horizontal Signature Lockup'}
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-[#0E233C]/10 bg-[#F3F2ED]">
                    <SafeImage
                      src={ASSETS.ciVertical}
                      alt="Double N International vertical corporate identity lockup"
                      fallbackLabel="Vertical CI"
                      className="block h-auto w-full"
                    />
                    <div className="border-t border-[#0E233C]/10 bg-white px-5 py-3">
                      <p className="text-xs font-semibold text-[#0E233C]">
                        {lang === 'ko'
                          ? '세로형 시그니처 (Vertical CI)'
                          : 'Vertical Signature Lockup'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Unboxed Editorial CI Descriptions Proportioned to Left */}
                <div className="flex flex-col justify-between divide-y divide-[#0E233C]/12 border-y border-[#0E233C]/12 lg:col-span-8">
                  <div className="flex flex-1 flex-col justify-center py-8">
                    <span className="font-mono text-xs font-semibold text-[#1C707D]">01</span>
                    <h4 className="mt-2 font-display text-xl font-bold text-[#0E233C] sm:text-2xl">
                      {lang === 'ko'
                        ? "Interlocking Double 'N' (결합된 N 형태)"
                        : "Interlocking Double 'N'"}
                    </h4>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#0E233C]/80 sm:text-base">
                      {lang === 'ko'
                        ? '고객사와 제조업체 간의 굳건한 파트너십, 그리고 실과 끈이 엮여 완성되는 의류(Textile)의 본질을 함께 의미합니다.'
                        : 'Represents the steadfast partnership between global buyers and manufacturers, as well as the interwoven threads at the core of textiles.'}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col justify-center py-8">
                    <span className="font-mono text-xs font-semibold text-[#1C707D]">02</span>
                    <h4 className="mt-2 font-display text-xl font-bold text-[#0E233C] sm:text-2xl">
                      {lang === 'ko'
                        ? 'Global Grid & Flow (글로벌 입체 구조)'
                        : 'Global Grid & Flow'}
                    </h4>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#0E233C]/80 sm:text-base">
                      {lang === 'ko'
                        ? '북미 시장을 비롯한 글로벌 유통망으로 유연하고 신속하게 확장하는 입체적 벤더의 이미지를 보여줍니다.'
                        : 'Reflects an agile, multidimensional apparel vendor scaling rapidly across North American and global retail distribution channels.'}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col justify-center py-8">
                    <span className="font-mono text-xs font-semibold text-[#1C707D]">03</span>
                    <h4 className="mt-2 font-display text-xl font-bold text-[#0E233C] sm:text-2xl">
                      {lang === 'ko'
                        ? 'Color Palette (딥 네이비 & 티알 틸)'
                        : 'Color Palette (Deep Navy & Precision Teal)'}
                    </h4>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#0E233C]/80 sm:text-base">
                      {lang === 'ko'
                        ? '깊은 신뢰와 무게감을 주는 Deep Trust Navy와 첨단 소재·메디컬 스크럽/요가복의 깨끗함과 기술력을 상징하는 Precision Teal/Silver 조화를 채택했습니다.'
                        : 'Combines Deep Trust Navy for integrity and reliability with Precision Teal and Silver symbolizing clean technical textiles, medical scrubs, and performance yoga wear.'}
                    </p>

                    {/* Open Editorial Brand Swatches (Unboxed) */}
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                      <div className="flex items-center gap-3.5">
                        <span
                          className="h-9 w-9 shrink-0 rounded-md bg-[#132B47]"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-xs font-bold text-[#0E233C]">Deep Trust Navy</p>
                          <p className="font-mono text-[11px] text-[#0E233C]/60">#132B47</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3.5">
                        <span
                          className="h-9 w-9 shrink-0 rounded-md bg-[#1C707D]"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-xs font-bold text-[#0E233C]">Precision Teal</p>
                          <p className="font-mono text-[11px] text-[#0E233C]/60">#1C707D</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3.5">
                        <span
                          className="h-9 w-9 shrink-0 rounded-md border border-[#0E233C]/15 bg-[#CBD5E1]"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-xs font-bold text-[#0E233C]">Tech Silver</p>
                          <p className="font-mono text-[11px] text-[#0E233C]/60">#CBD5E1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        )}

        {/* TAB 03: HISTORY TIMELINE */}
        {activeTab === 'history' && <HistoryCurve lang={lang} />}

        {/* TAB 04: ORGANIZATION & MEMBER CAREER */}
        {activeTab === 'organization' && <OrganizationSection lang={lang} />}

        {/* TAB 05: KEY COMPETITIVE EDGE */}
        {activeTab === 'edge' && <CompetitiveEdgeSection lang={lang} />}
      </div>
    </section>
  );
}
