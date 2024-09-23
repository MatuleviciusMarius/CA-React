import { FormControl, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SelectChangeEvent } from "@mui/material";
import { languagesTitle, supportedLanguages } from "../../../i18n";
import styles from "./styles.module.scss";

export default function LanguageSelectDropdown() {
  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("language", event.target.value);
  };

  return (
    <div className={styles.main}>
      <FormControl variant="outlined" size="small" fullWidth>
        <Select value={i18n.language} onChange={handleChange}>
          {Object.entries(supportedLanguages).map(([key, value]) => (
            <MenuItem key={key} value={value}>
              {languagesTitle[value]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
