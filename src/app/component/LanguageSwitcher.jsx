'use client';

import {useLocale} from 'next-intl';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import {FaGlobe} from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    {code: 'ar', name: 'العربية', flag: '🇸🇦'},
    {code: 'en', name: 'English', flag: '🇬🇧'},
  ];

  const changeLanguage = (newLocale) => {
    if (newLocale === locale) return;

    try {
      document.cookie = `NEXT_LOCALE=${newLocale}; Path=/; Max-Age=${
        60 * 60 * 24 * 365
      }; SameSite=Lax`;
      setIsOpen(false);
      router.refresh();
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    } catch (error) {
      console.error('Error changing language', error);
    }
  };

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <div className="language-switcher">
      <button
        type="button"
        className="language-switcher-button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Change language"
      >
        <FaGlobe className="globe-icon" />
        <span className="language-code">
          {currentLanguage.code.toUpperCase()}
        </span>
        <IoIosArrowDown
          className={`chevron-icon ${isOpen ? 'open' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              className={`language-option ${
                lang.code === locale ? 'active' : ''
              }`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className="language-flag">{lang.flag}</span>
              <span className="language-name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
