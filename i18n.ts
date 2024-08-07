import i18n from "i18next";
import { initReactI18next } from "react-i18next";

type SupportedLanguageKeys = keyof typeof supportedLanguages;

export const supportedLanguages = {
  en: "en",
  lt: "lt",
} as const;

export const languagesTitle: Record<SupportedLanguageKeys, string> = {
  en: "🇬🇧 en",
  lt: "🇱🇹 lt",
};

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      courses: "Courses",
      password: "Password",
      email: "Email",
      login: "Login",
      language: "Language",
    },
  },

  lt: {
    translation: {
      courses: "Kursai",
      password: "Slaptažodis",
      email: "El. paštas",
      login: "Prisijungti",
      language: "Kalba",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
