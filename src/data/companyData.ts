import heroAtelierImg from '../assets/images/hero_garment_atelier_1794751505604.jpg';
import portalCompanyImg from '../assets/images/portal_company_hq_1794751506763.jpg';
import portalBusinessImg from '../assets/images/portal_business_garment_1794751507106.jpg';
import garmentValueChainImg from '../assets/images/garment_value_chain_1794751508047.jpg';
import textileLabImg from '../assets/images/textile_membrane_lab_1794751509204.jpg';
import laminatingFabricImg from '../assets/images/laminating_fabric_1794842321418.jpg';
import apparelDesignStudioImg from '../assets/images/apparel_design_studio_1794842317136.jpg';
import ncrotexTrailBgImg from '../assets/images/ncrotex_trail_bg.jpg';
import waterproofBootsBgImg from '../assets/images/hero_waterproof_boots.jpg';
import partnerK2Img from '../assets/images/partners/partner_k2.png';
import partnerNepaImg from '../assets/images/partners/partner_nepa.png';
import partnerMilletImg from '../assets/images/partners/partner_millet.png';
import partnerEiderImg from '../assets/images/partners/partner_eider.png';
import partnerRoadfaceImg from '../assets/images/partners/partner_roadface.png';
import partnerHansImg from '../assets/images/partners/partner_hans.png';
import partnerTopsImg from '../assets/images/partners/partner_tops.png';
import partnerGkImg from '../assets/images/partners/partner_gk.png';
import fabricTestingLabImg from '../assets/images/fabric_testing_lab_1794903313171.jpg';
import heroGarmentFactoryImg from '../assets/images/hero_garment_factory_clean_1795176068689.jpg';
import contactWorldMapBgImg from '../assets/images/contact_world_map_bg_1795176723164.jpg';

export type Language = 'ko' | 'en';

export type PortalPillar = 'company' | 'garment' | 'textile' | 'lab';
export type CompanyTab = 'message' | 'ci' | 'history' | 'organization' | 'edge';
export type GarmentTab = 'oem' | 'facilities';
export type TextileTab = 'chain' | 'functional' | 'industrial';
export type RndTab = 'center' | 'laminating';

export const ASSETS = {
  heroAtelier: heroAtelierImg,
  heroGarmentFactory: heroGarmentFactoryImg,
  contactWorldMapBg: contactWorldMapBgImg,
  portalCompany: portalCompanyImg,
  portalBusiness: portalBusinessImg,
  garmentValueChain: garmentValueChainImg,
  textileLab: textileLabImg,
  fabricTestingLab: fabricTestingLabImg,
  laminatingFabric: laminatingFabricImg,
  apparelDesignStudio: apparelDesignStudioImg,
  ncrotexTrailBg: ncrotexTrailBgImg,
  waterproofBootsBg: waterproofBootsBgImg,
  ncrotexBi: '/assets/aistudio/image_a5b1c172.png',
  ncrotexSlogan: '/assets/aistudio/image_7d0af847.png',
  testLabCatalog: '/assets/aistudio/image_1abfcdce.png',
  ciHorizontal: '/assets/aistudio/CI_hor_DNI_Gemini_be7a6514.png',
  ciVertical: '/assets/aistudio/CI_ver_DNI_Gemini_a07c3e00.png',
  bizCard: '/assets/aistudio/Biz_card_DNI_Gemini_bc43380b.png',
  ceoMessageBg: '/assets/aistudio/image_ec1365fd.png',
};

export interface FlashSlide {
  id: string;
  index: string;
  kicker: { ko: string; en: string };
  headlineTop: string;
  headlineBottom: string;
  subline: { ko: string; en: string };
  accentWord: string;
}

