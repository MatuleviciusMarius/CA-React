import { useEffect } from "react";
import "./App.scss";
import Router from "./router/router.tsx";
import { useTranslation } from "react-i18next";
import { SupportedLanguageKeys, supportedLanguages } from "../i18n";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLang = localStorage.getItem("language");

    if (
      storedLang &&
      Object.values(supportedLanguages).includes(
        storedLang as SupportedLanguageKeys
      )
    ) {
      i18n.changeLanguage(storedLang);
    } else {
      const browserLang = navigator.language.split("-")[0];
      const isSupported = Object.values(supportedLanguages).includes(
        browserLang as SupportedLanguageKeys
      );
      const selectedLang = isSupported ? browserLang : "en";

      i18n.changeLanguage(selectedLang);
      localStorage.setItem("language", selectedLang);
    }
  }, [i18n]);

  return <Router />;
}

export default App;
