import { useState } from 'react';
import { CompanySection } from './components/CompanySection';
import { ContactSection } from './components/ContactSection';
import { FlashHero } from './components/FlashHero';
import { Footer } from './components/Footer';
import { GarmentSection } from './components/GarmentSection';
import { RndSection } from './components/RndSection';
import { SplitPortal } from './components/SplitPortal';
import { TextileSection } from './components/TextileSection';
import {
  CompanyTab,
  GarmentTab,
  Language,
  PortalPillar,
  RndTab,
  TextileTab,
} from './data/companyData';

export default function App() {
  const [lang, setLang] = useState<Language>('ko');
  const [activePillar, setActivePillar] = useState<PortalPillar>('garment');
  const [companyTab, setCompanyTab] = useState<CompanyTab>('message');
  const [garmentTab, setGarmentTab] = useState<GarmentTab>('oem');
  const [textileTab, setTextileTab] = useState<TextileTab>('chain');
  const [rndTab, setRndTab] = useState<RndTab>('center');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectPillar = (pillar: PortalPillar) => {
    setActivePillar(pillar);
    if (pillar === 'company') {
      setCompanyTab('message');
      scrollToSection('company');
    } else if (pillar === 'garment') {
      setGarmentTab('oem');
      scrollToSection('garment');
    } else if (pillar === 'textile') {
      setTextileTab('chain');
      scrollToSection('textile');
    } else {
      setRndTab('center');
      scrollToSection('rnd');
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F6F3] text-[#0E233C]">
      <main>
        <FlashHero lang={lang} onChangeLang={setLang} />

        <SplitPortal
          lang={lang}
          activePillar={activePillar}
          onSelectPillar={handleSelectPillar}
        />

        <CompanySection
          lang={lang}
          activeTab={companyTab}
          onTabChange={(tab) => {
            setActivePillar('company');
            setCompanyTab(tab);
          }}
        />

        <GarmentSection
          lang={lang}
          activeTab={garmentTab}
          onTabChange={(tab) => {
            setActivePillar('garment');
            setGarmentTab(tab);
          }}
        />

        <TextileSection
          lang={lang}
          activeTab={textileTab}
          onTabChange={(tab) => {
            setActivePillar('textile');
            setTextileTab(tab);
          }}
        />

        <RndSection
          lang={lang}
          activeTab={rndTab}
          onTabChange={(tab) => {
            setActivePillar('lab');
            setRndTab(tab);
          }}
        />

        <ContactSection lang={lang} />
      </main>

      <Footer lang={lang} onChangeLang={setLang} onNavigate={scrollToSection} />
    </div>
  );
}