export const FLASH_SLIDES: FlashSlide[] = [
  {
    id: 'trust',
    index: '01',
    kicker: {
      ko: '글로벌 어패럴 OEM · 기능성 텍스타일 파트너',
      en: 'Global Apparel OEM & Functional Textile Partner',
    },
    headlineTop: 'Crafting Trust,',
    headlineBottom: 'Wearing Innovation.',
    subline: {
      ko: '20년 이상의 텍스타일 기술력과 글로벌 가먼트 생산 역량으로 신뢰를 직조합니다.',
      en: 'Weaving over two decades of textile engineering with agile global garment manufacturing.',
    },
    accentWord: 'Innovation.',
  },
  {
    id: 'garment',
    index: '02',
    kicker: {
      ko: '가먼트 OEM 밸류체인 · 디자인에서 양산까지',
      en: 'Garment OEM Value Chain · Design to Delivery',
    },
    headlineTop: 'Technology + Design',
    headlineBottom: 'Into Every Stitch.',
    subline: {
      ko: '캐주얼·액티브웨어·메디컬 유니폼에 특화된 정밀 봉제, 프린팅, 자수 및 엠벨리쉬먼트.',
      en: 'Precision printing, embroidery, and embellishment across casual, activewear, and medical scrubs.',
    },
    accentWord: 'Stitch.',
  },
  {
    id: 'textile',
    index: '03',
    kicker: {
      ko: '하이퍼포먼스 테크니컬 텍스타일',
      en: 'High-Performance Technical Textiles',
    },
    headlineTop: 'Technical Textile',
    headlineBottom: 'With Trendy Fabrics.',
    subline: {
      ko: '첨단 기능성 원단의 개발, 제조기술과 패션 트렌드를 결합한 차별성.',
      en: 'Differentiated integration of advanced functional fabric R&D, manufacturing technology, and fashion trends.',
    },
    accentWord: 'Fabrics.',
  },
  {
    id: 'mission',
    index: '04',
    kicker: {
      ko: '더블엔인터내셔널 기업 미션',
      en: 'Double N International Corporate Mission',
    },
    headlineTop: 'Pleasure of Working',
    headlineBottom: 'And Happy Life.',
    subline: {
      ko: '임직원의 보람과 고객의 신뢰를 바탕으로 새로운 가치를 추구하는 기업.',
      en: 'A reliable company pursuing new values through the pleasure of working and happy life.',
    },
    accentWord: 'Life.',
  },
];

export const HERO_METRICS = [
  {
    value: '20+',
    unit: { ko: '년', en: 'Years' },
    label: { ko: '섬유·가먼트 업력', en: 'Textile & Garment Expertise' },
  },
  {
    value: '96',
    unit: { ko: '개 라인', en: 'Lines' },
    label: { ko: '베트남 4대 생산거점', en: 'Vietnam Production Lines' },
  },
  {
    value: '2,600+',
    unit: { ko: '명', en: 'Staff' },
    label: { ko: '글로벌 숙련 생산 인력', en: 'Skilled Manufacturing Workforce' },
  },
  {
    value: '20M+',
    unit: { ko: 'PCS/년', en: 'PCS/Yr' },
    label: { ko: '연간 최대 생산 캐파', en: 'Annual Partner Capacity' },
  },
];

export interface HistoryEvent {
  id: string;
  era: 'foundation' | 'merger' | 'growth';
  year: string;
  month: string;
  date: string;
  badge?: { ko: string; en: string };
  title: { ko: string; en: string };
  subtitle?: { ko: string; en: string };
  isMerger?: boolean;
  isLatest?: boolean;
}

