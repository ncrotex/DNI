import { Language } from '../data/companyData';

interface TextileApplicationsDiagramProps {
  lang: Language;
}

type FunctionalId = 'sports' | 'uniform' | 'medical';
type IndustrialId = 'automotive' | 'electronics' | 'bio';

interface AppCardItem<T extends string> {
  id: T;
  enTitle: string;
  enSub?: string;
  koTitle: string;
  items: string;
}

const FUNCTIONAL_ITEMS: AppCardItem<FunctionalId>[] = [
  {
    id: 'sports',
    enTitle: 'Sports & Active',
    enSub: '(Outer & Footwear)',
    koTitle: '스포츠 및 액티브 (아우터 & 아웃도어 슈즈)',
    items: 'Running / Mountain Gear / Winter & Water sports / Cycling & Bike',
  },
  {
    id: 'uniform',
    enTitle: 'Uniform & Workwear',
    enSub: '(Outer & Footwear)',
    koTitle: '유니폼 및 작업복 (아우터 & 안전화)',
    items: 'Company / Fire fighter / Police, Army, Security service / Construction, Factory, etc.',
  },
  {
    id: 'medical',
    enTitle: 'Health & Medical',
    koTitle: '보건 및 의료',
    items:
      'PPE (Personal Protective Equipment) / Scrub Suit / Reusable Cloth Face Mask / Window Shield Against Air Pollution',
  },
];

const INDUSTRIAL_ITEMS: AppCardItem<IndustrialId>[] = [
  {
    id: 'automotive',
    enTitle: 'Automotive',
    koTitle: '자동차',
    items: 'Lighting / Electronic Control Unit / Sensors / Motors',
  },
  {
    id: 'electronics',
    enTitle: 'Electronics',
    koTitle: '전자 기기',
    items: 'Lighting / Telecom. System / Cell Phone / Portable electronics',
  },
  {
    id: 'bio',
    enTitle: 'Bio',
    koTitle: '바이오',
    items: 'Medical Patch / Wound dressing / Cell Cultures',
  },
];

