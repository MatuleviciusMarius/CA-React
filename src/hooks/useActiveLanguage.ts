import { useTranslation } from "react-i18next";
import { SupportedLanguages } from "../../i18n";

export const useActiveLanguage = () => {
  const { i18n } = useTranslation();
  return i18n.language as SupportedLanguages;
};