export const HISTORY_EVENTS: HistoryEvent[] = [
  {
    id: '2008',
    era: 'foundation',
    year: '2008',
    month: 'MARCH.',
    date: '2008. 03',
    title: { ko: "N'CROTEX", en: "N'CROTEX" },
    subtitle: {
      ko: 'NANO MBR Textile business',
      en: 'NANO MBR Textile business',
    },
  },
  {
    id: '2009',
    era: 'foundation',
    year: '2009',
    month: 'MAY.',
    date: '2009. 05',
    title: {
      ko: 'Promoted functional textiles for Outerwear and footwear',
      en: 'Promoted functional textiles for Outerwear and footwear',
    },
  },
  {
    id: '2010',
    era: 'foundation',
    year: '2010',
    month: 'OCTOBER.',
    date: '2010. 10',
    title: {
      ko: 'Rolled out the 1st product in outdoor market',
      en: 'Rolled out the 1st product in outdoor market',
    },
  },
  {
    id: '2016',
    era: 'foundation',
    year: '2016',
    month: 'MARCH.',
    date: '2016. 03',
    title: { ko: 'B&B International', en: 'B&B International' },
    subtitle: {
      ko: 'Launched as garment Vendor',
      en: 'Launched as garment Vendor',
    },
  },
  {
    id: '2020',
    era: 'merger',
    year: '2020',
    month: 'MARCH.',
    date: '2020. 03',
    badge: { ko: 'CORPORATE MERGER', en: 'CORPORATE MERGER' },
    title: { ko: 'Double N International', en: 'Double N International' },
    subtitle: {
      ko: 'Two companies merged into one and changed company name',
      en: 'Two companies merged into one and changed company name',
    },
    isMerger: true,
  },
  {
    id: '2022',
    era: 'growth',
    year: '2022',
    month: 'DECEMBER',
    date: '2022. 12',
    title: {
      ko: '경기도 수출프런티어기업 선정',
      en: 'Gyeonggi-do Export Frontier Company',
    },
    subtitle: {
      ko: 'Gyeonggi-do Export Frontier Company',
      en: 'Selected for export growth excellence',
    },
  },
  {
    id: '2024',
    era: 'growth',
    year: '2024',
    month: 'AUGUST',
    date: '2024. 08',
    title: {
      ko: '메디컬스크럽 전문라인 셋업',
      en: 'Specialized Medical Scrub Line Setup',
    },
    subtitle: {
      ko: 'Specialized Medical Scrub Line Setup',
      en: 'Dedicated OEM medical uniform manufacturing lines',
    },
  },
  {
    id: '2026',
    era: 'growth',
    year: '2026',
    month: 'APRIL',
    date: '2026. 04',
    badge: { ko: 'LATEST MILESTONE', en: 'LATEST MILESTONE' },
    title: {
      ko: '경영혁신형중소기업인증 (Mainbiz certified)',
      en: 'Management Innovation SME (Mainbiz Certified)',
    },
    isLatest: true,
  },
];

export const CORE_VALUES = [
  {
    key: 'Passion',
    ko: '열정',
    desc: {
      ko: '제품과 품질에 대한 끊임없는 몰입으로 최고의 완성도를 구현합니다.',
      en: 'Unwavering dedication to product mastery and manufacturing excellence.',
    },
  },
  {
    key: 'Respect',
    ko: '존중',
    desc: {
      ko: '동료와 파트너, 고객의 가치를 존중하며 건강한 협업 문화를 지향합니다.',
      en: 'Mutual respect across colleagues, factory partners, and global clients.',
    },
  },
  {
    key: 'Effort',
    ko: '노력',
    desc: {
      ko: '현장의 작은 공정 하나까지 놓치지 않는 성실함과 실행력을 발휘합니다.',
      en: 'Diligent execution from lab sample testing through final shipment.',
    },
  },
  {
    key: 'Cooperate',
    ko: '협력',
    desc: {
      ko: '개발과 글로벌 봉제 생산 거점 간의 유기적 협력을 극대화합니다.',
      en: 'Seamless synergy between development teams and global manufacturing hubs.',
    },
  },
  {
    key: 'Challenge',
    ko: '도전',
    desc: {
      ko: '변화하는 글로벌 패션·산업 시장에 맞서 새로운 기능과 카테고리에 도전합니다.',
      en: 'Continuous innovation into new apparel categories and advanced materials.',
    },
  },
];

export interface LeadershipMember {
  id: string;
  role: string;
  name: string;
  badgeTone: 'navy' | 'teal';
  major: { ko: string; en: string };
  careers: { company: string; title: string; highlight?: boolean }[];
  linkedOrgIds: string[];
}

