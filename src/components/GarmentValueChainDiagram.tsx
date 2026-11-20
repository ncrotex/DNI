import { useState } from 'react';
import { GARMENT_APPLICATIONS, Language } from '../data/companyData';
import { BrandMark } from './BrandMark';

interface GarmentValueChainDiagramProps {
  lang: Language;
}

type TechId = 'printing' | 'embroidery' | 'embellishment';
type CategoryId = 'casual' | 'active' | 'uniform';

interface TechNode {
  id: TechId;
  title: string;
  sub: { ko: string; en: string };
  specs: { ko: string; en: string };
  linkedCategories: CategoryId[];
}

const TECH_NODES: TechNode[] = [
  {
    id: 'printing',
    title: 'PRINTING',
    sub: { ko: '프린팅 · 특수 나염', en: 'Specialty Printing' },
    specs: {
      ko: '스크린 나염 · 고밀도 DTF · 전사 그래픽',
      en: 'Screen Print · High-Density DTF · Sublimation',
    },
    linkedCategories: ['casual', 'active'],
  },
  {
    id: 'embroidery',
    title: 'EMBROIDERY',
    sub: { ko: '정밀 입체 자수', en: 'Precision Embroidery' },
    specs: {
      ko: '3D 볼륨 자수 · 아플리케 패치 · 엠블럼',
      en: '3D Satin Stitch · Appliqué Patch · Crest',
    },
    linkedCategories: ['casual', 'uniform'],
  },
  {
    id: 'embellishment',
    title: 'EMBELLISHMENT',
    sub: { ko: '특수 엠벨리쉬먼트', en: 'Technical Embellishment' },
    specs: {
      ko: '메탈 하드웨어 · 리벳 · 심실링 트리밍',
      en: 'Metal Hardware · Rivets · Bonded Seam Trims',
    },
    linkedCategories: ['active', 'uniform'],
  },
];

const CATEGORY_META: Record<
  CategoryId,
  {
    code: string;
    koLabel: string;
    enLabel: string;
    shortItems: { ko: string; en: string };
    linkedTechs: TechId[];
    callouts?: string[];
  }
> = {
  casual: {
    code: 'CASUAL WEAR',
    koLabel: '캐주얼웨어',
    enLabel: 'Casual & Licensed Wear',
    shortItems: {
      ko: '스포츠 리그 라이선스 플리스 / NHL 하키 저지 / 후디 / 레깅스 / 집업 / 폴로셔츠',
      en: 'Licensed Sports Fleece / NHL Hockey Jerseys / Hoodies / Leggings / Zip-Ups / Polo Shirts',
    },
    linkedTechs: ['printing', 'embroidery'],
  },
  active: {
    code: 'ACTIVE WEAR',
    koLabel: '액티브웨어',
    enLabel: 'Performance Activewear',
    shortItems: {
      ko: '기능성 액티브웨어 / 액티브 자켓 / 요가 · 애슬레저 웨어',
      en: 'Technical Activewear / Active Jackets / Yoga & Athleisure Wear',
    },
    linkedTechs: ['printing', 'embellishment'],
  },
  uniform: {
    code: 'UNIFORM',
    koLabel: '유니폼 · 메디컬',
    enLabel: 'Medical Scrubs & Uniforms',
    shortItems: {
      ko: '메디컬 스크럽 / 병원용 기능성 유니폼 / 워크웨어 작업복',
      en: 'Medical Scrubs / Hospital Functional Uniforms / Industrial Workwear',
    },
    linkedTechs: ['embroidery', 'embellishment'],
    callouts: ['Chest pocket', 'Double stitched V-neck'],
  },
};

