'use client';

import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

function useLocale() {
  const [locale, setLocale] = useState('en');
  useEffect(() => {
    const stored = document.documentElement.lang || localStorage.getItem('locale') || 'en';
    setLocale(stored);
  }, []);
  return locale;
}

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = async (newLocale) => {
    if (newLocale === locale || isChanging) return;
    setIsChanging(true);
    setIsOpen(false);
    try {
      const response = await fetch('/api/locale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locale: newLocale }),
      });
      if (response.ok) {
        if (typeof localStorage !== 'undefined') localStorage.setItem('locale', newLocale);
        router.refresh();
        window.location.reload();
      }
    } catch (error) {
      console.error('Error changing language:', error);
      setIsChanging(false);
    }
  };

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        type="button"
        className="language-switcher-button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isChanging}
        aria-label="Change language"
      >
        <span className="globe-icon" aria-hidden>🌐</span>
        <span className="language-code">{currentLanguage.code.toUpperCase()}</span>
        <span className={`chevron-icon ${isOpen ? 'open' : ''}`} aria-hidden>▼</span>
      </button>
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              className={`language-option ${locale === lang.code ? 'active' : ''}`}
              onClick={() => changeLanguage(lang.code)}
              disabled={isChanging || locale === lang.code}
            >
              <span className="language-flag">{lang.flag}</span>
              <span className="language-name">{lang.name}</span>
              {locale === lang.code && <span className="check-icon">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
