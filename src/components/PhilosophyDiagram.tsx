import { useState } from 'react';
import { CORE_VALUES, Language } from '../data/companyData';

interface PhilosophyDiagramProps {
  lang: Language;
}

const HEX_THEMES = [
  { fill: '#1C707D', stroke: '#1C707D', text: 'text-white', sub: 'text-white/80' },
  { fill: '#0E233C', stroke: '#0E233C', text: 'text-white', sub: 'text-white/80' },
  { fill: '#FFFFFF', stroke: '#CBD5E1', text: 'text-[#0E233C]', sub: 'text-[#0E233C]/65' },
  { fill: '#0E233C', stroke: '#0E233C', text: 'text-white', sub: 'text-white/80' },
  { fill: '#354C66', stroke: '#354C66', text: 'text-white', sub: 'text-white/80' },
];

const ARC_INDENTS = [
  'xl:ml-0',
  'xl:ml-6',
  'xl:ml-10',
  'xl:ml-6',
  'xl:ml-0',
];

// Right-side spoke coordinates radiating from center (200, 200) toward the 5 Core Values
const SPOKE_ENDPOINTS = [
  { x1: 318, y1: 112, x2: 374, y2: 78 },
  { x1: 334, y1: 155, x2: 388, y2: 140 },
  { x1: 340, y1: 200, x2: 394, y2: 200 },
  { x1: 334, y1: 245, x2: 388, y2: 260 },
  { x1: 318, y1: 288, x2: 374, y2: 322 },
];