export const ORG_DIVISIONS = [
  {
    id: 'board',
    kicker: 'TOP GOVERNANCE',
    name: { ko: 'Board of Director', en: 'Board of Director' },
    sub: { ko: '최고 의사결정 기구', en: 'Executive Board' },
    role: {
      ko: '전사 중장기 비전 수립, 글로벌 파트너십 및 투자 의사결정 총괄',
      en: 'Corporate strategy, global partner governance, and long-term capital allocation.',
    },
  },
  {
    id: 'plan',
    kicker: 'STRATEGIC STAFF',
    name: { ko: 'Plan & Control', en: 'Plan & Control' },
    sub: { ko: '경영기획 · 전략통제', en: 'Corporate Planning & Control' },
    role: {
      ko: '원가·납기·생산 캐파 통합 플래닝 및 사업부 간 자원 조율',
      en: 'Integrated production planning, cost control, and cross-division coordination.',
    },
  },
  {
    id: 'admin',
    kicker: 'GENERAL MANAGING',
    name: { ko: 'Admin.', en: 'Admin.' },
    sub: { ko: '경영지원 & 재무', en: 'Finance & Administration' },
    role: {
      ko: '재무, 무역 수출입 통관, 인사 및 글로벌 오피스 운영 지원',
      en: 'Finance, export/import logistics, compliance, and corporate operations.',
    },
  },
  {
    id: 'sales',
    kicker: 'MARKETING',
    name: { ko: 'Sales', en: 'Sales' },
    sub: { ko: '글로벌 영업총괄', en: 'Global Sales & Marketing' },
    role: {
      ko: '미주·유럽·국내 글로벌 바이어 OEM 수주, 바이어 맞춤형 디자인 제안 및 오더 핸들링',
      en: 'Global buyer account management, OEM merchandising, and custom apparel development.',
    },
  },
  {
    id: 'lab',
    kicker: 'R&D',
    name: { ko: 'Lab', en: 'Lab' },
    sub: { ko: '소재&의류 연구개발', en: 'Textile & Apparel R&D' },
    role: {
      ko: '내수압·통기도·세탁견뢰도·인장강도 등 정밀 시험 및 신소재·의류 기술 개발',
      en: 'Precision QA testing and advanced functional textile & garment engineering.',
    },
  },
  {
    id: 'garment',
    kicker: '의류',
    name: { ko: 'Garment', en: 'Garment' },
    sub: { ko: '글로벌 의류 OEM/ODM', en: 'Global Apparel OEM/ODM' },
    role: {
      ko: '캐주얼·액티브웨어·메디컬 스크럽 중심 글로벌 의류 OEM/ODM 생산 총괄',
      en: 'Global OEM/ODM garment production across casualwear, activewear, and medical scrubs.',
    },
  },
  {
    id: 'textile',
    kicker: '소재',
    name: { ko: 'Textile', en: 'Textile' },
    sub: { ko: "N'CROTEX® 테크니컬 텍스타일", en: "N'CROTEX® Technical Textiles" },
    role: {
      ko: '기능성 나노 멤브레인 원단 및 아웃도어·산업용 하이퍼포먼스 소재 공급',
      en: 'High-performance membrane textiles for outerwear, activewear, and industrial markets.',
    },
  },
];

export const LEADERSHIP_MEMBERS: LeadershipMember[] = [
  {
    id: 'ceo',
    role: 'CEO',
    name: 'HJ.KIM',
    badgeTone: 'navy',
    major: { ko: 'Textile Engineering · 섬유공학 전공', en: 'Textile Engineering' },
    careers: [
      { company: 'DNI', title: 'Director', highlight: true },
      { company: 'SHOEWORKS', title: 'Manager' },
    ],
    linkedOrgIds: ['board', 'plan'],
  },
  {
    id: 'cfo',
    role: 'CFO',
    name: 'TH.KIM',
    badgeTone: 'teal',
    major: { ko: 'Economics · 경제학 전공', en: 'Economics' },
    careers: [
      { company: 'NCROTEX', title: 'Director', highlight: true },
      { company: 'FT ENE', title: 'Manager' },
    ],
    linkedOrgIds: ['plan', 'admin', 'textile'],
  },
  {
    id: 'cmo',
    role: 'CMO',
    name: 'JH.SONG',
    badgeTone: 'navy',
    major: { ko: 'Clothing and Textiles · 의류직물학 전공', en: 'Clothing and Textiles' },
    careers: [
      { company: 'Purun textile', title: 'Director', highlight: true },
      { company: 'HANSAE', title: 'Manager' },
    ],
    linkedOrgIds: ['sales', 'garment'],
  },
  {
    id: 'cto',
    role: 'CTO',
    name: 'IH.BANG',
    badgeTone: 'navy',
    major: { ko: 'Textile Engineering · 섬유공학 전공', en: 'Textile Engineering' },
    careers: [
      { company: 'Purun textile', title: 'Manager', highlight: true },
      { company: 'NAMYANG', title: 'Assistant Manager' },
    ],
    linkedOrgIds: ['lab', 'textile'],
  },
];

