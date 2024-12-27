import { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";

import { AiHelpModel, getAiHelp, getLessonById } from "../../api/lessons";
import { Lesson } from "../../types/lesson";
import {
  LessonTitle,
  LessonContent,
  TaskContent,
} from "../../types/translations";
import { Box, Button, Typography } from "@mui/material";
import styles from "./Main.module.scss";
import { useUserData } from "../../hooks/useUserData";
import { useActiveLanguage } from "../../hooks/useActiveLanguage";
import AiResponseBox from "../../components/AiResponseBox/AiResponseBox";
import UserActions from "../../components/UserActions/UserActions";
import { createProgress } from "../../api/progress";
import SandpackEditor from "../../components/SandpackEditor/SandpackEditor";
import { SandpackProvider } from "@codesandbox/sandpack-react";
import { Code } from "../../components/SandpackEditor/hooks/useCurrentCode";
import { useTranslation } from "react-i18next";

export default function LessonPage() {
  const [lesson, setLesson] = useState<Lesson>();
  const [aiHelpMessage, setAiHelpMessage] = useState("");
  const [isAiResponseLoading, setAiResponseLoading] = useState(false);
  const [currentProgress, setCurrentProgress] = useState<number | null>(null);
  const { t } = useTranslation();

  const { id } = useParams();
  const activeLang = useActiveLanguage();
  const navigate = useNavigate();

  const userInfo = useUserData();

  const retrieveTask = async (id: string) => {
    const fetchedTask = await getLessonById(id);
    setLesson(fetchedTask.data.task);
  };

  const retrieveProgress = async (
    lessonId: string,
    lessonOrder: number,
    courseId: string
  ) => {
    const fetchedProgress = await createProgress({
      lessonId,
      lessonOrder,
      courseId,
    });

    if (fetchedProgress.status === 400) {
      console.log("Huston we have a problem");
    }
  };

  useEffect(() => {
    retrieveTask(id!);
  }, [id]);

  useEffect(() => {
    if (
      userInfo.id &&
      id! &&
      lesson?.orderId &&
      currentProgress !== lesson?.orderId &&
      lesson?.courseId
    ) {
      setCurrentProgress(lesson?.orderId);
      retrieveProgress(id!, lesson!.orderId, lesson!.courseId);
    }
  }, [id, lesson?.orderId, lesson?.courseId]);

  const lessonTitleKey = `title_${activeLang}` as keyof LessonTitle;
  const lessonContentKey = `lessonContent_${activeLang}` as keyof LessonContent;
  const lessonTaskKey = `taskContent_${activeLang}` as keyof TaskContent;

  const onAskAiHelp = async (code: Code) => {
    setAiResponseLoading(true);
    const body: AiHelpModel = {
      code,
      lessonId: id!,
    };

    const response = await getAiHelp(userInfo.id, body);

    setAiHelpMessage(response);
    setAiResponseLoading(false);
  };

  const initialFiles = useMemo(
    () => ({
      "/script.js": {
        code: lesson?.initialJsCode || "",
        hidden: !lesson?.isJsEditor,
      },
      "/index.html": {
        code: lesson?.initialHtmlCode || "",
        hidden: !lesson?.isHtmlEditor,
      },
      "/styles.css": {
        code: lesson?.initialCssCode || "",
        hidden: !lesson?.isCssEditor,
      },
      "/index.js": {
        code: `import "./script.js";`,
        hidden: true,
      },
    }),
    [lesson]
  );

  return (
    <SandpackProvider
      template="vanilla"
      theme={"dark"}
      options={{
        activeFile: "/index.html",
      }}
      files={initialFiles}
    >
      <Box minHeight={"100vh"}>
        <Header isUserLoggedIn={!!userInfo.email} name={userInfo.name} />
        {/* Temps fix needs to be replaced with proper routing */}
        <Button variant="outlined" onClick={() => navigate("/course/html_css")}>
          {t("back")}
        </Button>
        <Box height={"100%"} padding={3} className={styles.taskDescription}>
          {lesson && (
            <Typography className={styles.title} fontSize={36}>
              {lesson[lessonTitleKey]}
            </Typography>
          )}
          {lesson && (
            <>
              <div
                className={styles.lesson}
                dangerouslySetInnerHTML={{
                  __html: lesson[lessonContentKey],
                }}
              />

              <br />
              <Typography className={styles.title} fontSize={36}>
                {t("task")}:
              </Typography>

              <div
                className={styles.task}
                dangerouslySetInnerHTML={{
                  __html: lesson[lessonTaskKey],
                }}
              />
            </>
          )}
        </Box>
        <AiResponseBox message={aiHelpMessage} />
        {lesson && (
          <UserActions
            isAiResponseLoading={isAiResponseLoading}
            lessonId={lesson.id}
            nextLessonId={lesson.nextLessonId}
            onAskAiHelp={onAskAiHelp}
            userId={userInfo.id}
            courseId={lesson.courseId}
          />
        )}
        <SandpackEditor />
      </Box>
    </SandpackProvider>
  );
}