export function PhilosophyDiagram({ lang }: PhilosophyDiagramProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="border-t border-[#0E233C]/10 pt-14">
      {/* Top Architectural Header */}
      <div className="border-b border-[#0E233C]/12 pb-5">
        <p className="font-mono text-xs font-semibold tracking-wider text-[#1C707D]">
          CORPORATE IDENTITY &amp; PHILOSOPHY
        </p>
        <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#0E233C] sm:text-3xl">
          Mission, Vision &amp; 5 Core Values
        </h3>
      </div>

      {/* 1-Page Integrated Diagram: Left (Mission & Vision) <- Center (CI Hub) -> Right (5 Core Values) */}
      <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.22fr)_240px_minmax(0,1fr)] lg:gap-5 xl:grid-cols-[480px_260px_minmax(0,1fr)] xl:gap-6">
        {/* Left Column: CORPORATE MISSION (Top) & VISION (Bottom) */}
        <div className="flex flex-col justify-between gap-12 lg:min-h-[340px] lg:py-4">
          {/* 1. CORPORATE MISSION */}
          <div className="border-l border-[#0E233C]/20 pl-4 lg:border-l-0 lg:border-r lg:pl-0 lg:pr-5 lg:text-right">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0E233C] lg:justify-end">
              <span className="font-mono">CORPORATE MISSION</span>
              <span className="text-[#0E233C]/35">|</span>
              <span className="text-[#0E233C]/70">{lang === 'ko' ? '기업 미션' : 'Mission'}</span>
            </div>
            <h4 className="mt-2.5 font-display text-lg font-bold leading-snug tracking-tight text-[#0E233C] lg:whitespace-nowrap lg:text-[13.5px] xl:text-[15.5px]">
              “A Company That Makes The Pleasure of Working and Happy Life”
            </h4>
            <p className="mt-1.5 text-sm font-semibold text-[#1C707D]">
              {lang === 'ko'
                ? '일하는 즐거움과 행복한 삶을 함께 만들어가는 기업'
                : 'Creating shared fulfillment and lasting happiness for our people and partners'}
            </p>
          </div>

          {/* 3. VISION */}
          <div className="border-l border-[#0E233C]/20 pl-4 lg:border-l-0 lg:border-r lg:pl-0 lg:pr-5 lg:text-right">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0E233C] lg:justify-end">
              <span className="font-mono">VISION</span>
              <span className="text-[#0E233C]/35">|</span>
              <span className="text-[#0E233C]/70">{lang === 'ko' ? '기업 비전' : 'Vision'}</span>
            </div>
            <h4 className="mt-2.5 font-display text-lg font-bold tracking-tight text-[#0E233C] lg:whitespace-nowrap lg:text-[15px] xl:text-[18px]">
              Reliable company that pursues new values
            </h4>
            <p className="mt-1.5 text-sm font-medium text-[#0E233C]/75">
              {lang === 'ko'
                ? '새로운 가치를 끊임없이 추구하는 신뢰받는 기업'
                : 'Earning long-term global trust through continuous innovation'}
            </p>
          </div>
        </div>

        {/* Center Column: Concentric Circular CI Hub */}
        <div className="flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-[280px] lg:max-w-full">
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
              aria-hidden="true"
            >
              {/* Outer thin dashed orbit */}
              <circle
                cx="200"
                cy="200"
                r="142"
                stroke="#0E233C"
                strokeOpacity="0.16"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
              {/* Inner pure white circle */}
              <circle
                cx="200"
                cy="200"
                r="132"
                fill="#FFFFFF"
                stroke="#0E233C"
                strokeOpacity="0.14"
                strokeWidth="1.25"
              />

              {/* Left-side active arc connecting to Mission & Vision */}
              <path
                d="M 200 58 A 142 142 0 0 0 78 128"
                stroke="#1C707D"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 78 272 A 142 142 0 0 0 200 342"
                stroke="#0E233C"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Top-Left Connector Arrow -> CORPORATE MISSION */}
              <path
                d="M 140 72 L 108 42 L 26 42"
                stroke="#1C707D"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 33 37 L 25 42 L 33 47"
                stroke="#1C707D"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="140" cy="72" r="4" fill="#1C707D" />

              {/* Bottom-Left Connector Arrow -> VISION */}
              <path
                d="M 140 328 L 108 358 L 26 358"
                stroke="#0E233C"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 33 353 L 25 358 L 33 363"
                stroke="#0E233C"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="140" cy="328" r="4" fill="#0E233C" />

              {/* Right-side active segmented arc (Navy & Teal) */}
              <path
                d="M 200 58 A 142 142 0 0 1 322 128"
                stroke="#1C707D"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 322 128 A 142 142 0 0 1 322 272"
                stroke="#0E233C"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 322 272 A 142 142 0 0 1 200 342"
                stroke="#1C707D"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* 5 Radiating Spokes -> 5 Core Values */}
              {SPOKE_ENDPOINTS.map((sp, i) => {
                const isActive = hoveredIdx === i;
                return (
                  <g key={i}>
                    <line
                      x1={sp.x1}
                      y1={sp.y1}
                      x2={sp.x2}
                      y2={sp.y2}
                      stroke={isActive ? '#1C707D' : '#0E233C'}
                      strokeOpacity={isActive ? 1 : 0.25}
                      strokeWidth={isActive ? 2.2 : 1.2}
                      strokeDasharray={isActive ? undefined : '3 3'}
                      className="transition-all duration-200"
                    />
                    <circle
                      cx={sp.x1}
                      cy={sp.y1}
                      r={isActive ? 4.5 : 2.5}
                      fill={isActive ? '#1C707D' : '#0E233C'}
                      fillOpacity={isActive ? 1 : 0.35}
                      className="transition-all duration-200"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Centered Official CI Lockup inside the Pure White Circular Hub */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-[64%] w-[64%] overflow-hidden rounded-full bg-white">
                <img
                  src="/assets/aistudio/CI_ver_DNI_Gemini_a07c3e00.png"
                  alt="더블엔인터내셔널 Double N International 공식 CI"
                  className="h-full w-full scale-[1.16] object-cover object-[50%_48%] brightness-[1.09] contrast-[1.12] mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 5 CORE VALUES */}
        <div>
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0E233C]">
            <span className="font-mono">5 CORE VALUES</span>
            <span aria-hidden="true" className="text-[#0E233C]/40">
              ·
            </span>
            <span className="text-[#0E233C]/70">
              {lang === 'ko' ? '더블엔인터내셔널 핵심 가치' : 'Core Guiding Principles'}
            </span>
          </div>

          <div className="space-y-2.5">
            {CORE_VALUES.map((val, idx) => {
              const theme = HEX_THEMES[idx];
              const isHovered = hoveredIdx === idx;
              const isEffortLight = idx === 2 && !isHovered;

              return (
                <div
                  key={val.key}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onFocus={() => setHoveredIdx(idx)}
                  onBlur={() => setHoveredIdx(null)}
                  tabIndex={0}
                  className={`group flex items-center gap-4 rounded-lg py-0.5 transition-transform duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C707D] ${ARC_INDENTS[idx]}`}
                >
                  {/* Pointy-Top Hexagon Badge */}
                  <div className="relative flex h-[76px] w-[70px] shrink-0 items-center justify-center transition-transform duration-200 group-hover:scale-105">
                    <svg
                      viewBox="0 0 88 96"
                      className="absolute inset-0 h-full w-full drop-shadow-[0_2px_6px_rgba(14,35,60,0.08)]"
                      aria-hidden="true"
                    >
                      <polygon
                        points="44,3 84,26 84,70 44,93 4,70 4,26"
                        fill={isHovered ? '#1C707D' : theme.fill}
                        stroke={isHovered ? '#1C707D' : theme.stroke}
                        strokeWidth="1.5"
                        className="transition-colors duration-200"
                      />
                    </svg>
                    <div className="relative z-10 flex flex-col items-center text-center leading-tight">
                      <span
                        className={`font-mono text-[9px] font-semibold tabular-nums transition-colors ${
                          isHovered
                            ? 'text-white/85'
                            : isEffortLight
                              ? 'text-[#1C707D]'
                              : theme.sub
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span
                        className={`mt-0.5 font-display text-[12px] font-bold transition-colors ${
                          isHovered ? 'text-white' : theme.text
                        }`}
                      >
                        {val.key}
                      </span>
                      <span
                        className={`mt-0.5 text-[10px] font-medium transition-colors ${
                          isHovered
                            ? 'text-white/90'
                            : isEffortLight
                              ? 'text-[#0E233C]/70'
                              : theme.sub
                        }`}
                      >
                        {val.ko}
                      </span>
                    </div>
                  </div>

                  {/* Description Line with Subtle Bottom Hairline */}
                  <div
                    className={`flex-1 border-b pb-2.5 transition-colors duration-200 ${
                      isHovered ? 'border-[#1C707D]' : 'border-[#0E233C]/12'
                    }`}
                  >
                    <p className="text-xs leading-relaxed text-[#0E233C]/85 sm:text-sm">
                      {val.desc[lang]}
                    </p>
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