export const COMPETITIVE_EDGES = [
  {
    num: '01',
    kicker: { ko: '전문성 · EXPERIENCE', en: 'EXPERIENCE' },
    title: 'Expertise',
    tagline: 'Technical Textiles & Global OEM/ODM',
    tone: 'teal' as const,
    points: {
      ko: [
        'Working for over 20 years in textile and garment field.',
        'Accumulated long experience',
      ],
      en: [
        'Working for over 20 years in textile and garment field.',
        'Accumulated long experience',
      ],
    },
  },
  {
    num: '02',
    kicker: { ko: '신뢰성 · AGILITY', en: 'AGILITY' },
    title: 'Reliability',
    tagline: 'Agile Sourcing & Global Supply Chain',
    tone: 'navy' as const,
    points: {
      ko: [
        "Every single effort has been made for customers' needs",
        'Speedy response to ever-changing market',
      ],
      en: [
        "Every single effort has been made for customers' needs",
        'Speedy response to ever-changing market',
      ],
    },
  },
  {
    num: '03',
    kicker: { ko: '품질혁신 · ASSURANCE', en: 'ASSURANCE' },
    title: 'Quality',
    tagline: "N'CROTEX® Lab & Certified QA",
    tone: 'teal' as const,
    points: {
      ko: ['Continuous R&D.', 'Quality Assurance System'],
      en: ['Continuous R&D.', 'Quality Assurance System'],
    },
  },
];

export const GARMENT_APPLICATIONS = [
  {
    id: 'casual',
    category: 'CASUAL WEAR',
    title: { ko: '캐주얼 웨어', en: 'Casual Wear' },
    items: {
      ko: ['후드 티셔츠 (Hoodie)', '레깅스 (Leggings)', '집업 재킷 (Zip-Up)', '폴로 셔츠 (Polo Shirts)', '라이선스 스포츠 리그 플리스'],
      en: ['Hoodies & Fleece', 'Leggings', 'Zip-Up Jackets', 'Polo Shirts', 'Licensed Sports League Fleece'],
    },
    clients: ['Rosio', 'PRO CLUB'],
    summary: {
      ko: '고밀도 나염, 입체 자수, 엠벨리쉬먼트 등 특수가공 기술을 결합한 고부가가치 캐주얼 및 라이선스 스포츠 의류 생산.',
      en: 'High-value casual apparel and licensed sports league jerseys featuring specialty printing, embroidery, and embellishment.',
    },
  },
  {
    id: 'active',
    category: 'ACTIVE WEAR',
    title: { ko: '액티브 웨어', en: 'Active Wear' },
    items: {
      ko: ['액티브 재킷 (Active Jacket)', '요가·애슬레저 웨어 (Yoga Wear)', '퍼포먼스 니트웨어', '흡한속건·고신축 기능성 의류'],
      en: ['Active Jackets', 'Yoga & Athleisure Wear', 'Performance Knitwear', 'High-Stretch Technical Apparel'],
    },
    clients: ['VOGO Athletica', 'VIP Performance', 'A Core'],
    summary: {
      ko: '인체공학적 패턴 설계와 플랫록(Flatlock) 봉제, 기능성 원단 매칭으로 글로벌 애슬레저 브랜드의 퍼포먼스를 구현합니다.',
      en: 'Ergonomic activewear engineered with flatlock seaming and technical stretch fabrics for global athletic brands.',
    },
  },
  {
    id: 'uniform',
    category: 'MEDICAL & UNIFORM',
    title: { ko: '메디컬 스크럽 · 유니폼', en: 'Medical Scrubs & Uniforms' },
    items: {
      ko: ['병원용 메디컬 스크럽 (Medical Scrub)', '고내구·고통기성 기능성 원단', '이중 스티치 모던 V넥', '펜 슬롯 체스트 포켓 & 다용도 2포켓'],
      en: ['Hospital Medical Scrubs', 'Durable Breathable Fabric', 'Double-Stitched Modern V-Neck', 'Chest Pocket with Pen Slot & 2 Roomy Pockets'],
    },
    clients: ['DAGACCI Medical Uniforms'],
    summary: {
      ko: '반복 세탁에도 형태가 유지되는 내구성과 쾌적한 통기성을 갖춘 북미 주력 메디컬 유니폼 OEM 라인업.',
      en: 'North American core medical uniform OEM program engineered for durability, breathability, and clinical utility.',
    },
  },
];

