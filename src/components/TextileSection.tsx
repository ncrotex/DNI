import { ExternalLink } from 'lucide-react';
import { ASSETS, CLIENT_BRANDS, Language, TextileTab } from '../data/companyData';
import { TextileApplicationsDiagram } from './TextileApplicationsDiagram';

interface TextileSectionProps {
  lang: Language;
  activeTab: TextileTab;
  onTabChange: (tab: TextileTab) => void;
}

export function TextileSection({ lang, activeTab, onTabChange }: TextileSectionProps) {
  const tabs: { id: TextileTab; label: { ko: string; en: string } }[] = [
    { id: 'chain', label: { ko: '01. 핵심기술', en: '01. Core Technology' } },
    { id: 'functional', label: { ko: '02. 적용분야', en: '02. Applications' } },
    { id: 'industrial', label: { ko: '03. 브랜드', en: '03. Brand' } },
  ];

  return (
    <section id="textile" className="border-b border-[#0E233C]/10 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section Header + Right Clickable Menu */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#0E233C]/10 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs font-semibold tracking-wider text-[#1C707D]">
              PART 03 · TEXTILE BUSINESS
            </p>
            <h2
              className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0E233C] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              {lang === 'ko'
                ? '투방습 멤브레인 기반 기능성 원단 제조'
                : 'Breathable Waterproof Membrane Technical Textile Manufacturing'}
            </h2>
          </div>

          <div
            className="flex flex-wrap items-center gap-1.5 rounded-lg bg-[#F6F6F3] p-1.5"
            role="tablist"
            aria-label="Textile Business Menus"
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
                      ? 'bg-[#1C707D] text-white shadow-sm'
                      : 'text-[#0E233C]/70 hover:text-[#0E233C]'
                  }`}
                >
                  {tab.label[lang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 01: CORE TECHNOLOGY (핵심기술) */}
        {activeTab === 'chain' && (
          <div className="mt-12">
            {/* Core Technology Banner with Fabric Production Filtered Background */}
            <div className="relative flex min-h-[380px] items-center overflow-hidden rounded-2xl border border-[#0E233C]/15 bg-[#1B3A5C] px-7 py-16 text-white shadow-sm sm:min-h-[440px] sm:px-12 sm:py-24 lg:min-h-[500px] lg:px-16 lg:py-28">
              {/* Background Image + Brightened Atmospheric Filter */}
              <img
                src={ASSETS.laminatingFabric}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full scale-[1.03] object-cover object-center opacity-95 brightness-115 contrast-105"
              />
              {/* Lightened Directional Navy + Precision Teal Filter Scrims */}
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
              <div className="relative z-10 max-w-3xl drop-shadow-[0_1px_3px_rgba(14,35,60,0.5)]">
                <p className="font-mono text-xs font-semibold tracking-wider text-[#8BE2EE]">
                  CORE TECHNOLOGY · WATERPROOF &amp; BREATHABLE MEMBRANE
                </p>
                <h3
                  className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
                  style={{ textWrap: 'balance' }}
                >
                  {lang === 'ko'
                    ? '다양한 멤브레인 기반 라미네이팅 기술'
                    : 'Multi-Membrane Laminating Technology'}
                </h3>
                {lang === 'ko' ? (
                  <div className="mt-6 space-y-3.5 text-sm leading-relaxed text-white/90 sm:text-base">
                    <p>2005년 세계 최초 수준의 전기방사 나노 멤브레인 적용 경험을 토대로</p>
                    <p>
                      PTFE, PU, PES, TPEE 등 다양한 멤브레인 라미네이팅(Laminating)·후가공(Finishing)을 일괄 제어하며
                    </p>
                    <p>
                      아웃도어 의류부터 자동차·전자·바이오 산업용 소재까지 생산 경험을 보유하고 있습니다.
                    </p>
                  </div>
                ) : (
                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                    Built on world-pioneering 2005 electro-spun nanofiber membrane experience, we integrate laminating across PTFE, PU, PES, and TPEE membranes with finishing—producing materials from outdoor apparel to automotive, electronics, and bio industries.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 02: APPLICATIONS (적용분야 - 기능성 의류 & 산업소재) */}
        {activeTab === 'functional' && (
          <div className="mt-10">
            <TextileApplicationsDiagram lang={lang} />
          </div>
        )}

        {/* TAB 03: BRAND (브랜드 - N'CROTEX® 전면 배너 & CLIENT BRAND 롤링 마퀴) */}
        {activeTab === 'industrial' && (
          <div className="mt-12 space-y-10">
            {/* Full-Width N'CROTEX Proprietary Membrane Brand Banner */}
            <div className="relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-2xl border border-[#0E233C]/15 bg-[#1B3A5C] px-7 py-10 text-white shadow-sm sm:min-h-[440px] sm:px-12 sm:py-12 lg:min-h-[480px] lg:px-14 lg:py-14">
              {/* Outdoor Trail Boots Background Image + Lightened Directional Scrims */}
              <img
                src={ASSETS.ncrotexTrailBg}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] object-cover object-[72%_center] opacity-95 brightness-120 contrast-[1.04]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0E233C]/72 via-[#0E233C]/36 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E233C]/42 via-transparent to-[#0E233C]/12"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_22%,rgba(14,35,60,0.28),transparent_52%)]"
              />

              <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-semibold tracking-wider text-[#8BE2EE]">
                      PROPRIETARY TECHNICAL TEXTILE BRAND
                    </span>
                    <a
                      href="https://ncrotexfootgear.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-white/25 bg-[#0E233C]/65 px-3 py-1 text-xs font-semibold text-[#8BE2EE] backdrop-blur-xs transition-colors hover:border-[#8BE2EE] hover:bg-[#1C707D]/50 hover:text-white"
                    >
                      <span>{lang === 'ko' ? '브랜드 사이트 보기' : 'Visit Brand Site'}</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>

                  {/* Official N'CROTEX BI (White Backdrop Knocked Out via Blend onto Trail Background) */}
                  <div className="mt-5">
                    <img
                      src={ASSETS.ncrotexBi}
                      alt="N'CROTEX®"
                      className="h-9 w-auto object-contain contrast-[2.2] grayscale invert mix-blend-screen sm:h-11"
                    />
                  </div>

                  {lang === 'ko' ? (
                    <div className="mt-6 space-y-2 text-sm leading-relaxed text-white/92 drop-shadow-[0_1px_2px_rgba(14,35,60,0.45)] sm:text-base">
                      <p>
                        N&apos;CROTEX®는 고기능 멤브레인 양산 기술을 상용화한 더블엔인터내셔널의 대표 원단 브랜드입니다.
                      </p>
                      <p>
                        멤브레인의 기능적 특성을 통해 외부 수분은 완벽히 차단하고 내부 땀과 열기는 신속히 배출하여
                      </p>
                      <p>아웃도어·워크웨어·산업 현장에 적용되고 있습니다.</p>
                    </div>
                  ) : (
                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/92 drop-shadow-[0_1px_2px_rgba(14,35,60,0.45)] sm:text-base">
                      N&apos;CROTEX® is Double N International&apos;s flagship technical textile brand born from high-performance membrane mass-production technology—blocking external moisture while rapidly venting sweat and heat across outdoor, workwear, and industrial applications.
                    </p>
                  )}
                </div>

                {/* Upper-Right Scaled-Up Slogan Graphic (Dark Corners Knocked Out via Blend) */}
                <div className="shrink-0 self-start lg:self-start lg:pt-1">
                  <img
                    src={ASSETS.ncrotexSlogan}
                    alt="Stay Dry, Be Natural"
                    className="h-24 w-auto object-contain brightness-110 contrast-[1.45] mix-blend-screen sm:h-28 lg:h-36 xl:h-40"
                  />
                </div>
              </div>

              <div className="relative mt-10 grid max-w-3xl grid-cols-2 gap-x-5 gap-y-5 border-t border-white/20 pt-7 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/20">
                {/* 01. 완벽한 방수 */}
                <div className="flex items-center gap-3 sm:pr-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#8BE2EE]/85 bg-[#0E233C]/80 ring-2 ring-[#0E233C]/65 backdrop-blur-xs">
                    <svg viewBox="0 0 28 28" fill="none" className="h-6 w-6" aria-hidden="true">
                      <path
                        d="M14 4.5C14 4.5 9.2 10.6 9.2 14.3C9.2 16.95 11.35 19.1 14 19.1C16.65 19.1 18.8 16.95 18.8 14.3C18.8 10.6 14 4.5 14 4.5Z"
                        fill="#8BE2EE"
                        fillOpacity="0.25"
                        stroke="#FFFFFF"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.8 18.2C6.8 20.6 10.0 22.5 14 22.5C18.0 22.5 21.2 20.6 21.2 18.2"
                        stroke="#8BE2EE"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p className="font-display text-sm font-bold leading-snug text-white drop-shadow-[0_1px_2px_rgba(14,35,60,0.5)]">
                    {lang === 'ko' ? (
                      <>
                        완벽한
                        <br />
                        방수
                      </>
                    ) : (
                      <>
                        Complete
                        <br />
                        Waterproof
                      </>
                    )}
                  </p>
                </div>

                {/* 02. 우수한 투습 */}
                <div className="flex items-center gap-3 sm:px-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#8BE2EE]/85 bg-[#0E233C]/80 ring-2 ring-[#0E233C]/65 backdrop-blur-xs">
                    <svg viewBox="0 0 28 28" fill="none" className="h-6 w-6" aria-hidden="true">
                      {/* 3 upward vapor arrows */}
                      <path d="M9.5 13V6.5M9.5 6.5L7.8 8.3M9.5 6.5L11.2 8.3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14 12V5M14 5L12.3 6.8M14 5L15.7 6.8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M18.5 13V6.5M18.5 6.5L16.8 8.3M18.5 6.5L20.2 8.3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      {/* Wavy breathable membrane layers */}
                      <path
                        d="M5.5 17C7 15.6 8.5 15.6 10 17C11.5 18.4 13 18.4 14.5 17C16 15.6 17.5 15.6 19 17C20.5 18.4 21.5 18.1 22.5 17"
                        stroke="#8BE2EE"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M5.5 21C7 19.6 8.5 19.6 10 21C11.5 22.4 13 22.4 14.5 21C16 19.6 17.5 19.6 19 21C20.5 22.4 21.5 22.1 22.5 21"
                        stroke="#8BE2EE"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p className="font-display text-sm font-bold leading-snug text-white drop-shadow-[0_1px_2px_rgba(14,35,60,0.5)]">
                    {lang === 'ko' ? (
                      <>
                        우수한
                        <br />
                        투습
                      </>
                    ) : (
                      <>
                        Superior
                        <br />
                        Breathable
                      </>
                    )}
                  </p>
                </div>

                {/* 03. 경량 & 쾌적함 */}
                <div className="flex items-center gap-3 sm:px-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#8BE2EE]/85 bg-[#0E233C]/80 ring-2 ring-[#0E233C]/65 backdrop-blur-xs">
                    <svg viewBox="0 0 28 28" fill="none" className="h-6 w-6" aria-hidden="true">
                      <path
                        d="M21.2 6.8C17.8 6.8 14.2 8.4 11.4 11.2C8.8 13.8 7.5 16.9 7.8 19.8L16.5 11.1M7.8 19.8L5.8 21.8M7.8 19.8C10.7 20.1 13.8 18.8 16.4 16.2C19.2 13.4 20.8 9.8 21.2 6.8Z"
                        fill="#8BE2EE"
                        fillOpacity="0.22"
                        stroke="#FFFFFF"
                        strokeWidth="1.55"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-display text-sm font-bold leading-snug text-white drop-shadow-[0_1px_2px_rgba(14,35,60,0.5)]">
                    {lang === 'ko' ? (
                      <>
                        경량 &amp;
                        <br />
                        쾌적함
                      </>
                    ) : (
                      <>
                        Light &amp;
                        <br />
                        Comfort
                      </>
                    )}
                  </p>
                </div>

                {/* 04. 높은 내구성 */}
                <div className="flex items-center gap-3 sm:pl-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#8BE2EE]/85 bg-[#0E233C]/80 ring-2 ring-[#0E233C]/65 backdrop-blur-xs">
                    <svg viewBox="0 0 28 28" fill="none" className="h-6 w-6" aria-hidden="true">
                      <path
                        d="M14 5.2L20.8 7.8V13.4C20.8 17.7 17.9 21.1 14 22.8C10.1 21.1 7.2 17.7 7.2 13.4V7.8L14 5.2Z"
                        fill="#8BE2EE"
                        fillOpacity="0.2"
                        stroke="#FFFFFF"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.8 14.1L13.1 16.4L17.5 11.8"
                        stroke="#8BE2EE"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-display text-sm font-bold leading-snug text-white drop-shadow-[0_1px_2px_rgba(14,35,60,0.5)]">
                    {lang === 'ko' ? (
                      <>
                        높은
                        <br />
                        내구성
                      </>
                    ) : (
                      <>
                        High
                        <br />
                        Durability
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* CLIENT BRAND Rolling Partner Marquee (from Brand Site) */}
            <div>
              <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                  <p className="font-mono text-xs font-semibold tracking-wider text-[#1C707D]">
                    CLIENT BRAND
                  </p>
                  <h4 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#0E233C]">
                    {lang === 'ko'
                      ? '국내 정상급 안전화 · 아웃도어 브랜드 적용'
                      : 'Trusted by Leading Outdoor & Safety Footwear Brands'}
                  </h4>
                </div>
                <p className="text-xs font-medium text-[#0E233C]/65 sm:text-sm">
                  {lang === 'ko'
                    ? '가혹한 작업 환경과 아웃도어 현장에서 성능을 검증받고 있습니다.'
                    : 'Field-proven across demanding industrial safety & outdoor environments.'}
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-[#0E233C]/15 bg-[#1B3A5C] py-6 shadow-[0_12px_32px_rgba(14,35,60,0.12)] sm:py-8">
                {/* Brightened Waterproof Boots Splash Backdrop */}
                <div className="pointer-events-none absolute inset-0 z-0">
                  <img
                    src={ASSETS.waterproofBootsBg}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full scale-105 object-cover object-center opacity-90 brightness-125 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0E233C]/45 via-[#0E233C]/12 to-[#0E233C]/45" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E233C]/28 via-transparent to-[#0E233C]/12" />
                </div>

                {/* Softened Horizontal Edge Fade Scrims */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-[#0E233C]/60 via-[#0E233C]/24 to-transparent sm:w-20"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-[#0E233C]/60 via-[#0E233C]/24 to-transparent sm:w-20"
                />

                {/* Compact Seamless Rolling Track */}
                <div className="animate-partner-marquee relative z-10 flex items-center">
                  {[0, 1].map((dupIdx) => (
                    <div
                      key={dupIdx}
                      aria-hidden={dupIdx === 1}
                      className="flex shrink-0 items-center gap-4 pr-4 sm:gap-5 sm:pr-5"
                    >
                      {CLIENT_BRANDS.map((brand, idx) => (
                        <div
                          key={`${dupIdx}-${idx}`}
                          title={brand.name}
                          className="flex min-w-[155px] flex-col items-center justify-center rounded-xl border border-white/40 bg-white px-5 py-3.5 shadow-[0_8px_22px_rgba(14,35,60,0.28)] transition-transform duration-200 hover:-translate-y-0.5 sm:min-w-[180px] sm:px-6 sm:py-4"
                        >
                          <img
                            src={brand.src}
                            alt={brand.alt}
                            className="h-11 w-auto max-w-[140px] object-contain contrast-[1.06] sm:h-13 sm:max-w-[155px]"
                          />
                          <div className="mt-2.5 h-px w-16 bg-[#0E233C]/12" aria-hidden="true" />
                        </div>
                      ))}
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