function FunctionalVisual({ id }: { id: FunctionalId }) {
  if (id === 'sports') {
    return (
      <svg viewBox="0 0 156 100" className="h-24 w-full" aria-hidden="true">
        <rect width="156" height="100" rx="8" fill="#F6F6F3" />
        {/* Weatherproof Outdoor Shell Jacket */}
        <path
          d="M32 18 Q43 10 54 18 L68 26 L75 56 L64 59 L60 39 V80 H26 V39 L22 59 L11 56 L18 26 Z"
          fill="#0E233C"
        />
        <line x1="43" y1="18" x2="43" y2="80" stroke="#1C707D" strokeWidth="2.2" />
        <path d="M31 44 H39 M47 44 H55" stroke="#8BD3DE" strokeWidth="1.5" strokeLinecap="round" />
        {/* Breathable Membrane Outdoor Trail Shoe */}
        <path
          d="M84 64 L96 48 L112 52 L134 62 Q144 66 142 74 H82 Z"
          fill="#132B47"
        />
        <path d="M80 74 H144 L141 80 H82 Z" fill="#1C707D" />
        <path d="M98 54 L110 58 M104 59 L116 63" stroke="#8BD3DE" strokeWidth="1.4" />
      </svg>
    );
  }

  if (id === 'uniform') {
    return (
      <svg viewBox="0 0 156 100" className="h-24 w-full" aria-hidden="true">
        <rect width="156" height="100" rx="8" fill="#F6F6F3" />
        {/* High-Vis Safety Jacket */}
        <path
          d="M32 18 L54 18 L68 27 L74 56 L64 59 L60 39 V54 H26 V39 L22 59 L12 56 L18 27 Z"
          fill="#D96B27"
        />
        <rect x="26" y="54" width="34" height="25" fill="#0E233C" />
        {/* Reflective Bands */}
        <rect x="26" y="48" width="34" height="4" fill="#E2E8F0" />
        <rect x="26" y="62" width="34" height="4" fill="#E2E8F0" />
        <line x1="43" y1="18" x2="43" y2="79" stroke="#0E233C" strokeWidth="1.5" />
        {/* Industrial Safety Work Boots */}
        <path
          d="M90 30 H112 L114 64 L138 68 Q144 70 142 78 H88 Z"
          fill="#7C5A3B"
        />
        <path d="M86 78 H144 V83 H86 Z" fill="#0E233C" />
        <line x1="92" y1="42" x2="110" y2="42" stroke="#1C707D" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 156 100" className="h-24 w-full" aria-hidden="true">
      <rect width="156" height="100" rx="8" fill="#F6F6F3" />
      {/* Navy Medical Scrub Suit (Left) */}
      <path
        d="M26 20 L36 20 L42 29 L48 20 L58 20 L67 27 L64 40 L57 38 V57 H27 V38 L20 40 L17 27 Z"
        fill="#0E233C"
      />
      <path d="M28 59 H56 L58 84 H45 L42 66 L39 84 H26 Z" fill="#132B47" />
      <rect x="46" y="33" width="7" height="8" rx="1" fill="#1C707D" />
      {/* Barrier Isolation PPE Gown (Right) */}
      <path
        d="M94 20 H118 L134 30 L138 56 L128 58 L124 38 V84 H88 V38 L84 58 L74 56 L78 30 Z"
        fill="#1C707D"
      />
      <path d="M98 20 Q106 27 114 20" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
      <line x1="88" y1="50" x2="124" y2="50" stroke="#8BD3DE" strokeWidth="1.4" strokeDasharray="3 2" />
    </svg>
  );
}

function IndustrialVisual({ id }: { id: IndustrialId }) {
  if (id === 'automotive') {
    return (
      <svg viewBox="0 0 156 100" className="h-24 w-full" aria-hidden="true">
        <rect width="156" height="100" rx="8" fill="#F6F6F3" />
        {/* Left: Pure White Microporous Vent Membrane Disc */}
        <circle cx="44" cy="50" r="28" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
        <circle cx="44" cy="50" r="21" fill="none" stroke="#1C707D" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 2" />
        {/* Right: Automotive Sensor / ECU Membrane Vent Cap */}
        <circle cx="112" cy="50" r="28" fill="#0E233C" />
        <circle cx="112" cy="50" r="22" fill="#FFFFFF" stroke="#8BD3DE" strokeWidth="1.5" />
        <circle cx="112" cy="50" r="16" fill="none" stroke="#0E233C" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="1.5 2" />
      </svg>
    );
  }

  if (id === 'electronics') {
    return (
      <svg viewBox="0 0 156 100" className="h-24 w-full" aria-hidden="true">
        <rect width="156" height="100" rx="8" fill="#F6F6F3" />
        {/* Left: Acoustic Waterproof Membrane Gasket */}
        <rect x="14" y="14" width="60" height="72" rx="6" fill="#354C66" />
        <circle cx="44" cy="50" r="22" fill="#0E233C" stroke="#8BD3DE" strokeWidth="1.6" />
        <circle cx="44" cy="50" r="14" fill="#1C707D" fillOpacity="0.35" />
        {/* Right: Smartphone Acoustic Chassis Integration */}
        <rect x="82" y="14" width="60" height="72" rx="6" fill="#0E233C" />
        <rect x="90" y="22" width="44" height="24" rx="2" fill="#132B47" stroke="#1C707D" strokeWidth="1" />
        <circle cx="112" cy="64" r="13" fill="#1C707D" fillOpacity="0.4" stroke="#8BD3DE" strokeWidth="1.2" />
        <rect x="94" y="54" width="6" height="20" rx="1" fill="#CBD5E1" fillOpacity="0.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 156 100" className="h-24 w-full" aria-hidden="true">
      <rect width="156" height="100" rx="8" fill="#F6F6F3" />
      {/* Left: Sterile Bio Filtration Discs */}
      <rect x="12" y="12" width="62" height="76" rx="6" fill="#0E233C" />
      <circle cx="28" cy="50" r="11" fill="none" stroke="#8BD3DE" strokeWidth="1.4" />
      <circle cx="44" cy="50" r="14" fill="#1C707D" fillOpacity="0.35" stroke="#8BD3DE" strokeWidth="1.4" />
      <circle cx="60" cy="50" r="11" fill="none" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="1.2" />
      {/* Right: Cell Culture Petri Dish + Porous Bio Membrane */}
      <ellipse cx="106" cy="54" rx="22" ry="18" fill="#1C707D" fillOpacity="0.22" stroke="#1C707D" strokeWidth="1.5" />
      <ellipse cx="106" cy="50" rx="20" ry="14" fill="#FFFFFF" fillOpacity="0.7" stroke="#0E233C" strokeOpacity="0.35" strokeWidth="1.2" />
      <circle cx="131" cy="64" r="14" fill="#FFFFFF" stroke="#0E233C" strokeOpacity="0.25" strokeWidth="1.2" />
      <circle cx="131" cy="64" r="9" fill="none" stroke="#1C707D" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

export function TextileApplicationsDiagram({ lang }: TextileApplicationsDiagramProps) {
  return (
    <div className="rounded-2xl border border-[#0E233C]/10 bg-[#F6F6F3] p-6 sm:p-10 lg:p-12">
      {/* Top Architectural Header Matching Reference Image */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#0E233C]/12 pb-6 lg:flex-row lg:items-end">
        <div>
          <p className="font-mono text-sm font-bold tracking-wider text-[#0E233C] sm:text-base">
            APPLICATION OF FUNCTIONAL TEXTILES
          </p>
          <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#1C707D] sm:text-3xl">
            {lang === 'ko'
              ? '기능성 텍스타일 적용 분야'
              : 'Functional Textile & Industrial Applications'}
          </h3>
        </div>

        <p className="max-w-md text-xs leading-relaxed font-medium text-[#0E233C]/75 sm:text-sm lg:text-right">
          {lang === 'ko'
            ? "더블엔인터내셔널의 N'CROTEX® 기술과 기능성 원단은 스포츠, 작업복뿐만 아니라 자동차, 전자, 바이오 등 다양한 산업 자재로 확대 적용되고 있습니다."
            : "Double N International's N'CROTEX® functional fabrics extend beyond apparel and protective workwear into automotive, electronics, and bio-industrial applications."}
        </p>
      </div>

      {/* Main 2-Column Schematic: FUNCTIONAL TEXTILES | INDUSTRIAL MATERIALS */}
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* LEFT COLUMN: FUNCTIONAL TEXTILES */}
        <div>
          <div className="mb-4">
            <h4 className="font-display text-lg font-extrabold tracking-tight text-[#0E233C] sm:text-xl">
              FUNCTIONAL TEXTILES
            </h4>
          </div>

          <div className="space-y-4">
            {FUNCTIONAL_ITEMS.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 items-center gap-4 rounded-xl border border-[#0E233C]/15 bg-white p-4 shadow-xs sm:min-h-[200px] sm:grid-cols-12 sm:p-5 lg:h-[200px]"
              >
                <div className="sm:col-span-7">
                  <p className="font-display text-base font-extrabold leading-tight text-[#0E233C] sm:text-lg">
                    {item.enTitle}
                    {item.enSub && (
                      <span className="mt-0.5 block text-sm font-bold text-[#0E233C]/90">
                        {item.enSub}
                      </span>
                    )}
                  </p>
                  <p className="mt-1.5 text-xs font-bold text-[#1C707D]">{item.koTitle}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[#0E233C]/75">
                    {item.items}
                  </p>
                </div>

                <div className="overflow-hidden rounded-lg border border-[#0E233C]/10 bg-[#F6F6F3] sm:col-span-5">
                  <FunctionalVisual id={item.id} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: INDUSTRIAL MATERIALS */}
        <div>
          <div className="mb-4">
            <h4 className="font-display text-lg font-extrabold tracking-tight text-[#0E233C] sm:text-xl">
              INDUSTRIAL MATERIALS
            </h4>
          </div>

          <div className="space-y-4">
            {INDUSTRIAL_ITEMS.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 items-center gap-4 rounded-xl border border-[#0E233C]/15 bg-white p-4 shadow-xs sm:min-h-[200px] sm:grid-cols-12 sm:p-5 lg:h-[200px]"
              >
                <div className="sm:col-span-7">
                  <h5 className="font-display text-base font-extrabold leading-tight text-[#0E233C] sm:text-lg">
                    {item.enTitle}
                  </h5>
                  <p className="mt-1.5 text-xs font-bold text-[#1C707D]">{item.koTitle}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[#0E233C]/75">
                    {item.items}
                  </p>
                </div>

                <div className="overflow-hidden rounded-lg border border-[#0E233C]/10 bg-[#F6F6F3] sm:col-span-5">
                  <IndustrialVisual id={item.id} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
