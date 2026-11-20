import { useState } from 'react';
import { HISTORY_EVENTS, Language } from '../data/companyData';
import { BrandMark } from './BrandMark';

interface HistoryCurveProps {
  lang: Language;
}

type EraFilter = 'all' | 'foundation' | 'merger' | 'growth';

// Coordinates on 1120 x 580 viewBox along curve M 45 520 C 340 505, 680 390, 1020 92
const NODE_POSITIONS: Record<
  string,
  {
    cx: number;
    cy: number;
    elbowX: number;
    elbowY: number;
    endX: number;
    endY: number;
    boxStyle: string;
    align: 'left' | 'right';
  }
> = {
  '2008': {
    cx: 96,
    cy: 516,
    elbowX: 74,
    elbowY: 482,
    endX: 74,
    endY: 482,
    boxStyle: 'left-[1.5%] bottom-[21%]',
    align: 'left',
  },
  '2009': {
    cx: 222,
    cy: 496,
    elbowX: 254,
    elbowY: 534,
    endX: 282,
    endY: 534,
    boxStyle: 'left-[26%] top-[89%]',
    align: 'left',
  },
  '2010': {
    cx: 356,
    cy: 460,
    elbowX: 326,
    elbowY: 416,
    endX: 300,
    endY: 416,
    boxStyle: 'right-[74%] bottom-[29%]',
    align: 'right',
  },
  '2016': {
    cx: 492,
    cy: 406,
    elbowX: 532,
    elbowY: 454,
    endX: 562,
    endY: 454,
    boxStyle: 'left-[51%] top-[75%]',
    align: 'left',
  },
  '2020': {
    cx: 642,
    cy: 326,
    elbowX: 594,
    elbowY: 266,
    endX: 554,
    endY: 266,
    boxStyle: 'right-[51.5%] bottom-[52%]',
    align: 'right',
  },
  '2022': {
    cx: 774,
    cy: 242,
    elbowX: 814,
    elbowY: 294,
    endX: 844,
    endY: 294,
    boxStyle: 'left-[76.5%] top-[47%]',
    align: 'left',
  },
  '2024': {
    cx: 896,
    cy: 158,
    elbowX: 856,
    elbowY: 118,
    endX: 826,
    endY: 118,
    boxStyle: 'right-[27%] bottom-[77%]',
    align: 'right',
  },
  '2026': {
    cx: 996,
    cy: 103,
    elbowX: 954,
    elbowY: 58,
    endX: 922,
    endY: 58,
    boxStyle: 'right-[18.5%] bottom-[88%]',
    align: 'right',
  },
};