export const GARMENT_PORTFOLIO_TRAJECTORY = [
  {
    segment: { ko: '유니폼 (Medical & Uniform)', en: 'Uniform (Medical Scrubs)' },
    clients: 'DAGACCI Medical Uniforms',
    leap: 90,
    growing: 80,
    stabilization: 50,
    color: '#0E233C',
  },
  {
    segment: { ko: '액티브 웨어 (Active Wear)', en: 'Active Wear' },
    clients: 'VOGO Athletica · VIP Performance · A Core',
    leap: 5,
    growing: 10,
    stabilization: 30,
    color: '#1C707D',
  },
  {
    segment: { ko: '캐주얼 웨어 (Casual Wear)', en: 'Casual Wear' },
    clients: 'Rosio · PRO CLUB',
    leap: 5,
    growing: 10,
    stabilization: 20,
    color: '#527993',
  },
];

export const VIETNAM_FACTORIES = [
  {
    code: 'FACTORY_01',
    name: 'DG WIN VIETNAM JSC',
    location: 'Thanh Hoa Province, Vietnam',
    address: 'Lien Pho Village, Tho Nguyen Ward, Tho Xuan District, Thanh Hoa Province, Vietnam',
    contact: 'Tel +84 983 787 878 · Fax +84 373 772 064',
    space: '12,000 SQM',
    extraSpace: { ko: '3층 기숙사(36,000 SQM) 및 사내 식당·외부 물류창고 완비', en: 'Canteen, external warehouse & 3-floor dormitory (36,000 SQM)' },
    employees: '600',
    lines: '12',
    capacity: '1.8M – 2.5M PCS/Yr',
    clients: ['MAX INTERNATIONAL', 'GD GLOTEX', 'EK LINE', 'KUNYOUNG TEXTILES', 'ESPOIR'],
    specialty: {
      ko: '전담 테크니컬 부서 및 체계적 샘플 룸을 갖춘 중견 우븐·니트 가먼트 생산 거점',
      en: 'Dedicated technical engineering department and structured woven/knit OEM lines.',
    },
  },
  {
    code: 'FACTORY_02',
    name: 'SON HA - THAI BINH BRANCH',
    location: 'Thai Binh Province, Vietnam',
    address: 'KM06, Vu Ninh Village, Kien Xuong District, Thai Binh Province, Vietnam',
    contact: 'Tel +84 363 524 187 / 189 · Fax +84 363 524 188',
    space: '29,200 SQM',
    extraSpace: { ko: '대규모 자동화 재단실 및 다층 물류 랙 시스템 구축', en: 'High-volume automated cutting & multi-tier warehouse logistics' },
    employees: '1,300',
    lines: '63',
    capacity: '12.0M – 17.0M PCS/Yr',
    clients: ['HOTCHILLYS', 'WALMART', 'TARGET', 'HANES'],
    specialty: {
      ko: '63개 생산 라인과 1,300명의 숙련 인력을 보유한 메가 볼륨 리테일·액티브웨어 핵심 기지',
      en: 'Flagship mega-scale 63-line facility serving global mass retail and thermal activewear programs.',
    },
  },
  {
    code: 'FACTORY_03',
    name: 'BUT THAP GARMENT JSC',
    location: 'Bac Ninh Province, Vietnam',
    address: 'But Thap Hamlet, Dinh To Commune, Thuan Thanh District, Bac Ninh Province, Vietnam',
    contact: 'maybutthap@gmail.com',
    space: '4,530 SQM',
    extraSpace: { ko: '하노이 인접 물류 접근성과 유연한 다품종 소량·프리미엄 라인 운영', en: 'Agile Bac Ninh logistics hub tailored for high-spec fashion lines' },
    employees: '200',
    lines: '7',
    capacity: '1.2M – 1.8M PCS/Yr',
    clients: ['RALPH LAUREN', 'LA BLANCA', 'KENNETH COLE'],
    specialty: {
      ko: '글로벌 프리미엄 디자이너 브랜드 기준의 고난도 스윔웨어·캐주얼 정밀 봉제 거점',
      en: 'Precision specialty facility meeting strict standards of premium designer apparel labels.',
    },
  },
  {
    code: 'FACTORY_04',
    name: 'NGHE AN ABC JSC',
    location: 'Nghe An Province, Vietnam',
    address: 'Thanh Tien Commune, Thanh Chuong District, Nghe An Province, Vietnam',
    contact: 'tuongvan@abcgroup.vn',
    space: '49,020 SQM',
    extraSpace: { ko: '49,020 SQM 초대형 부지 내 일관 원단 검사·재단·봉제·패킹 라인', en: 'Expansive 49,020 SQM campus with integrated inspection, cutting & packing' },
    employees: '500',
    lines: '14',
    capacity: '5.0M – 7.0M PCS/Yr',
    clients: ['ZARA', 'e-LAND', 'DICKIES', 'FOREVER 21'],
    specialty: {
      ko: '글로벌 SPA 및 워크웨어 브랜드의 빠른 회전율과 대량 오더에 최적화된 대규모 캠퍼스',
      en: 'High-speed campus optimized for global fast-fashion and durable workwear programs.',
    },
  },
];

