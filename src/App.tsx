import { useEffect } from "react";
import "./App.scss";
import Router from "./Router/Router";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  return <Router />;
}

export default App;
