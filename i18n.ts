import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export type SupportedLanguageKeys = keyof typeof supportedLanguages;

export type SupportedLanguages = "en" | "lt"; // or use your SupportedLanguageKeys

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
      name: "Name",
      surname: "Surname",
      occupation: "Occupation",
      courses: "Courses",
      password: "Password",
      email: "Email",
      login: "Login",
      language: "Language",
      register: "Register",
      aiHelp: "Ask AI for a help",
      complete: "Complete",
      back: "Back",
      phoneNumber: "Phone number",
      select_country: "Select country",
      date_of_birth: "Date of birth",
      user_email_exist: "Email already exist",
      name_missing: "Name is missing",
      surname_missing: "Surname is missing",
      password_missing: "Password is missing",
      dateOfBirth_missing: "Date of birth is missing",
      occupation_missing: "Occupation is missing",
      phoneNumber_missing: "Phone number is missing",
    },
  },

  lt: {
    translation: {
      name: "Vardas",
      surname: "Pavardė",
      occupation: "Profesija",
      courses: "Kursai",
      password: "Slaptažodis",
      email: "El. paštas",
      login: "Prisijungti",
      language: "Kalba",
      register: "Registruotis",
      aiHelp: "DI Pagalba",
      complete: "Baigti",
      back: "Atgal",
      phoneNumber: "Telefono numeris",
      select_country: "Pasirinkite šalį",
      date_of_birth: "Gimimo data",
      user_email_exist: "El. paštas jau egzistuoja",
      name_missing: "Įrašykite vardą",
      surname_missing: "Įrašykite pavardę",
      password_missing: "Įrašykite slaptažodį",
      dateOfBirth_missing: "Įrašykite gimimo datą",
      occupation_missing: "Įrašykite savo profesiją",
      phoneNumber_missing: "Įrašykite savo telefono numerį",
    },
  },
};

const activeLang = localStorage.getItem("language");

i18n.use(initReactI18next).init({
  resources,
  lng: activeLang || "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
