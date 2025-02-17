import { Button } from "@mui/material";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import Confetti from "react-confetti";
import { useEffect } from "react";

const CourseEnding = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <div className={styles.wrapper}>
      <Confetti />
      <h1 className={styles.title}>Congratzzzz!!!!! 🎉🎉🎉🎉</h1>
      <p> {t("course_completed")}</p>
      <Button onClick={() => navigate("/")} variant="contained" color="success">
        {t("back_to_couses")}
      </Button>
    </div>
  );
};

export default CourseEnding;
