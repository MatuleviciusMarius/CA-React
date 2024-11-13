import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "./UserActions.module.scss";
import { Code, useCurrentCode } from "../SandpackEditor/hooks/useCurrentCode";
import Complete from "./Complete/Complete";

type AIHelpProps = {
  onAskAiHelp: (code: Code) => void;
  isAiResponseLoading: boolean;
  userId: string;
  lessonId: string;
};

const UserActions = ({
  isAiResponseLoading,
  userId,
  lessonId,
  onAskAiHelp,
}: AIHelpProps) => {
  const { t } = useTranslation();

  const code = useCurrentCode();

  return (
    <Box display={"flex"} justifyContent={"flex-end"} gap={1} paddingBottom={2}>
      <Button
        className={styles.aiButton}
        onClick={() => onAskAiHelp(code)}
        variant="outlined"
      >
        {isAiResponseLoading ? (
          <span className={styles.loader}></span>
        ) : (
          <>{t("aiHelp")}</>
        )}
      </Button>
      <Complete lessonId={lessonId} userId={userId} />
    </Box>
  );
};

export default UserActions;
