import { Box, Button } from "@mui/material";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { completeLesson, CompleteLessonModel } from "../../../api/lessons";

type CodeRendererProps = {
  lessonId: string;
  userId: string;
  onAskAiHelp: () => void;
  srcDoc: string;
  isAiResponseLoading: boolean;
};

export default function CodeRenderer({
  lessonId,
  userId,
  onAskAiHelp,
  srcDoc,
  isAiResponseLoading,
}: CodeRendererProps) {
  const { t } = useTranslation();

  const handleComplete = () => {
    const body: CompleteLessonModel = {
      userId,
      code: srcDoc,
    };

    completeLesson(lessonId, body);
  };

  return (
    <Box flexGrow={1} height={"80vh"}>
      <Box display={"flex"} gap={1} justifyContent={"right"}>
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
      <iframe
        srcDoc={srcDoc}
        style={{ width: "100%", border: "none", height: "100%" }}
        title="HTML Preview"
      />
    </Box>
  );
}
