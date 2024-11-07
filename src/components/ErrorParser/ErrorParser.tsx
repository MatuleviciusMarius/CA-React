import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

type ErrorParserType = {
  errors: string[];
};

const ErrorParser = ({ errors }: ErrorParserType) => {
  const { t } = useTranslation();

  return (
    <div className={styles.error}>
      {errors && errors.map((err) => <div>{t(err)}</div>)}
    </div>
  );
};

export default ErrorParser;
