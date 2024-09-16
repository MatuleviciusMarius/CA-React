import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";

import { getLessonById } from "../../api/lessons";
import { Lesson } from "../../types/lesson";
import {
  LessonTitle,
  LessonContent,
  TaskContent,
} from "../../types/translations";
import MonacoCodeEditor from "../../components/MonacoCodeEditor/MonacoCodeEditor";
import { EditorProvider } from "../../components/MonacoCodeEditor/EditorContext/EditorContext";
import CodeRenderer from "../../components/MonacoCodeEditor/CodeRenderer/CodeRenderer";
import { Box, Button, Typography } from "@mui/material";
import styles from "./Main.module.scss";
import { useUserData } from "../../hooks/useUserData";
import { useActiveLanguage } from "../../hooks/useActiveLanguage";

export default function LessonPage() {
  const [lesson, setLesson] = useState<Lesson>();
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

  return (
    <Box minHeight={"100vh"}>
      <Header isUserLoggedIn={!!userInfo.email} name={userInfo.name} />
      <Button variant="outlined" onClick={() => navigate(-1)}>{"back"}</Button>
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
      <EditorProvider>
        <Box padding={1} display={"flex"}>
          <MonacoCodeEditor />
          <CodeRenderer lessonId={id!} userId={userInfo.id} />
        </Box>
      </EditorProvider>
    </Box>
  );
}
