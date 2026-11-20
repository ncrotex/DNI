import { FormEvent, useState } from 'react';
import { Check, Copy, Mail, MapPin, Phone, Printer } from 'lucide-react';
import { ASSETS, CONTACT_INFO, Language } from '../data/companyData';

interface ContactSectionProps {
  lang: Language;
}

export function ContactSection({ lang }: ContactSectionProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [division, setDivision] = useState<'garment' | 'textile' | 'general'>('garment');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = async (text: string, fieldId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldId);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMsg = message.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName) {
      setErrorMsg(lang === 'ko' ? '성함을 입력해 주세요.' : 'Please enter your name.');
      return;
    }
    if (!emailPattern.test(trimmedEmail)) {
      setErrorMsg(
        lang === 'ko' ? '유효한 이메일 주소를 입력해 주세요.' : 'Please enter a valid email address.'
      );
      return;
    }
    if (trimmedMsg.length < 10) {
      setErrorMsg(
        lang === 'ko'
          ? '문의 내용을 10자 이상 입력해 주세요.'
          : 'Please enter at least 10 characters in your inquiry.'
      );
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setCompany('');
    setEmail('');
    setMessage('');
    setErrorMsg(null);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Simple Minimalist World Map Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <img
          src={ASSETS.contactWorldMapBg}
          alt=""
          className="h-full w-full object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/35" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left: Headquarters & Contact Information */}
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-semibold tracking-wider text-[#1C707D]">
              LOCATION & CONTACT
            </p>
            <h2
              className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0E233C] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              {lang === 'ko' ? '본사 위치 및 비즈니스 문의' : 'Headquarters & Inquiries'}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#0E233C]/80 sm:text-base">
              {lang === 'ko'
                ? '의류 OEM 생산 견적, 샘플 개발, 기능성 투방습 원단소싱 문의를 남겨주시면 담당 사업부에서 신속히 회신드리겠습니다.'
                : 'Reach out to our Apparel OEM or Functional Waterproof & Breathable Textile teams for program quotes, sampling, or factory capacity schedules.'}
            </p>

            {/* Corporate HQ Card */}
            <div className="mt-8 space-y-5 rounded-xl border border-[#0E233C]/15 bg-white/58 p-7 shadow-xs backdrop-blur-[2px]">
              <div>
                <p className="font-display text-base font-bold text-[#0E233C]">
                  {lang === 'ko' ? CONTACT_INFO.companyKo : CONTACT_INFO.companyEn}
                </p>
                <p className="mt-0.5 text-xs text-[#0E233C]/60">
                  {lang === 'ko' ? CONTACT_INFO.companyEn : CONTACT_INFO.companyKo}
                </p>
              </div>

              <div className="space-y-3 border-t border-[#0E233C]/10 pt-5 text-sm text-[#0E233C]/85">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1C707D]" />
                    <div>
                      <p className="leading-relaxed">
                        {lang === 'ko' ? CONTACT_INFO.addressKo : CONTACT_INFO.addressEn}
                      </p>
                      <p className="mt-1 text-xs text-[#0E233C]/60">
                        {lang === 'ko' ? CONTACT_INFO.addressEn : CONTACT_INFO.addressKo}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopy(
                        lang === 'ko' ? CONTACT_INFO.addressKo : CONTACT_INFO.addressEn,
                        'address'
                      )
                    }
                    className="inline-flex shrink-0 cursor-pointer items-center gap-1 rounded border border-[#0E233C]/18 bg-white/75 px-2.5 py-1 text-xs font-medium text-[#0E233C] hover:border-[#1C707D] hover:bg-white"
                    aria-label="Copy address"
                  >
                    {copiedField === 'address' ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#1C707D]" />
                        <span>{lang === 'ko' ? '복사됨' : 'Copied'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>{lang === 'ko' ? '복사' : 'Copy'}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#1C707D]" />
                  <span className="font-mono text-sm tabular-nums">Tel {CONTACT_INFO.tel}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Printer className="h-4 w-4 shrink-0 text-[#1C707D]" />
                  <span className="font-mono text-sm tabular-nums">Fax {CONTACT_INFO.fax}</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  {CONTACT_INFO.emails.map((em) => (
                    <div key={em} className="flex items-center justify-between gap-2">
                      <a
                        href={`mailto:${em}`}
                        className="flex items-center gap-2.5 font-mono text-sm text-[#0E233C] underline-offset-4 hover:text-[#1C707D] hover:underline"
                      >
                        <Mail className="h-4 w-4 shrink-0 text-[#1C707D]" />
                        <span>{em}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopy(em, em)}
                        className="cursor-pointer text-xs text-[#0E233C]/55 hover:text-[#1C707D]"
                        aria-label={`Copy ${em}`}
                      >
                        {copiedField === em ? (lang === 'ko' ? '복사됨' : 'Copied') : ''}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Validated B2B Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#0E233C]/15 bg-white/58 p-8 shadow-xs backdrop-blur-[2px] lg:p-10">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1C707D] text-white">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-[#0E233C]">
                    {lang === 'ko' ? '문의가 정상적으로 접수되었습니다' : 'Inquiry Received'}
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#0E233C]/75">
                    {lang === 'ko'
                      ? `${name}님(${email})의 문의 내용을 확인했습니다. 담당 사업부에서 영업일 기준 1~2일 내 회신드리겠습니다.`
                      : `Thank you, ${name}. Our team will review your inquiry and respond to ${email} within 1–2 business days.`}
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-8 cursor-pointer rounded-md bg-[#0E233C] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1C707D]"
                  >
                    {lang === 'ko' ? '추가 문의 작성하기' : 'Submit Another Inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#0E233C]">
                      {lang === 'ko' ? '파트너십 · OEM 생산 문의' : 'Request OEM Quote or Sample'}
                    </h3>
                    <p className="mt-1 text-xs text-[#0E233C]/65">
                      {lang === 'ko'
                        ? '성함, 이메일 및 문의 분야를 입력해 주세요.'
                        : 'Complete the form below to connect directly with our merchandising and engineering leads.'}
                    </p>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#0E233C]"
                      >
                        {lang === 'ko' ? '성함 *' : 'Full Name *'}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={lang === 'ko' ? '홍길동' : 'Thomas Kim'}
                        className="mt-1.5 w-full rounded-md border border-[#0E233C]/18 bg-white/65 px-3.5 py-2.5 text-sm text-[#0E233C] outline-none transition-colors placeholder:text-[#0E233C]/45 focus:border-[#1C707D] focus:bg-white/90"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-semibold text-[#0E233C]"
                      >
                        {lang === 'ko' ? '회사 / 브랜드명' : 'Company / Brand'}
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder={lang === 'ko' ? '(주)OO어패럴' : 'Global Apparel Brand'}
                        className="mt-1.5 w-full rounded-md border border-[#0E233C]/18 bg-white/65 px-3.5 py-2.5 text-sm text-[#0E233C] outline-none transition-colors placeholder:text-[#0E233C]/45 focus:border-[#1C707D] focus:bg-white/90"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#0E233C]"
                      >
                        {lang === 'ko' ? '이메일 *' : 'Business Email *'}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="mt-1.5 w-full rounded-md border border-[#0E233C]/18 bg-white/65 px-3.5 py-2.5 text-sm text-[#0E233C] outline-none transition-colors placeholder:text-[#0E233C]/45 focus:border-[#1C707D] focus:bg-white/90"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-division"
                        className="block text-xs font-semibold text-[#0E233C]"
                      >
                        {lang === 'ko' ? '문의 사업부' : 'Inquiry Division'}
                      </label>
                      <select
                        id="contact-division"
                        value={division}
                        onChange={(e) =>
                          setDivision(e.target.value as 'garment' | 'textile' | 'general')
                        }
                        className="mt-1.5 w-full rounded-md border border-[#0E233C]/18 bg-white/65 px-3.5 py-2.5 text-sm text-[#0E233C] outline-none transition-colors focus:border-[#1C707D] focus:bg-white/90"
                      >
                        <option value="garment">
                          {lang === 'ko'
                            ? '가먼트 OEM 사업 (캐주얼·액티브·유니폼)'
                            : 'Garment OEM (Casual, Active & Uniforms)'}
                        </option>
                        <option value="textile">
                          {lang === 'ko'
                            ? '기능성 텍스타일'
                            : 'Functional Textile'}
                        </option>
                        <option value="general">
                          {lang === 'ko' ? '일반 기업 제휴 · 기타 문의' : 'Corporate Partnership & General'}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#0E233C]"
                    >
                      {lang === 'ko' ? '문의 내용 *' : 'Project Details *'}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        lang === 'ko'
                          ? '품목, 예상 발주 수량(MOQ), 희망 납기 또는 원단 스펙 등을 자유롭게 작성해 주세요.'
                          : 'Share target garment categories, estimated volume, timeline, or textile specifications...'
                      }
                      className="mt-1.5 w-full rounded-md border border-[#0E233C]/18 bg-white/65 px-3.5 py-2.5 text-sm text-[#0E233C] outline-none transition-colors placeholder:text-[#0E233C]/45 focus:border-[#1C707D] focus:bg-white/90"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full cursor-pointer rounded-md bg-[#0E233C] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1C707D] sm:w-auto"
                    >
                      {lang === 'ko' ? '문의 접수하기' : 'Send Inquiry'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