function TechVisual({ id }: { id: TechId }) {
  if (id === 'printing') {
    return (
      <svg viewBox="0 0 120 56" className="h-14 w-full" aria-hidden="true">
        <rect width="120" height="56" rx="6" fill="#0E233C" />
        {/* Graphic Swatch Left */}
        <polygon points="0,0 64,0 50,56 0,56" fill="#1C707D" fillOpacity="0.35" />
        <path d="M10 12 L28 12 L18 28 Z" fill="#8BD3DE" />
        <circle cx="38" cy="20" r="7" fill="#FFFFFF" fillOpacity="0.85" />
        <path d="M12 42 Q26 32 42 44" stroke="#8BD3DE" strokeWidth="2.5" fill="none" />
        <rect x="28" y="34" width="12" height="12" rx="2" fill="#1C707D" />
        {/* Precision Print Head Right */}
        <polygon points="68,0 120,0 120,56 54,56" fill="#132B47" />
        <rect x="78" y="8" width="24" height="16" rx="2" fill="#CBD5E1" fillOpacity="0.22" stroke="#8BD3DE" strokeWidth="1.2" />
        <line x1="90" y1="24" x2="90" y2="34" stroke="#8BD3DE" strokeWidth="1.8" />
        <rect x="70" y="35" width="40" height="13" rx="2" fill="#1C707D" fillOpacity="0.5" />
        <circle cx="80" cy="41.5" r="2.2" fill="#FFFFFF" />
        <circle cx="90" cy="41.5" r="2.2" fill="#8BD3DE" />
        <circle cx="100" cy="41.5" r="2.2" fill="#FFFFFF" />
      </svg>
    );
  }

  if (id === 'embroidery') {
    return (
      <svg viewBox="0 0 120 56" className="h-14 w-full" aria-hidden="true">
        <rect width="120" height="56" rx="6" fill="#0E233C" />
        {/* Left Embroidered Monogram Patch */}
        <circle cx="36" cy="28" r="19" fill="#132B47" stroke="#8BD3DE" strokeWidth="1.8" strokeDasharray="3 2" />
        <circle cx="36" cy="28" r="14" fill="none" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="1.2" />
        <path d="M29 34 V22 L36 30 L43 22 V34" stroke="#8BD3DE" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Divider */}
        <line x1="65" y1="6" x2="55" y2="50" stroke="#FFFFFF" strokeOpacity="0.18" strokeWidth="1.2" />
        {/* Right Satin Stitch Crest */}
        <circle cx="86" cy="28" r="19" fill="#1C707D" fillOpacity="0.3" stroke="#CBD5E1" strokeWidth="1.8" />
        <path d="M77 33 L86 18 L95 33 Z" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" />
        <line x1="76" y1="37" x2="96" y2="37" stroke="#8BD3DE" strokeWidth="1.6" strokeDasharray="2 2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 56" className="h-14 w-full" aria-hidden="true">
      <rect width="120" height="56" rx="6" fill="#0E233C" />
      {/* Left Precision Woven Trim & Piping */}
      <polygon points="0,0 64,0 50,56 0,56" fill="#132B47" />
      <path d="M8 14 L52 44" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="8" strokeLinecap="round" />
      <path d="M8 14 L52 44" stroke="#8BD3DE" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="24" cy="25" r="3.5" fill="#CBD5E1" stroke="#0E233C" strokeWidth="1.2" />
      <circle cx="38" cy="35" r="3.5" fill="#CBD5E1" stroke="#0E233C" strokeWidth="1.2" />
      {/* Right Metal D-Ring & Bar-Tack Stitch */}
      <polygon points="68,0 120,0 120,56 54,56" fill="#1C707D" fillOpacity="0.28" />
      <path d="M82 10 L96 10 L96 28 L82 28 Z" fill="#0E233C" stroke="#8BD3DE" strokeWidth="1.4" />
      <line x1="84" y1="24" x2="94" y2="24" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 1.5" />
      <path d="M80 28 A10 10 0 0 0 98 28 Z" fill="none" stroke="#CBD5E1" strokeWidth="2.8" />
    </svg>
  );
}

