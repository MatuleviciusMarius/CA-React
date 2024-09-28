import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { Sandpack } from "@codesandbox/sandpack-react";

import { AiHelpModel, getAiHelp, getLessonById } from "../../api/lessons";
import { Lesson } from "../../types/lesson";
import { LessonTitle, LessonContent, TaskContent } from "../../types/translations";
import { useEditorContext } from "../../components/MonacoCodeEditor/EditorContext/EditorContext";
import { Box, Button, Typography } from "@mui/material";
import styles from "./Main.module.scss";
import { useUserData } from "../../hooks/useUserData";
import { useActiveLanguage } from "../../hooks/useActiveLanguage";
import AiResponseBox from "../../components/AiResponseBox/AiResponseBox";
import AiHelp from "../../components/AiHelp/UserActions";

export default function LessonPage() {
  const { state } = useEditorContext();

  const [lesson, setLesson] = useState<Lesson>();
  const [aiHelpMessage, setAiHelpMessage] = useState("");
  const [isAiResponseLoading, setAiResponseLoading] = useState(false);

  const { id } = useParams();
  const activeLang = useActiveLanguage();
  const navigate = useNavigate();

  const userInfo = useUserData();

  const retrieveTask = async (id: string) => {
    const fetchedTask = await getLessonById(id);
    console.log(fetchedTask.data.task);
    setLesson(fetchedTask.data.task);
  };

  useEffect(() => {
    retrieveTask(id!);
  }, []);

  const lessonTitleKey = `title_${activeLang}` as keyof LessonTitle;
  const lessonContentKey = `lessonContent_${activeLang}` as keyof LessonContent;
  const lessonTaskKey = `taskContent_${activeLang}` as keyof TaskContent;

  const srcDoc = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>${state.cssContent}</style>
  </head>
  <body>
    ${state.htmlContent}
    <script>${state.jsContent}</script>
  </body>
  </html>
`;

  const onAskAiHelp = async () => {
    setAiResponseLoading(true);
    const body: AiHelpModel = {
      code: srcDoc,
      lessonId: id!,
    };

    const response = await getAiHelp(userInfo.id, body);

    setAiHelpMessage(response);
    setAiResponseLoading(false);
  };

  const files = {
    "/index.html": {
      code: "<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Sandpack</title>\n  </head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>",
      active: true,
    },
    "/styles.css": {
      code: "",
    },
    "/index.js": {
      code: "",
    },
  };

  return (
    <Box minHeight={"100vh"}>
      <Header isUserLoggedIn={!!userInfo.email} name={userInfo.name} />
      <Button variant="outlined" onClick={() => navigate(-1)}>
        {"back"}
      </Button>
      <Box height={"100%"} padding={1} className={styles.taskDescription}>
        {lesson && (
          <Typography className={styles.title} fontSize={26}>
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
        <AiHelp
          code={files["/index.html"].code}
          isAiResponseLoading={isAiResponseLoading}
          lessonId={lesson.id}
          onAskAiHelp={onAskAiHelp}
          userId={userInfo.id}
        />
      )}
      <Sandpack
        theme={"dark"}
        template="vanilla"
        options={{
          showLineNumbers: true,
          showTabs: true,
          showNavigator: true,
          editorHeight: "60vh",
          classes: {
            "sp-preview-actions": "display-none",
          },
        }}
        files={files}
      />
    </Box>
  );
}