export const TEXTILE_DATA = {
  valueChain: ['Yarns', 'Weaving', 'Electro-Spun Membrane', 'Finishing'],
  functionalApps: [
    {
      title: { ko: '스포츠 · 아웃도어', en: 'Sports & Active (Outer & Footwear)' },
      items: ['Running', 'Mountain Gear', 'Winter & Water Sports', 'Cycling & Bike'],
    },
    {
      title: { ko: '유니폼 · 워크웨어', en: 'Uniform & Workwear (Outer & Footwear)' },
      items: ['Company Uniform', 'Firefighter Gear', 'Police, Army & Security', 'Construction & Factory'],
    },
    {
      title: { ko: '헬스케어 · 메디컬', en: 'Health & Medical' },
      items: ['PPE (Personal Protective Equipment)', 'Scrub Suit', 'Reusable Cloth Face Mask', 'Window Shield Against Air Pollution'],
    },
  ],
  industrialApps: [
    {
      title: { ko: '자동차 전장 (Automotive)', en: 'Automotive' },
      items: ['Lighting Vent', 'Electronic Control Unit (ECU)', 'Sensors', 'Motors'],
    },
    {
      title: { ko: '전자 · 통신 (Electronics)', en: 'Electronics' },
      items: ['Lighting', 'Telecom System', 'Cell Phone Acoustic/Waterproof', 'Portable Electronics'],
    },
    {
      title: { ko: '바이오 · 메디컬 (Bio)', en: 'Bio' },
      items: ['Medical Patch', 'Wound Dressing', 'Cell Cultures'],
    },
  ],
  laminatingMachines: [
    '1st Solvent Laminating Machine',
    '2nd Hotmelt Laminating Machine',
    '3rd Hotmelt Laminating Machine',
    'Preparing & Tension Control Unit',
    'Automated Fabric Inspection',
    'Roll-to-Roll Precision Packing',
  ],
  labEquipment: [
    { index: '01', name: 'Hydrostatic tester', ko: '내수압 시험기', en: 'Waterproof Pressure' },
    { index: '02', name: 'Thermo-hygrostat', ko: '항온항습기', en: 'Temp & Humidity Chamber' },
    { index: '03', name: 'Air permeability', ko: '공기투과도 시험기', en: 'Breathability Airflow' },
    { index: '04', name: 'CRE machine', ko: '만능 인장강도 시험기', en: 'Tensile & Tear Strength' },
    { index: '05', name: 'Digital viscometer', ko: '디지털 점도계', en: 'Resin & Adhesive Viscosity' },
    { index: '06', name: 'Digital balance', ko: '정밀 전자 저울', en: 'Analytical Weight' },
    { index: '07', name: 'Wascator', ko: '표준 세탁 견뢰도 시험기', en: 'ISO Wash Durability' },
    { index: '08', name: 'Tumble dryer', ko: '표준 텀블 건조기', en: 'Thermal Drying Test' },
    { index: '09', name: 'Fabric cutter', ko: '원단 정밀 재단기', en: 'Precision Textile Cutting' },
    { index: '10', name: 'Sample cutter #1', ko: '원형 시편 재단기 #1', en: 'GSM Specimen Die #1' },
    { index: '11', name: 'Sample cutter #2', ko: '원형 시편 재단기 #2', en: 'GSM Specimen Die #2' },
    { index: '12', name: 'Hotwind dryer', ko: '열풍 건조기', en: 'Hot-Air Curing & Drying' },
    { index: '13', name: 'Mixer', ko: '용액 교반기', en: 'Coating Solution Mixing' },
    { index: '14', name: 'Water heater', ko: '온수 순환 장치', en: 'Temperature Control Bath' },
    { index: '15', name: 'Distiller', ko: '증류수 제조 장치', en: 'Purified Lab Water' },
    { index: '16', name: 'Spray tester', ko: '발수도 스프레이 시험기', en: 'Water Repellency Rating' },
  ],
  customers: ['NEPA', 'mont-bell', 'NorthCape', 'RESPILON', 'ziben', 'HYUNDAI'],
};

