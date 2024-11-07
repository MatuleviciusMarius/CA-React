import { Button } from "@mui/material";
import { completeLesson, CompleteLessonModel } from "../../../api/lessons";
import { useCurrentCode } from "../../SandpackEditor/hooks/useCurrentCode";
import { useTranslation } from "react-i18next";

type CompleteProps = {
  userId: string;
  lessonId: string;
};

const Complete = ({ lessonId, userId } : CompleteProps) => {
  const { t } = useTranslation();
  const code = useCurrentCode();


  const handleComplete = async () => {
    const body: CompleteLessonModel = {
      userId,
      code,
    };

  const res = await completeLesson(lessonId, body);
  console.log(res.data);
  };

  return (
    <Button onClick={handleComplete} variant="contained" color="success">
    {t("complete")}
  </Button>
  );
}

export default Complete;