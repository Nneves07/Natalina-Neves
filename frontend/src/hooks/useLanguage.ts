import { useState, useEffect } from 'react';

export type Language = 'es' | 'en';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    // Detectar idioma del navegador
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'en') {
      setLanguage('en');
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return {
    language,
    setLanguage,
    toggleLanguage,
    isSpanish: language === 'es',
    isEnglish: language === 'en'
  };
}; 