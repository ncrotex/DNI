import { useState } from 'react';
import { Compass, Layers, ShieldCheck } from 'lucide-react';
import { COMPETITIVE_EDGES, Language } from '../data/companyData';
import { BrandMark } from './BrandMark';

interface CompetitiveEdgeSectionProps {
  lang: Language;
}

const PILLAR_ICONS = [Layers, Compass, ShieldCheck];

export function CompetitiveEdgeSection({ lang }: CompetitiveEdgeSectionProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="mt-8">
      {/* Header matching Key Competitive Edge reference */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#0E233C]/12 pb-6 lg:flex-row lg:items-end">
        <div>
          <p className="font-mono text-xs font-semibold tracking-wider text-[#1C707D]">
            CORE STRENGTHS &amp; SYNERGY
          </p>
          <div className="mt-1.5 flex flex-wrap items-baseline gap-3">
            <h3 className="font-display text-2xl font-bold tracking-tight text-[#0E233C] sm:text-3xl">
              Key Competitive Edge
            </h3>
            <span className="text-lg font-medium text-[#0E233C]/55 sm:text-xl">
              {lang === 'ko' ? '핵심경쟁력' : ''}
            </span>
          </div>
        </div>

        <p className="max-w-2xl text-xs leading-relaxed text-[#0E233C]/70 sm:text-sm lg:text-right">
          {lang === 'ko' ? (
            <>
              20년 이상의 섬유·의류 전문성 / 민첩한 시장 대응력 / R&amp;D 기반 품질 보증 시스템이
              <br />
              유기적으로 결합된 더블엔인터내셔널만의 경쟁 우위입니다.
            </>
          ) : (
            'Double N International’s competitive advantage unites 20+ years of textile & apparel mastery, market agility, and R&D-backed quality assurance.'
          )}
        </p>
      </div>

      {/* Top Convergence Apex Pyramid */}
      <div className="relative mx-auto mt-10 max-w-4xl pt-6 pb-2">
        {/* Subtle Triangle SVG Backdrop + 3-Prong Connector */}
        <svg
          viewBox="0 0 800 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="edgeApexFill" x1="400" y1="8" x2="400" y2="215" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0E233C" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#1C707D" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <polygon points="400,6 105,212 695,212" fill="url(#edgeApexFill)" />
          <polyline
            points="105,212 400,6 695,212"
            stroke="#0E233C"
            strokeOpacity="0.16"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
        </svg>

        {/* Apex Convergence Typography */}
        <div className="relative z-10 px-4 pt-6 text-center">
          <p className="font-mono text-[11px] font-semibold tracking-widest text-[#1C707D]">
            STRATEGIC VALUE CONVERGENCE
          </p>
          <p className="mt-3 font-display text-lg font-bold tracking-tight text-[#0E233C] sm:text-xl">
            Accumulated Experience
          </p>
          <p className="mt-1 font-display text-xl font-extrabold tracking-tight text-[#0E233C] sm:text-2xl">
            Speedy Response to Ever-Changing Market
          </p>
          <p className="mt-1 font-display text-lg font-bold tracking-tight text-[#1C707D] sm:text-xl">
            Quality Assurance
          </p>

          {/* Center Core Pillars Nameplate */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2.5 rounded-lg border border-[#0E233C]/15 bg-white px-5 py-2 shadow-xs">
              <BrandMark className="h-4 w-4 shrink-0" />
              <span className="font-mono text-xs font-bold tracking-wider text-[#0E233C]">
                DOUBLE N CORE PILLARS
              </span>
            </div>
          </div>
        </div>

        {/* 3-Prong Distribution Bar connecting Apex to 3 Columns */}
        <div className="relative z-10 mx-auto mt-4 hidden max-w-[74%] md:block" aria-hidden="true">
          <div className="h-px w-full bg-[#0E233C]/20" />
          <div className="flex justify-between">
            {[0, 1, 2].map((colIdx) => {
              const active = hoveredIdx === colIdx;
              const isCenter = colIdx === 1;
              return (
                <div key={colIdx} className="flex flex-col items-center">
                  <span
                    className={`-mt-1 h-2 w-2 rounded-full transition-transform duration-150 ${
                      active
                        ? 'scale-125 bg-[#1C707D]'
                        : isCenter
                          ? 'bg-[#0E233C]'
                          : 'bg-[#1C707D]'
                    }`}
                  />
                  <span
                    className={`h-6 w-px transition-colors duration-150 ${
                      active ? 'bg-[#1C707D]' : 'bg-[#0E233C]/20'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3 Core Pillars */}
      <div className="mt-4 grid grid-cols-1 gap-8 md:mt-0 md:grid-cols-3">
        {COMPETITIVE_EDGES.map((edge, idx) => {
          const Icon = PILLAR_ICONS[idx];
          const isHovered = hoveredIdx === idx;
          const isNavy = edge.tone === 'navy';

          return (
            <div
              key={edge.num}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onFocus={() => setHoveredIdx(idx)}
              onBlur={() => setHoveredIdx(null)}
              tabIndex={0}
              className="group flex flex-col justify-between border-b border-[#0E233C]/12 pb-7 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C707D]"
            >
              <div>
                {/* Crisp Top Accent Hairline Bar */}
                <div
                  className={`h-[2.5px] w-full transition-colors duration-150 ${
                    isHovered
                      ? 'bg-[#1C707D]'
                      : isNavy
                        ? 'bg-[#0E233C]'
                        : 'bg-[#1C707D]'
                  }`}
                />

                {/* Top Header Row: Index + Title + Icon */}
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-wider text-[#1C707D] tabular-nums">
                      <span>{edge.num}</span>
                      <span className="text-[#0E233C]/55">{edge.kicker[lang]}</span>
                    </div>
                    <h4 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#0E233C] sm:text-3xl">
                      {edge.title}
                    </h4>
                  </div>

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors duration-150 ${
                      isHovered
                        ? 'border-[#1C707D] bg-[#1C707D] text-white'
                        : 'border-[#0E233C]/10 bg-[#F6F6F3] text-[#0E233C]'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Tagline */}
                <p className="mt-4 text-xs font-semibold text-[#1C707D]">
                  · {edge.tagline}
                </p>

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#0E233C]/80">
                  {edge.points[lang].map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[1px] bg-[#0E233C]"
                        aria-hidden="true"
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Continuous Synergy Loop */}
      <div className="relative mx-auto mt-2 hidden max-w-4xl pt-3 pb-4 md:block">
        <svg
          viewBox="0 0 800 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-full"
          aria-hidden="true"
        >
          {/* Left Pillar Anchor Dot */}
          <circle cx="120" cy="14" r="4" fill="#1C707D" />
          {/* Center Pillar Anchor Dot */}
          <circle cx="400" cy="14" r="4" fill="#0E233C" />
          {/* Right Pillar Anchor Dot */}
          <circle cx="680" cy="14" r="4" fill="#1C707D" />

          {/* Left Curved Dashed Synergy Loop */}
          <path
            d="M 150 18 C 90 42, 130 68, 285 70"
            stroke="#1C707D"
            strokeOpacity="0.65"
            strokeWidth="1.6"
            strokeDasharray="5 5"
            strokeLinecap="round"
          />
          <polyline
            points="142,14 152,18 145,26"
            stroke="#1C707D"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="277,64 286,70 277,76"
            stroke="#1C707D"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right Curved Dashed Synergy Loop */}
          <path
            d="M 650 18 C 710 42, 670 68, 515 70"
            stroke="#1C707D"
            strokeOpacity="0.65"
            strokeWidth="1.6"
            strokeDasharray="5 5"
            strokeLinecap="round"
          />
          <polyline
            points="658,14 648,18 655,26"
            stroke="#1C707D"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="523,64 514,70 523,76"
            stroke="#1C707D"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className=" -mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[#0E233C]/12 bg-white px-5 py-1.5 shadow-xs">
            <span className="font-mono text-[11px] font-semibold tracking-wider text-[#0E233C]">
              CONTINUOUS SYNERGY LOOP ·{' '}
              <span className="text-[#1C707D]">
                {lang === 'ko' ? '선순환 경쟁력 구조' : 'Self-Reinforcing Value Cycle'}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