export interface ClientBrandLogo {
  name: string;
  src: string;
  alt: string;
}

export const CLIENT_BRANDS: ClientBrandLogo[] = [
  { name: 'K2 SAFETY', src: partnerK2Img, alt: 'K2 Safety' },
  { name: 'NEPA SAFETY', src: partnerNepaImg, alt: 'NEPA Safety' },
  { name: 'MILLET SAFETY', src: partnerMilletImg, alt: 'Millet Safety' },
  { name: 'EIDER SAFETY', src: partnerEiderImg, alt: 'Eider Safety' },
  { name: 'ROAD FACE', src: partnerRoadfaceImg, alt: 'Road Face' },
  { name: 'HANS', src: partnerHansImg, alt: 'Hans Safety' },
  { name: 'TOPS', src: partnerTopsImg, alt: 'Tops' },
  { name: 'GK', src: partnerGkImg, alt: 'GK Safety' },
];

export const CONTACT_INFO = {
  companyKo: '(주)더블엔인터내셔널',
  companyEn: 'DOUBLE N INTERNATIONAL INC.',
  directorKo: '김태형 이사',
  directorEn: 'Thomas Kim · Director',
  addressKo: '(13209) 경기도 성남시 중원구 사기막골로 45번길 14, A동 1515호 (우림라이온스밸리 2차)',
  addressEn: 'RM 1515, A bldg., Sagimakgol-ro 45beon-gil, Jungwon-gu, Seongnam-si, Gyeonggi-do, Korea (13209)',
  tel: '+82-70-5208-8593',
  fax: '+82-2-6280-8593',
  mobile: '+82-10-4136-7469',
  emails: ['admin@doublenintl.com'],
};