function CategoryGarmentVisual({ id }: { id: CategoryId }) {
  if (id === 'casual') {
    return (
      <svg viewBox="0 0 156 100" className="h-24 w-full shrink-0" aria-hidden="true">
        <rect width="156" height="100" rx="8" fill="#F6F6F3" />
        {/* Licensed Fleece Hoodie Silhouette */}
        <path
          d="M36 22 Q44 12 52 22 L66 28 L72 48 L63 51 L60 36 V78 H28 V36 L25 51 L16 48 L22 28 Z"
          fill="#0E233C"
        />
        {/* Chest Stripe Accent */}
        <rect x="28" y="54" width="32" height="5" fill="#1C707D" />
        <rect x="28" y="61" width="32" height="3" fill="#8BD3DE" />
        {/* Hood Inner */}
        <path d="M38 22 Q44 30 50 22" stroke="#8BD3DE" strokeWidth="2" fill="none" />
        {/* Zip-Up Track Jacket */}
        <path
          d="M92 22 H110 L122 30 L127 52 L118 54 L115 39 V78 H87 V39 L84 54 L75 52 L80 30 Z"
          fill="#1C707D"
        />
        <line x1="101" y1="22" x2="101" y2="78" stroke="#FFFFFF" strokeWidth="1.6" />
        {/* Slim Leggings */}
        <path d="M132 24 H146 L148 78 H141 L139 46 L137 78 H130 Z" fill="#354C66" />
      </svg>
    );
  }

  if (id === 'active') {
    return (
      <svg viewBox="0 0 156 100" className="h-24 w-full shrink-0" aria-hidden="true">
        <rect width="156" height="100" rx="8" fill="#F6F6F3" />
        {/* Yoga Sports Top + High-Waist Leggings */}
        <path d="M32 18 H52 L54 34 H30 Z" fill="#1C707D" />
        <path d="M30 40 H54 L58 84 H45 L42 54 L39 84 H26 Z" fill="#0E233C" />
        <line x1="30" y1="45" x2="54" y2="45" stroke="#8BD3DE" strokeWidth="1.6" />
        {/* Technical Wind Shell / Active Jacket */}
        <path
          d="M94 18 Q103 10 112 18 L126 26 L133 54 L123 57 L119 37 V80 H87 V37 L83 57 L73 54 L80 26 Z"
          fill="#0E233C"
        />
        {/* Ergonomic Flatlock Panel Lines */}
        <path d="M87 38 L103 48 L119 38" stroke="#1C707D" strokeWidth="2.4" fill="none" />
        <line x1="103" y1="18" x2="103" y2="80" stroke="#8BD3DE" strokeWidth="1.4" />
        <path d="M90 56 H98 M108 56 H116" stroke="#8BD3DE" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 156 100" className="h-24 w-full shrink-0" aria-hidden="true">
      <rect width="156" height="100" rx="8" fill="#F6F6F3" />
      {/* Medical Scrub Top (Left) */}
      <path
        d="M26 20 L38 20 L44 30 L50 20 L62 20 L74 28 L70 46 L60 44 V78 H28 V44 L18 46 L14 28 Z"
        fill="#0E233C"
      />
      {/* Double Stitched V-Neck */}
      <path d="M38 20 L44 31 L50 20" stroke="#8BD3DE" strokeWidth="1.8" fill="none" />
      {/* Chest Pocket + Lower Roomy Pockets */}
      <rect x="49" y="34" width="9" height="10" rx="1" fill="#1C707D" stroke="#8BD3DE" strokeWidth="0.9" />
      <rect x="30" y="58" width="11" height="13" rx="1.5" fill="#132B47" stroke="#8BD3DE" strokeWidth="0.9" />
      <rect x="47" y="58" width="11" height="13" rx="1.5" fill="#132B47" stroke="#8BD3DE" strokeWidth="0.9" />
      {/* Scrub Trousers (Right) */}
      <path d="M86 22 H112 L116 80 H102 L99 44 L96 80 H82 Z" fill="#132B47" />
      <line x1="86" y1="27" x2="112" y2="27" stroke="#1C707D" strokeWidth="2.5" />
      {/* Zoomed Stitch & Pocket Swatch Badges */}
      <circle cx="135" cy="33" r="12" fill="#0E233C" stroke="#1C707D" strokeWidth="1.5" />
      <rect x="130" y="28" width="10" height="10" rx="1" fill="none" stroke="#8BD3DE" strokeWidth="1.2" />
      <circle cx="135" cy="67" r="12" fill="#0E233C" stroke="#1C707D" strokeWidth="1.5" />
      <path d="M128 62 L135 71 L142 62" stroke="#8BD3DE" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function GarmentValueChainDiagram({ lang }: GarmentValueChainDiagramProps) {
  const [hoveredTech, setHoveredTech] = useState<TechId | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<CategoryId | null>(null);

  const isTechActive = (id: TechId) =>
    hoveredTech === id ||
    (hoveredCategory !== null && CATEGORY_META[hoveredCategory].linkedTechs.includes(id));

  const isCategoryActive = (id: CategoryId) =>
    hoveredCategory === id ||
    (hoveredTech !== null &&
      (TECH_NODES.find((t) => t.id === hoveredTech)?.linkedCategories.includes(id) ?? false));

  return (
    <div className="rounded-2xl border border-[#0E233C]/10 bg-white p-6 sm:p-10 lg:p-12">
      {/* Top Architectural Title Strip */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#0E233C]/12 pb-6 lg:flex-row lg:items-end">
        <div>
          <p className="font-mono text-xs font-semibold tracking-wider text-[#1C707D]">
            EXECUTION CAPABILITIES &amp; MAJOR CATEGORIES
          </p>
          <h3
            className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#0E233C] sm:text-3xl"
            style={{ textWrap: 'balance' }}
          >
            {lang === 'ko'
              ? '다양한 특수가공 기술의 디자인 적용 노우하우 보유'
              : 'Know-How in Applying Specialty Processing Techniques to Apparel Design'}
          </h3>
        </div>

        <p className="ml-auto max-w-lg text-right text-xs leading-relaxed font-medium text-[#0E233C]/65">
          {lang === 'ko' ? (
            <>
              &quot;바이어 기획부터 양산까지 일관된 OEM 실행력으로
              <br />
              최적의 원가와 납기로 안정 공급합니다.&quot;
            </>
          ) : (
            '“Consistent OEM execution from buyer planning to mass production, ensuring optimal pricing and reliable delivery.”'
          )}
        </p>
      </div>

      {/* Main Schematic Flow */}
      <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_56px_minmax(0,0.95fr)_96px_minmax(0,1.45fr)] lg:gap-0">
        {/* ZONE 1: TECHNOLOGY & KNOW-HOW (3 Stacked Processing Nodes) */}
        <div>
          <div className="mb-4">
            <p className="font-mono text-xs font-bold tracking-wider text-[#0E233C]">
              TECHNOLOGY &amp; KNOW-HOW
            </p>
            <p className="mt-0.5 text-xs text-[#0E233C]/60">
              {lang === 'ko' ? '고부가가치 특수가공 역량' : 'Specialty Garment Processing'}
            </p>
          </div>

          <div className="space-y-4">
            {TECH_NODES.map((tech) => {
              const active = isTechActive(tech.id);
              return (
                <div
                  key={tech.id}
                  onMouseEnter={() => setHoveredTech(tech.id)}
                  onMouseLeave={() => setHoveredTech(null)}
                  onFocus={() => setHoveredTech(tech.id)}
                  onBlur={() => setHoveredTech(null)}
                  tabIndex={0}
                  className={`rounded-xl border bg-[#F6F6F3] p-3.5 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C707D] ${
                    active
                      ? 'border-[#1C707D] bg-white shadow-sm ring-1 ring-[#1C707D]'
                      : 'border-[#0E233C]/12 hover:border-[#1C707D]/60'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-display text-sm font-extrabold tracking-tight text-[#0E233C]">
                      {tech.title}
                    </span>
                    <span className="text-[11px] font-semibold text-[#1C707D]">
                      {tech.sub[lang]}
                    </span>
                  </div>

                  <div className="mt-2.5 overflow-hidden rounded-md border border-[#0E233C]/10">
                    <TechVisual id={tech.id} />
                  </div>

                  <p className="mt-2 text-[11px] font-medium text-[#0E233C]/70">
                    {tech.specs[lang]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CONNECTOR 1: Left 3 Processing Techs -> Center Design Wheel */}
        <div className="hidden h-full items-center lg:flex" aria-hidden="true">
          <svg viewBox="0 0 56 380" fill="none" className="h-[380px] w-full">
            {/* Top Branch (Printing) */}
            <path
              d="M 0 65 H 24 V 168 H 52"
              stroke={isTechActive('printing') ? '#1C707D' : '#0E233C'}
              strokeOpacity={isTechActive('printing') ? 1 : 0.3}
              strokeWidth={isTechActive('printing') ? 2.2 : 1.5}
              className="transition-all duration-150"
            />
            <circle
              cx="4"
              cy="65"
              r="3.5"
              fill={isTechActive('printing') ? '#1C707D' : '#0E233C'}
              fillOpacity={isTechActive('printing') ? 1 : 0.45}
            />

            {/* Middle Branch (Embroidery) */}
            <line
              x1="0"
              y1="190"
              x2="52"
              y2="190"
              stroke={isTechActive('embroidery') ? '#1C707D' : '#0E233C'}
              strokeOpacity={isTechActive('embroidery') ? 1 : 0.3}
              strokeWidth={isTechActive('embroidery') ? 2.2 : 1.5}
              className="transition-all duration-150"
            />
            <circle
              cx="4"
              cy="190"
              r="3.5"
              fill={isTechActive('embroidery') ? '#1C707D' : '#0E233C'}
              fillOpacity={isTechActive('embroidery') ? 1 : 0.45}
            />

            {/* Bottom Branch (Embellishment) */}
            <path
              d="M 0 315 H 24 V 212 H 52"
              stroke={isTechActive('embellishment') ? '#1C707D' : '#0E233C'}
              strokeOpacity={isTechActive('embellishment') ? 1 : 0.3}
              strokeWidth={isTechActive('embellishment') ? 2.2 : 1.5}
              className="transition-all duration-150"
            />
            <circle
              cx="4"
              cy="315"
              r="3.5"
              fill={isTechActive('embellishment') ? '#1C707D' : '#0E233C'}
              fillOpacity={isTechActive('embellishment') ? 1 : 0.45}
            />
          </svg>
        </div>

        {/* ZONE 2: BUYER-CUSTOM DESIGN HUB (Circular Architectural Wheel) */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-3">
            <p className="font-display text-xl font-extrabold tracking-tight text-[#0E233C]">
              BUYER-CUSTOM
              <br />
              DESIGN
            </p>
          </div>

          <div className="relative flex aspect-square w-full max-w-[235px] items-center justify-center">
            <svg
              viewBox="0 0 240 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
              aria-hidden="true"
            >
              {/* Outer Concentric Ring */}
              <circle cx="120" cy="120" r="112" stroke="#1C707D" strokeWidth="3.5" />
              <circle cx="120" cy="120" r="103" fill="#FFFFFF" stroke="#0E233C" strokeWidth="1.5" />

              {/* Quadrant 1 (Top-Left): Light Technical Drafting Canvas */}
              <path d="M120 120 L120 22 A98 98 0 0 0 22 120 Z" fill="#F6F6F3" />
              {/* Flat Garment Blueprint Sketch */}
              <path
                d="M52 72 L64 64 H78 L90 72 L86 85 L80 83 V104 H62 V83 L56 85 Z"
                fill="none"
                stroke="#0E233C"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <line x1="71" y1="64" x2="71" y2="104" stroke="#1C707D" strokeWidth="1.2" strokeDasharray="2 2" />
              <rect x="86" y="42" width="22" height="16" rx="1.5" fill="none" stroke="#1C707D" strokeWidth="1.1" />
              <line x1="90" y1="47" x2="104" y2="47" stroke="#0E233C" strokeOpacity="0.45" strokeWidth="1" />
              <line x1="90" y1="52" x2="101" y2="52" stroke="#0E233C" strokeOpacity="0.45" strokeWidth="1" />

              {/* Quadrant 2 (Top-Right): Precision Teal Technical Knit Mesh */}
              <path d="M120 120 L218 120 A98 98 0 0 0 120 22 Z" fill="#1C707D" />
              <path
                d="M132 45 L175 110 M150 35 L195 105 M126 70 L185 45 M128 95 L205 68 M138 114 L212 92"
                stroke="#FFFFFF"
                strokeOpacity="0.28"
                strokeWidth="1.2"
              />
              <polygon points="120,24 140,42 120,62" fill="#0E233C" fillOpacity="0.55" />

              {/* Quadrant 3 (Bottom-Left): Deep Trust Navy Architectural Grid */}
              <path d="M120 120 L22 120 A98 98 0 0 0 120 218 Z" fill="#0E233C" />
              <path
                d="M42 135 L105 198 M58 128 L112 182 M32 155 L88 208 M44 176 L94 128 M68 198 L114 152"
                stroke="#8BD3DE"
                strokeOpacity="0.35"
                strokeWidth="1.1"
              />

              {/* Quadrant 4 (Bottom-Right): Crisp Pattern Grading Hatch */}
              <path d="M120 120 L120 218 A98 98 0 0 0 218 120 Z" fill="#FFFFFF" />
              <path
                d="M128 134 L184 190 M144 126 L204 186 M124 156 L168 200 M124 178 L152 206 M128 192 L192 128 M146 206 L208 144"
                stroke="#0E233C"
                strokeOpacity="0.24"
                strokeWidth="1.1"
              />
              <polygon points="154,120 216,120 182,196" fill="#132B47" fillOpacity="0.92" />

              {/* Crosshair Spokes */}
              <line x1="120" y1="22" x2="120" y2="218" stroke="#0E233C" strokeWidth="1.5" />
              <line x1="22" y1="120" x2="218" y2="120" stroke="#0E233C" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="mt-4">
            <p className="font-mono text-xs font-bold tracking-wider text-[#0E233C]">
              DESIGN PLANNING
            </p>
            <p className="mt-0.5 text-xs font-semibold text-[#1C707D]">
              {lang === 'ko' ? '(바이어 맞춤형 디자인 기획력)' : '(Customer-Oriented Design)'}
            </p>
          </div>
        </div>

        {/* CONNECTOR 2: Design Hub -> Double N Emblem -> 3 Categories */}
        <div className="relative hidden h-full items-center justify-center lg:flex" aria-hidden="true">
          <svg viewBox="0 0 96 420" fill="none" className="h-[420px] w-full">
            {/* Solid Teal Arrow from Design Wheel to Center NN Hub */}
            <line x1="0" y1="210" x2="28" y2="210" stroke="#1C707D" strokeWidth="2" />
            <polyline points="21,205 28,210 21,215" stroke="#1C707D" strokeWidth="2" fill="none" />

            {/* Dashed Tree Distribution to 3 Product Categories */}
            {/* Top Branch -> Casual Wear */}
            <path
              d="M 48 184 V 68 H 92"
              stroke={isCategoryActive('casual') ? '#1C707D' : '#0E233C'}
              strokeOpacity={isCategoryActive('casual') ? 1 : 0.4}
              strokeWidth={isCategoryActive('casual') ? 2 : 1.3}
              strokeDasharray="3 3"
              className="transition-all duration-150"
            />
            <polyline
              points="86,64 93,68 86,72"
              stroke={isCategoryActive('casual') ? '#1C707D' : '#0E233C'}
              strokeOpacity={isCategoryActive('casual') ? 1 : 0.55}
              strokeWidth="1.5"
              fill="none"
            />

            {/* Middle Branch -> Active Wear */}
            <line
              x1="68"
              y1="210"
              x2="92"
              y2="210"
              stroke={isCategoryActive('active') ? '#1C707D' : '#0E233C'}
              strokeOpacity={isCategoryActive('active') ? 1 : 0.4}
              strokeWidth={isCategoryActive('active') ? 2 : 1.3}
              strokeDasharray="3 3"
              className="transition-all duration-150"
            />
            <polyline
              points="86,206 93,210 86,214"
              stroke={isCategoryActive('active') ? '#1C707D' : '#0E233C'}
              strokeOpacity={isCategoryActive('active') ? 1 : 0.55}
              strokeWidth="1.5"
              fill="none"
            />

            {/* Bottom Branch -> Uniform */}
            <path
              d="M 48 236 V 352 H 92"
              stroke={isCategoryActive('uniform') ? '#1C707D' : '#0E233C'}
              strokeOpacity={isCategoryActive('uniform') ? 1 : 0.4}
              strokeWidth={isCategoryActive('uniform') ? 2 : 1.3}
              strokeDasharray="3 3"
              className="transition-all duration-150"
            />
            <polyline
              points="86,348 93,352 86,356"
              stroke={isCategoryActive('uniform') ? '#1C707D' : '#0E233C'}
              strokeOpacity={isCategoryActive('uniform') ? 1 : 0.55}
              strokeWidth="1.5"
              fill="none"
            />
          </svg>

          {/* Center NN Circular Hub Lockup */}
          <div className="absolute top-1/2 left-1/2 flex h-13 w-13 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#0E233C] bg-white shadow-xs">
            <BrandMark className="h-[22px] w-[31px]" />
          </div>
        </div>

        {/* ZONE 3: 3 MAJOR PRODUCT CATEGORIES */}
        <div>
          <div className="mb-4 flex items-baseline justify-between gap-2">
            <div>
              <p className="font-display text-lg font-extrabold tracking-tight text-[#0E233C]">
                {lang === 'ko' ? '3대 제품 카테고리' : '3 MAJOR CATEGORIES'}
                <span className="ml-2 font-mono text-[11px] font-semibold text-[#1C707D]">
                  {lang === 'ko' ? '3 MAJOR CATEGORIES' : 'APPLICATION / GARMENT'}
                </span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {GARMENT_APPLICATIONS.map((app) => {
              const catId = app.id as CategoryId;
              const meta = CATEGORY_META[catId];
              const active = isCategoryActive(catId);

              return (
                <div
                  key={app.id}
                  onMouseEnter={() => setHoveredCategory(catId)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  onFocus={() => setHoveredCategory(catId)}
                  onBlur={() => setHoveredCategory(null)}
                  tabIndex={0}
                  className={`grid grid-cols-1 items-center gap-4 rounded-xl border bg-white p-4 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C707D] sm:grid-cols-12 sm:p-5 ${
                    active
                      ? 'border-[#1C707D] shadow-sm ring-1 ring-[#1C707D]'
                      : 'border-[#0E233C]/15 hover:border-[#1C707D]/60'
                  }`}
                >
                  {/* Left: Text Specs */}
                  <div className="sm:col-span-7">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h4 className="font-display text-base font-extrabold tracking-tight text-[#0E233C] sm:text-lg">
                        {meta.code}
                      </h4>
                      <span className="text-xs font-bold text-[#1C707D]">
                        ({lang === 'ko' ? meta.koLabel : meta.enLabel})
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-relaxed text-[#0E233C]/80 sm:text-[13px]">
                      {meta.shortItems[lang]}
                    </p>

                    {meta.callouts && (
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {meta.callouts.map((c) => (
                          <span
                            key={c}
                            className="font-mono text-[10px] font-semibold text-[#1C707D]"
                          >
                            · {c}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="mt-2.5 font-mono text-[11px] font-medium text-[#0E233C]/55">
                      {lang === 'ko' ? '주요 바이어: ' : 'Clients: '}
                      <span className="font-semibold text-[#0E233C]">{app.clients.join(' · ')}</span>
                    </p>
                  </div>

                  {/* Right: Flat Garment Spec Preview */}
                  <div className="overflow-hidden rounded-lg border border-[#0E233C]/10 bg-[#F6F6F3] sm:col-span-5">
                    <CategoryGarmentVisual id={catId} />
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
