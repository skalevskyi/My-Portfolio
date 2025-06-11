// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ua',
    supportedLngs: ['ua', 'en', 'fr'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: process.env.PUBLIC_URL + '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;
