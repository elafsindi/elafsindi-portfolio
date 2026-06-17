/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { content } from '../data/content';

const LanguageContext = createContext();

const seo = {
  en: {
    title: 'Elaf Sindi | Frontend Developer',
    description:
      'Elaf Sindi is a Saudi Front-End Developer specializing in React, JavaScript, Laravel integration, responsive interfaces, and high-performance web applications.',
    imageAlt: 'Elaf Sindi front-end developer portfolio',
    locale: 'en_US',
  },
  ar: {
    title: 'إيلاف سندي | مطورة واجهات أمامية',
    description:
      'إيلاف سندي مطورة واجهات أمامية سعودية متخصصة في React وJavaScript وتكامل Laravel وبناء تطبيقات ويب متجاوبة وعالية الأداء.',
    imageAlt: 'ملف أعمال إيلاف سندي مطورة واجهات أمامية',
    locale: 'ar_SA',
  },
};

function setMeta(selector, attr, value) {
  const tag = document.head.querySelector(selector);
  if (tag) tag.setAttribute(attr, value);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio-lang') || 'en';
  });

  const t = content[lang];

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const currentSeo = seo[lang];
    document.title = currentSeo.title;
    setMeta('meta[name="description"]', 'content', currentSeo.description);
    setMeta('meta[property="og:title"]', 'content', currentSeo.title);
    setMeta('meta[property="og:description"]', 'content', currentSeo.description);
    setMeta('meta[property="og:image:alt"]', 'content', currentSeo.imageAlt);
    setMeta('meta[property="og:locale"]', 'content', currentSeo.locale);
    setMeta('meta[name="twitter:title"]', 'content', currentSeo.title);
    setMeta('meta[name="twitter:description"]', 'content', currentSeo.description);
  }, [lang]);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
