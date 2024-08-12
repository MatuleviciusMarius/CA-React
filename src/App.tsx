import { useEffect } from "react";
import "./App.scss";
import Router from "./router";
import { useTranslation } from "react-i18next";
import { SupportedLanguageKeys, supportedLanguages } from "../i18n";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const isSupported = Object.values(supportedLanguages).includes(browserLang as SupportedLanguageKeys);
    i18n.changeLanguage(isSupported ? browserLang : "en");
  }, [i18n]);

  return <Router />;
}

export default App;
