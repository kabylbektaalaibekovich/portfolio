import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      resume: "Resume",
    },
  },
  ru: {
    translation: {
      resume: "Резюме",
    },
  },
  kg: {
    translation: {
      resume: "Резюме",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React is already safe from XSS
    },
  });

export default i18n;