export function HistoryCurve({ lang }: HistoryCurveProps) {
  const [eraFilter, setEraFilter] = useState<EraFilter>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const eraItems: { id: Exclude<EraFilter, 'all'>; label: { ko: string; en: string }; color: string }[] = [
    {
      id: 'foundation',
      label: { ko: '2008–2016 섬유·아우터웨어 기반 구축', en: '2008–2016 Textile & Outerwear Base' },
      color: 'bg-[#1C707D]',
    },
    {
      id: 'merger',
      label: { ko: '2020 더블엔인터내셔널 출범', en: '2020 Corporate Merger' },
      color: 'bg-[#0E233C]',
    },
    {
      id: 'growth',
      label: { ko: '2022–2026 수출·메디컬·기술혁신 도약', en: '2022–2026 Export & Innovation' },
      color: 'bg-[#132B47]',
    },
  ];

  const toggleEra = (era: Exclude<EraFilter, 'all'>) => {
    setEraFilter((prev) => (prev === era ? 'all' : era));
  };

  return (
    <div className="mt-8">
      {/* Header matching attached Corporate History visual */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#0E233C]/12 pb-5 lg:flex-row lg:items-end">
        <div>
          <p className="font-mono text-xs font-semibold tracking-wider text-[#1C707D]">
            HISTORY &amp; MILESTONES · 2008 – 2026
          </p>
          <div className="mt-1.5 flex items-baseline gap-3">
            <h3 className="font-display text-2xl font-bold tracking-tight text-[#0E233C] sm:text-3xl">
              Corporate History
            </h3>
            <span className="text-lg font-medium text-[#0E233C]/55 sm:text-xl">
              {lang === 'ko' ? '회사연혁' : ''}
            </span>
          </div>
        </div>

        {/* Interactive Era Legend Filters */}
        <div className="flex flex-wrap items-center gap-4 text-xs" role="group" aria-label="Era filter">
          {eraItems.map((item) => {
            const active = eraFilter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleEra(item.id)}
                className={`inline-flex cursor-pointer items-center gap-2 whitespace-nowrap py-1 transition-opacity ${
                  eraFilter === 'all' || active
                    ? 'font-semibold text-[#0E233C] opacity-100'
                    : 'font-medium text-[#0E233C]/45 hover:opacity-80'
                }`}
              >
                <span className={`h-2 w-2 shrink-0 rounded-full ${item.color}`} aria-hidden="true" />
                <span className={active ? 'underline underline-offset-4' : ''}>{item.label[lang]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop Ascending Growth Curve Canvas */}
      <div className="relative mt-8 hidden lg:block">
        <div className="relative aspect-[1120/595] w-full">
          <svg
            viewBox="0 0 1120 595"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="historyAreaGrad" x1="0" y1="520" x2="1020" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1C707D" stopOpacity="0.03" />
                <stop offset="55%" stopColor="#1C707D" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#0E233C" stopOpacity="0.09" />
              </linearGradient>
              <linearGradient id="historyStrokeGrad" x1="45" y1="520" x2="1040" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1C707D" />
                <stop offset="55%" stopColor="#123C55" />
                <stop offset="100%" stopColor="#0E233C" />
              </linearGradient>
            </defs>

            {/* Horizontal subtle dotted reference gridlines */}
            {[105, 210, 315, 420, 520].map((y) => (
              <line
                key={y}
                x1="40"
                y1={y}
                x2="1080"
                y2={y}
                stroke="#0E233C"
                strokeOpacity="0.09"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
            ))}

            {/* Shaded growth wedge under the ascending curve */}
            <path
              d="M 45 520 C 340 505, 680 390, 1020 92 L 1020 520 Z"
              fill="url(#historyAreaGrad)"
            />

            {/* Ascending Main Curve */}
            <path
              d="M 45 520 C 340 505, 680 390, 1020 92 L 1044 70"
              stroke="url(#historyStrokeGrad)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />

            {/* Arrow Tip at 2026 Peak */}
            <path
              d="M 1024 70 L 1045 69 L 1042 90"
              stroke="#0E233C"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Nodes & Angled Leader Lines */}
            {HISTORY_EVENTS.map((ev) => {
              const pos = NODE_POSITIONS[ev.id];
              const isDimmed = eraFilter !== 'all' && eraFilter !== ev.era;
              const isHovered = hoveredId === ev.id;
              const strokeColor = ev.era === 'foundation' ? '#1C707D' : '#0E233C';

              return (
                <g
                  key={ev.id}
                  style={{ opacity: isDimmed ? 0.25 : 1 }}
                  className="transition-opacity duration-200"
                >
                  {/* Angled leader line */}
                  <polyline
                    points={`${pos.cx},${pos.cy} ${pos.elbowX},${pos.elbowY} ${pos.endX},${pos.endY}`}
                    stroke={strokeColor}
                    strokeOpacity={isHovered ? 0.95 : 0.45}
                    strokeWidth={isHovered ? 1.8 : 1.2}
                    fill="none"
                  />

                  {/* Highlight ring for 2020 Merger & 2026 Latest */}
                  {(ev.isMerger || ev.isLatest || isHovered) && (
                    <circle
                      cx={pos.cx}
                      cy={pos.cy}
                      r={ev.isMerger ? 13 : 10}
                      fill={ev.isLatest ? '#1C707D' : '#0E233C'}
                      fillOpacity="0.14"
                    />
                  )}

                  {/* Main Milestone Dot */}
                  <circle
                    cx={pos.cx}
                    cy={pos.cy}
                    r={ev.isMerger || ev.isLatest ? 7 : 5.5}
                    fill={ev.isLatest ? '#1C707D' : strokeColor}
                    stroke="#FFFFFF"
                    strokeWidth="2.2"
                  />
                </g>
              );
            })}
          </svg>

          {/* Crisp HTML Typography Anchors Matched 1:1 to Node Coordinates */}
          {HISTORY_EVENTS.map((ev) => {
            const pos = NODE_POSITIONS[ev.id];
            const isDimmed = eraFilter !== 'all' && eraFilter !== ev.era;

            return (
              <div
                key={ev.id}
                onMouseEnter={() => setHoveredId(ev.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`absolute max-w-[270px] cursor-default transition-opacity duration-200 ${pos.boxStyle} ${
                  pos.align === 'right' ? 'text-right' : 'text-left'
                } ${isDimmed ? 'opacity-25' : 'opacity-100'}`}
              >
                {ev.badge && (
                  <p className="font-mono text-[10px] font-semibold tracking-wider text-[#1C707D]">
                    {ev.badge[lang]}
                  </p>
                )}

                <div
                  className={`flex items-baseline gap-1.5 ${
                    pos.align === 'right' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {pos.align === 'right' ? (
                    <>
                      <span className="font-mono text-[11px] font-medium text-[#0E233C]/55">
                        {ev.month}
                      </span>
                      <span
                        className={`font-display text-xl font-extrabold tabular-nums ${
                          ev.era === 'foundation' ? 'text-[#1C707D]' : 'text-[#0E233C]'
                        }`}
                      >
                        {ev.year}
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        className={`font-display text-xl font-extrabold tabular-nums ${
                          ev.era === 'foundation' ? 'text-[#1C707D]' : 'text-[#0E233C]'
                        }`}
                      >
                        {ev.year}
                      </span>
                      <span className="font-mono text-[11px] font-medium text-[#0E233C]/55">
                        {ev.month}
                      </span>
                    </>
                  )}
                </div>

                {ev.isMerger ? (
                  <div
                    className={`mt-1 flex items-center gap-1.5 ${
                      pos.align === 'right' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <BrandMark className="h-4 w-4 shrink-0" />
                    <h4 className="font-display text-base font-bold text-[#0E233C]">
                      {ev.title[lang]}
                    </h4>
                  </div>
                ) : (
                  <h4
                    className={`mt-0.5 leading-snug ${
                      ev.subtitle || ev.isLatest
                        ? 'font-display text-sm font-bold text-[#0E233C]'
                        : 'text-xs font-medium text-[#0E233C]/80'
                    }`}
                  >
                    {ev.title[lang]}
                  </h4>
                )}

                {ev.subtitle && (
                  <p className="mt-0.5 text-xs leading-snug text-[#0E233C]/65">
                    {ev.subtitle[lang]}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive Mobile/Tablet Vertical Ascending Timeline (< lg) */}
      <div className="mt-8 space-y-0 divide-y divide-[#0E233C]/10 border-y border-[#0E233C]/10 lg:hidden">
        {HISTORY_EVENTS.map((ev) => (
          <div key={ev.id} className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:items-baseline">
            <div className="sm:col-span-4">
              {ev.badge && (
                <p className="font-mono text-[10px] font-semibold tracking-wider text-[#1C707D]">
                  {ev.badge[lang]}
                </p>
              )}
              <span
                className={`font-display text-lg font-extrabold tabular-nums ${
                  ev.era === 'foundation' ? 'text-[#1C707D]' : 'text-[#0E233C]'
                }`}
              >
                {ev.year}
              </span>{' '}
              <span className="font-mono text-xs text-[#0E233C]/55">{ev.month}</span>
            </div>
            <div className="sm:col-span-8">
              <div className="flex items-center gap-2">
                {ev.isMerger && <BrandMark className="h-4 w-4 shrink-0" />}
                <h4 className="font-display text-base font-bold text-[#0E233C]">
                  {ev.title[lang]}
                </h4>
              </div>
              {ev.subtitle && (
                <p className="mt-1 text-xs text-[#0E233C]/70">{ev.subtitle[lang]}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
