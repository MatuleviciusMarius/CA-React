import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "./UserActions.module.scss";
import { completeLesson, CompleteLessonModel } from "../../api/lessons";

type AIHeplProps = {
  onAskAiHelp: () => void;
  isAiResponseLoading: boolean;
  code: string;
  userId: string;
  lessonId: string;
};

const UserActions = ({
  isAiResponseLoading,
  onAskAiHelp,
  code,
  userId,
  lessonId,
}: AIHeplProps) => {
  const { t } = useTranslation();

  const handleComplete = () => {
    const body: CompleteLessonModel = {
      userId,
      code,
    };

    completeLesson(lessonId, body);
  };

  return (
    <Box display={"flex"} justifyContent={"flex-end"} gap={1} padding={2}>
      <Button
        className={styles.aiButton}
        onClick={onAskAiHelp}
        variant="outlined"
      >
        {isAiResponseLoading ? (
          <span className={styles.loader}></span>
        ) : (
          <>{t("aiHelp")}</>
        )}
      </Button>
      <Button onClick={handleComplete} variant="contained" color="success">
        {t("complete")}
      </Button>
    </Box>
  );
};

export default UserActions;
