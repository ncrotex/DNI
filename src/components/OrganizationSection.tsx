import { useState } from 'react';
import { Language, LEADERSHIP_MEMBERS, ORG_DIVISIONS } from '../data/companyData';
import { BrandMark } from './BrandMark';

interface OrganizationSectionProps {
  lang: Language;
}

export function OrganizationSection({ lang }: OrganizationSectionProps) {
  const [selectedOrgId, setSelectedOrgId] = useState<string>('sales');
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);

  const hoveredMember = LEADERSHIP_MEMBERS.find((m) => m.id === hoveredMemberId);
  const activeLinkedIds = hoveredMember ? hoveredMember.linkedOrgIds : [];

  const getDiv = (id: string) => ORG_DIVISIONS.find((d) => d.id === id) ?? ORG_DIVISIONS[0];

  const isHighlighted = (id: string) =>
    activeLinkedIds.includes(id) || (hoveredMemberId === null && selectedOrgId === id);

  return (
    <div className="mt-8">
      {/* Header matching Organization & Leadership reference */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#0E233C]/12 pb-6 lg:flex-row lg:items-end">
        <div>
          <p className="font-mono text-xs font-semibold tracking-wider text-[#1C707D]">
            GOVERNANCE &amp; EXECUTIVE TEAM
          </p>
          <div className="mt-1.5 flex flex-wrap items-baseline gap-3">
            <h3 className="font-display text-2xl font-bold tracking-tight text-[#0E233C] sm:text-3xl">
              Organization &amp; Leadership
            </h3>
            <span className="text-lg font-medium text-[#0E233C]/55 sm:text-xl">
              {lang === 'ko' ? '조직도 및 핵심 경영진' : ''}
            </span>
          </div>
        </div>

        {/* Clean Unboxed Legend */}
        <div className="flex flex-col items-start gap-1.5 text-xs text-[#0E233C]/70 lg:items-end">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 font-medium">
              <span className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[#0E233C]" aria-hidden="true" />
              <span>Governance &amp; Core Divisions</span>
            </span>
            <span className="inline-flex items-center gap-2 font-medium">
              <span className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[#1C707D]" aria-hidden="true" />
              <span>Strategic Staff &amp; Business Units</span>
            </span>
          </div>
          <p className="text-[11px] font-medium text-[#1C707D]">
            {lang === 'ko'
              ? '경영진 카드에 마우스를 올리면 담당 조직이 표시됩니다'
              : 'Hover over an executive card to highlight their assigned divisions'}
          </p>
        </div>
      </div>

      {/* 2-Column Main Split: Left 01 Organization Chart | Right 02 Member Career */}
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* LEFT COLUMN: 01 Organization Chart */}
        <div className="lg:col-span-6 lg:border-r lg:border-[#0E233C]/10 lg:pr-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-[#0E233C] font-mono text-[11px] font-bold text-white tabular-nums">
                01
              </span>
              <h4 className="font-display text-lg font-bold text-[#0E233C]">
                Organization Chart
              </h4>
              <span className="text-xs font-medium text-[#0E233C]/55">
                {lang === 'ko' ? '조직체계' : ''}
              </span>
            </div>
            <span className="font-mono text-[11px] tracking-wider text-[#0E233C]/45">
              DOUBLE N INTERNATIONAL
            </span>
          </div>

          {/* Visual Hierarchy Tree */}
          <div className="mt-8 flex flex-col items-center">
            {/* Level 1: Board of Director */}
            <button
              type="button"
              onClick={() => setSelectedOrgId('board')}
              className={`flex w-full max-w-[280px] cursor-pointer items-center gap-3.5 rounded-xl bg-[#0E233C] px-5 py-3.5 text-left text-white shadow-sm transition-all duration-150 ${
                isHighlighted('board') ? 'ring-2 ring-[#1C707D] ring-offset-2' : 'hover:bg-[#132B47]'
              }`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <BrandMark variant="white" className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-[10px] font-semibold tracking-wider text-[#8BD3DE]">
                  TOP GOVERNANCE
                </p>
                <p className="font-display text-base font-bold leading-tight">Board of Director</p>
              </div>
            </button>

            {/* Vertical Stem + Side Offshoot for Plan & Control */}
            <div className="relative flex w-full flex-col items-center py-5">
              {/* Central vertical line */}
              <div className="h-24 w-px bg-[#0E233C]/20" aria-hidden="true" />

              {/* Center teal junction dot */}
              <span
                className="absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1C707D]"
                aria-hidden="true"
              />

              {/* Plan & Control Card (Left of stem on sm+, centered below on xs) */}
              <div className="mt-3 flex w-full items-center justify-center sm:absolute sm:top-1/2 sm:left-4 sm:mt-0 sm:w-auto sm:-translate-y-1/2">
                <button
                  type="button"
                  onClick={() => setSelectedOrgId('plan')}
                  className={`cursor-pointer rounded-xl border bg-white px-5 py-3 text-left transition-all duration-150 ${
                    isHighlighted('plan')
                      ? 'border-[#1C707D] ring-2 ring-[#1C707D]'
                      : 'border-[#0E233C]/15 hover:border-[#1C707D]'
                  }`}
                >
                  <p className="font-mono text-[10px] font-semibold tracking-wider text-[#1C707D]">
                    STRATEGIC STAFF
                  </p>
                  <p className="mt-0.5 font-display text-sm font-bold text-[#0E233C]">
                    Plan &amp; Control
                  </p>
                  <p className="mt-0.5 text-[11px] text-[#0E233C]/60">{getDiv('plan').sub[lang]}</p>
                </button>
                {/* Connector line to stem */}
                <div
                  className="hidden h-px w-10 bg-[#1C707D]/45 sm:block md:w-14"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Horizontal T-bar across 3 Core Divisions */}
            <div className="relative w-full">
              <div
                className="mx-auto hidden h-px w-[68%] bg-[#0E233C]/20 sm:block"
                aria-hidden="true"
              />
              {/* Junction dots above 3 columns */}
              <div
                className="mx-auto hidden w-[68%] justify-between sm:flex"
                aria-hidden="true"
              >
                <span className="-mt-1 h-2 w-2 rounded-full bg-[#0E233C]/45" />
                <span className="-mt-1 h-2 w-2 rounded-full bg-[#0E233C]" />
                <span className="-mt-1 h-2 w-2 rounded-full bg-[#0E233C]/45" />
              </div>

              {/* 3-Column Divisions: Admin. | Sales | Lab */}
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {/* Admin. */}
                <button
                  type="button"
                  onClick={() => setSelectedOrgId('admin')}
                  className={`cursor-pointer rounded-xl border bg-white p-4 text-center transition-all duration-150 ${
                    isHighlighted('admin')
                      ? 'border-[#1C707D] ring-2 ring-[#1C707D]'
                      : 'border-[#0E233C]/15 hover:border-[#1C707D]'
                  }`}
                >
                  <p className="font-mono text-[10px] font-semibold tracking-wider text-[#1C707D]">
                    GENERAL MANAGING
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-[#0E233C]">Admin.</p>
                  <p className="mt-0.5 text-[11px] text-[#0E233C]/60">{getDiv('admin').sub[lang]}</p>
                </button>

                {/* Sales (Primary Navy Card) */}
                <button
                  type="button"
                  onClick={() => setSelectedOrgId('sales')}
                  className={`cursor-pointer rounded-xl bg-[#0E233C] p-4 text-center text-white shadow-sm transition-all duration-150 ${
                    isHighlighted('sales')
                      ? 'ring-2 ring-[#1C707D] ring-offset-2'
                      : 'hover:bg-[#132B47]'
                  }`}
                >
                  <p className="font-mono text-[10px] font-semibold tracking-wider text-[#8BD3DE]">
                    MARKETING
                  </p>
                  <p className="mt-1 font-display text-base font-bold">Sales</p>
                  <p className="mt-0.5 text-[11px] text-white/75">{getDiv('sales').sub[lang]}</p>
                </button>

                {/* Lab */}
                <button
                  type="button"
                  onClick={() => setSelectedOrgId('lab')}
                  className={`cursor-pointer rounded-xl border bg-white p-4 text-center transition-all duration-150 ${
                    isHighlighted('lab')
                      ? 'border-[#1C707D] ring-2 ring-[#1C707D]'
                      : 'border-[#0E233C]/15 hover:border-[#1C707D]'
                  }`}
                >
                  <p className="font-mono text-[10px] font-semibold tracking-wider text-[#1C707D]">
                    R&amp;D
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-[#0E233C]">Lab</p>
                  <p className="mt-0.5 text-[11px] text-[#0E233C]/60">{getDiv('lab').sub[lang]}</p>
                </button>
              </div>
            </div>

            {/* Sub-Units Branching Under Sales: Garment & Textile */}
            <div className="mt-5 flex w-full justify-center">
              <div className="relative w-full max-w-[340px] border-l border-[#1C707D]/35 pl-5 space-y-3">
                {/* Garment Unit */}
                <button
                  type="button"
                  onClick={() => setSelectedOrgId('garment')}
                  className={`relative flex w-full cursor-pointer items-start justify-between rounded-xl border bg-white p-4 text-left transition-all duration-150 ${
                    isHighlighted('garment')
                      ? 'border-[#1C707D] ring-2 ring-[#1C707D]'
                      : 'border-[#0E233C]/15 hover:border-[#1C707D]'
                  }`}
                >
                  <span
                    className="absolute top-1/2 -left-[25px] h-2 w-2 -translate-y-1/2 rounded-full bg-[#1C707D]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-display text-sm font-bold text-[#0E233C]">Garment</p>
                    <p className="mt-0.5 text-xs text-[#0E233C]/65">{getDiv('garment').sub[lang]}</p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#1C707D]">
                    {getDiv('garment').kicker}
                  </span>
                </button>

                {/* Textile Unit */}
                <button
                  type="button"
                  onClick={() => setSelectedOrgId('textile')}
                  className={`relative flex w-full cursor-pointer items-start justify-between rounded-xl border bg-white p-4 text-left transition-all duration-150 ${
                    isHighlighted('textile')
                      ? 'border-[#1C707D] ring-2 ring-[#1C707D]'
                      : 'border-[#0E233C]/15 hover:border-[#1C707D]'
                  }`}
                >
                  <span
                    className="absolute top-1/2 -left-[25px] h-2 w-2 -translate-y-1/2 rounded-full bg-[#1C707D]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-display text-sm font-bold text-[#0E233C]">Textile</p>
                    <p className="mt-0.5 text-xs text-[#0E233C]/65">{getDiv('textile').sub[lang]}</p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#1C707D]">
                    {getDiv('textile').kicker}
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: 02 Member Career */}
        <div className="lg:col-span-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-[#1C707D] font-mono text-[11px] font-bold text-white tabular-nums">
                02
              </span>
              <h4 className="font-display text-lg font-bold text-[#0E233C]">Member Career</h4>
              <span className="text-xs font-medium text-[#0E233C]/55">
                {lang === 'ko' ? '핵심 경영진 프로필' : ''}
              </span>
            </div>
            <span className="text-xs font-semibold text-[#1C707D]">Executive Leadership</span>
          </div>

          {/* 4 Stacked Executive Cards */}
          <div className="mt-8 space-y-4">
            {LEADERSHIP_MEMBERS.map((member) => {
              const isHovered = hoveredMemberId === member.id;

              return (
                <div
                  key={member.id}
                  onMouseEnter={() => setHoveredMemberId(member.id)}
                  onMouseLeave={() => setHoveredMemberId(null)}
                  onFocus={() => setHoveredMemberId(member.id)}
                  onBlur={() => setHoveredMemberId(null)}
                  tabIndex={0}
                  className={`flex flex-col justify-between gap-4 rounded-xl border bg-white p-5 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C707D] sm:flex-row sm:items-center ${
                    isHovered
                      ? 'border-[#1C707D] shadow-sm ring-1 ring-[#1C707D]'
                      : 'border-[#0E233C]/12 hover:border-[#1C707D]/60'
                  }`}
                >
                  {/* Left: EXEC Badge + Title/Name + Major */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg text-white ${
                        member.badgeTone === 'teal' ? 'bg-[#1C707D]' : 'bg-[#0E233C]'
                      }`}
                    >
                      <span className="font-mono text-[9px] tracking-wider text-white/75">
                        EXEC
                      </span>
                      <span className="font-display text-xs font-bold leading-none">
                        {member.role}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-xs font-semibold text-[#1C707D]">
                          {member.role}
                        </span>
                        <span className="text-[#0E233C]/25">/</span>
                        <h5 className="font-display text-lg font-bold text-[#0E233C]">
                          {member.name}
                        </h5>
                      </div>
                      <p className="mt-1 text-xs text-[#0E233C]/65">{member.major[lang]}</p>
                    </div>
                  </div>

                  {/* Right: 2 Career Lines */}
                  <div className="space-y-1 text-left sm:text-right">
                    {member.careers.map((c) => (
                      <p key={`${c.company}-${c.title}`} className="text-xs sm:text-sm">
                        <span
                          className={
                            c.highlight
                              ? 'font-bold text-[#0E233C]'
                              : 'font-medium text-[#0E233C]/60'
                          }
                        >
                          {c.company}
                        </span>
                        <span className="mx-1.5 text-[#0E233C]/25">/</span>
                        <span
                          className={
                            c.highlight ? 'font-medium text-[#1C707D]' : 'text-[#0E233C]/55'
                          }
                        >
                          {c.title}
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
